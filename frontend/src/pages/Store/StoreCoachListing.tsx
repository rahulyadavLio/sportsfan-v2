import { useNavigate } from 'react-router';
import { ArrowLeft, Search, Star, Clock, Filter, Bookmark, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

const filterChips = ['Availability', 'Price', 'Rating', 'Experience', 'Language'];

const coaches = [
  {
    id: 1,
    name: 'Ravi Singh',
    role: 'Head Athletics Coach',
    experience: '15 yrs exp',
    rating: 4.9,
    reviews: 312,
    price: '₹1,800/hr',
    nextSlot: 'Today 4PM',
    specializations: ['Javelin', 'Shot Put', 'Discus'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format',
    verified: true,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Sports Nutritionist',
    experience: '10 yrs exp',
    rating: 4.8,
    reviews: 278,
    price: '₹1,200/hr',
    nextSlot: 'Tomorrow 10AM',
    specializations: ['Diet Planning', 'Recovery', 'Weight'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&auto=format',
    verified: true,
  },
  {
    id: 3,
    name: 'Arun Kumar',
    role: 'Sprint & Speed Coach',
    experience: '12 yrs exp',
    rating: 4.7,
    reviews: 194,
    price: '₹2,100/hr',
    nextSlot: 'Today 6PM',
    specializations: ['100m', '200m', 'Relay'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&auto=format',
    verified: false,
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'Strength & Conditioning',
    experience: '8 yrs exp',
    rating: 4.9,
    reviews: 445,
    price: '₹2,500/hr',
    nextSlot: 'Thu 2PM',
    specializations: ['Strength', 'Conditioning', 'Mobility'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&auto=format',
    verified: true,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Long Jump Specialist',
    experience: '18 yrs exp',
    rating: 4.8,
    reviews: 521,
    price: '₹3,000/hr',
    nextSlot: 'Fri 11AM',
    specializations: ['Long Jump', 'Triple Jump', 'Speed'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&auto=format',
    verified: true,
  },
  {
    id: 6,
    name: 'Ananya Bose',
    role: 'Yoga & Recovery Coach',
    experience: '6 yrs exp',
    rating: 4.6,
    reviews: 167,
    price: '₹900/hr',
    nextSlot: 'Today 8PM',
    specializations: ['Recovery', 'Flexibility', 'Mindfulness'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&auto=format',
    verified: false,
  },
];

export default function StoreCoachListing() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Rating');
  const [savedCoaches, setSavedCoaches] = useState<number[]>([]);

  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedCoaches((prev) => prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]);
  };

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
            <div className="flex-1">
              <h1 className="text-white font-bold text-[17px]">All Coaches & Experts</h1>
              <p className="text-[#99A1AF] text-[11px]">50+ verified professionals</p>
            </div>
            <button className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center">
              
            </button>
          </div>

          {/* Search */}
          <div className="px-4 pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-[#99A1AF]" />
              <input
                type="text"
                placeholder="Search by name or specialization..."
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[10px] pl-9 pr-4 py-2.5 text-white text-[13px] placeholder:text-[#99A1AF] focus:outline-none focus:border-[rgba(201,17,95,0.5)]"
              />
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 pb-3">
            {filterChips.map((chip) => (
              null
            ))}
          </div>
        </div>

        {/* Coach Cards */}
        <div className="flex-1 overflow-y-auto pb-6 no-scrollbar">
          <div className="flex flex-col gap-3 px-4 pt-4">
            {coaches.map((coach) => (
              <button
                key={coach.id}
                className="w-full bg-[#111116] rounded-[18px] border border-[rgba(255,255,255,0.07)] overflow-hidden text-left active:scale-[0.98] transition-transform"
                onClick={() => navigate(`/store/coach/${coach.id}`)}
              >
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-[60px] h-[60px] rounded-[14px] overflow-hidden bg-[#1a1a1f]">
                        <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                      </div>
                      {coach.verified && (
                        <div className="absolute -bottom-1 -right-1 w-[18px] h-[18px] rounded-full bg-[#c9115f] flex items-center justify-center border-2 border-[#111116]">
                          <span className="text-white text-[8px] font-bold">✓</span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-white text-[15px] font-bold">{coach.name}</p>
                          <p className="text-[#99A1AF] text-[12px]">{coach.role}</p>
                        </div>
                        <button
                          onClick={(e) => toggleSave(coach.id, e)}
                          className="w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center flex-shrink-0"
                        >
                          <Bookmark
                            className="w-[14px] h-[14px]"
                            style={{ color: savedCoaches.includes(coach.id) ? '#c9115f' : '#99A1AF', fill: savedCoaches.includes(coach.id) ? '#c9115f' : 'none' }}
                          />
                        </button>
                      </div>

                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-1">
                          <Star className="w-[11px] h-[11px] text-[#FFD700] fill-[#FFD700]" />
                          <span className="text-[#FFD700] text-[11px] font-semibold">{coach.rating}</span>
                          <span className="text-[#4a4a5a] text-[10px]">({coach.reviews})</span>
                        </div>
                        <span className="text-[#4a4a5a] text-[10px]">•</span>
                        <span className="text-[#99A1AF] text-[11px]">{coach.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialization tags */}
                  <div className="flex gap-1.5 mt-3 flex-wrap">
                    {coach.specializations.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-full text-[10px] text-[#99A1AF]">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[rgba(255,255,255,0.06)]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-[12px] h-[12px] text-[#00c864]" />
                      <span className="text-[#00c864] text-[11px] font-semibold">Next: {coach.nextSlot}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[13px] font-bold">{coach.price}</span>
                      <span className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(201,17,95,0.35)]">
                        Book Now
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
