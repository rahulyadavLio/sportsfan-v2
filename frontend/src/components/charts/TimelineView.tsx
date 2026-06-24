import { useState } from 'react';
import { ChevronDown, ChevronUp, Headphones, Play, FileText, Zap } from 'lucide-react';

interface Drop {
  id: string;
  type: 'Audio' | 'Video' | 'Article';
  title: string;
  meta?: string;
  date?: string;
  tag?: string;
  path: string;
}

interface Week {
  week: number;
  label: string;
  dateRange: string;
  theme: string;
  drops: Drop[];
}

const weeks: Week[] = [
  {
    week: 1,
    label: 'Week 1',
    dateRange: 'Mar 1 – Mar 7',
    theme: 'Foundation',
    drops: [
      { id: 'w1-1', type: 'Audio', title: "Tejaswin shankar on qualifing for CWG 2026", date: '2 day ago', path: '/audio/1' },
      { id: 'w1-2', type: 'Video', title: 'Praveen Chithravel on CWG 2026', meta: '1 day ago', date: 'Mar 3', path: '/video/5' },
      { id: 'w1-3', type: 'Article', title: 'Team India Squad Announced', meta: '5 min read', date: '18 min ago', path: '/articles/1' },
    ],
  },
  {
    week: 2,
    label: 'Week 2',
    dateRange: 'Mar 8 – Mar 14',
    theme: 'Qualification',
    drops: [
      { id: 'w2-1', type: 'Article', title: '2 Indian Javelin Stars Qualify for CWG', meta: '4 min read', date: 'Mar 8' },
      { id: 'w2-2', type: 'Video', title: 'Top 5 Athletics Events to Watch at CWG 2026', meta: '6 min', date: 'Mar 10' },
      { id: 'w2-3', type: 'Audio', title: 'Road to Glasgow: Athlete Expectations', meta: '9 min', date: 'Mar 12' },
    ],
  },
  {
    week: 3,
    label: 'Week 3',
    dateRange: 'Mar 15 – Mar 21',
    theme: 'Countdown',
    drops: [
      { id: 'w3-1', type: 'Article', title: 'Everything You Need to Know About CWG Athletics', meta: '7 min read', date: 'Mar 15' },
      { id: 'w3-2', type: 'Video', title: "Meet Team India's Biggest Medal Hopes", meta: '8 min', date: 'Mar 17' },
      { id: 'w3-3', type: 'Audio', title: 'Inside Team India Before Glasgow', meta: '10 min', date: 'Mar 19' },
      { id: 'w3-4', type: 'Article', title: 'Glasgow Venues & Competition Schedule', meta: '5 min read', date: 'Mar 21' },
    ],
  },
  {
    week: 4,
    label: 'Week 4',
    dateRange: 'Mar 22 – Mar 28',
    theme: 'Game Time',
    drops: [
      { id: 'w4-1', type: 'Video', title: 'CWG 2026 Opening Ceremony Highlights', meta: '11 min', date: 'Mar 22' },
      { id: 'w4-2', type: 'Article', title: 'Day 1 Athletics: Results & Biggest Moments', meta: '5 min read', date: 'Mar 24' },
      { id: 'w4-3', type: 'Audio', title: 'Athletes React After Their Performances', meta: '12 min', date: 'Mar 26' },
      { id: 'w4-4', type: 'Video', title: 'Best Moments from CWG 2026 Athletics', meta: '9 min', date: 'Mar 28' },
    ],
  },
];

const weekTypeConfig: Record<number, Record<'Audio' | 'Video' | 'Article', {
  icon: typeof Headphones | typeof Play | typeof FileText;
  color: string;
  bg: string;
}>> = {
  1: {
    Audio: { icon: Headphones, color: '#c9115f', bg: 'rgba(201,17,95,0.12)' },
    Video: { icon: Play, color: '#ff5900', bg: 'rgba(255,89,0,0.12)' },
    Article: { icon: FileText, color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
  },
  2: {
    Audio: { icon: Headphones, color: '#a855f7', bg: 'rgba(168,85,247,0.12)' },
    Video: { icon: Play, color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
    Article: { icon: FileText, color: '#38bdf8', bg: 'rgba(56,189,248,0.12)' },
  },
  3: {
    Audio: { icon: Headphones, color: '#fb923c', bg: 'rgba(251,146,60,0.12)' },
    Video: { icon: Play, color: '#34d399', bg: 'rgba(52,211,153,0.12)' },
    Article: { icon: FileText, color: '#e879f9', bg: 'rgba(232,121,249,0.12)' },
  },
  4: {
    Audio: { icon: Headphones, color: '#f43f5e', bg: 'rgba(244,63,94,0.12)' },
    Video: { icon: Play, color: '#06b6d4', bg: 'rgba(6,182,212,0.12)' },
    Article: { icon: FileText, color: '#84cc16', bg: 'rgba(132,204,22,0.12)' },
  },
};

interface Props {
  onNavigate: (path: string) => void;
}

export default function TimelineView({ onNavigate }: Props) {
  const [openWeeks, setOpenWeeks] = useState<Set<number>>(new Set([1]));

  const toggleWeek = (week: number) => {
    setOpenWeeks((prev) => {
      const next = new Set(prev);
      if (next.has(week)) next.delete(week);
      else next.add(week);
      return next;
    });
  };

  return (
    <div className="w-full px-4 py-4 space-y-4">
      {weeks.map((w) => {
        const isOpen = openWeeks.has(w.week);
        const typeConfig = weekTypeConfig[w.week];
        return (
          <div key={w.week} className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)]" style={{ background: 'linear-gradient(135deg, #1a1a26 0%, #15151e 100%)' }}>
            <button
              className="w-full flex items-center justify-between px-4 py-4 text-left active:opacity-80 transition-opacity"
              onClick={() => toggleWeek(w.week)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0"
                  style={{ background: isOpen ? 'linear-gradient(135deg, #ff5900, #c9115f)' : 'rgba(255,255,255,0.08)' }}
                >
                  <span className="text-white font-bold text-[13px]">{w.week}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-[15px] font-['Inter:Semi_Bold',sans-serif]">{w.label}</span>
                    <span
                      className="text-[10px] font-semibold px-2 py-[2px] rounded-full"
                      style={{ color: '#ff5900', background: 'rgba(255,89,0,0.15)' }}
                    >
                      {w.theme}
                    </span>
                  </div>
                  <span className="text-[#99a1af] text-[12px] font-['Inter:Regular',sans-serif]">{w.dateRange}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#99a1af] text-[11px]">{w.drops.length} drops</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#99a1af]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#99a1af]" />
                )}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 space-y-3 border-t border-[rgba(255,255,255,0.06)]" style={{ paddingTop: '12px' }}>
                {w.drops.map((drop) => {
                  const cfg = typeConfig[drop.type];
                  const Icon = cfg.icon;
                  return (
                    <button
                      key={drop.id}
                      onClick={() => {
                        if (drop.path) {
                          onNavigate(drop.path);
                        }
                      }}
                      className="w-full flex items-center gap-3 rounded-xl p-3 text-left active:opacity-70 transition-opacity hover:brightness-110"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div
                        className="w-[42px] h-[42px] rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: cfg.bg }}
                      >
                        <Icon className="w-[18px] h-[18px]" style={{ color: cfg.color }} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-white text-[13px] font-semibold font-['Inter:Semi_Bold',sans-serif] leading-tight truncate">{drop.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] px-[6px] py-[2px] rounded-full font-medium" style={{ color: cfg.color, background: cfg.bg }}>
                            {drop.type}
                          </span>
                          <span className="text-[#99a1af] text-[11px]">{drop.meta}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-[#99a1af] text-[11px]">{drop.date}</span>
                        <Zap className="w-3 h-3 text-[#ff5900] mt-1" />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
