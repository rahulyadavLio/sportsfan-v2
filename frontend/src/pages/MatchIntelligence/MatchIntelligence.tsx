import { useNavigate } from 'react-router';
import { Bell, Star, User, Trophy, Search, Tv, Gamepad2, Store, ChevronLeft, TrendingUp, Medal, Flame, Users, Heart, MessageCircle, Share2, Clock, ChevronRight, ChevronDown, Play, Bookmark, Globe, BarChart3, Target } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';

export default function MatchIntelligence() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const liveEvents = [
    { id: 1, country1: 'IND', country2: 'AUS', event: 'Hockey Final', score: '3-2', status: 'Live', momentum: 'IND' },
    { id: 2, country1: 'JAM', country2: 'USA', event: '4x100m Relay', score: 'Running', status: 'Live', momentum: 'JAM' },
  ];

  const yesterdayHighlights = [
    {
      id: 1,
      title: 'Neeraj Chopra Golden Throw',
      event: 'Javelin',
      result: 'Gold Medal',
      distance: '88.13m',
      insight: 'Commonwealth Record',
    },
    {
      id: 2,
      title: 'India Dominates Relay',
      event: '4x400m Mixed Relay',
      result: 'Gold Medal',
      time: '3:10.12',
      insight: 'Games Record',
    },
  ];

  const athleteVoices = [
    {
      id: 1,
      name: 'Neeraj Chopra',
      emotion: 'Inspired',
      quote: "This is for every young athlete dreaming big...",
      sport: 'Javelin',
    },
    {
      id: 2,
      name: 'Avinash Sable',
      emotion: 'Focused',
      quote: "The race is mine to lose, I'm ready...",
      sport: 'Steeplechase',
    },
  ];

  const medalStandings = [
    { country: 'IND', flag: '🇮🇳', gold: 12, silver: 8, bronze: 6, total: 26, trend: 'up' },
    { country: 'AUS', flag: '🇦🇺', gold: 15, silver: 10, bronze: 8, total: 33, trend: 'up' },
    { country: 'ENG', flag: '🏴󐁧󐁢󐁥󐁮󐁧󐁿', gold: 10, silver: 12, bronze: 9, total: 31, trend: 'down' },
  ];

  const trendingHashtags = [
    { tag: '#NeerajChopra', count: '125K', sentiment: 'positive' },
    { tag: '#CommonwealthGames', count: '98K', sentiment: 'positive' },
    { tag: '#IndiaAtCWG', count: '76K', sentiment: 'positive' },
  ];

  const viralMoments = [
    {
      id: 1,
      title: 'Neeraj\'s Victory Celebration',
      reactions: '45.2K',
      comments: '2.1K',
      category: 'Celebration',
      image: 'https://images.unsplash.com/photo-1744035858093-d8de2d27ec15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Photo Finish Drama',
      reactions: '38.5K',
      comments: '1.8K',
      category: 'Thriller',
      image: 'https://images.unsplash.com/photo-1769708046817-84dc9066baba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const mustWatchEvent = {
    title: 'Gold Medal Showdown',
    subtitle: 'Neeraj Chopra vs Anderson Peters',
    sport: 'Javelin Final',
    time: 'Tomorrow, 8:30 PM',
    countdown: '22h 45m',
    image: 'https://images.unsplash.com/photo-1706889393102-03f883b80e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  };

  const trendingArticles = [
    {
      id: 1,
      title: 'How India Dominated the Athletics Arena',
      category: 'Analysis',
      readTime: '5 min',
      source: 'ESPN',
      image: 'https://images.unsplash.com/photo-1769878519806-305883b6f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Breaking Records: CWG 2026 Highlights',
      category: 'News',
      readTime: '3 min',
      source: 'BBC Sport',
      image: 'https://images.unsplash.com/photo-1769878519950-b54af2874b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
  ];

  const topSignals = [
    { rank: 1, title: 'India\'s Athletics Surge Continues', sport: 'Athletics', sentiment: 'positive' },
    { rank: 2, title: 'Swimming Pool Records Shattered', sport: 'Swimming', sentiment: 'positive' },
    { rank: 3, title: 'Unexpected Hockey Upset', sport: 'Hockey', sentiment: 'neutral' },
  ];

  return (
    <div className="bg-black w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">
        {/* Fixed top header */}
        <div className="sticky top-0 left-0 right-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)] h-[56px] flex items-center justify-between px-4 gap-3">
          <button onClick={() => navigate('/')} className="w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors">
            <ChevronLeft className="w-[18px] h-[18px] text-white" />
          </button>

          <h1 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif]">CWG Intelligence</h1>

          <div className="flex items-center gap-[6px]">
            <button className="relative bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] rounded-full p-[6px] hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              <Bell className="w-[14px] h-[14px] text-white" />
              <div className="absolute -top-[2px] -right-[2px] bg-[#ff0055] rounded-full w-[14px] h-[14px] flex items-center justify-center">
                <span className="text-white text-[8px] font-['Inter:Bold',sans-serif] font-bold leading-none">3</span>
              </div>
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto pb-[70px]">
          {/* Hero Intelligence Banner */}
          <div className="relative px-4 pt-6 pb-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(201,17,95,0.2)] to-transparent blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-[8px] h-[8px] rounded-full bg-[#fb2c36] animate-pulse" />
                <span className="text-[#fb2c36] text-[12px] font-bold font-['Inter:Bold',sans-serif]">LIVE PULSE</span>
              </div>
              <h1 className="text-white text-[28px] font-bold font-['Inter:Bold',sans-serif] mb-4">
                Commonwealth Games 2026
              </h1>

              {/* Live Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gradient-to-br from-[rgba(201,17,95,0.15)] to-[rgba(205,98,14,0.15)] rounded-[12px] p-3 border border-[rgba(255,255,255,0.08)]">
                  <p className="text-[#99A1AF] text-[11px] mb-1">Live Events</p>
                  <p className="text-white text-[24px] font-bold font-['Inter:Bold',sans-serif]">12</p>
                </div>
                <div className="bg-gradient-to-br from-[rgba(201,17,95,0.15)] to-[rgba(205,98,14,0.15)] rounded-[12px] p-3 border border-[rgba(255,255,255,0.08)]">
                  <p className="text-[#99A1AF] text-[11px] mb-1">Medals Today</p>
                  <p className="text-white text-[24px] font-bold font-['Inter:Bold',sans-serif]">28</p>
                </div>
              </div>

              {/* Trending Chips */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.15)] whitespace-nowrap">
                  <span className="text-white text-[11px] font-semibold">#NeerajChopra</span>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.15)] whitespace-nowrap">
                  <span className="text-white text-[11px] font-semibold">#IndiaAtCWG</span>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.15)] whitespace-nowrap">
                  <span className="text-white text-[11px] font-semibold">🔥 Trending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Events Carousel */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Live Now</h2>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {liveEvents.map((event, idx) => (
                <div
                  key={event.id}
                  className="min-w-[280px] bg-[#161616] rounded-[16px] overflow-hidden border border-[rgba(201,17,95,0.3)]"
                >
                  {/* Event Image */}
                  <div className="relative h-[140px]">
                    <ImageWithFallback
                      src={idx === 0
                        ? "https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        : "https://images.unsplash.com/photo-1769878519806-305883b6f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      }
                      alt={event.event}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                    {/* Live Badge */}
                    <div className="absolute top-2 left-2 bg-[#fb2c36] px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <div className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
                      <span className="text-white text-[10px] font-bold font-['Inter:Bold',sans-serif]">LIVE</span>
                    </div>

                    {/* Event Type */}
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-white text-[10px] font-semibold">{event.event}</span>
                    </div>
                  </div>

                  {/* Score Section */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-center flex-1">
                        <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] mb-1">{event.country1}</p>
                        <p className="text-[#c9115f] text-[22px] font-bold font-['Inter:Bold',sans-serif]">{event.score.split('-')[0]}</p>
                      </div>
                      <div className="text-[#99A1AF] text-[12px] font-semibold">VS</div>
                      <div className="text-center flex-1">
                        <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] mb-1">{event.country2}</p>
                        <p className="text-white text-[22px] font-bold font-['Inter:Bold',sans-serif]">{event.score.split('-')[1] || '0'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 justify-center bg-[rgba(0,200,100,0.1)] rounded-full px-3 py-1">
                      <TrendingUp className="w-[12px] h-[12px] text-[#00c864]" />
                      <span className="text-[#00c864] text-[11px] font-semibold">{event.momentum} momentum</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yesterday's Highlights */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Yesterday's Highlights</h2>
            <div className="space-y-3">
              {yesterdayHighlights.map((highlight, idx) => (
                <div
                  key={highlight.id}
                  className="bg-[#161616] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)]"
                >
                  <div className="flex gap-3">
                    {/* Event Image */}
                    <div className="relative w-[100px] h-[100px] shrink-0">
                      <ImageWithFallback
                        src={idx === 0
                          ? "https://images.unsplash.com/photo-1706889393102-03f883b80e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                          : "https://images.unsplash.com/photo-1769878519806-305883b6f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        }
                        alt={highlight.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616]/30" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-3 pr-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Medal className="w-[14px] h-[14px] text-[#FFD700]" />
                        <span className="text-[#FFD700] text-[10px] font-bold">{highlight.result}</span>
                      </div>
                      <h3 className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif] mb-1 line-clamp-2">{highlight.title}</h3>
                      <p className="text-[#99A1AF] text-[11px] mb-2">{highlight.event}</p>

                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="bg-[rgba(255,255,255,0.05)] px-2 py-1 rounded-full">
                          <span className="text-white text-[10px] font-bold">{highlight.distance || highlight.time}</span>
                        </div>
                        <div className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] px-2 py-1 rounded-full">
                          <span className="text-white text-[9px] font-bold">{highlight.insight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Must Watch Event */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Must Watch</h2>
            <div className="relative bg-[#161616] rounded-[20px] overflow-hidden border border-[rgba(201,17,95,0.3)]">
              {/* Hero Image */}
              <div className="relative h-[200px]">
                <ImageWithFallback
                  src={mustWatchEvent.image}
                  alt={mustWatchEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Countdown Badge */}
                <div className="absolute top-3 right-3 bg-[rgba(201,17,95,0.9)] backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Clock className="w-[14px] h-[14px] text-white" />
                  <span className="text-white text-[12px] font-bold font-['Inter:Bold',sans-serif]">{mustWatchEvent.countdown}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] px-2 py-1 rounded-full inline-block mb-2">
                    <span className="text-white text-[10px] font-bold">{mustWatchEvent.sport}</span>
                  </div>
                  <h3 className="text-white text-[20px] font-bold font-['Inter:Bold',sans-serif] mb-1">{mustWatchEvent.title}</h3>
                  <p className="text-[#99A1AF] text-[13px] mb-2">{mustWatchEvent.subtitle}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-[14px] h-[14px] text-[#FFD700]" />
                    <span className="text-[#FFD700] text-[12px] font-semibold">{mustWatchEvent.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Athlete Voices */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Athlete Voices</h2>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {athleteVoices.map((voice, idx) => (
                <div
                  key={voice.id}
                  className="min-w-[260px] bg-[#161616] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)]"
                >
                  {/* Athlete Image */}
                  <div className="relative h-[140px]">
                    <ImageWithFallback
                      src={idx === 0
                        ? "https://images.unsplash.com/photo-1706889393102-03f883b80e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                        : "https://images.unsplash.com/photo-1769878519806-305883b6f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      }
                      alt={voice.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                    {/* Emotion Badge */}
                    <div className="absolute top-2 right-2 bg-[rgba(201,17,95,0.9)] backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-white text-[10px] font-semibold">{voice.emotion}</span>
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">{voice.name}</p>
                      <p className="text-[#99A1AF] text-[11px]">{voice.sport}</p>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="p-3 bg-gradient-to-br from-[rgba(139,92,246,0.08)] to-[rgba(236,72,153,0.08)]">
                    <p className="text-white text-[12px] italic line-clamp-2 mb-2">"{voice.quote}"</p>
                    <button className="text-[#c9115f] text-[11px] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read more <ChevronRight className="w-[12px] h-[12px]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medal Standings */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Medal Standings</h2>
            <div className="space-y-2">
              {medalStandings.map((standing, idx) => (
                <div
                  key={standing.country}
                  className="bg-gradient-to-br from-[rgba(201,17,95,0.05)] to-[rgba(205,98,14,0.05)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[32px] flex items-center justify-center text-[24px]">
                        {standing.flag}
                      </div>
                      <div>
                        <p className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">{standing.country}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[#FFD700] text-[11px]">🥇{standing.gold}</span>
                          <span className="text-[#C0C0C0] text-[11px]">🥈{standing.silver}</span>
                          <span className="text-[#CD7F32] text-[11px]">🥉{standing.bronze}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <p className="text-white text-[20px] font-bold font-['Inter:Bold',sans-serif]">{standing.total}</p>
                        <p className="text-[#99A1AF] text-[10px]">Total</p>
                      </div>
                      {standing.trend === 'up' ? (
                        <TrendingUp className="w-[16px] h-[16px] text-[#00c864]" />
                      ) : (
                        <ChevronDown className="w-[16px] h-[16px] text-[#ff4444]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fan Trends */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Trending Now</h2>
            <div className="space-y-2">
              {trendingHashtags.map((tag) => (
                <div
                  key={tag.tag}
                  className="bg-gradient-to-br from-[rgba(201,17,95,0.08)] to-[rgba(205,98,14,0.08)] rounded-[12px] p-3 border border-[rgba(255,255,255,0.08)] flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Flame className="w-[20px] h-[20px] text-[#ff6b35]" />
                    <div>
                      <p className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">{tag.tag}</p>
                      <p className="text-[#99A1AF] text-[11px]">{tag.count} posts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-[14px] h-[14px] text-[#ff0055] fill-[#ff0055]" />
                    <span className="text-[#00c864] text-[11px] font-semibold">Positive</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Viral Moments */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Viral Moments</h2>
            <div className="space-y-3">
              {viralMoments.map((moment) => (
                <div
                  key={moment.id}
                  className="bg-[#161616] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)]"
                >
                  <div className="relative h-[180px]">
                    <ImageWithFallback
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[56px] h-[56px] rounded-full bg-[rgba(255,255,255,0.2)] backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="w-[24px] h-[24px] text-white ml-1" fill="white" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 bg-[rgba(201,17,95,0.9)] backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-white text-[10px] font-bold">{moment.category}</span>
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif] mb-3">{moment.title}</h3>

                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                        <Heart className="w-[14px] h-[14px] text-[#ff0055]" />
                        <span className="text-[#99A1AF] text-[11px]">{moment.reactions}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                        <MessageCircle className="w-[14px] h-[14px] text-[#99A1AF]" />
                        <span className="text-[#99A1AF] text-[11px]">{moment.comments}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:opacity-80 transition-opacity ml-auto">
                        <Share2 className="w-[14px] h-[14px] text-[#99A1AF]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Trending Articles */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Trending Articles</h2>
            <div className="space-y-3">
              {trendingArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#161616] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)] hover:border-[rgba(201,17,95,0.3)] transition-colors"
                >
                  <div className="flex gap-3">
                    {/* Article Image */}
                    <div className="relative w-[120px] h-[100px] shrink-0">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616]/20" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-3 pr-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="bg-[rgba(201,17,95,0.15)] px-2 py-0.5 rounded-full">
                          <span className="text-[#c9115f] text-[9px] font-bold">{article.category}</span>
                        </div>
                        <span className="text-[#99A1AF] text-[9px]">{article.readTime} read</span>
                      </div>
                      <h3 className="text-white text-[13px] font-bold font-['Inter:Bold',sans-serif] mb-2 line-clamp-2">{article.title}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-[#99A1AF] text-[10px]">{article.source}</span>
                        <button className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                          <Bookmark className="w-[12px] h-[12px] text-[#99A1AF]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Signals */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Top Intelligence Signals</h2>
            <div className="space-y-2">
              {topSignals.map((signal) => (
                <div
                  key={signal.rank}
                  className="bg-gradient-to-br from-[rgba(201,17,95,0.05)] to-[rgba(205,98,14,0.05)] rounded-[12px] p-3 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(201,17,95,0.2)] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    {/* Rank Number */}
                    <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center shadow-lg">
                      <span className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif]">{signal.rank}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif] mb-1">{signal.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[#99A1AF] text-[11px]">{signal.sport}</span>
                        <div className={`w-[6px] h-[6px] rounded-full ${
                          signal.sentiment === 'positive' ? 'bg-[#00c864]' :
                          signal.sentiment === 'negative' ? 'bg-[#ff4444]' :
                          'bg-[#FFD700]'
                        }`} />
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button className="w-[28px] h-[28px] rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                      <ChevronRight className="w-[14px] h-[14px] text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audience & Language Insights */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Global Reach</h2>
            <div className="bg-gradient-to-br from-[rgba(201,17,95,0.08)] to-[rgba(205,98,14,0.08)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]">
              {/* Regional Engagement */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-[16px] h-[16px] text-[#c9115f]" />
                  <h3 className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">Top Regions</h3>
                </div>
                <div className="space-y-2">
                  {['India: 45%', 'Australia: 22%', 'UK: 18%', 'Canada: 15%'].map((region, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="flex-1 bg-[rgba(255,255,255,0.05)] rounded-full h-[6px] overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] h-full rounded-full"
                          style={{ width: region.split(': ')[1] }}
                        />
                      </div>
                      <span className="text-white text-[11px] w-[80px]">{region}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Language Distribution */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-[16px] h-[16px] text-[#c9115f]" />
                  <h3 className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">Languages</h3>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['English', 'Hindi', 'French', 'Spanish'].map((lang) => (
                    <div key={lang} className="bg-[rgba(255,255,255,0.08)] px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)]">
                      <span className="text-white text-[11px]">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sponsor Intelligence */}
          <div className="px-4 mb-6">
            <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Sponsor Pulse</h2>
            <div className="space-y-3">
              {[
                { brand: 'Nike', metric: 'Brand Visibility', value: '2.4M impressions', trend: 'up' },
                { brand: 'Coca-Cola', metric: 'Social Mentions', value: '185K posts', trend: 'up' },
              ].map((sponsor, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[rgba(201,17,95,0.05)] to-[rgba(205,98,14,0.05)] rounded-[12px] p-3 border border-[rgba(255,255,255,0.05)]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                        <Target className="w-[18px] h-[18px] text-[#c9115f]" />
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-bold font-['Inter:Bold',sans-serif]">{sponsor.brand}</p>
                        <p className="text-[#99A1AF] text-[10px]">{sponsor.metric}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">{sponsor.value}</p>
                      <div className="flex items-center gap-1 justify-end">
                        <TrendingUp className="w-[12px] h-[12px] text-[#00c864]" />
                        <span className="text-[#00c864] text-[9px] font-semibold">Rising</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="sticky bottom-0 left-0 right-0 z-50 bg-[#0b0b0f] border-t border-[#353535] h-[57px] flex items-center justify-around px-2">
          <button className="flex flex-col items-center gap-[3px] flex-1 py-1" onClick={() => navigate('/')}>
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
              <path d="M2.5 10.8333L10 3.33333L17.5 10.8333V17.5H12.5V13.3333H7.5V17.5H2.5V10.8333Z" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span className="text-[#99A1AF] text-[10px] font-semibold font-['Inter:Semi_Bold',sans-serif]">Feed</span>
          </button>

          <button className="flex flex-col items-center gap-[3px] flex-1 py-1" onClick={() => navigate('/watch-along')}>
            <Tv className="w-[20px] h-[20px] text-[#99A1AF]" strokeWidth={1.66667} />
            <span className="text-[#99A1AF] text-[10px] font-semibold font-['Inter:Semi_Bold',sans-serif]">Watch</span>
          </button>

          <button
            className="flex flex-col items-center gap-[3px] flex-1 py-1"
            onClick={() => navigate('/fan-battle')}
          >
            <Gamepad2 className="w-[20px] h-[20px] text-[#99A1AF]" strokeWidth={1.66667} />
            <span className="text-[#99A1AF] text-[10px] font-semibold font-['Inter:Semi_Bold',sans-serif]">Fantasy</span>
          </button>

          <button className="flex flex-col items-center gap-[3px] flex-1 py-1">
            <Store className="w-[20px] h-[20px] text-[#99A1AF]" strokeWidth={1.66667} />
            <span className="text-[#99A1AF] text-[10px] font-semibold font-['Inter:Semi_Bold',sans-serif]">Store</span>
          </button>

          <button className="flex flex-col items-center gap-[3px] flex-1 py-1" onClick={() => navigate('/fan-zone')}>
            <Trophy className="w-[20px] h-[20px] text-[#99A1AF]" strokeWidth={1.66667} />
            <span className="text-[#99A1AF] text-[10px] font-semibold font-['Inter:Semi_Bold',sans-serif]">Fan Zone</span>
          </button>
        </div>
      </div>
    </div>
  );
}
