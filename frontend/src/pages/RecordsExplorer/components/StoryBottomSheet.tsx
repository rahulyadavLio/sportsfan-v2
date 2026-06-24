import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, MapPin } from 'lucide-react';

interface StoryBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  storyTitle: string;
}

export default function StoryBottomSheet({ isOpen, onClose, storyTitle }: StoryBottomSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
            aria-hidden="true"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-sheet-title"
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-[#15151c] border-t-2 border-[#1a1a1a] rounded-t-3xl z-50 max-h-[80vh] overflow-hidden"
          >
            {/* Handle */}
            <div className="flex justify-center py-4" aria-hidden="true">
              <div className="w-12 h-1.5 bg-[#99a1af]/40 rounded-full"></div>
            </div>

            {/* Header */}
            <div className="px-6 pb-4 border-b-2 border-[#1a1a1a] flex items-start justify-between">
              <h2 id="story-sheet-title" className="text-xl font-bold text-white pr-8 tracking-[-0.02em]">{storyTitle}</h2>
              <button
                onClick={onClose}
                aria-label="Close story"
                className="p-3 min-h-[44px] min-w-[44px] hover:bg-[#1a1a1a] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C9115F] transition-colors"
              >
                <X className="w-5 h-5 text-[#99a1af]" aria-hidden="true" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(80vh-120px)]">
              <article className="space-y-5">
                {/* Featured Image Placeholder */}
                <div className="w-full h-48 rounded-2xl flex items-center justify-center border-2 border-[#1a1a1a]"
                  style={{ background: 'linear-gradient(137.15deg, rgba(201, 17, 95, 0.2) 0%, rgba(201, 17, 95, 0.05) 100%)' }}
                  role="img"
                  aria-label="Featured story image"
                >
                  <div className="text-6xl" aria-hidden="true">🏃‍♂️</div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4" role="list" aria-label="Story metadata">
                  <div className="flex items-center gap-2 text-sm text-[#99a1af]" role="listitem">
                    <Calendar className="w-4 h-4 text-[#C9115F]" aria-hidden="true" />
                    <span><span className="sr-only">Published: </span>May 23, 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#99a1af]" role="listitem">
                    <User className="w-4 h-4 text-[#C9115F]" aria-hidden="true" />
                    <span><span className="sr-only">Author: </span>Athletics Federation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#99a1af]" role="listitem">
                    <MapPin className="w-4 h-4 text-[#C9115F]" aria-hidden="true" />
                    <span><span className="sr-only">Location: </span>New Delhi</span>
                  </div>
                </div>

                {/* Story Content */}
                <div className="space-y-4 text-white/90 text-sm leading-relaxed">
                  <p>
                    On May 23, 2026, Gurindervir Singh shattered the men's 100m national record with a stunning 10.09s at the Federation Cup in Ranchi — slicing 0.17s off the decade-old mark set by Amiya Mallick in 2016.
                  </p>
                  <p>
                    The run places India just 0.51s (5.3%) behind Usain Bolt's 9.58s world record — the closest the nation has ever been. Over the past 11 years the gap has closed by 25%, a transformation driven by world-class coaching, superior sports science, and a new generation of fearless sprinters.
                  </p>
                  <p>
                    Singh's performance elevates India to global rank #25 in the 100m, underscoring that Indian sprinting is no longer a fringe pursuit but a genuine force on the world stage.
                  </p>
                </div>

                {/* Key Statistics */}
                <section className="bg-[#0B0B0F] border-2 border-[#1a1a1a] rounded-2xl p-5 space-y-4" aria-labelledby="stats-heading">
                  <h3 id="stats-heading" className="font-bold text-white mb-4 text-base tracking-[-0.015em]">Key Statistics</h3>
                  <div className="grid grid-cols-2 gap-4" role="list">
                    <div role="listitem">
                      <div className="text-2xl font-bold text-[#C9115F] tracking-[-0.02em]" aria-label="15 plus">15+</div>
                      <div className="text-xs text-[#99a1af] mt-1">National Records</div>
                    </div>
                    <div role="listitem">
                      <div className="text-2xl font-bold text-[#C0C0C0] tracking-[-0.02em]">11 Yrs</div>
                      <div className="text-xs text-[#99a1af] mt-1">Continuous Improvement</div>
                    </div>
                    <div role="listitem">
                      <div className="text-2xl font-bold text-[#CD620E] tracking-[-0.02em]">25</div>
                      <div className="text-xs text-[#99a1af] mt-1">Global Ranking</div>
                    </div>
                    <div role="listitem">
                      <div className="text-2xl font-bold text-white tracking-[-0.02em]">10.09s</div>
                      <div className="text-xs text-[#99a1af] mt-1">National Record</div>
                    </div>
                  </div>
                </section>

                {/* Quote */}
                <blockquote className="rounded-2xl p-6 border-l-4 border-[#C9115F]"
                  style={{ background: 'linear-gradient(137.15deg, rgba(201, 17, 95, 0.2) 0%, rgba(201, 17, 95, 0.05) 100%)' }}
                >
                  <p className="text-white/90 italic mb-3 text-sm leading-relaxed">
                    "Every record broken is a testament to the relentless spirit of Indian athletes who refuse to give up on their dreams."
                  </p>
                  <footer className="text-xs text-[#99a1af]">— Athletics Federation of India</footer>
                </blockquote>
              </article>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}