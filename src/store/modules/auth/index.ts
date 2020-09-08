// interfaces
import User, {
  LoginActionFailure,
  LoginActionRequest,
  LoginActionSuccess,
  RegisterActionFailure,
  RegisterActionRequest,
  RegisterActionSuccess,
} from "./interfaces"

// types
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./types"
import {AnyAction, Dispatch} from "redux"
import client from "@utils/authSockets";
import {authService} from "@utils/auth";

export const registerRequest = (): RegisterActionRequest => ({
  type: REGISTER_REQUEST,
  isLoading: true,
})

export const registerSuccess = (user: User): RegisterActionSuccess => ({
  type: REGISTER_SUCCESS,
  payload: user,
  isLoading: false,
})

export const registerFailure = (errors: any): RegisterActionFailure => ({
  errors,
  type: REGISTER_FAILURE,
  isLoading: false,
})

export const loginRequest = (): LoginActionRequest => ({
  type: LOGIN_REQUEST,
  isLoading: true,
})

export const loginSuccess = (user: User): LoginActionSuccess => ({
  type: LOGIN_SUCCESS,
  payload: user,
  isLoading: false,
})

export const loginFailure = (errors: any): LoginActionFailure => ({
  errors,
  type: LOGIN_FAILURE,
  isLoading: false,
})

// actions
export const registerUser = (user: User) => async (
  dispatch: Dispatch,
  getState: any,
  http: any
) => {
  dispatch(registerRequest())
  return http.post('users', user)
    .then((response: any) => {
      const { data } = response;
      dispatch(registerSuccess(data))
    })
    .catch((error: any) => {
      dispatch(registerFailure(error))
    })
}

export const loginUser = (payload: User) => async (
  dispatch: Dispatch,
  getState: any,
  http: any
) => {
  dispatch(loginRequest())
  const {email, password} = payload;
  try {
    const { user } = await client.authenticate({
      email,
      password,
      strategy: 'local'
    })
    authService.saveToken(window.localStorage.getItem('jwt-token'))
    window.localStorage.removeItem('jwt-token')
    dispatch(loginSuccess(user))
  } catch (e) {
    dispatch(loginFailure(e))
  }
}

// Set the initial user registration state
export const userRegisterInitialState = {
  user: {},
  isLoading: false,
  errors: null
}

export const reducer = (
  state = userRegisterInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: action.isLoading,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errors: action.errors
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: action.isLoading,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errors: action.errors
      }
    default:
      return state
  }
}

export default reducer
