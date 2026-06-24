import { useNavigate } from 'react-router';
import { Bell, Star, User, Trophy, Search, Tv, Gamepad2, Store, Play, Users, ChevronRight, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../../components/common/ImageWithFallback.tsx';
export default function WatchAlong() {
  const navigate = useNavigate();

  const liveEvents = [
    {
      id: 'cwg-2026',
      title: 'Commonwealth Games 2026',
      subtitle: 'Athletics Championship',
      sport: 'Athletics',
      status: 'LIVE',
      viewers: '12.5K',
      description: "Women's 100m Final",
      time: 'Live Now',
    },
    // {
    //   id: 'athletics-championship',
    //   title: 'World Athletics Championship',
    //   subtitle: 'Track & Field',
    //   sport: 'Athletics',
    //   status: 'LIVE',
    //   viewers: '8.2K',
    //   description: "Women's Relay Heat 2",
    //   time: 'Live Now',
    // },
  ];

  const upcomingEvents = [
    {
      id: 'javelin-finals',
      title: 'Javelin Throw Finals',
      subtitle: 'Neeraj Chopra vs Anderson Peters',
      sport: 'Athletics',
      status: 'UPCOMING',
      viewers: '3.1K',
      description: 'Gold Medal Match',
      time: 'Starting in 2 hours',
    },
    {
      id: 'steeplechase',
      title: '3000m Steeplechase',
      subtitle: 'Avinash Sable competing',
      sport: 'Athletics',
      status: 'UPCOMING',
      viewers: '1.8K',
      description: 'Finals',
      time: 'Starting in 4 hours',
    },
  ];

  return (
    <div className="bg-black w-full flex justify-center h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">
        {/* Fixed top header */}
        <div className="sticky top-0 left-0 right-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)] h-[56px] flex items-center justify-between px-4 gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center shadow-[0_0_15px_rgba(201,17,95,0.4)]">
              <Trophy className="w-[18px] h-[18px] text-white" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[180px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[#99A1AF]" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full pl-9 pr-3 py-1.5 text-white text-[13px] placeholder:text-[#99A1AF] focus:outline-none focus:border-[rgba(201,17,95,0.5)]"
              />
            </div>
          </div>

          {/* Points, Notification, Profile */}
          <div className="flex items-center gap-[6px]">
            <div className="flex items-center gap-[4px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] rounded-full px-[8px] py-[4px]">
              <Star className="w-[12px] h-[12px] text-[#FFD700] fill-[#FFD700]" />
              <span className="text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-none">250</span>
            </div>
            <button className="relative bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] rounded-full p-[6px] hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              <Bell className="w-[14px] h-[14px] text-white" />
              <div className="absolute -top-[2px] -right-[2px] bg-[#ff0055] rounded-full w-[14px] h-[14px] flex items-center justify-center">
                <span className="text-white text-[8px] font-['Inter:Bold',sans-serif] font-bold leading-none">3</span>
              </div>
            </button>
            <button className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] p-[2px]">
              <div className="w-full h-full rounded-full bg-[#1a1a1f] flex items-center justify-center overflow-hidden">
                <User className="w-[14px] h-[14px] text-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-scroll no-scrollbar pb-[70px] ">
          {/* Hero Section */}
          <div className="relative px-4 pt-6 pb-4">
            <div className="flex items-center gap-2 mb-4">
              <Tv className="w-[28px] h-[28px] text-[#c9115f]" />
              <h1 className="text-white text-[28px] font-bold font-['Inter:Bold',sans-serif]">Watch Along</h1>
            </div>
            <p className="text-[#99A1AF] text-[14px]">Join live events, predict outcomes, and earn rewards</p>
          </div>

          {/* Live Events */}
          <div className="px-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[10px] h-[12px] bg-[#c9115f] opacity-70 rounded-full" />
              <h2 className="text-white text-[20px] font-bold font-['Inter:Bold',sans-serif]">Watch Along – CWG 2026</h2>
            </div>
            <div className="space-y-3">
              {liveEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={() => navigate(`/watch-along/${event.id}`)}
                  className="w-full text-left"
                >
                  {event.id === 'cwg-2026' ? (
                    /* ── Figma-matched CWG 2026 card ── */
                    <div className="relative bg-[#161616] border border-[rgba(201,17,95,0.3)] rounded-[16px] overflow-hidden hover:border-[rgba(201,17,95,0.6)] transition-all">
                      {/* Image area */}
                      <div className="relative h-[180px] overflow-hidden">
                        <img src="./watch.png" alt={event.title} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                        {/* Gradient overlay — bottom to top */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0)]" />

                        {/* Play button — centered */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[56px] h-[56px] rounded-full bg-[rgba(201,17,95,0.8)] flex items-center justify-center shadow-[0_0_20px_rgba(201,17,95,0.6)]">
                            <Play className="w-[24px] h-[24px] text-white ml-1" fill="white" />
                          </div>
                        </div>

                        {/* Host image — bottom-right of image area */}
                        <div className="absolute right-3 bottom-3 w-[92px] h-[92px] rounded-[16px] overflow-hidden border-[3.3px] border-[rgba(251,44,54,0.5)]">
                          <img src="./anchor.png" alt="Rahul Kumar" className="w-full h-full object-cover pointer-events-none" />
                        </div>

                        {/* LIVE badge — top left */}
                        <div className="absolute top-3 left-3 bg-[#fb2c36] px-2 py-1 rounded-full flex items-center gap-1 shadow-[0_10px_7.5px_rgba(0,0,0,0.1),0_4px_3px_rgba(0,0,0,0.1)]">
                          <div className="w-[6px] h-[6px] rounded-full bg-white opacity-54" />
                          <span className="text-white text-[10px] font-bold font-['Inter:Bold',sans-serif]">LIVE</span>
                        </div>

                        {/* Viewers — top right */}
                        <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.7)] px-2 py-1 rounded-full flex items-center gap-1 shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
                          <Users className="w-[12px] h-[12px] text-white" />
                          <span className="text-white text-[10px] font-semibold tracking-[0.12px]">{event.viewers}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-4 pt-4 pb-4">
                        {/* Title + share */}
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] flex-1 leading-[24px]">{event.title}</h3>
                          <button className="ml-2 w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors flex-shrink-0">
                            <Share2 className="w-[14px] h-[14px] text-white" />
                          </button>
                        </div>

                        {/* Subtitle */}
                        <p className="text-[#99A1AF] text-[12px] font-medium leading-[18px] mb-1">{event.subtitle}</p>

                        {/* Event name + hosted by */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-white text-[13px] font-medium tracking-[-0.076px]">{event.description}</span>
                          <span className="text-[#99A1AF] text-[11px]">Hosted by <span className="text-white font-semibold">Rahul Kumar</span></span>
                        </div>

                        {/* Action pills */}
                        <div className="flex gap-2 flex-wrap">
                          <div className="bg-[#161616] border border-[rgba(201,17,95,0.3)] rounded-full px-4 h-[34px] flex items-center">
                            <span className="text-white text-[11px] font-bold tracking-[0.064px]">Match Predictions</span>
                          </div>
                          <div className="bg-[#161616] border border-[rgba(205,98,14,0.3)] rounded-full px-4 h-[34px] flex items-center">
                            <span className="text-white text-[11px] font-bold tracking-[0.064px]">Live Reactions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                  /* ── Generic live event card ── */
                      <div className="relative bg-[#161616] border border-[rgba(201,17,95,0.3)] rounded-[16px] overflow-hidden hover:border-[rgba(201,17,95,0.6)] transition-all">
                        <div className="relative h-[180px] overflow-hidden">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1769878519806-305883b6f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[56px] h-[56px] rounded-full bg-[rgba(201,17,95,0.8)] flex items-center justify-center shadow-[0_0_20px_rgba(201,17,95,0.6)]">
                              <Play className="w-[24px] h-[24px] text-white ml-1" fill="white" />
                            </div>
                          </div>
                          <div className="absolute top-3 left-3 bg-[#fb2c36] px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                            <div className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
                            <span className="text-white text-[10px] font-bold font-['Inter:Bold',sans-serif]">LIVE</span>
                          </div>
                          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                            <Users className="w-[12px] h-[12px] text-white" />
                            <span className="text-white text-[10px] font-semibold">{event.viewers}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] flex-1">{event.title}</h3>
                            <button className="ml-2 w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors">
                              <Share2 className="w-[14px] h-[14px] text-white" />
                            </button>
                          </div>
                          <p className="text-[#99A1AF] text-[12px] mb-2">{event.subtitle}</p>
                          <p className="text-white text-[13px] mb-3">{event.description}</p>
                          <div className="flex gap-2 flex-wrap">
                            <div className="bg-[#161616] border border-[rgba(201,17,95,0.3)] rounded-full px-3 py-1">
                              <span className="text-white text-[11px] font-bold">Match Predictions</span>
                            </div>
                            <div className="bg-[#161616] border border-[rgba(205,98,14,0.3)] rounded-full px-3 py-1">
                              <span className="text-white text-[11px] font-bold">Live Reactions</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Upcoming</h2>
            <div className="space-y-3">
              {upcomingEvents.map((event, idx) => (
                <div
                  key={event.id}
                  className="relative bg-[#161616] border border-[rgba(255,255,255,0.1)] rounded-[16px] overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-[160px] overflow-hidden">
                    <ImageWithFallback
                      src={idx === 0
                        ? "https://images.unsplash.com/photo-1706889393102-03f883b80e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        : "https://images.unsplash.com/photo-1769708115143-a12bbe6c7f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      }
                      alt={event.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Upcoming Badge */}
                    <div className="absolute top-3 left-3 bg-[rgba(255,255,255,0.15)] backdrop-blur-sm px-2 py-1 rounded-full shadow-lg">
                      <span className="text-white text-[10px] font-bold font-['Inter:Bold',sans-serif]">UPCOMING</span>
                    </div>

                    {/* Viewers */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Users className="w-[12px] h-[12px] text-white" />
                      <span className="text-white text-[10px] font-semibold">{event.viewers}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] flex-1">{event.title}</h3>
                      <button className="ml-2 w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors">
                        <Share2 className="w-[14px] h-[14px] text-white" />
                      </button>
                    </div>
                    <p className="text-[#99A1AF] text-[12px] mb-2">{event.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-white text-[13px]">{event.description}</p>
                      <p className="text-[#FFD700] text-[11px] font-semibold whitespace-nowrap ml-2">{event.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
