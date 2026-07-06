import { useNavigate } from 'react-router';
import { ArrowLeft, Search, Star, Clock, Bookmark } from 'lucide-react';
import { useState } from 'react';
import { CoachBadge } from './Store';

const filterChips = ['Availability', 'Price', 'Rating', 'Experience', 'Language'];

const coaches = [
  {
    id: 1,
    name: 'Anubhav Karmakar',
    role: 'Founder, Athloft Multisport',
    experience: '12 yrs exp',
    rating: 4.9,
    reviews: 218,
    price: '₹2,200/hr',
    nextSlot: 'Today 5PM',
    specializations: ['Marathon', 'IronMan', 'Triathlon', 'Global Majors'],
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&h=120&fit=crop&auto=format',
    verified: true,
    badge: 'independent' as const,
  },
  {
    id: 2,
    name: 'Vikas Srinivasan',
    role: 'Founder, Runpundit',
    experience: '14 yrs exp',
    rating: 4.8,
    reviews: 342,
    price: '₹1,800/hr',
    nextSlot: 'Tomorrow 9AM',
    specializations: ['5K to Ultra', 'Marathon', 'Online Coaching'],
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&h=120&fit=crop&auto=format',
    verified: true,
    badge: 'independent' as const,
  },
  {
    id: 3,
    name: 'Kiran Badiger',
    role: 'Distance Running Coach',
    experience: '9 yrs exp',
    rating: 4.7,
    reviews: 156,
    price: '₹1,500/hr',
    nextSlot: 'Today 7PM',
    specializations: ['Distance Running', 'Marathon', 'Intl. Qualifiers'],
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&h=120&fit=crop&auto=format',
    verified: true,
    badge: 'independent' as const,
  },
  {
    id: 4,
    name: 'Pramod Deshpande',
    role: 'Core Team, Jayanagar Jaguars',
    experience: '11 yrs exp',
    rating: 4.8,
    reviews: 289,
    price: '₹1,600/hr',
    nextSlot: 'Wed 6AM',
    specializations: ['Running Groups', 'Distance', 'Community Training'],
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=120&h=120&fit=crop&auto=format',
    verified: true,
    badge: 'independent' as const,
  },
  {
    id: 5,
    name: 'Nakul Butta',
    role: 'Founder, All In Running',
    experience: '10 yrs exp',
    rating: 4.9,
    reviews: 197,
    price: '₹2,000/hr',
    nextSlot: 'Fri 7AM',
    specializations: ['Distance Running', 'Strength Training', 'Yoga Integration'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&auto=format',
    verified: true,
    badge: 'independent' as const,
  },
  {
    id: 6,
    name: 'Deepa Nair',
    role: 'Endurance & Recovery Coach',
    experience: '7 yrs exp',
    rating: 4.6,
    reviews: 132,
    price: '₹1,200/hr',
    nextSlot: 'Thu 8AM',
    specializations: ['Recovery', 'Endurance', 'Injury Prevention'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&auto=format',
    verified: true,
    badge: 'independent' as const,
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
              <button
                key={chip}
                onClick={() => setActiveFilter(chip)}
                className="flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold transition-all border"
                style={activeFilter === chip ? {
                  background: 'linear-gradient(135deg,#c9115f,#cd620e)',
                  border: '1px solid transparent',
                  color: 'white',
                } : {
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#99A1AF',
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Coach Cards */}
        <div className="flex-1 overflow-y-auto pb-[70px] no-scrollbar">
          <div className="flex flex-col gap-3 px-4 pt-4">
            {coaches.map((coach) => (
              <div
                key={coach.id}
                className="w-full bg-[#111116] rounded-[18px] border border-[rgba(255,255,255,0.07)] overflow-hidden text-left active:scale-[0.98] transition-transform cursor-pointer"
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
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-[15px] font-bold">{coach.name}</p>
                          <p className="text-[#99A1AF] text-[12px]">{coach.role}</p>
                          <div className="mt-1">
                            <CoachBadge type={coach.badge} />
                          </div>
                        </div>
                        <button
                          onClick={(e) => toggleSave(coach.id, e)}
                          className="w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center flex-shrink-0 ml-2"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
