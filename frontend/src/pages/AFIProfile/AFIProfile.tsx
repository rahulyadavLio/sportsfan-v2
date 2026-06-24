import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Share2, Trophy, Medal, TrendingUp, Award, Star, UserPlus, Bell, Play, FileText, Headphones, Eye, Zap, Target, ArrowRight, Image } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, Area, AreaChart } from 'recharts';
import { ImageWithFallback } from './figma/ImageWithFallback';

const afiData = {
  name: 'Athletics Federation of India',
  shortName: 'AFI',
  flag: '🇮🇳',
  founded: 1946,
  hq: 'New Delhi, India',
  president: 'Mr. Bahadur Singh Sagoo',
  // image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  achievementLabel: 'National Athletics Governing Body',
  heroStat: '500+',
  heroLabel: 'Registered Athletes',
  stats: {
    registeredAthletes: '26.4K',
    stateAssociations: 32,
    nationalRecords: '184',
    internationalMedals: '261',
  },
  highlights: [
    { icon: 'trophy', color: '#c9115f', title: 'Olympic Gold 2021', sub: 'Neeraj Chopra — Javelin' },
    { icon: 'star', color: '#c9115f', title: 'CWG 2022 — 8 Medals', sub: 'Birmingham, UK' },
    { icon: 'medal', color: '#cd620e', title: 'Asian Games 2023', sub: '29 Athletics Medals' },
    { icon: 'award', color: '#c9115f', title: 'World Championships', sub: 'Budapest 2023 — Gold' },
  ],
  medalData: [
    { year: '2019', gold: 3, silver: 5, bronze: 4 },
    { year: '2020', gold: 2, silver: 3, bronze: 6 },
    { year: '2021', gold: 5, silver: 4, bronze: 3 },
    { year: '2022', gold: 8, silver: 6, bronze: 5 },
    { year: '2023', gold: 9, silver: 7, bronze: 6 },
    { year: '2024', gold: 7, silver: 9, bronze: 8 },
  ],
  athleteGrowth: [
    { year: '2017', value: 280 },
    { year: '2018', value: 310 },
    { year: '2019', value: 345 },
    { year: '2020', value: 360 },
    { year: '2021', value: 390 },
    { year: '2022', value: 430 },
    { year: '2023', value: 470 },
    { year: '2024', value: 510 },
  ],
  radarData: [
    { metric: 'Sprints', value: 78, fullMark: 100 },
    { metric: 'Throws', value: 95, fullMark: 100 },
    { metric: 'Jumps', value: 72, fullMark: 100 },
    { metric: 'Distance', value: 88, fullMark: 100 },
    { metric: 'Relays', value: 65, fullMark: 100 },
  ],
  heatmapData: [
    { tournament: 'Olympics', years: { '2019': null, '2020': null, '2021': 'gold', '2022': null, '2023': null, '2024': 'silver' } },
    { tournament: 'CWG', years: { '2019': null, '2020': null, '2021': null, '2022': 'gold', '2023': null, '2024': null } },
    { tournament: 'Asian Games', years: { '2019': 'gold', '2020': null, '2021': null, '2022': null, '2023': 'gold', '2024': null } },
    { tournament: 'World Champ', years: { '2019': 'bronze', '2020': null, '2021': null, '2022': 'silver', '2023': 'gold', '2024': 'silver' } },
  ],
};

const dropsContent = [
  {
    type: 'Article',
    title: 'AFI announced track and field squad for CWG',
    meta: '22 min',
    date: '1d ago',
    views: '890K',
    icon: FileText,
    color: '#4ade80',
    link: '/articles/1',
  },
  {
    type: 'Audio',
    title: 'Dr Sumariwalla shares on Asian Games qualification',
    meta: '18 min',
    date: '3d ago',
    views: '214K',
    icon: Headphones,
    color: '#cd620e',
    link: '/audio/5',
  },
  {
    type: 'Video',
    title: 'National Record - 4X100M RELAY MEN FINAL',
    meta: '6 min',
    date: '1w ago',
    views: '2.3M',
    icon: Play,
    color: '#c9115f',
    link: '/video/4',
  },
];
const postsContent = [
  {
    text: "🏅 Join us tomorrow for the inaugural Indian Athletic Awards 2026 in New Delhi as we celebrate India's finest athletes, coaches and contributors across 10 prestigious categories. 🇮🇳✨",
    likes: '86.4K',
    comments: '3.1K',
    time: '3h ago',
  },
  {
    text: "🇮🇳 Congratulations to all 32 athletes selected to represent Team India at the Commonwealth Games 2026! Wishing our contingent the very best as they gear up for Glasgow. 💙",
    likes: '148K',
    comments: '5.6K',
    time: '8h ago',
  },
  {
    text: "⚡ Gurindervir Singh rewrites history with a stunning 10.09s National Record in the men's 100m! India's fastest man continues to raise the bar. 🔥",
    likes: '274K',
    comments: '12.2K',
    time: '2d ago',
  },
  {
    text: "🌟 Parul Chaudhary and India's middle-distance stars continue preparations for the international season, with focus firmly set on delivering strong performances on the global stage. 💪🏃‍♀️",
    likes: '61.8K',
    comments: '1.9K',
    time: '5d ago',
  },
];

const videosContent = [
  { title: "Neeraj Chopra — Tokyo 2020 Olympic Gold Throw", duration: '4:22', views: '28M', thumb: 'https://images.unsplash.com/photo-1703182612564-dd42bba0e1bc?w=400&fit=crop' },
  { title: "India at CWG 2022 — Athletics Medal Ceremony Compilation", duration: '12:45', views: '5.4M', thumb: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&fit=crop' },
  { title: "Avinash Sable — Asian Record 3000m Steeplechase", duration: '9:11', views: '6.8M', thumb: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&fit=crop' },
  { title: "AFI Announces CWG 2026 Squad — Press Conference", duration: '31:20', views: '1.9M', thumb: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&fit=crop' },
];

const photosContent = [
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&fit=crop', caption: 'National Championships 2025', likes: '24.1K' },
  { src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&fit=crop', caption: 'Training Camp — Patiala', likes: '18.7K' },
  { src: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&fit=crop', caption: 'CWG 2022 Medal Ceremony', likes: '61.2K' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&fit=crop', caption: 'AFI High Performance Centre', likes: '9.8K' },
  { src: 'https://images.unsplash.com/photo-1703182612564-dd42bba0e1bc?w=400&fit=crop', caption: 'Diamond League 2024', likes: '45.3K' },
  { src: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=400&fit=crop', caption: 'Asian Games 2023 — Team India', likes: '33.6K' },
];

const getMedalColor = (medal: string | null) => {
  if (!medal) return '#1a1a1a';
  if (medal === 'gold') return '#c9115f';
  if (medal === 'silver') return '#C0C0C0';
  if (medal === 'bronze') return '#cd620e';
  return '#1a1a1a';
};

const getMedalGlow = (medal: string | null) => {
  if (medal === 'gold') return '0 0 20px rgba(201, 17, 95, 0.5)';
  if (medal === 'silver') return '0 0 15px rgba(192, 192, 192, 0.4)';
  if (medal === 'bronze') return '0 0 15px rgba(205, 98, 14, 0.4)';
  return '';
};

const HighlightIcon = ({ icon, color }: { icon: string; color: string }) => {
  const props = { className: `w-12 h-12`, style: { color } };
  if (icon === 'trophy') return <Trophy {...props} />;
  if (icon === 'star') return <Star {...props} />;
  if (icon === 'medal') return <Medal {...props} />;
  return <Award {...props} />;
};

export default function AFIProfile() {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState<'profile' | 'stats'>('profile');
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(2000000);
  const [activeContentTab, setActiveContentTab] = useState<'drops' | 'posts' | 'videos' | 'photos'>('drops');
  const [activeView, setActiveView] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const views = ['Athlete Growth', 'Medal Heatmap', 'Medal Analysis', 'Discipline Radar'];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const viewWidth = scrollRef.current.offsetWidth;
      setActiveView(Math.round(scrollLeft / viewWidth));
    }
  };

  const scrollToView = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: index * scrollRef.current.offsetWidth, behavior: 'smooth' });
      setActiveView(index);
    }
  };

  const formatFollowers = (n: number) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toString();
  };

  const handleFollow = () => {
    setIsFollowing(f => !f);
    setFollowerCount(c => isFollowing ? c - 1 : c + 1);
  };

  if (currentScreen === 'profile') {
    return (
      <div className="h-screen bg-[#0B0B0F] flex justify-center overflow-hidden">
      <div className="w-full max-w-[390px] bg-[#0B0B0F] h-screen flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#0B0B0F]/95 backdrop-blur-md border-b border-[#1a1a20] sticky top-0 z-50">
            <div className="px-4 py-4 flex items-center justify-between">
              <button
                onClick={() => navigate('/')}
                className="w-10 h-10 rounded-full bg-[#15151C] flex items-center justify-center hover:bg-[#1a1a20] transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <h1 className="text-xl text-white font-semibold">AFI Profile</h1>
              <button className="w-10 h-10 rounded-full bg-[#15151C] flex items-center justify-center hover:bg-[#1a1a20] transition-all active:scale-95">
                <Share2 className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
<div className='mb-18 overflow-y-scroll' style={{ scrollbarWidth: 'none' }}>
{/* Hero */}
          <div className="relative h-60 ">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0F]/60 to-[#0B0B0F] z-10" />
              <ImageWithFallback src={'/afi-logo.jpeg'} alt="AFI" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{afiData.flag}</span>
                <span className="text-xs bg-[#c9115f]/20 text-[#c9115f] px-2 py-1 rounded-full">Official Body</span>
                <span className="text-xs bg-[rgba(255,255,255,0.1)] text-white px-2 py-1 rounded-full">Est. {afiData.founded}</span>
              </div>
              <h2 className="text-white font-bold text-lg mb-1">{afiData.name}</h2>
              <p className="text-gray-300 text-sm">{afiData.achievementLabel}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                <span>HQ: {afiData.hq}</span>
                <span>•</span>
                <span>President: {afiData.president}</span>
              </div>
            </div>
          </div>

          {/* Follow Bar */}
          <div className="px-4 py-3 flex items-center gap-3 border-b border-[#1a1a1a]">
            <div className="flex-1">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-base">{formatFollowers(followerCount)}</span>
                  <span>Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-base">{afiData.stats.stateAssociations}</span>
                  <span>State Assoc.</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-base">{afiData.stats.registeredAthletes}</span>
                  <span>Athletes</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleFollow}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all active:scale-95"
              style={isFollowing ? {
                background: 'transparent',
                border: '1px solid rgba(201,17,95,0.5)',
                color: '#c9115f',
              } : {
                background: 'linear-gradient(102deg, #ff1379 0%, #ff6a3d 100%)',
                color: 'white',
                boxShadow: '0 4px 16px rgba(255,19,121,0.4)',
              }}
            >
              {isFollowing ? <><Bell className="w-4 h-4" />Following</> : <><UserPlus className="w-4 h-4" />Follow</>}
            </button>
          </div>

          {/* Content Tabs */}
          <div className="px-4 pt-3 pb-1">
            <div className="flex gap-2">
              {(['drops', 'posts', 'videos', 'photos'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveContentTab(tab)}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all"
                  style={activeContentTab === tab ? {
                    background: 'linear-gradient(102deg, #ff1379 0%, #ff6a3d 100%)',
                    color: 'white',
                  } : {
                    background: 'rgba(21,21,21,0.6)',
                    color: '#888',
                  }}
                >
                  {tab === 'drops' && <Zap className="w-3 h-3" />}
                  {tab === 'posts' && <FileText className="w-3 h-3" />}
                  {tab === 'videos' && <Play className="w-3 h-3" />}
                  {tab === 'photos' && <Image className="w-3 h-3" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto" >

              {/* Tab Content */}
              <div className="space-y-3">
                {dropsContent.map((drop, i) => {
                  const Icon = drop.icon;

    return (
      <div
        key={i}
        onClick={() => navigate(drop.link)}
        className="flex items-center gap-3 bg-[#15151C] rounded-xl p-3 border border-[#1a1a1a] cursor-pointer hover:brightness-110 transition-all active:scale-[0.98]"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${drop.color}20` }}
        >
          <Icon
            className="w-4 h-4"
            style={{ color: drop.color }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-white text-[13px] font-semibold truncate">
            {drop.title}
          </p>

          <div className="flex items-center gap-2 mt-0.5">
            <span
              className="text-[10px] px-2 py-[1px] rounded-full font-medium"
              style={{
                color: drop.color,
                background: `${drop.color}20`,
              }}
            >
              {drop.type}
            </span>

            <span className="text-[#888] text-[11px]">
              {drop.meta}
            </span>

            <span className="text-[#888] text-[11px]">·</span>

            <Eye className="w-3 h-3 text-[#888]" />

            <span className="text-[#888] text-[11px]">
              {drop.views}
            </span>
          </div>
        </div>

        <span className="text-[#555] text-[11px] shrink-0">
          {drop.date}
        </span>
      </div>
    );
  })}
              </div>

          {/* Quick Stats */}
          <div className="px-4 py-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Trophy, label: 'Intl. Medals', value: afiData.stats.internationalMedals },
                { icon: Zap, label: 'National Records', value: afiData.stats.nationalRecords },
                { icon: Award, label: 'State Associations', value: String(afiData.stats.stateAssociations) },
                { icon: Star, label: 'Founded', value: String(afiData.founded) },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-[#15151C] rounded-2xl p-4 border border-[#1a1a1a]">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[#c9115f]" />
                    <span className="text-xs text-gray-400">{label}</span>
                  </div>
                  <div className="text-white font-bold">{value}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Career Highlights */}
          <div className="px-4 py-2">
            <h3 className="text-white font-semibold mb-3 text-sm">Key Achievements</h3>
            <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              {afiData.highlights.map((h, i) => (
                <div key={i} className="min-w-[140px] bg-[#15151C] rounded-2xl overflow-hidden border border-[#1a1a1a] cursor-pointer hover:scale-105 transition-transform">
                  <div className="h-32 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${h.color}20, ${h.color}08)` }}>
                    <HighlightIcon icon={h.icon} color={h.color} />
                  </div>
                  <div className="p-3">
                    <div className="text-white text-xs font-semibold">{h.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Snapshot */}
          <div className="px-4 py-4">
            
          </div>

          {/* CTA */}
              <div className="px-4 pb-0 pt-2">
            <button
              onClick={() => navigate('/records-explorer')}
              className="w-full bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-[#c9115f]/20"
            >
              Records Explorer
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
</div>
          

          </div>{/* end scrollable body */}
        </div>
      </div>
    );
  }

  // ── Stats screen ─────────────────────────────────────────────────────────
  return (
    <div className="h-screen bg-[#0B0B0F] flex justify-center overflow-hidden">
      <div className="w-full max-w-[390px] bg-[#0B0B0F] h-screen flex flex-col overflow-hidden">
        <div className="bg-[#0B0B0F]/95 backdrop-blur-md border-b border-[#1a1a1a] sticky top-0 z-50">
          <div className="px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentScreen('profile')}
              className="w-10 h-10 rounded-full bg-[#15151C] flex items-center justify-center hover:bg-[#1a1a20] transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-xl text-white font-semibold">AFI — Insights</h1>
            <div className="w-10 h-10" />
          </div>
        </div>

        {/* Scrollable stats body */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>

        {/* Hero stat */}
        <div className="p-4">
          <div className="bg-gradient-to-br from-[#15151C] via-[#15151C] to-[#1a1a25] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c9115f]/10 to-transparent rounded-full blur-3xl" />
            <div className="flex items-start justify-between relative z-10">
              <div>
                <div className="text-xs text-gray-500 tracking-wider mb-2 uppercase">Registered Athletes</div>
                <div className="text-5xl text-white font-bold tracking-tight mb-1">{afiData.heroStat}</div>
                <div className="flex items-center gap-2 mt-2">
                  <Trophy className="w-4 h-4 text-[#c9115f]" />
                  <span className="text-xs text-gray-400">Athletics Federation of India</span>
                </div>
              </div>
              <div className="w-28 h-20">
                <ResponsiveContainer width="100%" height={80}>
                  <AreaChart data={afiData.athleteGrowth}>
                    <defs>
                      <linearGradient id="heroAfiGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#c9115f" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#c9115f" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#c9115f" strokeWidth={2} fill="url(#heroAfiGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Swipeable nav */}
        <div className="px-4 pb-4">
          <div className="flex gap-3 mb-3 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {views.map((view, index) => (
              <button
                key={view}
                onClick={() => scrollToView(index)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${activeView === index ? 'bg-[#c9115f] text-white' : 'text-gray-400 bg-[#15151C] hover:text-white'}`}
              >
                {view}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {views.map((_, index) => (
              <div key={`ind-${index}`} className={`h-1 rounded-full transition-all duration-300 ${activeView === index ? 'flex-[2] bg-[#c9115f]' : 'flex-1 bg-[#2a2a35]'}`} />
            ))}
          </div>
        </div>

        {/* Swipeable views */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
        >
          {/* View 1: Athlete Growth */}
          <div className="min-w-full snap-start px-4">
            <div className="bg-[#15151C] rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base text-white font-semibold">Athlete Growth (2017–2024)</h3>
                <TrendingUp className="w-5 h-5 text-[#c9115f]" />
              </div>
              <div className="h-64 min-h-[256px]">
                <ResponsiveContainer width="100%" height={256}>
                  <LineChart data={afiData.athleteGrowth}>
                    <XAxis dataKey="year" stroke="#4a4a55" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#4a4a55" style={{ fontSize: '12px' }} domain={[250, 550]} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a35', borderRadius: '12px' }} labelStyle={{ color: '#fff' }} />
                    <Line type="monotone" dataKey="value" stroke="#c9115f" strokeWidth={3} dot={{ r: 4, fill: '#c9115f' }} activeDot={{ r: 8, fill: '#c9115f' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* View 2: Medal Heatmap */}
          <div className="min-w-full snap-start px-4">
            <div className="bg-[#15151C] rounded-2xl p-5 shadow-xl">
              <h3 className="text-base text-white font-semibold mb-5">Medal Heatmap</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-28 text-xs text-gray-500" />
                  {['2019', '2020', '2021', '2022', '2023', '2024'].map((year) => (
                    <div key={year} className="flex-1 text-center text-xs text-gray-500">{year}</div>
                  ))}
                </div>
                {afiData.heatmapData.map((row) => (
                  <div key={row.tournament} className="flex gap-2 items-center">
                    <div className="w-28 text-xs text-gray-400">{row.tournament}</div>
                    {Object.entries(row.years).map(([year, medal]) => (
                      <div
                        key={`${row.tournament}-${year}`}
                        className="flex-1 h-10 rounded-lg transition-all hover:scale-105 cursor-pointer"
                        style={{ backgroundColor: getMedalColor(medal as string | null), boxShadow: getMedalGlow(medal as string | null) }}
                      />
                    ))}
                  </div>
                ))}
                <div className="flex gap-4 pt-3 text-xs text-gray-500 justify-center">
                  {[{ color: '#c9115f', label: 'Gold' }, { color: '#C0C0C0', label: 'Silver' }, { color: '#cd620e', label: 'Bronze' }].map(m => (
                    <div key={m.label} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded" style={{ backgroundColor: m.color }} />
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* View 3: Medal Distribution */}
          <div className="min-w-full snap-start px-4">
            <div className="bg-[#15151C] rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base text-white font-semibold">Medal Distribution</h3>
                <Medal className="w-5 h-5 text-[#c9115f]" />
              </div>
              <div className="h-64 min-h-[256px]">
                <ResponsiveContainer width="100%" height={256}>
                  <BarChart data={afiData.medalData}>
                    <XAxis dataKey="year" stroke="#4a4a55" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#4a4a55" style={{ fontSize: '12px' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a35', borderRadius: '12px' }} labelStyle={{ color: '#fff' }} />
                    <Bar dataKey="gold" stackId="a" fill="#c9115f" />
                    <Bar dataKey="silver" stackId="a" fill="#C0C0C0" />
                    <Bar dataKey="bronze" stackId="a" fill="#cd620e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* View 4: Discipline Radar */}
          <div className="min-w-full snap-start px-4">
            <div className="bg-[#15151C] rounded-2xl p-5 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base text-white font-semibold">Discipline Strength</h3>
                <Target className="w-5 h-5 text-[#c9115f]" />
              </div>
              <div className="h-64 min-h-[256px]">
                <ResponsiveContainer width="100%" height={256}>
                  <RadarChart data={afiData.radarData}>
                    <PolarGrid stroke="#2a2a35" />
                    <PolarAngleAxis dataKey="metric" stroke="#6a6a75" style={{ fontSize: '11px' }} />
                    <Radar name="AFI" dataKey="value" stroke="#c9115f" fill="#c9115f" fillOpacity={0.3} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Insight cards */}
        <div className="px-4 mt-4 pb-8">
          <div className="bg-[#15151C] rounded-2xl p-5 shadow-xl">
            <h3 className="text-base text-white font-semibold mb-4">2024 Season Highlights</h3>
            <div className="space-y-3">
              {[
                { label: 'Athletes sent to international competitions', value: '68' },
                { label: 'National records broken', value: '12' },
                { label: 'International medals won', value: '24' },
                  { label: 'States with active athletics programs', value: '35' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#1a1a1a] last:border-0">
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span className="text-white font-bold text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>{/* end scrollable stats body */}
      </div>
    </div>
  );
}
