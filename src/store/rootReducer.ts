import { combineReducers } from "redux"

// reducers
import booking from "./modules/booking"
import auth from "./modules/auth"

const appReducer = combineReducers({
  // add reducers here
  booking,
  auth,
})

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOG_OUT_USER") {
    return {
      ...state,
      internalServerError: {
        error: false,
      },
    }
  }

  return appReducer(state, action)
}

export default rootReducer
