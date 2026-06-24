import { motion } from 'motion/react';
import { Info, TrendingDown, Award } from 'lucide-react';
import { Category } from '../RecordsExplorer';
import { getRecordData } from '../utils/recordData';

interface InsightSectionProps {
  event: string;
  category: Category;
}

export default function InsightSection({ event, category }: InsightSectionProps) {
  const records = getRecordData(event, category);

  const national = records.find(r => r.type === 'National');
  const world = records.find(r => r.type === 'World');

  if (!national || !world) return null;

  const diff = Math.abs(national.numericValue - world.numericValue);
  const percentage = ((diff / world.numericValue) * 100).toFixed(1);

  const isTimeEvent = event.includes('m') && !event.includes('Jump') && !event.includes('Throw') && !event.includes('Put');
  const unit = isTimeEvent ? 's' : 'm';
  const formattedDiff = `${diff.toFixed(2)}${unit}`;

  return (
    <motion.section
      key={`${event}-${category}-insight`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
      aria-labelledby="insights-heading"
    >
      <h2 id="insights-heading" className="sr-only">Performance Insights</h2>

      {/* Main Insight */}
      <div className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-6"
        style={{ background: 'linear-gradient(137.15deg, rgba(201, 17, 95, 0.2) 0%, rgba(201, 17, 95, 0.05) 100%)' }}
        role="article"
        aria-labelledby="performance-gap-heading"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(137.15deg, rgba(201, 17, 95, 0.3) 0%, rgba(201, 17, 95, 0.1) 100%)' }}
            aria-hidden="true"
          >
            <Info className="w-6 h-6 text-[#C9115F]" />
          </div>
          <div>
            <h3 id="performance-gap-heading" className="font-bold text-white mb-2 text-base tracking-[-0.015em]">Performance Gap</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              India is <strong className="text-[#C9115F] font-bold text-base">{formattedDiff}</strong> <span className="text-white/70">({percentage}%)</span> behind the world record.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-2 gap-4" role="list" aria-label="Additional statistics">
        <div className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-5" role="listitem">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="w-5 h-5 text-[#C9115F]" aria-hidden="true" />
            <span className="text-xs text-[#99a1af] font-semibold uppercase tracking-wide">Gap Reduction</span>
          </div>
          <p className="text-2xl font-bold text-white tracking-[-0.02em]" aria-label="25 percent">25%</p>
          <p className="text-xs text-[#99a1af] mt-2">Since 2015</p>
        </div>

        <div className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-5" role="listitem">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-[#C9115F]" aria-hidden="true" />
            <span className="text-xs text-[#99a1af] font-semibold uppercase tracking-wide">Global Rank</span>
          </div>
          <p className="text-2xl font-bold text-white tracking-[-0.02em]" aria-label="Number 25">#25</p>
          <p className="text-xs text-[#99a1af] mt-2">In {event}</p>
        </div>
      </div>
    </motion.section>
  );
}