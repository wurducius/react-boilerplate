// eslint-disable-next-line @typescript-eslint/no-require-imports,no-undef
const Config = require("../config").default

const BASE_URL = Config.baseUrl + Config.relativeUrl
const PAGES = [""]

const primary = (x) => x
const error = (x) => x
const success = (x) => x

const SCORE_SUCCESS_CUTOFF = 95

const getLighthouseUrl = (page) => `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${BASE_URL}${page}`

console.log(primary("Lighthouse test start"))

const getStatus = (score) => (msg) => {
  if (score < SCORE_SUCCESS_CUTOFF) {
    return error(msg)
  } else {
    return success(msg)
  }
}

Promise.all(
  PAGES.map((page, i) =>
    fetch(getLighthouseUrl(page))
      .then((response) => response.json())
      .then((response) => {
        const lighthouseResult = response.lighthouseResult
        if (lighthouseResult) {
          const result = (lighthouseResult.categories.performance.score * 100).toFixed(0)
          console.log(getStatus(result)(`[${i + 1}/${PAGES.length}] Testing page ${BASE_URL}${page} -> ${result}%`))
          return result
        } else {
          console.log(error(`[${i + 1}/${PAGES.length}] Testing page ${BASE_URL}${page} -> ERROR`))
          return undefined
        }
      }),
  ),
).then((results) => {
  const result = results
    .filter(Boolean)
    .reduce((acc, next) => (acc + Number(next)) / 2, 1)
    .toFixed(0)
  const status = getStatus(result)
  console.log(status(`Average score ${result}%`))
  console.log(status("Lighthouse test completed"))
})
