import { motion } from 'motion/react';
import { Trophy, TrendingUp, Award, Zap } from 'lucide-react';

interface StorySectionProps {
  onStorySelect: (story: string) => void;
  event: string;
}

export default function StorySection({ onStorySelect, event }: StorySectionProps) {
  const stories = [
    {
      id: 'fastest',
      title: `India's Fastest ${event}`,
      description: 'Journey behind the national record',
      icon: Trophy,
      gradient: 'linear-gradient(137.15deg, rgba(201, 17, 95, 0.2) 0%, rgba(201, 17, 95, 0.05) 100%)',
    },
    {
      id: 'evolution',
      title: 'Evolution of Records',
      description: 'How sprint records have evolved',
      icon: TrendingUp,
      gradient: 'linear-gradient(137.15deg, rgba(192, 192, 192, 0.2) 0%, rgba(192, 192, 192, 0.05) 100%)',
    },
    {
      id: 'milestones',
      title: 'World Record Milestones',
      description: 'Historic moments in athletics',
      icon: Award,
      gradient: 'linear-gradient(137.15deg, rgba(205, 98, 14, 0.2) 0%, rgba(205, 98, 14, 0.05) 100%)',
    },
    {
      id: 'rising',
      title: 'Rising Stars',
      description: 'Young athletes breaking barriers',
      icon: Zap,
      gradient: 'linear-gradient(137.15deg, rgba(201, 17, 95, 0.2) 0%, rgba(201, 17, 95, 0.05) 100%)',
    },
  ];

  return (
    <section className="pt-4" aria-labelledby="stories-heading">
      <h2 id="stories-heading" className="text-sm font-semibold text-[#99a1af] mb-4 px-1 uppercase tracking-wide">Featured Stories</h2>
      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide -mx-4 px-4" role="list" aria-label="Story cards">
        {stories.map((story, index) => {
          const Icon = story.icon;
          return (
            <motion.button
              key={story.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onStorySelect(story.title)}
              aria-label={`Read story: ${story.title}. ${story.description}`}
              role="listitem"
              className="flex-shrink-0 w-[260px] rounded-2xl p-6 min-h-[140px] snap-start text-left hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#C9115F] focus:ring-offset-2 focus:ring-offset-[#0B0B0F] transition-all border-2 border-[#1a1a1a]"
              style={{ background: story.gradient }}
            >
              <Icon className="w-7 h-7 text-[#C9115F] mb-4" aria-hidden="true" />
              <h3 className="font-bold text-white mb-2 text-base tracking-[-0.02em]">{story.title}</h3>
              <p className="text-sm text-[#99a1af] leading-relaxed">{story.description}</p>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}