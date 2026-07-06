import { useNavigate } from 'react-router';

import { ArrowLeft, Calendar, Clock, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const upcomingBookings = [
  {
    id: 1,
    coach: 'Ravi Shastri',
    service: 'Technique Analysis',
    date: 'June 17, 2026',
    time: '4:00 PM',
    duration: '60 min',
    price: '₹1,800',
    coachId: '1',
  },
  {
    id: 2,
    coach: 'Priya Sharma',
    service: 'Competition Fueling Plan',
    date: 'June 19, 2026',
    time: '10:30 AM',
    duration: '45 min',
    price: '₹1,800',
    coachId: '2',
  },
];

const completedBookings = [
  {
    id: 3,
    coach: 'Arun Kumar',
    service: 'Sprint Drills Session',
    date: 'June 10, 2026',
    time: '6:00 PM',
    duration: '60 min',
    price: '₹2,100',
    coachId: '3',
    reviewed: false,
  },
  {
    id: 4,
    coach: 'Sneha Patel',
    service: 'Monthly Mentorship',
    date: 'June 3, 2026',
    time: '2:00 PM',
    duration: '4 sessions',
    price: '₹2,500',
    coachId: '4',
    reviewed: true,
  },
];

const cancelledBookings = [
  {
    id: 5,
    coach: 'Vikram Singh',
    service: 'Long Jump Coaching',
    date: 'June 7, 2026',
    time: '11:00 AM',
    duration: '90 min',
    price: '₹3,000',
    coachId: '5',
    reason: 'Cancelled by you',
  },
];

type Tab = 'upcoming' | 'completed' | 'cancelled';

export default function StoreMyBookings() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('upcoming');

  return (
    <div className="bg-black w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)]">
          <div className="h-[56px] flex items-center px-4 gap-3">
            <button
              onClick={() => navigate('/store')}
              className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center"
            >
              <ArrowLeft className="w-[18px] h-[18px] text-white" />
            </button>
            <h1 className="text-white font-bold text-[17px]">My Bookings</h1>
          </div>

          {/* Tabs */}
          <div className="flex px-4 pb-3 gap-2">
            {(['upcoming', 'completed', 'cancelled'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 rounded-full text-[12px] font-semibold capitalize transition-all ${
                  tab === t
                    ? 'bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white shadow-[0_0_10px_rgba(201,17,95,0.35)]'
                    : 'bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] text-[#99A1AF]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-[70px] no-scrollbar px-4 pt-4">
          {tab === 'upcoming' && (
            <div className="flex flex-col gap-3">
              {upcomingBookings.map((b) => (
                <div key={b.id} className="bg-[#111116] rounded-[18px] border border-[rgba(255,255,255,0.07)] p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white text-[15px] font-bold">{b.coach}</p>
                      <p className="text-[#99A1AF] text-[12px]">{b.service}</p>
                    </div>
                    <span className="bg-[rgba(0,200,100,0.1)] border border-[rgba(0,200,100,0.25)] text-[#00c864] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      Upcoming
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-[12px] h-[12px] text-[#99A1AF]" />
                      <span className="text-[#99A1AF] text-[12px]">{b.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-[12px] h-[12px] text-[#99A1AF]" />
                      <span className="text-[#99A1AF] text-[12px]">{b.time} · {b.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.06)]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[15px] font-bold">{b.price}</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-[#99A1AF] text-[12px] font-semibold">
                        Reschedule
                      </button>
                      <button className="px-3 py-1.5 rounded-full bg-[rgba(255,0,0,0.08)] border border-[rgba(255,0,0,0.2)] text-[#ff4444] text-[12px] font-semibold">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'completed' && (
            <div className="flex flex-col gap-3">
              {completedBookings.map((b) => (
                <div key={b.id} className="bg-[#111116] rounded-[18px] border border-[rgba(255,255,255,0.07)] p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white text-[15px] font-bold">{b.coach}</p>
                      <p className="text-[#99A1AF] text-[12px]">{b.service}</p>
                    </div>
                    <span className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-[#99A1AF] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-[12px] h-[12px] text-[#99A1AF]" />
                      <span className="text-[#99A1AF] text-[12px]">{b.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-[12px] h-[12px] text-[#99A1AF]" />
                      <span className="text-[#99A1AF] text-[12px]">{b.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.06)]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[15px] font-bold">{b.price}</span>
                    {b.reviewed ? (
                      <div className="flex items-center gap-1">
                        <Star className="w-[12px] h-[12px] text-[#FFD700] fill-[#FFD700]" />
                        <span className="text-[#99A1AF] text-[12px]">Reviewed</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => navigate(`/store/review/${b.coachId}`)}
                        className="flex items-center gap-1 text-[#c9115f] text-[12px] font-semibold border border-[rgba(201,17,95,0.4)] rounded-full px-3 py-1.5"
                      >
                        <Star className="w-[12px] h-[12px]" /> Rate Session
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'cancelled' && (
            <div className="flex flex-col gap-3">
              {cancelledBookings.map((b) => (
                <div key={b.id} className="bg-[#111116] rounded-[18px] border border-[rgba(255,255,255,0.07)] p-4 opacity-70">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white text-[15px] font-bold">{b.coach}</p>
                      <p className="text-[#99A1AF] text-[12px]">{b.service}</p>
                    </div>
                    <span className="bg-[rgba(255,68,68,0.08)] border border-[rgba(255,68,68,0.2)] text-[#ff4444] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      Cancelled
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-[12px] h-[12px] text-[#99A1AF]" />
                      <span className="text-[#99A1AF] text-[12px]">{b.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-[12px] h-[12px] text-[#99A1AF]" />
                      <span className="text-[#99A1AF] text-[12px]">{b.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.06)]">
                    <span className="text-[#99A1AF] text-[13px]">{b.reason}</span>
                    <button
                      onClick={() => navigate('/store/coaches')}
                      className="flex items-center gap-1 text-[#c9115f] text-[12px] font-semibold"
                    >
                      Rebook <ChevronRight className="w-[13px] h-[13px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
