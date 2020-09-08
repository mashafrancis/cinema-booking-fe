// types
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "./types"

export interface RegisterActionRequest {
  type: REGISTER_REQUEST
  isLoading: boolean
}

export interface RegisterActionSuccess {
  type: REGISTER_SUCCESS
  payload: User
  isLoading: boolean
}

export interface RegisterActionFailure {
  type: REGISTER_FAILURE
  errors: any
  isLoading: boolean
}

export interface LoginActionRequest {
  type: LOGIN_REQUEST
  isLoading: boolean
}

export interface LoginActionSuccess {
  type: LOGIN_SUCCESS
  payload: User
  isLoading: boolean
}

export interface LoginActionFailure {
  type: LOGIN_FAILURE
  errors: any
  isLoading: boolean
}

export default interface User {
  name?: string
  email: string
  password: string
  strategy: string
}
