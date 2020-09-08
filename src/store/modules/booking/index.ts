import http from "@utils/http";
import {action, runInAction} from 'mobx';
import {
  Booking,
  CreateBookingFailure,
  CreateBookingRequest,
  CreateBookingSuccess
} from "./interfaces";
import {
  CREATE_BOOKING_FAILURE,
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS
} from "./types";
import {Dispatch} from "redux";

export const createBookingRequest = (): CreateBookingRequest => ({
  type: CREATE_BOOKING_REQUEST,
  isLoading: true
})

export const createBookingSuccess = (booking: Booking): CreateBookingSuccess => ({
  booking,
  type: CREATE_BOOKING_SUCCESS,
  isLoading: false
})

export const createBookingFailure = (errors: any): CreateBookingFailure => ({
  errors,
  type: CREATE_BOOKING_FAILURE,
  isLoading: false
})

export const createBooking = (booking: { id: string }) => (
  dispatch: Dispatch,
  getState: any,
  http: any
) => {
  dispatch(createBookingRequest());
  return http.post('bookings', booking)
    .then((response: any) => {
      const { data } = response;
      dispatch(createBookingSuccess(data));
    }).catch((error: any) => {
      dispatch(createBookingFailure(error))
    })
}

export const bookingInitialState = {
  isLoading: true,
  errors: null,
  booking: []
}

export const reducer = (
  state: any = bookingInitialState,
  action: { type: any; isLoading: any; booking: any; errors: any;
}) => {
  switch (action.type) {
    case CREATE_BOOKING_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        booking: [action.booking, ...state.booking]
      }
    case CREATE_BOOKING_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errors: action.errors
      }
    default:
      return state;
  }
}

export default reducer;
