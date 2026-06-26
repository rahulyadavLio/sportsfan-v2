import { Headphones, Play, FileText, Lock, Calendar } from 'lucide-react';
import type { PlaybookWeek } from '@/types/playbook';

interface Props {
  playbook: PlaybookWeek[];
  onNavigate: (path: string) => void;
}

const typeConfig = {
  Audio: {
    icon: Headphones,
    color: '#c9115f',
    bg: 'rgba(201,17,95,0.12)',
  },
  Video: {
    icon: Play,
    color: '#ff5900',
    bg: 'rgba(255,89,0,0.12)',
  },
  Article: {
    icon: FileText,
    color: '#4ade80',
    bg: 'rgba(74,222,128,0.12)',
  },
};

export default function AgendaView({
  playbook,
  onNavigate,
}: Props) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const drops = playbook
    .flatMap((week) =>
      week.drops.map((drop) => ({
        ...drop,
        week: week.week,
        theme: week.theme,
      })),
    )
    .filter((drop) => {
      const date = new Date(drop.date);
      date.setHours(0, 0, 0, 0);
      return date >= today;
    })
    .sort(
      (a, b) =>
        new Date(a.date).getTime() -
        new Date(b.date).getTime(),
    );

  return (
    <div className="px-4 py-4 space-y-4">
      {drops.map((drop) => {
        const cfg = typeConfig[drop.type];
        const Icon = cfg.icon;

        const dropDate = new Date(drop.date);
        dropDate.setHours(0, 0, 0, 0);

        const unlocked = dropDate.getTime() <= today.getTime();

        return (
          <button
            key={drop.id}
            disabled={!unlocked}
            onClick={() => unlocked && onNavigate(drop.path)}
            className={`w-full rounded-2xl p-4 text-left transition ${unlocked
                ? 'hover:brightness-110 active:scale-[0.98]'
                : 'opacity-50 cursor-not-allowed'
              }`}
            style={{
              background:
                'linear-gradient(135deg,#1a1a26 0%,#15151e 100%)',
              border: '1px solid rgba(255,255,255,.08)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: cfg.bg }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: cfg.color }}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-white text-[14px] font-semibold">
                  {drop.title}
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="text-[10px] px-2 py-1 rounded-full"
                    style={{
                      color: cfg.color,
                      background: cfg.bg,
                    }}
                  >
                    {drop.type}
                  </span>

                  <span className="text-[#99a1af] text-[11px]">
                    {drop.meta}
                  </span>
                </div>

                <div className="flex items-center gap-1 mt-2 text-[#99a1af] text-[11px]">
                  <Calendar className="w-3 h-3" />
                  {drop.date}
                </div>
              </div>

              {unlocked ? (
                <span className="text-[#22c55e] text-[11px] font-medium">
                  Open
                </span>
              ) : (
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  <Lock className="w-4 h-4" />
                  <span className="text-[11px]">
                    Scheduled
                  </span>
                </div>
              )}
            </div>
          </button>
        );
      })}

      {drops.length === 0 && (
        <div className="text-center py-16 text-[#99a1af]">
          No upcoming drops.
        </div>
      )}
    </div>
  );
}