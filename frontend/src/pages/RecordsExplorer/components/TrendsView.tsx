import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Category } from '../RecordsExplorer';

interface TrendsViewProps {
  event: string;
  category: Category;
}

export default function TrendsView({ event, category }: TrendsViewProps) {
  // Mock trend data
  const data = [
    { year: '2015', national: 10.45, world: 9.58, olympic: 9.63 },
    { year: '2016', national: 10.26, world: 9.58, olympic: 9.63 },
    { year: '2017', national: 10.30, world: 9.58, olympic: 9.63 },
    { year: '2018', national: 10.28, world: 9.58, olympic: 9.63 },
    { year: '2019', national: 10.25, world: 9.58, olympic: 9.63 },
    { year: '2020', national: 10.26, world: 9.58, olympic: 9.63 },
    { year: '2021', national: 10.24, world: 9.58, olympic: 9.63 },
    { year: '2022', national: 10.22, world: 9.58, olympic: 9.63 },
    { year: '2023', national: 10.19, world: 9.58, olympic: 9.63 },
    { year: '2024', national: 10.16, world: 9.58, olympic: 9.63 },
    { year: '2025', national: 10.13, world: 9.58, olympic: 9.63 },
    { year: '2026', national: 10.09, world: 9.58, olympic: 9.63 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
      id="trends-panel"
      role="tabpanel"
      aria-labelledby="trends-tab"
    >
      <section className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-6" aria-labelledby="trends-chart-heading">
        <h2 id="trends-chart-heading" className="font-bold text-white mb-3 text-lg tracking-[-0.015em]">Performance Over Time</h2>
        <p className="text-sm text-[#99a1af] mb-5">
          Tracking {event} records from 2015 to 2026
        </p>

        <div className="w-full h-64" role="img" aria-label={`Line chart showing ${event} performance trends from 2015 to 2022 comparing National, Olympic, and World records`}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} accessibilityLayer>
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
                domain={['dataMin - 0.5', 'dataMax + 0.5']}
                label={{ value: 'Time (seconds)', angle: -90, position: 'insideLeft', fill: '#99a1af', fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#15151c',
                  border: '2px solid #1a1a1a',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '13px',
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: '12px', color: '#fff', paddingTop: '12px' }}
              />
              <Line
                type="monotone"
                dataKey="national"
                stroke="#C9115F"
                strokeWidth={3}
                dot={{ fill: '#C9115F', r: 5, strokeWidth: 2, stroke: '#0B0B0F' }}
                activeDot={{ r: 7 }}
                name="National Record"
              />
              <Line
                type="monotone"
                dataKey="olympic"
                stroke="#C0C0C0"
                strokeWidth={3}
                dot={{ fill: '#C0C0C0', r: 5, strokeWidth: 2, stroke: '#0B0B0F' }}
                activeDot={{ r: 7 }}
                name="Olympic Record"
              />
              <Line
                type="monotone"
                dataKey="world"
                stroke="#CD620E"
                strokeWidth={3}
                dot={{ fill: '#CD620E', r: 5, strokeWidth: 2, stroke: '#0B0B0F' }}
                activeDot={{ r: 7 }}
                name="World Record"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="sr-only">
          The chart shows three trend lines: National record improved from 10.45 to 10.26 seconds between 2015 and 2016, with minor fluctuations thereafter. Olympic and World records remained constant at 9.63 and 9.58 seconds respectively.
        </p>
      </section>

      <div className="grid grid-cols-3 gap-3" role="list" aria-label="Key trend statistics">
        <div className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-5 text-center" role="listitem">
          <div className="text-2xl font-bold text-[#C9115F] tracking-[-0.02em]" aria-label="Improvement: minus 0.36 seconds">-0.36s</div>
          <div className="text-xs text-[#99a1af] mt-2 font-medium">Improvement</div>
        </div>
        <div className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-5 text-center" role="listitem">
          <div className="text-2xl font-bold text-white tracking-[-0.02em]">2026</div>
          <div className="text-xs text-[#99a1af] mt-2 font-medium">Best Year</div>
        </div>
        <div className="bg-[#15151c] border-2 border-[#1a1a1a] rounded-2xl p-5 text-center" role="listitem">
          <div className="text-2xl font-bold text-white tracking-[-0.02em]">11</div>
          <div className="text-xs text-[#99a1af] mt-2 font-medium">Years Tracked</div>
        </div>
      </div>
    </motion.div>
  );
}