import { useNavigate } from 'react-router';
import {
  Bell, Star, User, Search, Store, Trophy, Tv, Gamepad2,
  ChevronRight, MapPin, Clock, Bookmark, Zap, Sparkles,
  CheckCircle2, Loader2,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import MaskGroup from '@/components/common/MaskGroup/MaskGroup';

const categories = [
  { emoji: '🏃', label: 'Athletics' },
  { emoji: '🎯', label: 'Javelin' },
  { emoji: '🏅', label: 'Long Jump' },
  { emoji: '⚡', label: 'Sprint' },
  { emoji: '🥗', label: 'Nutrition' },
  { emoji: '💪', label: 'Strength' },
];

const featuredServices = [
  {
    id: 1,
    title: 'Long Jump Coaching',
    subtitle: 'Master your technique',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=240&fit=crop&auto=format',
    tag: 'Popular',
    tagColor: '#c9115f',
  },
  {
    id: 2,
    title: 'Javelin Coaching',
    subtitle: 'Olympic-level training',
    price: '₹3,299',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=240&fit=crop&auto=format',
    tag: 'Featured',
    tagColor: '#cd620e',
  },
  {
    id: 3,
    title: 'Sprint Coaching',
    subtitle: 'Speed & explosiveness',
    price: '₹1,999',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=240&fit=crop&auto=format',
    tag: 'New',
    tagColor: '#00c864',
  },
  {
    id: 4,
    title: 'Sports Nutrition',
    subtitle: 'Fuel your performance',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=240&fit=crop&auto=format',
    tag: 'Trending',
    tagColor: '#c9115f',
  },
];

const popularExperts = [
  {
    id: 1,
    name: 'Ravi Singh',
    specialization: 'Athletics Coach',
    rating: 4.9,
    reviews: 312,
    price: '₹1,800/hr',
    nextSlot: 'Today 4PM',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    specialization: 'Sports Nutritionist',
    rating: 4.8,
    reviews: 278,
    price: '₹1,200/hr',
    nextSlot: 'Tomorrow 10AM',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Arun Kumar',
    specialization: 'Sprint & Speed Coach',
    rating: 4.7,
    reviews: 194,
    price: '₹2,100/hr',
    nextSlot: 'Today 6PM',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&auto=format',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    specialization: 'Strength & Conditioning',
    rating: 4.9,
    reviews: 445,
    price: '₹2,500/hr',
    nextSlot: 'Thu 2PM',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&auto=format',
  },
];

export default function StoreScreen() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Athletics');
  const [locationState, setLocationState] = useState<'fetching' | 'saved'>('fetching');

  useEffect(() => {
    const t = setTimeout(() => setLocationState('saved'), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    /* Fill the AppLayout outlet exactly — sticky header + scrollable body */
    <div className="w-full h-full flex flex-col bg-[#0b0b0f] overflow-hidden">

      {/* ── Sticky Header ── */}
      <div className="flex-shrink-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)] h-[56px] flex items-center justify-between px-4 gap-2">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <div className="relative w-[28px] h-[36px]">
            <MaskGroup />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-[180px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[#99A1AF]" />
            <input
              type="text"
              placeholder="Search coaches..."
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full pl-9 pr-9 py-1.5 text-white text-[13px] placeholder:text-[#99A1AF] focus:outline-none focus:border-[rgba(201,17,95,0.5)]"
            />
            <button
              onClick={() => navigate('/ask-ai')}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-[24px] h-[24px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] flex items-center justify-center shadow-[0_0_12px_rgba(255,122,0,0.4)]"
            >
              <Sparkles className="w-[12px] h-[12px] text-white" />
            </button>
          </div>
        </div>

        {/* Points + Bell + Profile */}
        <div className="flex items-center gap-[6px]">
          <div className="flex items-center gap-[4px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] rounded-full px-[8px] py-[4px]">
            <Star className="w-[12px] h-[12px] text-[#FFD700] fill-[#FFD700]" />
            <span className="text-white font-semibold text-[11px] leading-none">250</span>
          </div>
          <button className="relative bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] rounded-full p-[6px]">
            <Bell className="w-[14px] h-[14px] text-white" />
            <div className="absolute -top-[2px] -right-[2px] bg-[#ff0055] rounded-full w-[14px] h-[14px] flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">3</span>
            </div>
          </button>
          <button className="flex items-center justify-center w-[28px] h-[28px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] rounded-full p-[6px]">
            <User className="w-[14px] h-[14px] text-white" />
          </button>
        </div>
      </div>

      {/* ── Scrollable Body ── */}
      <div className="flex-1 overflow-y-auto no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>

        {/* Page Title */}
        <div className="px-4 pt-5 pb-3">
          <h1 className="text-white text-[22px] font-bold">Store</h1>
          <p className="text-[#99A1AF] text-[13px] mt-0.5">Coaches, experts &amp; services</p>
        </div>

        {/* Location Banner */}
        <div className="px-4 mb-4">
          <div className={`flex items-center gap-2.5 rounded-[12px] px-3.5 py-2.5 border transition-all duration-500 ${
            locationState === 'fetching'
              ? 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'
              : 'bg-[rgba(0,200,100,0.08)] border-[rgba(0,200,100,0.25)]'
          }`}>
            {locationState === 'fetching' ? (
              <>
                <Loader2 className="w-[14px] h-[14px] text-[#99A1AF] animate-spin flex-shrink-0" />
                <span className="text-[#99A1AF] text-[12px]">Fetching your location…</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-[14px] h-[14px] text-[#00c864] flex-shrink-0" />
                <MapPin className="w-[13px] h-[13px] text-[#00c864] flex-shrink-0" />
                <span className="text-[#00c864] text-[12px] font-semibold">Bengaluru, Karnataka</span>
                <span className="text-[#4a4a5a] text-[11px] ml-auto">Saved</span>
              </>
            )}
          </div>
        </div>

        {/* My Bookings Shortcut */}
        <div className="px-4 mb-5">
          <button
            className="w-full bg-gradient-to-r from-[rgba(201,17,95,0.15)] to-[rgba(205,98,14,0.15)] border border-[rgba(201,17,95,0.3)] rounded-[16px] p-4 flex items-center justify-between active:scale-[0.98] transition-transform"
            onClick={() => navigate('/store/my-bookings')}
          >
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-[12px] bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center shadow-[0_0_15px_rgba(201,17,95,0.4)]">
                <Bookmark className="w-[18px] h-[18px] text-white fill-white" />
              </div>
              <div className="text-left">
                <p className="text-white text-[14px] font-semibold">My Bookings</p>
                <p className="text-[#99A1AF] text-[12px]">2 upcoming sessions</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="bg-[#c9115f] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
              <ChevronRight className="w-[16px] h-[16px] text-[#99A1AF]" />
            </div>
          </button>
        </div>

        {/* ── Category Chips — horizontal scroll ── */}
        <div className="mb-5">
          <div
            className="flex gap-2 px-4 pb-1 overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-semibold border transition-all ${
                  activeCategory === cat.label
                    ? 'bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white border-transparent shadow-[0_0_12px_rgba(201,17,95,0.4)]'
                    : 'bg-[rgba(255,255,255,0.05)] text-[#99A1AF] border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Featured Services — horizontal scroll carousel ── */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-white text-[16px] font-bold">Featured Services</h2>
            <button
              className="flex items-center gap-1 text-[#c9115f] text-[12px] font-semibold"
              onClick={() => navigate('/store/services')}
            >
              See all <ChevronRight className="w-[14px] h-[14px]" />
            </button>
          </div>

          {/* Snap-scroll carousel — each card is ~72% of viewport width */}
          <div
            className="flex gap-3 px-4 pb-2 overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {featuredServices.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate(`/store/service/${service.id}`)}
                className="flex-shrink-0 snap-start bg-[#111116] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)] text-left active:scale-[0.98] transition-transform"
                style={{ width: 'calc(72vw)', maxWidth: '260px', minWidth: '200px' }}
              >
                {/* Thumbnail */}
                <div className="relative h-[130px] bg-[#1a1a1f]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent" />
                  <span
                    className="absolute top-2.5 left-2.5 px-2 py-[3px] rounded-full text-white text-[10px] font-bold"
                    style={{ backgroundColor: service.tagColor }}
                  >
                    {service.tag}
                  </span>
                </div>
                {/* Info */}
                <div className="p-3">
                  <p className="text-white text-[13px] font-semibold leading-snug">{service.title}</p>
                  <p className="text-[#99A1AF] text-[11px] mt-0.5">{service.subtitle}</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[13px] font-bold mt-2">
                    From {service.price}
                  </p>
                </div>
              </button>
            ))}
            {/* Trailing spacer so last card isn't flush to edge */}
            <div className="flex-shrink-0 w-1" />
          </div>
        </div>

        {/* ── Popular Experts — vertical list ── */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-4 mb-3">
            <h2 className="text-white text-[16px] font-bold">Popular Experts</h2>
            <button
              className="flex items-center gap-1 text-[#c9115f] text-[12px] font-semibold"
              onClick={() => navigate('/store/coaches')}
            >
              See all <ChevronRight className="w-[14px] h-[14px]" />
            </button>
          </div>
          <div className="flex flex-col gap-3 px-4">
            {popularExperts.map((expert) => (
              <button
                key={expert.id}
                className="w-full bg-[#111116] rounded-[16px] border border-[rgba(255,255,255,0.08)] p-3 flex items-center gap-3 text-left active:scale-[0.98] transition-transform"
                onClick={() => navigate(`/store/coach/${expert.id}`)}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-[54px] h-[54px] rounded-full overflow-hidden bg-[#1a1a1f] border-2 border-[rgba(201,17,95,0.3)]">
                    <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-[16px] h-[16px] rounded-full bg-[#00c864] border-2 border-[#111116]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[14px] font-semibold">{expert.name}</p>
                  <p className="text-[#99A1AF] text-[11px]">{expert.specialization}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-[11px] h-[11px] text-[#FFD700] fill-[#FFD700]" />
                      <span className="text-[#FFD700] text-[11px] font-semibold">{expert.rating}</span>
                      <span className="text-[#4a4a5a] text-[10px]"> ({expert.reviews})</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Clock className="w-[10px] h-[10px] text-[#99A1AF]" />
                      <span className="text-[#99A1AF] text-[10px]">{expert.nextSlot}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[12px] font-bold">
                    {expert.price}
                  </span>
                  <span className="text-[#c9115f] text-[11px] font-semibold border border-[rgba(201,17,95,0.4)] rounded-full px-2 py-0.5">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="px-4 mb-6">
          <div className="bg-gradient-to-r from-[rgba(201,17,95,0.12)] to-[rgba(205,98,14,0.12)] rounded-[16px] border border-[rgba(255,255,255,0.06)] p-4 flex items-center gap-4">
            <div className="w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(201,17,95,0.5)]">
              <Zap className="w-[20px] h-[20px] text-white fill-white" />
            </div>
            <div>
              <p className="text-white text-[14px] font-semibold">Boost your game</p>
              <p className="text-[#99A1AF] text-[12px]">50+ verified experts • 4.8★ avg rating • 10k+ sessions</p>
            </div>
          </div>
        </div>

        {/* Bottom spacer so last item clears the nav */}
        <div className="h-4" />
      </div>

    </div>
  );
}
