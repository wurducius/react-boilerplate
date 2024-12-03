import { takeEvery, put } from "redux-saga/effects"

function* fetchUser(action: { payload: { userId: any } }) {
  console.log("SAGA")
  try {
    const user = action.payload.userId
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user })
  } catch (e) {
    // @ts-ignore
    yield put({ type: "USER_FETCH_FAILED", message: e.message })
  }
}

function* mySaga() {
  // @ts-ignore
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser)
}

export default mySaga
