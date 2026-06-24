import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, BookmarkPlus, Share2, MessageCircle, ThumbsUp, ThumbsDown, Clock, User, MoreVertical, Flag, Link2, EyeOff, X } from 'lucide-react';

const relatedArticles = [
  { title: 'The Science of Peak Athletic Performance', readTime: '7 min', tag: 'Article', category: 'Science' },
  { title: 'Commonwealth Games 2026 — What to Expect', readTime: '5 min', tag: 'Article', category: 'Preview' },
  { title: 'Neeraj Chopra\'s Training Regime Decoded', readTime: '9 min', tag: 'Article', category: 'Training' },
];

export default function ArticleScreen() {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showKebab, setShowKebab] = useState(false);
  const [likeCount, setLikeCount] = useState(2400);
  const [dislikeCount, setDislikeCount] = useState(87);

  return (
    <div className="bg-[#0b0b0f] min-h-screen w-full flex justify-center">
      <div className="relative w-full max-w-[390px] min-h-screen overflow-y-auto">

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: '220px' }}>
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(135deg, #0a1020 0%, #1a0a28 50%, #0a1830 100%)' }}
          />
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white/20"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  left: `${20 + i * 15}px`,
                  top: `${-20 + i * 10}px`,
                }}
              />
            ))}
          </div>

          {/* Category badge */}
          <div className="absolute top-12 left-5">
            <span className="bg-[rgba(201,17,95,0.9)] text-white text-[10px] font-bold px-3 py-1 rounded-full">ARTICLE DROP</span>
          </div>

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-3 left-3 w-[36px] h-[36px] rounded-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center"
          >
            <ChevronLeft size={18} color="white" />
          </button>

          {/* Title area */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 bg-gradient-to-t from-[#0b0b0f] via-[rgba(11,11,15,0.8)] to-transparent pt-10">
            <h1 className="text-white font-['Inter:Bold',sans-serif] font-bold text-[22px] leading-tight tracking-[-0.4px]">
              Marathon Mindset: Mental Fortitude in Elite Sport
            </h1>
          </div>
        </div>

        {/* Scrollable article content */}
        <div className="px-5 pb-24">
          {/* Meta row */}
          <div className="flex items-center gap-3 py-4 border-b border-[rgba(255,255,255,0.08)] mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center">
                <User size={12} color="white" />
              </div>
              <span className="text-[#d1d5dc] text-[12px] font-['Inter:Medium',sans-serif] font-medium">Dr. Ananya Rao</span>
            </div>
            <span className="text-[#4a4a55]">·</span>
            <div className="flex items-center gap-1">
              <Clock size={11} color="#6a7282" />
              <span className="text-[#6a7282] text-[11px]">8 min read</span>
            </div>
            <span className="text-[#4a4a55]">·</span>
            <span className="text-[#6a7282] text-[11px]">May 13, 2026</span>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-5">
            <span className="bg-[rgba(201,17,95,0.15)] border border-[rgba(201,17,95,0.3)] text-[#c9115f] text-[10px] font-bold px-2 py-[3px] rounded-full">ARTICLE</span>
            <span className="bg-[rgba(255,255,255,0.05)] text-[#99a1af] text-[10px] px-2 py-[3px] rounded-full">Psychology</span>
            <span className="bg-[rgba(255,255,255,0.05)] text-[#99a1af] text-[10px] px-2 py-[3px] rounded-full">Athletics</span>
          </div>

          {/* Article body */}
          <div className="space-y-4 mb-6">
            <p className="text-[#c8cdd6] text-[15px] leading-[26px] tracking-[-0.15px]">
              What separates champions from contenders isn't always physical ability — it's the mental architecture they build over years of deliberate practice. The marathon mindset is a framework that elite athletes use to sustain high performance under extreme pressure.
            </p>

            <blockquote className="border-l-[3px] border-[#c9115f] pl-4 my-5">
              <p className="text-white font-['Inter:Medium_Italic',sans-serif] font-medium italic text-[16px] leading-[26px]">
                "We focus on execution, not emotion. That's what separates winners."
              </p>
              <p className="text-[#6a7282] text-[12px] mt-2">— Team Captain</p>
            </blockquote>

            <h2 className="text-white font-['Inter:Bold',sans-serif] font-bold text-[17px] mt-6 mb-2">The Three Pillars</h2>
            <p className="text-[#c8cdd6] text-[15px] leading-[26px] tracking-[-0.15px]">
              Research from the Indian Sports Psychology Institute identifies three core pillars that elite performers consistently demonstrate: process focus, emotional regulation, and adaptive resilience.
            </p>

            <div className="bg-[#111118] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-4 my-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(201,17,95,0.2)] border border-[rgba(201,17,95,0.4)] flex items-center justify-center flex-none mt-0.5">
                  <span className="text-[#c9115f] text-[10px] font-bold">1</span>
                </div>
                <div>
                  <p className="text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] mb-1">Process Focus</p>
                  <p className="text-[#6a7282] text-[12px] leading-[20px]">Concentrating on controllable actions rather than outcomes reduces anxiety and improves execution consistency.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(201,17,95,0.2)] border border-[rgba(201,17,95,0.4)] flex items-center justify-center flex-none mt-0.5">
                  <span className="text-[#c9115f] text-[10px] font-bold">2</span>
                </div>
                <div>
                  <p className="text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] mb-1">Emotional Regulation</p>
                  <p className="text-[#6a7282] text-[12px] leading-[20px]">Pre-competition routines create neurological anchors that maintain optimal arousal levels during high-stakes moments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(201,17,95,0.2)] border border-[rgba(201,17,95,0.4)] flex items-center justify-center flex-none mt-0.5">
                  <span className="text-[#c9115f] text-[10px] font-bold">3</span>
                </div>
                <div>
                  <p className="text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] mb-1">Adaptive Resilience</p>
                  <p className="text-[#6a7282] text-[12px] leading-[20px]">The ability to recalibrate strategy mid-competition without emotional disruption is a learnable skill.</p>
                </div>
              </div>
            </div>

            <p className="text-[#c8cdd6] text-[15px] leading-[26px] tracking-[-0.15px]">
              For India's Commonwealth Games 2026 delegation, these principles form the psychological backbone of their preparation. Athletes undergo weekly sessions with certified sport psychologists embedded within the coaching staff.
            </p>
          </div>

          {/* Action bar */}
          <div className="flex flex-wrap items-center gap-2 py-4 border-t border-b border-[rgba(255,255,255,0.08)] mb-6">
            <button
              onClick={() => { setIsLiked(l => { setLikeCount(c => l ? c - 1 : c + 1); return !l; }); if (isDisliked) { setIsDisliked(false); setDislikeCount(c => c - 1); } }}
              className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors"
              style={{ background: isLiked ? 'rgba(201,17,95,0.15)' : 'rgba(255,255,255,0.05)', border: isLiked ? '1px solid rgba(201,17,95,0.3)' : '1px solid rgba(255,255,255,0.08)' }}
            >
              <ThumbsUp size={14} color={isLiked ? '#c9115f' : '#99a1af'} fill={isLiked ? '#c9115f' : 'none'} />
              <span className="text-[12px]" style={{ color: isLiked ? '#c9115f' : '#99a1af' }}>{likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}k` : likeCount}</span>
            </button>
            <button
              onClick={() => { setIsDisliked(d => { setDislikeCount(c => d ? c - 1 : c + 1); return !d; }); if (isLiked) { setIsLiked(false); setLikeCount(c => c - 1); } }}
              className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors"
              style={{ background: isDisliked ? 'rgba(255,89,0,0.15)' : 'rgba(255,255,255,0.05)', border: isDisliked ? '1px solid rgba(255,89,0,0.4)' : '1px solid rgba(255,255,255,0.08)' }}
            >
              <ThumbsDown size={14} color={isDisliked ? '#ff5900' : '#99a1af'} fill={isDisliked ? '#ff5900' : 'none'} />
              <span className="text-[12px]" style={{ color: isDisliked ? '#ff5900' : '#99a1af' }}>{dislikeCount}</span>
            </button>
            <button className="flex items-center gap-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-2">
              <MessageCircle size={14} color="#99a1af" />
              <span className="text-[#99a1af] text-[12px]">186</span>
            </button>
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => setIsSaved(s => !s)}
                className="flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors"
                style={{ background: isSaved ? 'rgba(201,17,95,0.15)' : 'rgba(255,255,255,0.05)', border: isSaved ? '1px solid rgba(201,17,95,0.3)' : '1px solid rgba(255,255,255,0.08)' }}
              >
                <BookmarkPlus size={14} color={isSaved ? '#c9115f' : '#99a1af'} />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowKebab(k => !k)}
                  className="flex items-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-2 active:scale-95"
                >
                  <MoreVertical size={14} color="#99a1af" />
                </button>
                {showKebab && (
                  <div className="absolute right-0 top-full mt-2 bg-[#1a1a22] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl z-50 w-[200px] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.07)]">
                      <span className="text-white text-[13px] font-semibold">Options</span>
                      <button onClick={() => setShowKebab(false)}><X size={14} color="#888" /></button>
                    </div>
                    {[
                      { icon: <Flag size={15} color="#ff4444" />, label: 'Report', color: '#ff4444' },
                      { icon: <Share2 size={15} color="#99a1af" />, label: 'Share', color: '#99a1af' },
                      { icon: <Link2 size={15} color="#99a1af" />, label: 'Copy link', color: '#99a1af' },
                      { icon: <EyeOff size={15} color="#99a1af" />, label: 'Not interested', color: '#99a1af' },
                    ].map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setShowKebab(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[rgba(255,255,255,0.05)] transition-colors text-left"
                      >
                        {item.icon}
                        <span className="text-[13px]" style={{ color: item.color }}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related articles */}
          <h2 className="text-white font-['Inter:Bold',sans-serif] font-bold text-[15px] mb-3">More Articles</h2>
          <div className="flex flex-col gap-3">
            {relatedArticles.map((a, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-4 flex gap-3">
                <div className="flex-none w-[52px] h-[52px] rounded-[10px] flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(135deg, #1a0a28 0%, #0a1830 100%)' }}>
                  <span className="text-[#c9115f] text-[18px]">✦</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#f5f5f7] text-[13px] font-['Inter:Medium',sans-serif] font-medium leading-tight mb-2 line-clamp-2">{a.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#c9115f] text-[9px] font-bold">{a.tag}</span>
                    <span className="text-[#6a7282] text-[9px]">·</span>
                    <Clock size={9} color="#6a7282" />
                    <span className="text-[#6a7282] text-[9px]">{a.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
