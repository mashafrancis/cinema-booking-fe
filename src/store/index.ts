import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"

import thunk from "redux-thunk"

import rootReducer from "./rootReducer"
import http from "../utils/http"

// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

const reduxMiddleware = [
  //:TODO: Add cachedHttp
  thunk.withExtraArgument(http),
]

const devMiddleware = composeEnhancers(
  applyMiddleware(...reduxMiddleware, reduxImmutableStateInvariant())
)
const prodMiddleware = applyMiddleware(...reduxMiddleware)

const middleware =
  process.env.NODE_ENV === "development" ? devMiddleware : prodMiddleware

const store = createStore(rootReducer, {}, middleware)

export default store
