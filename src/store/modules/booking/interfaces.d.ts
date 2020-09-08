import {
  CREATE_BOOKING_FAILURE,
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS
} from "./types";

export interface CreateBookingRequest {
  type: CREATE_BOOKING_REQUEST;
  isLoading: boolean;
}

export interface CreateBookingSuccess {
  type: CREATE_BOOKING_SUCCESS;
  isLoading: boolean;
  booking: Booking;
}

export interface CreateBookingFailure {
  type: CREATE_BOOKING_FAILURE;
  isLoading: boolean;
  errors: any;
}

interface Booking {
  id: string;
}
