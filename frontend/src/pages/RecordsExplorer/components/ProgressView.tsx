import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Target, Calendar } from 'lucide-react';
import { Category } from '../RecordsExplorer';

interface ProgressViewProps {
  event: string;
  category: Category;
}

export default function ProgressView({ event, category }: ProgressViewProps) {
  // Mock progress data showing gap reduction over time
  const data = [
    { year: '2015', gap: 0.87, color: '#CD620E' },
    { year: '2016', gap: 0.68, color: '#C9115F' },
    { year: '2017', gap: 0.72, color: '#CD620E' },
    { year: '2018', gap: 0.70, color: '#C9115F' },
    { year: '2019', gap: 0.67, color: '#C9115F' },
    { year: '2020', gap: 0.68, color: '#C0C0C0' },
    { year: '2021', gap: 0.66, color: '#C9115F' },
    { year: '2022', gap: 0.64, color: '#C9115F' },
    { year: '2023', gap: 0.61, color: '#C9115F' },
    { year: '2024', gap: 0.58, color: '#C9115F' },
    { year: '2025', gap: 0.55, color: '#C9115F' },
    { year: '2026', gap: 0.51, color: '#C9115F' },
  ];

  const improvementRate = (((data[0].gap - data[data.length - 1].gap) / data[0].gap) * 100).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
      id="progress-panel"
      role="tabpanel"
      aria-labelledby="progress-tab"
    >
      <section className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-6" aria-labelledby="progress-chart-heading">
        <h2 id="progress-chart-heading" className="font-bold text-white mb-3 text-lg tracking-[-0.015em]">Gap to World Record</h2>
        <p className="text-sm text-[#99a1af] mb-5">
          Showing how India's national record is closing the gap
        </p>

        <div className="w-full h-64" role="img" aria-label="Bar chart showing the gap to world record from 2015 to 2022, demonstrating progress over time">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} accessibilityLayer>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
              <XAxis
                dataKey="year"
                stroke="#99a1af"
                style={{ fontSize: '12px' }}
                label={{ value: 'Year', position: 'insideBottom', offset: -5, fill: '#99a1af', fontSize: '12px' }}
              />
              <YAxis
                stroke="#99a1af"
                style={{ fontSize: '12px' }}
                label={{ value: 'Gap (seconds)', angle: -90, position: 'insideLeft', fill: '#99a1af', fontSize: '12px' }}
              />
              <Tooltip
                labelStyle={{
                  color: '#ffffff',
                }}
                itemStyle={{
                  color: '#ffffff',
                }}
                contentStyle={{
                  backgroundColor: '#15151c',
                  border: '2px solid #1a1a1a',
                  borderRadius: '12px',
                  color: '#fff',

                  fontSize: '13px',
                }}
                formatter={(value: number) => [`${value}s`, 'Gap to World Record']}
              />
              <Bar dataKey="gap" radius={[8, 8, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="sr-only">
          The bar chart shows India's gap to the world record decreased from 0.87 seconds in 2015 to 0.51 seconds in 2026, a 25% reduction over 11 years.
        </p>
      </section>

      {/* Progress Metrics */}
      <section className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-6"
        style={{ background: 'linear-gradient(137.15deg, rgba(201, 17, 95, 0.2) 0%, rgba(201, 17, 95, 0.05) 100%)' }}
        aria-labelledby="progress-insight-heading"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(137.15deg, rgba(201, 17, 95, 0.3) 0%, rgba(201, 17, 95, 0.1) 100%)' }}
            aria-hidden="true"
          >
            <Target className="w-6 h-6 text-[#C9115F]" />
          </div>
          <div className="flex-1">
            <h3 id="progress-insight-heading" className="font-bold text-white mb-2 text-base tracking-[-0.015em]">Progress Insight</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Gap reduced by <strong className="text-[#C9115F] font-bold text-base">{improvementRate}%</strong> since 2015.
              India is making steady progress in {event}.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-6" aria-labelledby="milestones-heading">
        <h3 id="milestones-heading" className="font-bold text-white mb-4 flex items-center gap-2 text-base tracking-[-0.015em]">
          <Calendar className="w-5 h-5 text-[#C9115F]" aria-hidden="true" />
          Key Milestones
        </h3>
        <div className="space-y-4" role="list">
          <div className="flex items-start gap-3" role="listitem">
            <div className="w-3 h-3 rounded-full bg-[#C9115F] mt-1.5 flex-shrink-0" aria-hidden="true"></div>
            <div className="flex-1">
              <p className="text-sm text-white/90 font-semibold">2026 - National Record Broken</p>
              <p className="text-xs text-[#99a1af] mt-1.5 leading-relaxed">Gurindervir Singh runs 10.09s at Federation Cup, Ranchi — new all-time national best</p>
            </div>
          </div>
          <div className="flex items-start gap-3" role="listitem">
            <div className="w-3 h-3 rounded-full bg-[#C0C0C0] mt-1.5 flex-shrink-0" aria-hidden="true"></div>
            <div className="flex-1">
              <p className="text-sm text-white/90 font-semibold">2016 - Previous Benchmark</p>
              <p className="text-xs text-[#99a1af] mt-1.5 leading-relaxed">Amiya Mallick's 10.26s stood as the national record for a decade</p>
            </div>
          </div>
          <div className="flex items-start gap-3" role="listitem">
            <div className="w-3 h-3 rounded-full bg-[#CD620E] mt-1.5 flex-shrink-0" aria-hidden="true"></div>
            <div className="flex-1">
              <p className="text-sm text-white/90 font-semibold">25% Gap Reduction Since 2015</p>
              <p className="text-xs text-[#99a1af] mt-1.5 leading-relaxed">Gap down from 0.87s to 0.51s — India ranked #25 globally in the 100m</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}