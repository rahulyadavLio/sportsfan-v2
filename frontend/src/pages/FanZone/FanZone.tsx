import { useNavigate } from 'react-router';
import { Bell, Star, User, Trophy, TrendingUp, Flame, Gift, Users, Heart, Share2, Play, MessageCircle, ArrowRight, ChevronDown, Search, Tv, Gamepad2, Store } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useState } from 'react';

const trendData = [
  { day: 'Mon', points: 45 },
  { day: 'Tue', points: 52 },
  { day: 'Wed', points: 48 },
  { day: 'Thu', points: 61 },
  { day: 'Fri', points: 58 },
  { day: 'Sat', points: 75 },
  { day: 'Sun', points: 68 },
];

const earningActivities = [
  { icon: Play, title: 'Watch Drops', points: 10, count: '12 today' },
  { icon: Heart, title: 'Like a Post', points: 5, count: '8 today' },
  { icon: Share2, title: 'Share a Post', points: 15, count: '3 today' },
  { icon: MessageCircle, title: 'Comment', points: 8, count: '5 today' },
  { icon: Trophy, title: 'Complete Challenge', points: 50, count: '1 today' },
];

const recentActivities = [
  { action: 'Watched "Neeraj Training Session"', points: 10, time: '2 mins ago' },
  { action: 'Liked post about CWG 2026', points: 5, time: '15 mins ago' },
  { action: 'Shared Avinash highlight reel', points: 15, time: '1 hour ago' },
  { action: 'Completed daily login streak', points: 20, time: '3 hours ago' },
];

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const streakStatus = [true, true, true, true, true, false, false];

export default function FanZone() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('My Analytics');
  const tabs = ['My Analytics', 'Earning History', 'Activity Feed', 'All Activities'];

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
                placeholder="Search..."
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
        <div className="flex-1 overflow-y-auto pb-[70px] no-scrollbar">
          {/* Hero Section */}
          <div className="relative px-4 pt-6 pb-8 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[rgba(201,17,95,0.15)] to-transparent blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-[28px] h-[28px] text-[#c9115f]" />
                <h1 className="text-white text-[32px] font-bold font-['Inter:Bold',sans-serif]">Fan Zone</h1>
              </div>
              <p className="text-[#99A1AF] text-[14px] mb-6">Your sports passion rewarded</p>

              {/* SXP Card */}
              <div className="bg-gradient-to-br from-[rgba(201,17,95,0.15)] to-[rgba(205,98,14,0.15)] rounded-[20px] p-4 border border-[rgba(255,255,255,0.08)] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[#99A1AF] text-[12px] mb-1">Total SXP</p>
                    <p className="text-white text-[28px] font-bold font-['Inter:Bold',sans-serif]">2,450</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[rgba(0,200,100,0.15)] px-3 py-1.5 rounded-full">
                    <TrendingUp className="w-[14px] h-[14px] text-[#00c864]" />
                    <span className="text-[#00c864] text-[12px] font-semibold">+12%</span>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={trendData}>
                    <Line type="monotone" dataKey="points" stroke="#c9115f" strokeWidth={2} dot={false} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 mt-4">
                {/* <button className="flex-1 bg-gradient-to-r from-[#c9115f] to-[#cd620e] rounded-full py-3 px-4 text-white text-[14px] font-semibold font-['Inter:Semi_Bold',sans-serif] shadow-[0_0_20px_rgba(201,17,95,0.4)]">
                  Earn More
                </button>
                <button className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full py-3 px-4 text-white text-[14px] font-semibold font-['Inter:Semi_Bold',sans-serif]">
                  View Rewards
                </button> */}
                <button className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full py-3 px-4 text-white text-[14px] font-semibold font-['Inter:Semi_Bold',sans-serif]">
                  User Analytics
                </button>
              </div>
            </div>
          </div>

          {/* Level, Rank, Badges Section */}
          <div className="px-4 mb-6">
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {/* Level Card */}
              <div className="min-w-[160px] bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center shadow-[0_0_15px_rgba(201,17,95,0.5)]">
                    <Star className="w-[16px] h-[16px] text-white fill-white" />
                  </div>
                  <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif]">Level 12</p>
                </div>
                <div className="w-full h-[6px] bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden mb-1">
                  <div className="h-full w-[65%] bg-gradient-to-r from-[#c9115f] to-[#cd620e] rounded-full" />
                </div>
                <p className="text-[#99A1AF] text-[11px]">650/1000 SXP</p>
              </div>

              {/* Rank Card */}
              <div className="min-w-[160px] bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                    <Trophy className="w-[16px] h-[16px] text-[#1a1a1f]" />
                  </div>
                  <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif]">Rank #247</p>
                </div>
                <p className="text-[#99A1AF] text-[11px]">Top 5% of fans</p>
              </div>

              {/* Badges Card */}
              <div className="min-w-[160px] bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <Gift className="w-[16px] h-[16px] text-white" />
                  </div>
                  <p className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif]">8 Badges</p>
                </div>
                <p className="text-[#99A1AF] text-[11px]">3 unlocked this week</p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="px-4 mb-6">
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative whitespace-nowrap px-4 py-2.5 text-[14px] font-semibold font-['Inter:Semi_Bold',sans-serif] transition-all ${
                    activeTab === tab
                      ? 'text-[#c9115f]'
                      : 'text-[#99A1AF]'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c9115f] to-[#cd620e] rounded-full" />
                  )}
                </button>
              ))}
            </div>
            <div className="h-[1px] bg-[rgba(255,255,255,0.05)] -mt-2" />
          </div>

          {/* Tab Content */}
          {activeTab === 'My Analytics' && (
            <>
            <div className="px-4 mb-6">
              <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif]">Overview</h2>
              <button className="flex items-center gap-1 text-[#99A1AF] text-[13px]">
                <span>May 2026</span>
                <ChevronDown className="w-[14px] h-[14px]" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]">
                <p className="text-[#99A1AF] text-[12px] mb-1">This Month</p>
                <p className="text-white text-[24px] font-bold font-['Inter:Bold',sans-serif]">485</p>
                <p className="text-[#00c864] text-[11px]">+23% vs last month</p>
              </div>

              <div className="bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]">
                <p className="text-[#99A1AF] text-[12px] mb-1">All Time</p>
                <p className="text-white text-[24px] font-bold font-['Inter:Bold',sans-serif]">2,450</p>
                <p className="text-[#99A1AF] text-[11px]">Total SXP earned</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[rgba(201,17,95,0.08)] to-[rgba(205,98,14,0.08)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]">
              <p className="text-white text-[14px] font-semibold mb-3">Weekly Trend</p>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={trendData}>
                  <defs>
                    <linearGradient id="fanZoneBarGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c9115f" />
                      <stop offset="100%" stopColor="#cd620e" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="day" tick={{ fill: '#99A1AF', fontSize: 11 }} />
                  <YAxis tick={{ fill: '#99A1AF', fontSize: 11 }} />
                  <Bar dataKey="points" fill="url(#fanZoneBarGradient)" radius={[8, 8, 0, 0]} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            </div>

            {/* How You Earn Points */}
            <div className="px-4 mb-6">
              <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">How You Earn Points</h2>
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {earningActivities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="min-w-[140px] bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]"
                  >
                    <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(201,17,95,0.4)]">
                      <activity.icon className="w-[20px] h-[20px] text-white" />
                    </div>
                    <p className="text-white text-[13px] font-semibold mb-1">{activity.title}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#FFD700] text-[16px] font-bold font-['Inter:Bold',sans-serif]">+{activity.points}</span>
                      <span className="text-[#99A1AF] text-[10px]">{activity.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA/Rewards Card */}
            <div className="px-4 mb-6">
              <div className="relative bg-gradient-to-br from-[#c9115f] to-[#cd620e] rounded-[20px] p-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-white opacity-5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <Trophy className="w-[48px] h-[48px] text-white mb-3 opacity-80" />
                  <h3 className="text-white text-[20px] font-bold font-['Inter:Bold',sans-serif] mb-2">Unlock Premium Rewards</h3>
                  <p className="text-white text-[13px] opacity-90 mb-4">Reach Level 15 to unlock exclusive merchandise and VIP access</p>
                  <button className="bg-white text-[#c9115f] px-6 py-3 rounded-full text-[14px] font-bold font-['Inter:Bold',sans-serif] flex items-center gap-2">
                    <span>View Rewards</span>
                    <ArrowRight className="w-[16px] h-[16px]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="px-4 mb-6">
              <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Recent Activity</h2>
              <div className="space-y-2">
                {recentActivities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[rgba(201,17,95,0.05)] to-[rgba(205,98,14,0.05)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-white text-[13px] mb-1">{activity.action}</p>
                        <p className="text-[#99A1AF] text-[11px]">{activity.time}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-gradient-to-r from-[#c9115f] to-[#cd620e] px-2 py-1 rounded-full">
                        <Star className="w-[10px] h-[10px] text-[#FFD700] fill-[#FFD700]" />
                        <span className="text-white text-[11px] font-bold">+{activity.points}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Streak */}
            <div className="px-4 mb-6">
              <div className="bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[20px] p-5 border border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Flame className="w-[24px] h-[24px] text-[#ff6b35]" />
                    <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif]">Your Streak</h2>
                  </div>
                  <div className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] px-3 py-1.5 rounded-full">
                    <span className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">5 Days</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  {weekDays.map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div
                        className={`w-[36px] h-[36px] rounded-full flex items-center justify-center ${
                          streakStatus[idx]
                            ? 'bg-gradient-to-br from-[#c9115f] to-[#cd620e] shadow-[0_0_15px_rgba(201,17,95,0.4)]'
                            : 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]'
                        }`}
                      >
                        {streakStatus[idx] ? (
                          <Flame className="w-[18px] h-[18px] text-white" />
                        ) : (
                          <div className="w-[8px] h-[8px] rounded-full bg-[rgba(255,255,255,0.2)]" />
                        )}
                      </div>
                      <span className={`text-[11px] font-semibold ${streakStatus[idx] ? 'text-white' : 'text-[#99A1AF]'}`}>
                        {day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Invite Friends */}
            <div className="px-4 mb-6">
              <div className="relative bg-gradient-to-br from-[rgba(139,92,246,0.15)] to-[rgba(236,72,153,0.15)] rounded-[20px] p-6 border border-[rgba(255,255,255,0.08)] overflow-hidden">
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#c9115f] opacity-10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <Users className="w-[44px] h-[44px] text-[#c9115f] mb-3" />
                  <h3 className="text-white text-[20px] font-bold font-['Inter:Bold',sans-serif] mb-2">Invite Friends</h3>
                  <p className="text-[#99A1AF] text-[13px] mb-4">Earn 100 SXP for every friend who joins SportsFan360</p>
                  <button className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white px-6 py-3 rounded-full text-[14px] font-bold font-['Inter:Bold',sans-serif] shadow-[0_0_20px_rgba(201,17,95,0.4)] flex items-center gap-2">
                    <Users className="w-[16px] h-[16px]" />
                    <span>Share Invite</span>
                  </button>
                </div>
              </div>
            </div>
            </>
          )}

          {/* Earning History Tab */}
          {activeTab === 'Earning History' && (
            <div className="px-4 mb-6">
              <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Earning History</h2>
              <div className="space-y-3">
                {[
                  { date: 'May 18, 2026', activity: 'Watched 3 videos', points: 30, time: '2:30 PM' },
                  { date: 'May 18, 2026', activity: 'Completed daily streak', points: 20, time: '9:00 AM' },
                  { date: 'May 17, 2026', activity: 'Shared athlete profile', points: 15, time: '6:45 PM' },
                  { date: 'May 17, 2026', activity: 'Liked 5 posts', points: 25, time: '3:20 PM' },
                  { date: 'May 17, 2026', activity: 'Completed challenge', points: 50, time: '11:00 AM' },
                  { date: 'May 16, 2026', activity: 'Watched live event', points: 40, time: '8:00 PM' },
                  { date: 'May 16, 2026', activity: 'Commented on post', points: 8, time: '4:15 PM' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[rgba(201,17,95,0.05)] to-[rgba(205,98,14,0.05)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)]"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-white text-[14px] font-semibold mb-1">{item.activity}</p>
                        <p className="text-[#99A1AF] text-[11px]">{item.date} • {item.time}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-gradient-to-r from-[#c9115f] to-[#cd620e] px-2.5 py-1.5 rounded-full">
                        <Star className="w-[12px] h-[12px] text-[#FFD700] fill-[#FFD700]" />
                        <span className="text-white text-[12px] font-bold">+{item.points}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activity Feed Tab */}
          {activeTab === 'Activity Feed' && (
            <div className="px-4 mb-6">
              <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">Activity Feed</h2>
              <div className="space-y-3">
                {[
                  { user: 'You', action: 'earned a new badge', badge: 'Super Fan', time: '5 mins ago', type: 'badge' },
                  { user: 'You', action: 'reached Level 12', level: 12, time: '1 hour ago', type: 'level' },
                  { user: 'You', action: 'completed a challenge', challenge: 'Watch 10 videos', time: '3 hours ago', type: 'challenge' },
                  { user: 'You', action: 'climbed to Rank #247', rank: 247, time: '1 day ago', type: 'rank' },
                  { user: 'You', action: 'joined Fan Zone', time: '3 days ago', type: 'join' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[rgba(201,17,95,0.05)] to-[rgba(205,98,14,0.05)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center shadow-[0_0_15px_rgba(201,17,95,0.3)]">
                        {item.type === 'badge' && <Trophy className="w-[20px] h-[20px] text-white" />}
                        {item.type === 'level' && <Star className="w-[20px] h-[20px] text-white fill-white" />}
                        {item.type === 'challenge' && <Gift className="w-[20px] h-[20px] text-white" />}
                        {item.type === 'rank' && <TrendingUp className="w-[20px] h-[20px] text-white" />}
                        {item.type === 'join' && <Users className="w-[20px] h-[20px] text-white" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-[14px]">
                          <span className="font-bold">{item.user}</span> {item.action}
                          {item.badge && <span className="text-[#FFD700] font-semibold"> "{item.badge}"</span>}
                        </p>
                        <p className="text-[#99A1AF] text-[11px] mt-1">{item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Activities Tab */}
          {activeTab === 'All Activities' && (
            <div className="px-4 mb-6">
              <h2 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] mb-4">All Activities</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Watch Videos', icon: Play, points: 10, description: 'Per video' },
                  { name: 'Like Posts', icon: Heart, points: 5, description: 'Per like' },
                  { name: 'Share Content', icon: Share2, points: 15, description: 'Per share' },
                  { name: 'Comment', icon: MessageCircle, points: 8, description: 'Per comment' },
                  { name: 'Daily Login', icon: Flame, points: 20, description: 'Once per day' },
                  { name: 'Complete Challenge', icon: Trophy, points: 50, description: 'Varies' },
                  { name: 'Invite Friend', icon: Users, points: 100, description: 'Per friend' },
                  { name: 'Watch Live', icon: Play, points: 40, description: 'Per event' },
                ].map((activity, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[rgba(201,17,95,0.1)] to-[rgba(205,98,14,0.1)] rounded-[16px] p-4 border border-[rgba(255,255,255,0.08)]"
                  >
                    <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(201,17,95,0.4)]">
                      <activity.icon className="w-[20px] h-[20px] text-white" />
                    </div>
                    <p className="text-white text-[13px] font-semibold mb-1">{activity.name}</p>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#FFD700] text-[16px] font-bold font-['Inter:Bold',sans-serif]">+{activity.points}</span>
                    </div>
                    <p className="text-[#99A1AF] text-[10px]">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      

        {/* Floating Action Buttons */}
        <div className="fixed bottom-[80px] right-[20px] z-40 flex flex-col gap-3">
          <button className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] shadow-[0_0_20px_rgba(201,17,95,0.6)] flex items-center justify-center">
            <Gift className="w-[22px] h-[22px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
