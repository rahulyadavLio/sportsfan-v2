import { Target, Lock, ChevronRight, TrendingUp, Flame, Trophy } from 'lucide-react';

export default function Predictions() {
  const performanceStats = {
    winRate: 68,
    bestStreak: 12,
    totalBattles: 47,
  };

  const difficultyLevels = [
    {
      id: 1,
      level: 'EASY',
      levelNumber: 1,
      available: true,
      challengesCount: 4,
      totalQuestions: 14,
      timeEstimate: '7 mins',
      pointsRange: '70-140',
      questions: 14,
      maxPoints: 140,
      iconBg: 'from-[#10B981] to-[#059669]',
      cardBg: 'from-[rgba(16,185,129,0.15)] to-[rgba(5,150,105,0.15)]',
      borderColor: 'border-[rgba(16,185,129,0.3)]',
      unlockCondition: null,
    },
    {
      id: 2,
      level: 'MEDIUM',
      levelNumber: 2,
      available: false,
      challengesCount: 3,
      totalQuestions: 21,
      timeEstimate: '10 mins',
      pointsRange: '140-280',
      questions: 21,
      maxPoints: 280,
      iconBg: 'from-[#F59E0B] to-[#D97706]',
      cardBg: 'from-[rgba(245,158,11,0.15)] to-[rgba(217,119,6,0.15)]',
      borderColor: 'border-[rgba(245,158,11,0.3)]',
      unlockCondition: 'Complete EASY first',
    },
    {
      id: 3,
      level: 'DIFFICULT',
      levelNumber: 3,
      available: false,
      challengesCount: 3,
      totalQuestions: 28,
      timeEstimate: '14 mins',
      pointsRange: '210-420',
      questions: 28,
      maxPoints: 420,
      iconBg: 'from-[#EF4444] to-[#DC2626]',
      cardBg: 'from-[rgba(239,68,68,0.15)] to-[rgba(220,38,38,0.15)]',
      borderColor: 'border-[rgba(239,68,68,0.3)]',
      unlockCondition: 'Complete MEDIUM first',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] pb-20">
      <div className="max-w-[1200px] mx-auto w-full">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-white text-[28px] font-bold mb-1">Predictions</h1>
        <p className="text-[#8a8a8a] text-[13px]">Test your cricket knowledge</p>
      </div>

      {/* Desktop layout: two columns */}
      <div className="lg:flex lg:gap-6 lg:px-4 lg:pb-6">

        {/* Left column - challenges (full width on mobile) */}
        <div className="lg:flex-1 lg:min-w-0">

      {/* Performance Stats - mobile only */}
      <div className="px-4 mb-6 lg:hidden">
        <div className="bg-[#15151C] rounded-[20px] p-5 border border-[rgba(255,255,255,0.08)]">
          <h2 className="text-white text-[17px] font-bold mb-4">Your Recent Performance</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#8a8a8a] text-[13px]">Win Rate</span>
              <span className="text-white text-[15px] font-bold">{performanceStats.winRate}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8a8a8a] text-[13px]">Best Streak</span>
              <span className="text-white text-[15px] font-bold">{performanceStats.bestStreak} wins</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8a8a8a] text-[13px]">Total Battles</span>
              <span className="text-white text-[15px] font-bold">{performanceStats.totalBattles}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Level Selector */}
      <div className="px-4 mb-6 lg:px-0">
        <h3 className="text-white text-[15px] font-bold mb-4">Choose Your Challenge</h3>

        <div className="flex items-center justify-center gap-3 mb-6">
          {difficultyLevels.map((level) => (
            <div key={level.id} className="flex flex-col items-center">
              <div
                className={`w-[48px] h-[48px] rounded-full flex items-center justify-center border-2 ${
                  level.available
                    ? `bg-gradient-to-br ${level.iconBg} ${level.borderColor}`
                    : 'bg-[#1a1a20] border-[rgba(255,255,255,0.1)]'
                }`}
              >
                <span className={`text-[16px] font-bold ${level.available ? 'text-white' : 'text-[#4a4a4a]'}`}>
                  {level.levelNumber}
                </span>
              </div>
              <span className={`text-[9px] font-bold mt-1 uppercase ${
                level.available ? level.level === 'EASY' ? 'text-[#10B981]' : level.level === 'MEDIUM' ? 'text-[#F59E0B]' : 'text-[#EF4444]' : 'text-[#4a4a4a]'
              }`}>
                {level.level}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge Cards */}
        <div className="space-y-4">
          {difficultyLevels.map((level) => (
            <div
              key={level.id}
              className={`bg-[#15151C] rounded-[20px] p-5 border ${
                level.available ? level.borderColor : 'border-[rgba(255,255,255,0.08)]'
              } ${!level.available ? 'opacity-60' : ''}`}
            >
              {level.available ? (
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br ${level.iconBg} flex items-center justify-center shrink-0`}>
                      <Target className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold tracking-wider uppercase ${
                          level.level === 'EASY' ? 'text-[#10B981]' : level.level === 'MEDIUM' ? 'text-[#F59E0B]' : 'text-[#EF4444]'
                        }`}>
                          {level.level}
                        </span>
                      </div>
                      <h4 className="text-white text-[17px] font-bold mb-1">
                        {level.challengesCount} Challenges Available
                      </h4>
                      <p className="text-[#8a8a8a] text-[11px]">
                        {level.totalQuestions} total questions • {level.timeEstimate}
                      </p>
                    </div>

                    <ChevronRight className="w-[20px] h-[20px] text-[#8a8a8a]" />
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-[rgba(255,255,255,0.08)]">
                    <div className="flex items-center gap-2 text-[11px]">
                      <TrendingUp className="w-[14px] h-[14px] text-[#8a8a8a]" />
                      <span className="text-[#8a8a8a]">POINTS</span>
                      <span className="text-white font-bold">{level.pointsRange}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px]">
                      <Trophy className="w-[14px] h-[14px] text-[#8a8a8a]" />
                      <span className="text-[#8a8a8a]">QUESTIONS</span>
                      <span className="text-white font-bold">{level.questions}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px]">
                      <Target className="w-[14px] h-[14px] text-[#8a8a8a]" />
                      <span className="text-[#8a8a8a]">MAX PTS</span>
                      <span className="text-white font-bold">{level.maxPoints}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[rgba(255,255,255,0.05)] flex items-center justify-center shrink-0">
                    <Lock className="w-[28px] h-[28px] text-[#4a4a4a]" strokeWidth={2} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold tracking-wider text-[#4a4a4a] uppercase">
                        {level.level}
                      </span>
                    </div>
                    <h4 className="text-white text-[17px] font-bold mb-1">
                      {level.challengesCount} Challenges Available
                    </h4>
                    <p className="text-[#8a8a8a] text-[11px]">
                      {level.unlockCondition}
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <Lock className="w-[20px] h-[20px] text-[#4a4a4a]" />
                  </div>
                </div>
              )}

              {!level.available && (
                <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.08)] text-center">
                  <span className="text-[#4a4a4a] text-[10px] uppercase tracking-wider">locked</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Daily Challenge */}
      <div className="px-4 lg:px-0 mb-6">
        <div className="bg-gradient-to-br from-[rgba(201,17,95,0.2)] to-[rgba(205,98,14,0.2)] rounded-[20px] p-5 border border-[rgba(201,17,95,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c9115f]/20 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] rounded-[14px] bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center shadow-[0_0_20px_rgba(201,17,95,0.5)]">
                  <Flame className="w-[24px] h-[24px] text-white" strokeWidth={2.5} />
                </div>

                <div>
                  <h3 className="text-white text-[17px] font-bold">Daily Challenge</h3>
                  <p className="text-[#c9a18a] text-[11px]">Complete to earn 2x bonus pts</p>
                </div>
              </div>

              <div className="bg-[#c9115f] rounded-full px-2 py-1">
                <span className="text-white text-[9px] font-bold">+500</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white text-[13px] font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(201,17,95,0.5)] hover:shadow-[0_0_30px_rgba(201,17,95,0.6)] transition-all active:scale-[0.98]">
              Start
              <ChevronRight className="w-[16px] h-[16px]" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

        </div>{/* end left column */}

        {/* Right Sidebar - desktop only */}
        <div className="hidden lg:block lg:w-[320px] lg:shrink-0 space-y-6">

          {/* Performance Stats */}
          <div className="bg-[#15151C] rounded-[20px] p-5 border border-[rgba(255,255,255,0.08)]">
            <h2 className="text-white text-[17px] font-bold mb-4">Your Recent Performance</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#8a8a8a] text-[13px]">Win Rate</span>
                <div className="flex items-center gap-2">
                  <div className="w-[80px] bg-[rgba(0,0,0,0.3)] rounded-full h-[6px] overflow-hidden">
                    <div className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] h-full rounded-full" style={{ width: `${performanceStats.winRate}%` }} />
                  </div>
                  <span className="text-white text-[15px] font-bold">{performanceStats.winRate}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-[14px] h-[14px] text-[#ff6b35]" />
                  <span className="text-[#8a8a8a] text-[13px]">Best Streak</span>
                </div>
                <span className="text-white text-[15px] font-bold">{performanceStats.bestStreak} wins</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-[14px] h-[14px] text-[#FFD700]" />
                  <span className="text-[#8a8a8a] text-[13px]">Total Battles</span>
                </div>
                <span className="text-white text-[15px] font-bold">{performanceStats.totalBattles}</span>
              </div>
            </div>
          </div>

          {/* Leaderboard Teaser */}
          <div className="bg-[#15151C] rounded-[20px] p-5 border border-[rgba(255,255,255,0.08)]">
            <h2 className="text-white text-[17px] font-bold mb-4">Top Predictors</h2>
            <div className="space-y-3">
              {[
                { rank: 1, name: 'SportsFan99', score: 4820, badge: '🥇' },
                { rank: 2, name: 'CricketKing', score: 4210, badge: '🥈' },
                { rank: 3, name: 'You', score: 3150, badge: '🥉', isYou: true },
              ].map((entry) => (
                <div key={entry.rank} className={`flex items-center gap-3 p-3 rounded-[12px] ${entry.isYou ? 'bg-[rgba(201,17,95,0.1)] border border-[rgba(201,17,95,0.2)]' : 'bg-[rgba(255,255,255,0.03)]'}`}>
                  <span className="text-[20px]">{entry.badge}</span>
                  <div className="flex-1">
                    <p className={`text-[13px] font-bold ${entry.isYou ? 'text-[#c9115f]' : 'text-white'}`}>{entry.name}</p>
                  </div>
                  <span className="text-[#FFD700] text-[13px] font-bold">{entry.score.toLocaleString()} pts</span>
                </div>
              ))}
            </div>
          </div>

        </div>{/* end right sidebar */}
      </div>{/* end desktop layout */}
      </div>{/* end max-w container */}
    </div>
  );
}
