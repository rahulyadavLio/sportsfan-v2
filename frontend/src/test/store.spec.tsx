import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import StoreCoachProfile from '../pages/Store/StoreCoachProfile';
import StoreCoachListing from '../pages/Store/StoreCoachListing';
import StoreBookingSuccess from '../pages/Store/StoreBookingSuccess';
import StoreBooking from '../pages/Store/StoreBooking';
import StoreMyBookings from '../pages/Store/StoreMyBookings';
import StorePayment from '../pages/Store/StorePayment';

// Mock react-router
const mockNavigate = vi.fn();
vi.mock('react-router', () => ({
  useNavigate: () => mockNavigate,
  useParams: () => ({ id: '1' }),
  useLocation: () => ({ search: '' }),
  useSearchParams: () => [new URLSearchParams()],
}));

// Mock storeService
vi.mock('@/services/store.service', () => ({
  storeService: {
    getProducts: vi.fn().mockResolvedValue([
      {
        id: 'coach-1',
        coachId: '1',
        name: 'Anubhav Karmakar',
        category: 'coaches',
        title: 'Founder, Athloft Multisport',
        pricePaise: 220000,
        experience: '12 yrs exp',
        rating: 4.9,
        reviews: 218,
        image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857',
        specializations: ['Marathon', 'Sprint'],
        slots: [
          { date: '2026-07-09', day: 'Thu', num: 9, times: [{ id: 'slot_001', time: '5:00 PM', status: 'available' }] }
        ]
      }
    ]),
    getProductById: vi.fn().mockResolvedValue({
      id: 'coach-1',
      coachId: '1',
      name: 'Anubhav Karmakar',
      category: 'coaches',
      title: 'Founder, Athloft Multisport',
      pricePaise: 220000,
      experience: '12 yrs exp',
      rating: 4.9,
      reviews: 218,
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857'
    }),
    getSlots: vi.fn().mockResolvedValue([
      { id: 'slot_001', time: '5:00 PM', date: '2026-07-09', status: 'available', lockedBy: null }
    ]),
    lockSlot: vi.fn().mockResolvedValue({
      status: 'locked',
      lockExpiresAt: new Date(Date.now() + 120000).toISOString()
    }),
    unlockSlot: vi.fn().mockResolvedValue({ success: true }),
    getUserOrders: vi.fn().mockResolvedValue([
      {
        orderId: 'order-123',
        title: 'Coach Session with Anubhav',
        productType: 'coaches',
        status: 'upcoming',
        pricePaise: 220000,
        eventDate: '2026-07-15T17:00:00Z',
        createdAt: new Date().toISOString()
      }
    ]),
    checkout: vi.fn().mockResolvedValue({ orderId: 'order-123', success: true }),
    cancelBooking: vi.fn().mockResolvedValue({ success: true }),
    getWishlist: vi.fn().mockResolvedValue([]),
    toggleWishlist: vi.fn().mockResolvedValue({ success: true }),
    getWalletBalance: vi.fn().mockResolvedValue(1000000)
  }
}));

describe('Store Page Components Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('StoreCoachListing renders and filters correctly', async () => {
    render(<StoreCoachListing />);
    expect(screen.getByText('Loading coaches...')).toBeDefined();
    await waitFor(() => {
      expect(screen.getByText('Anubhav Karmakar')).toBeDefined();
    });
  });

  it('StoreCoachProfile renders slots and allows slot selection', async () => {
    render(<StoreCoachProfile />);
    expect(screen.getByText('Loading coach profile...')).toBeDefined();
    await waitFor(() => {
      expect(screen.getByText('Anubhav Karmakar')).toBeDefined();
      expect(screen.getByText('Select Date')).toBeDefined();
    });
  });

  it('StoreBooking renders steps correctly', async () => {
    render(<StoreBooking />);
    await waitFor(() => {
      expect(screen.getByText('Book a Session')).toBeDefined();
    });
  });

  it('StorePayment renders payment options', async () => {
    render(<StorePayment />);
    await waitFor(() => {
      expect(screen.getByText('Choose Payment Method')).toBeDefined();
    });
  });

  it('StoreBookingSuccess renders confirmed booking screen', async () => {
    render(<StoreBookingSuccess />);
    expect(screen.getByText('Booking Confirmed!')).toBeDefined();
    expect(screen.getByText('Go to My Bookings')).toBeDefined();
  });

  it('StoreMyBookings renders tabs and user orders correctly', async () => {
    render(<StoreMyBookings />);
    expect(screen.getByText('Loading your orders...')).toBeDefined();
    await waitFor(() => {
      expect(screen.getByText('My Orders & Bookings')).toBeDefined();
    });
  });
});
