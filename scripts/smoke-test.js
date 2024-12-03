// eslint-disable-next-line @typescript-eslint/no-require-imports,no-undef
const Config = require("../src/config").default

const BASE_URL = Config.baseUrl + Config.relativeUrl
const PAGES = [""]

const primary = (x) => x
const error = (x) => x
const success = (x) => x

const targets = PAGES.map((page) => ({ url: BASE_URL + page }))

console.log(primary("Smoke test start"))

Promise.all(
  targets.map((target, i) =>
    fetch(target.url)
      .then(() => {
        console.log(success(`[${i + 1}/${targets.length}] Fetch ` + target.url + " -> SUCCESS"))
        return true
      })
      .catch(() => {
        console.log(error("Fetch " + target.url + " -> FAIL"))
        return false
      }),
  ),
).then((results) => {
  const result = results.filter(Boolean).length === targets.length
  console.log(primary("Smoke test result -> ") + (result ? success("PASSED") : error("FAILED")))
})
