import { Gamepad2, Zap, Trophy, Rocket, ArrowRight } from 'lucide-react';

export default function FantasyGames() {
  const games = [
    {
      id: 1,
      icon: Gamepad2,
      iconColor: 'text-[#ff006c]',
      category: 'CLASSIC CLASSROOM',
      categoryColor: 'text-[#ff006c]',
      title: 'Book Cricket',
      description: 'Relive the nostalgia. Flip pages to score runs and take wickets in this legendary classroom game.',
      badge: 'HOT',
      available: true,
    },
    {
      id: 2,
      icon: Zap,
      iconColor: 'text-[#5b9fff]',
      category: 'FAST-PACED ACTION',
      categoryColor: 'text-[#5b9fff]',
      title: 'Circle Cricket',
      description: 'Bat, chase, and swing the format. Experience dynamic circle-based cricket with instant feedback.',
      available: true,
    },
    {
      id: 3,
      icon: Trophy,
      iconColor: 'text-[#ffa500]',
      category: 'GESTURE MASTER',
      categoryColor: 'text-[#ffa500]',
      title: 'Hand Cricket',
      description: 'Play the traditional hand-cricket game— choose odd/even, bowl and bat using taps.',
      available: true,
    },
    {
      id: 4,
      icon: Rocket,
      iconColor: 'text-[#a855f7]',
      category: 'NEXT GENERATION',
      categoryColor: 'text-[#a855f7]',
      title: 'Cricket Pro',
      description: "We're working on exciting new cricket fantasy games. Stay tuned for the ultimate experience.",
      available: false,
    },
  ];

  return (
    <div className="px-4 py-6 max-w-[1200px] mx-auto w-full">
      <div className="grid grid-cols-2 gap-3">
      {games.map((game) => {
        const IconComponent = game.icon;
        return (
          <div
            key={game.id}
            className="bg-[#1a1a20] rounded-[16px] p-5 border border-[rgba(255,255,255,0.08)] flex flex-col"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="relative shrink-0">
                <div className="w-[48px] h-[48px] bg-[rgba(255,255,255,0.05)] rounded-[12px] flex items-center justify-center">
                  <IconComponent className={`w-[24px] h-[24px] ${game.iconColor}`} strokeWidth={2} />
                </div>
                {game.badge && (
                  <div className="absolute -top-1 -right-1 bg-[#ff0055] rounded-full px-1.5 py-0.5">
                    <span className="text-white text-[8px] font-bold">{game.badge}</span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className={`text-[8px] font-bold tracking-wider mb-1 ${game.categoryColor} uppercase`}>
                  {game.category}
                </p>
                <h3 className="text-white text-[14px] font-bold leading-tight">
                  {game.title}
                </h3>
              </div>
            </div>

            <p className="text-[#8a8a8a] text-[11px] leading-[1.5] mb-4 flex-1">
              {game.description}
            </p>

            {game.available ? (
              <button className="bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-white text-[11px] font-bold px-4 py-2.5 rounded-full inline-flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(201,17,95,0.4)] w-full hover:shadow-[0_0_30px_rgba(201,17,95,0.6)] transition-shadow">
                PLAY NOW
                <ArrowRight className="w-[12px] h-[12px]" />
              </button>
            ) : (
              <button className="bg-[rgba(255,255,255,0.05)] text-[#8a8a8a] text-[11px] font-bold px-4 py-2.5 rounded-full w-full">
                COMING SOON
              </button>
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
}
