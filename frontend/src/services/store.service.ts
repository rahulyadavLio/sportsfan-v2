import { api } from "@/services/api";
import type { Coach, Service, Booking, BookingCreatePayload } from "@/types/store";

/**
 * Store service — coaches, sessions, bookings.
 */
export const storeService = {
  // Coaches
  getCoaches: () => api.get<Coach[]>("/store/coaches"),
  getCoachById: (id: string) => api.get<Coach>(`/store/coaches/${id}`),

  // Services
  getFeaturedServices: () => api.get<Service[]>("/store/services/featured"),
  getServiceById: (id: string) => api.get<Service>(`/store/services/${id}`),

  // Bookings
  createBooking: (payload: BookingCreatePayload) => api.post<Booking>("/store/bookings", payload),
  getMyBookings: () => api.get<Booking[]>("/store/bookings/me"),
  getBookingById: (id: string) => api.get<Booking>(`/store/bookings/${id}`),
  cancelBooking: (id: string) => api.delete(`/store/bookings/${id}`),

  // Payment
  initiatePayment: (bookingId: string, payload: { method: string }) =>
    api.post(`/store/bookings/${bookingId}/payment`, payload),

  // Reviews
  submitReview: (bookingId: string, payload: { rating: number; comment: string }) =>
    api.post(`/store/bookings/${bookingId}/review`, payload),
};
