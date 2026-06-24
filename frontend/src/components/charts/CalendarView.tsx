import { useState } from 'react';
import { ChevronLeft, ChevronRight, Headphones, Play, FileText, X } from 'lucide-react';

interface ContentItem {
  type: 'Audio' | 'Video' | 'Article';
  title: string;
  meta: string;
  tag: string;
}

const contentByDate: Record<string, ContentItem[]> = {
  '2026-03-01': [
    { type: 'Audio', title: 'Mental Conditioning: Pre-Season Focus', meta: '24 min', tag: 'Mindset' },
  ],
  '2026-03-03': [
    { type: 'Video', title: 'Sprint Warm-Up Drills — Elite Level', meta: '18 min', tag: 'Training' },
  ],
  '2026-03-05': [
    { type: 'Article', title: 'Nutrition Planning for Competition Season', meta: '5 min read', tag: 'Health' },
    { type: 'Audio', title: 'Coach Talk: Fuel & Recovery', meta: '14 min', tag: 'Coaching' },
  ],
  '2026-03-07': [
    { type: 'Audio', title: 'Recovery Protocols & Sleep Science', meta: '31 min', tag: 'Recovery' },
  ],
  '2026-03-08': [
    { type: 'Video', title: 'Javelin Technique: Release Angle Analysis', meta: '22 min', tag: 'Technique' },
  ],
  '2026-03-10': [
    { type: 'Article', title: 'High Altitude Training: Avinash Sable Protocol', meta: '7 min read', tag: 'Training' },
  ],
  '2026-03-12': [
    { type: 'Audio', title: 'Coach Conversations: Week 2 Debrief', meta: '19 min', tag: 'Coaching' },
  ],
  '2026-03-15': [
    { type: 'Article', title: 'CWG 2026 Schedule & Event Breakdown', meta: '6 min read', tag: 'Events' },
    { type: 'Video', title: 'Glasgow Arena Preview', meta: '12 min', tag: 'Events' },
  ],
  '2026-03-17': [
    { type: 'Video', title: 'Mock Race Analysis — Steeplechase', meta: '15 min', tag: 'Analysis' },
  ],
  '2026-03-19': [
    { type: 'Audio', title: "Athlete Interviews: Road to Glasgow", meta: '28 min', tag: 'Stories' },
  ],
  '2026-03-21': [
    { type: 'Article', title: 'Opposition Scouting Report', meta: '8 min read', tag: 'Tactics' },
  ],
  '2026-03-22': [
    { type: 'Video', title: 'Final Sprint: Full Training Session', meta: '35 min', tag: 'Training' },
  ],
  '2026-03-24': [
    { type: 'Audio', title: 'Visualisation & Game Day Rituals', meta: '22 min', tag: 'Mindset' },
  ],
  '2026-03-26': [
    { type: 'Article', title: 'Peak Week Tapering: Science Behind It', meta: '5 min read', tag: 'Health' },
  ],
  '2026-03-28': [
    { type: 'Video', title: 'Historic Moments: India at Commonwealth Games', meta: '41 min', tag: 'Legacy' },
  ],
};

const typeConfig = {
  Audio: { icon: Headphones, color: '#c9115f', bg: 'rgba(201,17,95,0.12)', path: '/audio' },
  Video: { icon: Play, color: '#ff5900', bg: 'rgba(255,89,0,0.12)', path: '/video' },
  Article: { icon: FileText, color: '#4ade80', bg: 'rgba(74,222,128,0.12)', path: '/article' },
};

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function dateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

interface Props {
  onNavigate: (path: string) => void;
}

export default function CalendarView({ onNavigate }: Props) {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(2); // 0-indexed, March = 2
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDate(null);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDate(null);
  };

  const selectedContent = selectedDate ? contentByDate[selectedDate] || [] : [];
  const selectedDay = selectedDate ? parseInt(selectedDate.split('-')[2]) : null;

  return (
    <div className="w-full px-4 py-4">
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <h3 className="text-white font-bold text-[16px] font-['Inter:Bold',sans-serif]">
          {MONTHS[month]} {year}
        </h3>
        <button onClick={nextMonth} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center text-[#99a1af] text-[11px] font-semibold py-1">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {Array.from({ length: totalCells }).map((_, i) => {
          const dayNum = i - firstDay + 1;
          const isValid = dayNum >= 1 && dayNum <= daysInMonth;
          const key = isValid ? dateKey(year, month, dayNum) : null;
          const hasContent = key ? !!contentByDate[key] : false;
          const isSelected = key === selectedDate;
          const count = key && contentByDate[key] ? contentByDate[key].length : 0;

          return (
            <div key={i} className="flex flex-col items-center py-1">
              {isValid ? (
                <button
                  onClick={() => setSelectedDate(isSelected ? null : key!)}
                  className="w-[38px] h-[38px] rounded-full flex flex-col items-center justify-center relative transition-all active:scale-95"
                  style={{
                    background: isSelected
                      ? 'linear-gradient(135deg, #ff5900, #c9115f)'
                      : hasContent
                      ? 'rgba(255,89,0,0.12)'
                      : 'transparent',
                    border: isSelected ? 'none' : hasContent ? '1px solid rgba(255,89,0,0.3)' : '1px solid transparent',
                  }}
                >
                  <span
                    className="text-[13px] font-medium leading-none"
                    style={{ color: isSelected ? 'white' : hasContent ? '#ff5900' : '#d1d5dc' }}
                  >
                    {dayNum}
                  </span>
                  {hasContent && !isSelected && (
                    <div className="flex gap-[2px] mt-[2px]">
                      {Array.from({ length: Math.min(count, 3) }).map((_, di) => (
                        <div key={di} className="w-[4px] h-[4px] rounded-full" style={{ background: '#ff5900' }} />
                      ))}
                    </div>
                  )}
                </button>
              ) : (
                <div className="w-[38px] h-[38px]" />
              )}
            </div>
          );
        })}
      </div>

      {/* Selected date content panel */}
      {selectedDate && (
        <div className="mt-5 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a26 0%, #15151e 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Panel header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-[rgba(255,255,255,0.06)]">
            <div>
              <p className="text-white font-semibold text-[14px] font-['Inter:Semi_Bold',sans-serif]">
                {MONTHS[month]} {selectedDay}, {year}
              </p>
              <p className="text-[#99a1af] text-[12px] mt-[1px]">
                {selectedContent.length === 0 ? 'No drops scheduled' : `${selectedContent.length} drop${selectedContent.length > 1 ? 's' : ''} available`}
              </p>
            </div>
            <button
              onClick={() => setSelectedDate(null)}
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <X className="w-3 h-3 text-[#99a1af]" />
            </button>
          </div>

          {/* Content items */}
          {selectedContent.length > 0 ? (
            <div className="p-4 space-y-3">
              {selectedContent.map((item, idx) => {
                const cfg = typeConfig[item.type];
                const Icon = cfg.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigate(cfg.path)}
                    className="w-full flex items-center gap-3 rounded-xl p-3 text-left active:opacity-70 transition-opacity"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="w-[42px] h-[42px] rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: cfg.bg }}
                    >
                      <Icon className="w-[18px] h-[18px]" style={{ color: cfg.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[13px] font-semibold font-['Inter:Semi_Bold',sans-serif] leading-tight">{item.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] px-[6px] py-[2px] rounded-full font-medium" style={{ color: cfg.color, background: cfg.bg }}>
                          {item.type}
                        </span>
                        <span className="text-[#99a1af] text-[11px]">{item.meta}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-6 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <FileText className="w-5 h-5 text-[#99a1af]" />
              </div>
              <p className="text-[#99a1af] text-[13px] text-center">No content scheduled for this date.</p>
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex items-center gap-4 justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-[6px] h-[6px] rounded-full" style={{ background: '#ff5900' }} />
          <span className="text-[#99a1af] text-[11px]">Has content</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[6px] h-[6px] rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
          <span className="text-[#99a1af] text-[11px]">No content</span>
        </div>
      </div>
    </div>
  );
}
