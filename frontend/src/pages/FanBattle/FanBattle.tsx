import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Bell, Star, User, Trophy, Flame, TrendingUp, Medal, Zap, X, Heart, ChevronUp, ChevronLeft, Info, MoveLeft, MoveRight, MoveUp, ArrowLeft, Swords, TrendingUpDown, Gamepad2 } from 'lucide-react';
import { ImageWithFallback } from '@/components/common/ImageWithFallback';
import FantasyGames from './FantasyGames';

interface AthleteCard {
  id: number;
  name: string;
  displayName: string;
  country: string;
  countryFlag: string;
  sport: string;
  event: string;
  rank: number;
  image: string;
  medals: number;
  fanSupport: number;
  momentum: string;
  recentAchievement: string;
  signatureMove: string;
  rivalryTag?: string;
  fanEnergy: number;
  battleWinStreak: number;
}

export default function FanBattle() {
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [sxpBalance, setSxpBalance] = useState(1250);
  const [streak, setStreak] = useState(7);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | 'up' | null>(null);
  const [activeTab, setActiveTab] = useState('fan-battle');
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const athletes: AthleteCard[] = [
    {
      id: 1,
      name: 'Neeraj Chopra',
      displayName: 'NEERAJ',
      country: 'India',
      countryFlag: '🇮🇳',
      sport: 'Athletics',
      event: 'Javelin Throw',
      rank: 1,
      image: 'https://images.unsplash.com/photo-1706889393102-03f883b80e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      medals: 3,
      fanSupport: 94,
      momentum: 'Rising',
      recentAchievement: 'Olympic Gold Winner',
      signatureMove: 'Power Throw 88.13m',
      rivalryTag: 'vs Arshad Nadeem',
      fanEnergy: 98,
      battleWinStreak: 12,
    },
    {
      id: 2,
      name: 'PV Sindhu',
      displayName: 'PVSINDHU',
      country: 'India',
      countryFlag: '🇮🇳',
      sport: 'Badminton',
      event: "Women's Singles",
      rank: 2,
      image: 'https://images.unsplash.com/photo-1769708046817-84dc9066baba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      medals: 5,
      fanSupport: 91,
      momentum: 'Trending',
      recentAchievement: 'World Championship Silver',
      signatureMove: 'Power Smash',
      fanEnergy: 95,
      battleWinStreak: 8,
    },
    {
      id: 3,
      name: 'Noah Lyles',
      displayName: 'NOAH',
      country: 'USA',
      countryFlag: '🇺🇸',
      sport: 'Athletics',
      event: '100m Sprint',
      rank: 3,
      image: 'https://images.unsplash.com/photo-1744035858093-d8de2d27ec15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      medals: 4,
      fanSupport: 89,
      momentum: 'Hot',
      recentAchievement: 'Currently Trending',
      signatureMove: '9.83s Personal Best',
      rivalryTag: 'vs Letsile Tebogo',
      fanEnergy: 92,
      battleWinStreak: 15,
    },
    {
      id: 4,
      name: 'Molly Caudery',
      displayName: 'MOLLY',
      country: 'Great Britain',
      countryFlag: '🇬🇧',
      sport: 'Athletics',
      event: 'Pole Vault',
      rank: 4,
      image: 'https://images.unsplash.com/photo-1769878519806-305883b6f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      medals: 2,
      fanSupport: 85,
      momentum: 'Rising',
      recentAchievement: 'Commonwealth Record',
      signatureMove: '4.92m Jump',
      fanEnergy: 88,
      battleWinStreak: 6,
    },
    {
      id: 5,
      name: 'Leon Marchand',
      displayName: 'LEON',
      country: 'France',
      countryFlag: '🇫🇷',
      sport: 'Swimming',
      event: '200m Medley',
      rank: 5,
      image: 'https://images.unsplash.com/photo-1769878519950-b54af2874b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      medals: 4,
      fanSupport: 87,
      momentum: 'Dominant',
      recentAchievement: 'World Record Holder',
      signatureMove: '1:54.06 WR',
      fanEnergy: 90,
      battleWinStreak: 10,
    },
  ];

  const currentAthlete = athletes[currentCardIndex];
  const nextAthlete = athletes[currentCardIndex + 1];

  const handleSwipe = (direction: 'left' | 'right' | 'up') => {
    setSwipeDirection(direction);
    setShowSwipeHint(false);

    if (direction === 'right') {
      setSxpBalance(prev => prev + 15);
    } else if (direction === 'up') {
      setSxpBalance(prev => prev + 50);
    }

    setTimeout(() => {
      if (currentCardIndex < athletes.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
      } else {
        setCurrentCardIndex(0);
      }
      setSwipeDirection(null);
      setDragOffset({ x: 0, y: 0 });
    }, 300);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const cardElement = document.getElementById('swipe-card');
    if (!cardElement) return;

    const rect = cardElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setDragOffset({
      x: clientX - centerX,
      y: clientY - centerY,
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    if (Math.abs(dragOffset.x) > 100) {
      handleSwipe(dragOffset.x > 0 ? 'right' : 'left');
    } else if (dragOffset.y < -100) {
      handleSwipe('up');
    } else {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const powerRankings = athletes.slice(0, 5);

  return (
    <div className="w-full h-full bg-[#0b0b0f] flex flex-col overflow-hidden">
        {/* Fixed Top Navigation */}
        <div className="sticky top-0 left-0 right-0 z-50 bg-[#0b0b0f]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.05)]">
          {/* Top Bar */}
          <div className="h-[56px] flex items-center justify-between px-4 max-w-[1200px] mx-auto w-full">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/fan-zone')}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full p-2 hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              >
                <ArrowLeft className="w-[18px] h-[18px] text-white" />
              </button>
              <h1 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] bg-gradient-to-r from-[#c9115f] to-[#cd620e] bg-clip-text text-transparent">
                Fan Battle
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-[rgba(0,0,0,0.5)] border border-[rgba(255,215,0,0.3)] rounded-full px-3 py-1.5">
                <Star className="w-[14px] h-[14px] text-[#FFD700] fill-[#FFD700]" />
                <span className="text-[#FFD700] font-['Inter:Bold',sans-serif] font-bold text-[13px]">{sxpBalance}</span>
              </div>

              <div className="flex items-center gap-1 bg-[rgba(0,0,0,0.5)] border border-[rgba(255,107,53,0.3)] rounded-full px-3 py-1.5">
                <Flame className="w-[14px] h-[14px] text-[#ff6b35]" />
                <span className="text-white font-['Inter:Bold',sans-serif] font-bold text-[13px]">{streak}</span>
              </div>

              <button className="relative bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] rounded-full p-2 hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <Bell className="w-[16px] h-[16px] text-white" />
                <div className="absolute -top-1 -right-1 bg-[#ff0055] rounded-full w-[16px] h-[16px] flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">2</span>
                </div>
              </button>

              <button className="bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] rounded-full p-2 hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <User className="w-[16px] h-[16px] text-white" />
              </button>
            </div>
          </div>

          {/* Battle Mode Tabs */}
          <div className="px-4 pb-3 max-w-[1200px] mx-auto w-full">
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setActiveTab('fan-battle')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] transition-all ${
                  activeTab === 'fan-battle'
                    ? 'bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white shadow-lg'
                    : 'bg-[rgba(255,255,255,0.05)] text-[#99A1AF] hover:bg-[rgba(255,255,255,0.1)]'
                }`}
              >
                <Swords className="w-[14px] h-[14px]" />
                <span>Battle</span>
              </button>
              <button
                onClick={() => setActiveTab('predictions')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] transition-all ${
                  activeTab === 'predictions'
                    ? 'bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white shadow-lg'
                    : 'bg-[rgba(255,255,255,0.05)] text-[#99A1AF] hover:bg-[rgba(255,255,255,0.1)]'
                }`}
              >
                <TrendingUpDown className="w-[14px] h-[14px]" />
                <span>Predict</span>
              </button>
              <button
              // onClick={() => setActiveTab('fantasy')}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] transition-all ${
                  activeTab === 'fantasy'
                    ? 'bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white shadow-lg'
                    : 'bg-[rgba(255,255,255,0.05)] text-[#99A1AF] hover:bg-[rgba(255,255,255,0.1)]'
                }`}
              >
                <Gamepad2 className="w-[14px] h-[14px]" />
                <span>Games</span>
                <div className="absolute -top-1 -right-1 bg-[#ff0055] rounded-full px-1.5 py-0.5">
                  <span className="text-white text-[8px] font-bold">NEW</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-2 no-scrollbar">
          {/* Fantasy Games Tab Content */}
          {activeTab === 'fantasy' ? (
            <FantasyGames />
          ) : (
            <div className="max-w-[1200px] mx-auto w-full px-4 py-6">

          {/* Section 1: Power Rankings */}
          <div className="mb-6">
            <h2 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] mb-3">Power Rankings</h2>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {powerRankings.map((athlete) => (
                <div
                  key={athlete.id}
                  className="min-w-[90px] shrink-0 bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[16px] p-2 border border-[rgba(255,255,255,0.1)]"
                >
                  <div className="relative w-[74px] h-[74px] mb-2">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] p-[2px]">
                      <ImageWithFallback
                        src={athlete.image}
                        alt={athlete.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-gradient-to-br from-[#c9115f] to-[#cd620e] rounded-full w-[24px] h-[24px] flex items-center justify-center shadow-lg">
                      <span className="text-white text-[11px] font-bold">{athlete.rank}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-[11px] font-bold font-['Inter:Bold',sans-serif] mb-0.5 truncate">{athlete.name.split(' ')[0]}</p>
                    <p className="text-[#99A1AF] text-[9px] mb-1">{athlete.countryFlag}</p>
                    <div className="flex items-center gap-1 justify-center">
                      <TrendingUp className="w-[10px] h-[10px] text-[#00c864]" />
                      <span className="text-[#00c864] text-[9px] font-semibold">{athlete.fanSupport}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Swipe to Support */}
          <div className="mb-6">
            <h2 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] mb-4">Swipe to Support</h2>

            {/* Card Stack Container */}
            <div className="relative h-[520px] max-w-[390px] mx-auto">
              {/* Next Card Preview */}
              {nextAthlete && (
                <div className="absolute inset-0 mt-4 mx-2">
                  <div className="bg-[#161616] rounded-[24px] h-full opacity-50 scale-95 border border-[rgba(255,255,255,0.05)]" />
                </div>
              )}

              {/* Current Card */}
              <div
                id="swipe-card"
                className={`absolute inset-0 transition-all ${isDragging ? '' : 'duration-300'} ${
                  swipeDirection === 'right' ? 'translate-x-[500px] rotate-12 opacity-0' :
                  swipeDirection === 'left' ? '-translate-x-[500px] -rotate-12 opacity-0' :
                  swipeDirection === 'up' ? '-translate-y-[600px] opacity-0' : ''
                }`}
                style={isDragging ? {
                  transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${dragOffset.x * 0.1}deg)`,
                } : {}}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                <div className="bg-[#161616] rounded-[24px] h-full overflow-hidden border border-[rgba(201,17,95,0.3)] shadow-2xl cursor-grab active:cursor-grabbing">
                  {/* Athlete Image Background */}
                  <div className="relative h-[300px]">
                    <ImageWithFallback
                      src={currentAthlete.image}
                      alt={currentAthlete.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/60 to-transparent" />

                    {/* Sport Category Chip */}
                    <div className="absolute top-4 left-4 bg-[rgba(201,17,95,0.9)] backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-white text-[11px] font-bold">{currentAthlete.sport}</span>
                    </div>

                    {/* Jersey-style Name Display */}
                    <div className="absolute top-4 right-4 text-right">
                      <p className="text-white/30 text-[48px] font-['Inter:Black',sans-serif] font-black leading-none tracking-tighter">
                        {currentAthlete.displayName}
                      </p>
                    </div>

                    {/* Swipe Direction Indicators */}
                    {isDragging && dragOffset.x > 50 && (
                      <div className="absolute inset-0 bg-[rgba(0,200,100,0.3)] flex items-center justify-center">
                        <div className="bg-[#00c864] rounded-full p-4">
                          <Heart className="w-[48px] h-[48px] text-white" fill="white" />
                        </div>
                      </div>
                    )}
                    {isDragging && dragOffset.x < -50 && (
                      <div className="absolute inset-0 bg-[rgba(100,100,100,0.3)] flex items-center justify-center">
                        <div className="bg-[#666] rounded-full p-4">
                          <X className="w-[48px] h-[48px] text-white" />
                        </div>
                      </div>
                    )}
                    {isDragging && dragOffset.y < -50 && (
                      <div className="absolute inset-0 bg-[rgba(201,17,95,0.3)] flex items-center justify-center">
                        <div className="bg-gradient-to-br from-[#c9115f] to-[#cd620e] rounded-full p-4">
                          <Zap className="w-[48px] h-[48px] text-white" fill="white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    {/* Name & Country */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white text-[24px] font-bold font-['Inter:Bold',sans-serif]">
                          {currentAthlete.name}
                        </h3>
                        <span className="text-[32px]">{currentAthlete.countryFlag}</span>
                      </div>
                      <p className="text-[#99A1AF] text-[13px]">{currentAthlete.event}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] px-2 py-0.5 rounded-full">
                          <span className="text-white text-[9px] font-bold">RANK #{currentAthlete.rank}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-[12px] h-[12px] text-[#00c864]" />
                          <span className="text-[#00c864] text-[11px] font-semibold">{currentAthlete.momentum}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      <div className="bg-[rgba(255,215,0,0.1)] rounded-[12px] p-2 border border-[rgba(255,215,0,0.2)]">
                        <Medal className="w-[16px] h-[16px] text-[#FFD700] mb-1" />
                        <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] leading-none">{currentAthlete.medals}</p>
                        <p className="text-[#99A1AF] text-[8px] mt-0.5">Medals</p>
                      </div>
                      <div className="bg-[rgba(0,200,100,0.1)] rounded-[12px] p-2 border border-[rgba(0,200,100,0.2)]">
                        <div className="w-[16px] h-[16px] mb-1">
                          <div className="w-full h-full rounded-full border-2 border-[#00c864] border-t-transparent animate-spin" />
                        </div>
                        <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] leading-none">{currentAthlete.fanSupport}%</p>
                        <p className="text-[#99A1AF] text-[8px] mt-0.5">Support</p>
                      </div>
                      <div className="bg-[rgba(255,107,53,0.1)] rounded-[12px] p-2 border border-[rgba(255,107,53,0.2)]">
                        <Flame className="w-[16px] h-[16px] text-[#ff6b35] mb-1" />
                        <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] leading-none">{currentAthlete.fanEnergy}</p>
                        <p className="text-[#99A1AF] text-[8px] mt-0.5">Energy</p>
                      </div>
                      <div className="bg-[rgba(201,17,95,0.1)] rounded-[12px] p-2 border border-[rgba(201,17,95,0.2)]">
                        <Trophy className="w-[16px] h-[16px] text-[#c9115f] mb-1" />
                        <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] leading-none">{currentAthlete.battleWinStreak}</p>
                        <p className="text-[#99A1AF] text-[8px] mt-0.5">Streak</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <div className="bg-gradient-to-br from-[rgba(201,17,95,0.08)] to-[rgba(205,98,14,0.08)] rounded-[12px] p-2 border border-[rgba(255,255,255,0.05)]">
                        <p className="text-[#FFD700] text-[10px] font-bold mb-0.5">🏆 {currentAthlete.recentAchievement}</p>
                        <p className="text-white text-[11px] font-semibold">{currentAthlete.signatureMove}</p>
                      </div>
                      {currentAthlete.rivalryTag && (
                        <div className="bg-[rgba(255,0,85,0.1)] rounded-[12px] p-2 border border-[rgba(255,0,85,0.2)]">
                          <p className="text-[#ff0055] text-[11px] font-bold">⚔️ {currentAthlete.rivalryTag}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Visual Swipe Guide */}
            <div className="relative mt-6 mb-4">
              {/* Swipe Hint Overlay - Shown on first load */}
              {showSwipeHint && (
                <div className="absolute -top-[540px] left-0 right-0 z-10 pointer-events-none">
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-[24px]" />
                  <div className="relative flex flex-col items-center justify-center h-[520px]">
                    <div className="text-center mb-4 animate-bounce">
                      <p className="text-white text-[20px] font-bold font-['Inter:Bold',sans-serif] mb-2">
                        Swipe to Interact!
                      </p>
                      <p className="text-[#99A1AF] text-[13px] px-8">
                        Drag the card left, right, or up to make your choice
                      </p>
                    </div>

                    {/* Animated Hand Gesture */}
                    <div className="relative w-[160px] h-[100px] mb-4">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="text-[48px] animate-[swipeDemo_3s_ease-in-out_infinite]">
                          👆
                        </div>
                      </div>
                    </div>

                    {/* Directional Arrows */}
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2 animate-[slideLeft_2s_ease-in-out_infinite]">
                        <ChevronLeft className="w-[32px] h-[32px] text-[#99A1AF]" />
                        <span className="text-[#99A1AF] text-[12px] font-bold">SKIP</span>
                      </div>

                      <div className="flex flex-col items-center gap-2 animate-[slideUp_2s_ease-in-out_infinite]">
                        <ChevronUp className="w-[32px] h-[32px] text-[#c9115f]" />
                        <span className="text-[#c9115f] text-[12px] font-bold">SUPER</span>
                      </div>

                      <div className="flex items-center gap-2 animate-[slideRight_2s_ease-in-out_infinite]">
                        <span className="text-[#00c864] text-[12px] font-bold">SUPPORT</span>
                        <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 24 24">
                          <path d="M9 18l6-6-6-6" stroke="#00c864" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Tap to dismiss */}
                    <button
                      onClick={() => setShowSwipeHint(false)}
                      className="mt-6 bg-gradient-to-r from-[#c9115f] to-[#cd620e] px-6 py-2 rounded-full text-white text-[13px] font-bold pointer-events-auto"
                    >
                      Got it!
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-4 opacity-60">
                {/* Left Swipe */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <MoveLeft className="w-[20px] h-[20px] text-[#99A1AF]" />
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-[#99A1AF] animate-pulse" style={{ animationDelay: '0ms' }} />
                      <div className="w-1 h-1 rounded-full bg-[#99A1AF] animate-pulse" style={{ animationDelay: '150ms' }} />
                      <div className="w-1 h-1 rounded-full bg-[#99A1AF] animate-pulse" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                  <span className="text-[#99A1AF] text-[9px] font-semibold">SKIP</span>
                </div>

                {/* Up Swipe */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#c9115f] to-[#cd620e] animate-pulse" style={{ animationDelay: '0ms' }} />
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#c9115f] to-[#cd620e] animate-pulse" style={{ animationDelay: '150ms' }} />
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#c9115f] to-[#cd620e] animate-pulse" style={{ animationDelay: '300ms' }} />
                    </div>
                    <MoveUp className="w-[20px] h-[20px] text-[#c9115f]" />
                  </div>
                  <span className="text-[#c9115f] text-[9px] font-semibold">SUPER</span>
                </div>

                {/* Right Swipe */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-[#00c864] animate-pulse" style={{ animationDelay: '0ms' }} />
                      <div className="w-1 h-1 rounded-full bg-[#00c864] animate-pulse" style={{ animationDelay: '150ms' }} />
                      <div className="w-1 h-1 rounded-full bg-[#00c864] animate-pulse" style={{ animationDelay: '300ms' }} />
                    </div>
                    <MoveRight className="w-[20px] h-[20px] text-[#00c864]" />
                  </div>
                  <span className="text-[#00c864] text-[9px] font-semibold">SUPPORT</span>
                </div>
              </div>
            </div>

            <style>{`
              @keyframes swipeDemo {
                0%, 100% { transform: translate(0, 0); }
                25% { transform: translate(-30px, 0); }
                50% { transform: translate(30px, 0); }
                75% { transform: translate(0, -30px); }
              }
              @keyframes slideLeft {
                0%, 100% { transform: translateX(0); opacity: 1; }
                50% { transform: translateX(-10px); opacity: 0.6; }
              }
              @keyframes slideRight {
                0%, 100% { transform: translateX(0); opacity: 1; }
                50% { transform: translateX(10px); opacity: 0.6; }
              }
              @keyframes slideUp {
                0%, 100% { transform: translateY(0); opacity: 1; }
                50% { transform: translateY(-10px); opacity: 0.6; }
              }
            `}</style>

            {/* Action Bar */}
            <div className="flex items-center justify-center gap-6 mt-2">
              <button
                onClick={() => handleSwipe('left')}
                className="w-[56px] h-[56px] rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg"
              >
                <X className="w-[28px] h-[28px] text-[#99A1AF]" />
              </button>

              <button
                onClick={() => handleSwipe('up')}
                className="w-[64px] h-[64px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-2xl shadow-[rgba(201,17,95,0.5)]"
              >
                <Zap className="w-[32px] h-[32px] text-white" fill="white" />
              </button>

              <button
                onClick={() => handleSwipe('right')}
                className="w-[56px] h-[56px] rounded-full bg-[rgba(0,200,100,0.2)] border border-[rgba(0,200,100,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg"
              >
                <Heart className="w-[28px] h-[28px] text-[#00c864]" />
              </button>

              <button className="w-[48px] h-[48px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
                <Info className="w-[20px] h-[20px] text-[#99A1AF]" />
              </button>
            </div>

            {/* Action Labels */}
            <div className="flex items-center justify-center gap-6 mt-3">
              <span className="text-[#99A1AF] text-[11px] font-semibold w-[56px] text-center">Skip</span>
              <span className="text-[#c9115f] text-[11px] font-semibold w-[64px] text-center">Super +50</span>
              <span className="text-[#00c864] text-[11px] font-semibold w-[56px] text-center">Support +15</span>
              <span className="text-[#99A1AF] text-[11px] font-semibold w-[48px] text-center">Info</span>
            </div>
          </div>

          {/* Section 3: 7 Day Battle Streak */}
          <div className="mb-6">
            <div className="bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[20px] p-4 border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-[20px] h-[20px] text-[#ff6b35]" />
                  <h3 className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">{streak} Day Battle Streak</h3>
                </div>
                <Star className="w-[20px] h-[20px] text-[#FFD700] fill-[#FFD700]" />
              </div>
              <div className="bg-[rgba(0,0,0,0.3)] rounded-full h-[8px] overflow-hidden mb-2">
                <div
                  className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] h-full rounded-full transition-all duration-500"
                  style={{ width: '65%' }}
                />
              </div>
              <p className="text-[#99A1AF] text-[11px]">420 SXP to Elite Fan status</p>
            </div>
          </div>

          {/* Section 4: Community Pulse */}
          <div className="mb-6">
            <h2 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif] mb-3">Community Pulse</h2>
            <div className="space-y-2">
              {[
                { name: 'Neeraj Chopra', support: 94, votes: '125K' },
                { name: 'PV Sindhu', support: 91, votes: '98K' },
                { name: 'Noah Lyles', support: 89, votes: '87K' },
              ].map((athlete, idx) => (
                <div
                  key={idx}
                  className="bg-[#161616] rounded-[12px] p-3 border border-[rgba(255,255,255,0.05)]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white text-[13px] font-semibold">{athlete.name}</p>
                    <p className="text-[#99A1AF] text-[11px]">{athlete.votes} votes</p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-full h-[6px] overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] h-full rounded-full"
                      style={{ width: `${athlete.support}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

            </div>
          )}
        </div>

    </div>
  );
}
