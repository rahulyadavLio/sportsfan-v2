import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft,
  SkipBack, SkipForward, Share2, BookmarkPlus, ThumbsUp,
  ThumbsDown, MessageCircle, MoreVertical, Flag, Link2, EyeOff, X, Clock,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface VideoChapter {
  timestamp: string; // e.g. "2:45"
  label: string;
}

interface RelatedVideo {
  title: string;
  duration: string;
  tag: string;
  thumbnail: string; // public-folder path
  path: string;      // navigate-to path e.g. /video/2
}

interface VideoData {
  // Player
  videoUrl: string;       // actual video/embed URL
  thumbnail: string;      // poster image (public folder)
  totalDuration: string;  // "MM:SS"

  // Labels
  badgeLabel: string;     // e.g. "VIDEO DROP"
  episode: string;        // e.g. "EP 01"
  category: string;       // e.g. "Athletics"
  title: string;
  metaLine: string;       // e.g. "1.2k views · Commonwealth Games 2026"

  // Body
  description: string;
  chapters: VideoChapter[];

  // Related
  relatedVideos: RelatedVideo[];

  // Stats
  likeCount: number;
  commentCount: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const videosData: Record<string, VideoData> = {
  '1': {
    videoUrl: 'https://res.cloudinary.com/dflnsufit/video/upload/v1781888645/neeraj_vfuai6.mp4',
    thumbnail: '/neeraj-journey-banner.png',
    totalDuration: '8:07',
    badgeLabel: 'ATHLETE STORY',
    episode: 'EP 01',
    category: 'Javelin',
    title: 'Neeraj Chopra’s Journey to Glory',
    metaLine: '5.2k views · Athlete Story',
    description:
      'Follow Neeraj Chopra’s incredible journey from a young athlete with big dreams to becoming one of India’s greatest sporting icons. This inspiring film traces his rise through years of hard work, international success, and historic achievements, highlighting the dedication, resilience, and passion that made him an Olympic and Commonwealth champion.',
    chapters: [
      { timestamp: '0:00', label: 'Early beginnings' },
      { timestamp: '2:08', label: 'Rise on the international stage' },
      { timestamp: '4:52', label: 'Olympic & Commonwealth success' },
      { timestamp: '6:45', label: 'Inspiring the next generation' },
    ],
    relatedVideos: [
      {
        title: 'Technique Breakdown — Neeraj Chopra on Javelin',
        duration: '14:30',
        tag: 'Video',
        thumbnail: '/neeraj.png',
        path: '/video/2',
      },
      {
        title: 'Gurindervir Singh — Breaking Records & Training',
        duration: '7:15',
        tag: 'Video',
        thumbnail: '/Gurindervir-Singh-3.png',
        path: '/video/3',
      },
    ],
    likeCount: 4823,
    commentCount: 318,
  },
  '2': {
    videoUrl: 'https://res.cloudinary.com/dflnsufit/video/upload/v1781888626/Parul1_nypg60.mp4',
    thumbnail: '/parul-choudhary-banner.png',
    totalDuration: '7:42',
    badgeLabel: 'ATHLETE STORY',
    episode: 'EP 01',
    category: 'Middle Distance',
    title: 'Parul Choudhary’s Life Journey',
    metaLine: '3.9k views · Athlete Story',
    description:
      'Discover the inspiring journey of Indian middle and long-distance runner Parul Choudhary. From humble beginnings to representing India on the international stage, this story captures her determination, resilience, and relentless pursuit of excellence. Through years of disciplined training and perseverance, Parul has emerged as one of India’s brightest athletics stars, inspiring a new generation of runners.',
    chapters: [
      { timestamp: '0:00', label: 'Growing up with a dream' },
      { timestamp: '2:05', label: 'Overcoming challenges' },
      { timestamp: '4:18', label: 'Breaking through on the international stage' },
      { timestamp: '6:20', label: 'Chasing future milestones' },
    ],
    relatedVideos: [
      {
        title: 'Parul on Endurance & Discipline',
        duration: '13:45',
        tag: 'Video',
        thumbnail: '/parul.png',
        path: '/video/4',
      },
      {
        title: 'Neeraj Chopra’s Journey to Glory',
        duration: '8:07',
        tag: 'Video',
        thumbnail: '/neeraj.png',
        path: '/video/1',
      },
    ],
    likeCount: 3968,
    commentCount: 241,
  },
  '3': {
    videoUrl: 'https://res.cloudinary.com/dflnsufit/video/upload/v1781888584/Gurindervir_Singh_hdese6.mp4',
    thumbnail: '/gurindervir-journey-banner.png',
    totalDuration: '7:18',
    badgeLabel: 'ATHLETE STORY',
    episode: 'EP 01',
    category: 'Sprints',
    title: 'Journey: From Trauma to 10.20s',
    metaLine: '4.6k views · Athlete Story',
    description:
      'Follow the remarkable journey of Gurindervir Singh as he overcame personal setbacks and injuries to become one of India’s fastest sprinters. This inspiring story captures the resilience, determination, and relentless work ethic that helped him break barriers, rewrite records, and establish himself among the country’s elite athletes.',
    chapters: [
      { timestamp: '0:00', label: 'A difficult beginning' },
      { timestamp: '1:58', label: 'Fighting through setbacks' },
      { timestamp: '4:12', label: 'The road to 10.20 seconds' },
      { timestamp: '6:08', label: 'Chasing new records' },
    ],
    relatedVideos: [
      {
        title: 'Take on Breaking Records & Training',
        duration: '14:05',
        tag: 'Video',
        thumbnail: '/Gurindervir-Singh-3.png',
        path: '/video/5',
      },
      {
        title: 'Neeraj Chopra’s Journey to Glory',
        duration: '8:07',
        tag: 'Video',
        thumbnail: '/neeraj.png',
        path: '/video/1',
      },
    ],
    likeCount: 4285,
    commentCount: 267,
  },
  '4': {
    videoUrl: 'https://res.cloudinary.com/dflnsufit/video/upload/v1781931538/vidssave.com_National_Record_Has_Been_Broken_4X100M_RELAY_MEN_FINAL___2ND_INDIAN_RELAY_COMPETITION___CHANDIGARH_360P_tffq9c.mp4',
    thumbnail: '/relay-national-record-banner.png',
    totalDuration: '5:36',
    badgeLabel: 'RECORD ALERT',
    episode: 'EP 01',
    category: 'Relay',
    title: 'National Record Broken: 4x100m Relay Men’s Final',
    metaLine: '6.8k views · National Record',
    description:
      'Witness a historic moment in Indian athletics as the men’s 4x100m relay team storms to a new national record. Experience the electrifying race, flawless baton exchanges, and explosive finish that etched the quartet’s names into the record books. This milestone reflects the team’s speed, precision, and months of dedicated preparation.',
    chapters: [
      { timestamp: '0:00', label: 'Race introduction' },
      { timestamp: '1:12', label: 'Perfect baton exchanges' },
      { timestamp: '3:18', label: 'Record-breaking finish' },
      { timestamp: '4:48', label: 'Celebration & reactions' },
    ],
    relatedVideos: [
      {
        title: 'Journey: From Trauma to 10.20s',
        duration: '7:18',
        tag: 'Video',
        thumbnail: '/Gurindervir-Singh-3.png',
        path: '/video/3',
      },
      {
        title: 'Neeraj Chopra’s Journey to Glory',
        duration: '8:07',
        tag: 'Video',
        thumbnail: '/neeraj.png',
        path: '/video/1',
      },
    ],
    likeCount: 6154,
    commentCount: 389,
  },
  '5': {
    videoUrl: 'https://res.cloudinary.com/dflnsufit/video/upload/v1782111513/videoplayback_2_online-video-cutter.com_q5copp.mp4',
    thumbnail: '/praveen-chithravel-banner.png',
    totalDuration: '1:12',

    badgeLabel: 'CWG UPDATE',
    episode: 'EP 05',
    category: 'Triple Jump',

    title: 'Praveen Chithravel on CWG 2026',
    metaLine: '2.8k views · CWG Update',

    description:
      'Indian triple jumper Praveen Chithravel shares his thoughts on the road to the 2026 Commonwealth Games. He discusses his preparations, performance goals, and the determination required to compete against the world’s best while proudly representing India on the international stage.',

    chapters: [
      { timestamp: '0:00', label: 'Road to CWG 2026' },
      { timestamp: '0:26', label: 'Training and preparation' },
      { timestamp: '0:50', label: 'Goals for India' },
      { timestamp: '1:05', label: 'Message to supporters' },
    ],

    relatedVideos: [
      {
        title: 'Tejaswin Shankar on CWG & Asian Games Qualification',
        duration: '1:00',
        tag: 'Video',
        thumbnail: '/tejaswin-shankar-banner.png',
        path: '/video/2',
      },
      {
        title: 'Gurindervir Singh — Breaking Records & Training',
        duration: '1:10',
        tag: 'Video',
        thumbnail: '/Gurindervir-Singh-3.png',
        path: '/video/3',
      },
    ],

    likeCount: 2874,
    commentCount: 164,
  },

};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseDuration(str: string): number {
  const parts = str.split(':').map(Number);
  if (parts.length === 2) return (parts[0] ?? 0) * 60 + (parts[1] ?? 0);
  if (parts.length === 3) return (parts[0] ?? 0) * 3600 + (parts[1] ?? 0) * 60 + (parts[2] ?? 0);
  return 0;
}

function formatTime(secs: number) {
  if (!isFinite(secs) || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function VideoScreen() {
  const navigate = useNavigate();
  const { id = '1' } = useParams<{ id: string }>();

  const video = videosData[id] ?? videosData['1'];
  const TOTAL_DURATION = parseDuration(video.totalDuration);

  // Video element ref
  const videoRef = useRef<HTMLVideoElement>(null);

  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(video.likeCount);
  const [dislikeCount, setDislikeCount] = useState(Math.floor(video.likeCount * 0.03));
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showKebab, setShowKebab] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset state when video id changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setLiked(false);
    setDisliked(false);
    setLikeCount(video.likeCount);
    setDislikeCount(Math.floor(video.likeCount * 0.03));
    setIsLoading(true);
  }, [id, video.likeCount]);

  // Wire video element events
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onTimeUpdate = () => setCurrentTime(el.currentTime);
    const onLoaded = () => { setDuration(el.duration); setIsLoading(false); };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => { setIsPlaying(false); setCurrentTime(0); };
    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);

    el.addEventListener('timeupdate', onTimeUpdate);
    el.addEventListener('loadedmetadata', onLoaded);
    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    el.addEventListener('ended', onEnded);
    el.addEventListener('waiting', onWaiting);
    el.addEventListener('canplay', onCanPlay);
    return () => {
      el.removeEventListener('timeupdate', onTimeUpdate);
      el.removeEventListener('loadedmetadata', onLoaded);
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('ended', onEnded);
      el.removeEventListener('waiting', onWaiting);
      el.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  // Sync mute
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlay = useCallback(async () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) { try { await el.play(); } catch (_) { /* noop */ } }
    else el.pause();
  }, []);

  const handleVideoTap = useCallback(() => {
    setShowControls(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowControls(false), 3000);
    togglePlay();
  }, [togglePlay]);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = videoRef.current;
    if (!el || !isFinite(el.duration)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    el.currentTime = ratio * el.duration;
  }, []);

  const skip = useCallback((delta: number) => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = Math.max(0, Math.min(el.duration || 0, el.currentTime + delta));
  }, []);

  const jumpToChapter = useCallback(async (ts: string) => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = parseDuration(ts);
    try { await el.play(); } catch (_) { /* noop */ }
  }, []);

  const effectiveDuration = duration > 0 ? duration : TOTAL_DURATION;
  const progressPct = effectiveDuration > 0 ? (currentTime / effectiveDuration) * 100 : 0;

  return (
    <div className="bg-[#0b0b0f] h-screen w-full flex justify-center">
      <div className="relative w-full max-w-[390px] h-screen overflow-y-auto no-scrollbar">

        {/* ── Video player ── */}
        <div
          className="relative w-full bg-black overflow-hidden cursor-pointer"
          style={{ height: '220px' }}
          onClick={handleVideoTap}
        >
          {/* Native video element */}
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.thumbnail}
            preload="metadata"
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <svg className="animate-spin w-10 h-10" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round" />
              </svg>
            </div>
          )}

          {/* Big play button when paused */}
          {!isPlaying && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[56px] h-[56px] rounded-full bg-[rgba(201,17,95,0.9)] flex items-center justify-center shadow-lg" style={{ boxShadow: '0 8px 32px rgba(201,17,95,0.5)' }}>
                <Play size={24} fill="white" color="white" className="ml-1" />
              </div>
            </div>
          )}

          {/* Top labels — always visible */}

          <div className="absolute top-3 right-3 bg-[rgba(0,0,0,0.5)] rounded-[6px] px-2 py-[2px] pointer-events-none">
            <span className="text-white text-[11px]">{formatTime(effectiveDuration)}</span>
          </div>

          {/* Controls overlay — fades in/out */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300"
            style={{ opacity: showControls ? 1 : 0, pointerEvents: showControls ? 'auto' : 'none' }}
          >
            {/* Back button */}
            <button
              onClick={e => { e.stopPropagation(); navigate(-1); }}
              className="absolute top-3 left-3 w-[32px] h-[32px] rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center"
            >
              <ChevronLeft size={18} color="white" />
            </button>

            {/* Bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 px-3 pb-3" onClick={e => e.stopPropagation()}>
              {/* Seek bar */}
              <div
                className="w-full h-[3px] bg-[rgba(255,255,255,0.3)] rounded-full mb-2 cursor-pointer relative"
                onClick={handleSeek}
              >
                <div className="h-full bg-[#c9115f] rounded-full transition-[width] duration-100" style={{ width: `${progressPct}%` }} />
                <div className="absolute top-[-4px] w-[11px] h-[11px] rounded-full bg-[#c9115f] -translate-x-1/2" style={{ left: `${progressPct}%` }} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={() => skip(-10)}><SkipBack size={18} color="white" /></button>
                  <button
                    onClick={togglePlay}
                    className="w-[32px] h-[32px] rounded-full bg-[#c9115f] flex items-center justify-center"
                  >
                    {isPlaying
                      ? <Pause size={14} fill="white" color="white" />
                      : <Play size={14} fill="white" color="white" className="ml-0.5" />}
                  </button>
                  <button onClick={() => skip(10)}><SkipForward size={18} color="white" /></button>
                  <span className="text-white text-[11px]">{formatTime(currentTime)} / {formatTime(effectiveDuration)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setIsMuted(m => !m)}>
                    {isMuted ? <VolumeX size={16} color="white" /> : <Volume2 size={16} color="white" />}
                  </button>
                  <Maximize size={16} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content below video ── */}
        <div className="px-5 pt-4 pb-24">

          {/* Tags row */}
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className="bg-[rgba(201,17,95,0.15)] border border-[rgba(201,17,95,0.3)] text-[#c9115f] text-[10px] font-bold px-2 py-[3px] rounded-full">VIDEO</span>
            <span className="bg-[rgba(255,255,255,0.05)] text-[#99a1af] text-[10px] px-2 py-[3px] rounded-full">{video.category}</span>
            <span className="text-[#99a1af] text-[10px] px-2 py-[3px]">{video.episode}</span>
          </div>

          {/* Title + meta */}
          <h1 className="text-white font-bold text-[20px] leading-tight tracking-[-0.3px] mb-1">{video.title}</h1>
          <p className="text-[#99a1af] text-[13px] mb-4">{video.metaLine}</p>

          {/* Reactions + actions row */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <button
              onClick={() => { setLiked(l => { setLikeCount(c => l ? c - 1 : c + 1); return !l; }); if (disliked) { setDisliked(false); setDislikeCount(c => c - 1); } }}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all active:scale-95"
              style={{ background: liked ? 'rgba(201,17,95,0.2)' : 'rgba(255,255,255,0.05)', border: liked ? '1px solid rgba(201,17,95,0.5)' : '1px solid rgba(255,255,255,0.1)' }}
            >
              <ThumbsUp size={15} color={liked ? '#c9115f' : '#99a1af'} fill={liked ? '#c9115f' : 'none'} />
              <span className="text-[12px]" style={{ color: liked ? '#c9115f' : '#99a1af' }}>{likeCount.toLocaleString()}</span>
            </button>
            <button
              onClick={() => { setDisliked(d => { setDislikeCount(c => d ? c - 1 : c + 1); return !d; }); if (liked) { setLiked(false); setLikeCount(c => c - 1); } }}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all active:scale-95"
              style={{ background: disliked ? 'rgba(255,89,0,0.15)' : 'rgba(255,255,255,0.05)', border: disliked ? '1px solid rgba(255,89,0,0.4)' : '1px solid rgba(255,255,255,0.1)' }}
            >
              <ThumbsDown size={15} color={disliked ? '#ff5900' : '#99a1af'} fill={disliked ? '#ff5900' : 'none'} />
              <span className="text-[12px]" style={{ color: disliked ? '#ff5900' : '#99a1af' }}>{dislikeCount}</span>
            </button>
            <button className="flex items-center gap-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2">
              <MessageCircle size={15} color="#99a1af" />
              <span className="text-[#99a1af] text-[12px]">{video.commentCount}</span>
            </button>
            <div className="ml-auto flex gap-2">
              <button
                onClick={() => setIsSaved(s => !s)}
                className="flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors"
                style={{ background: isSaved ? 'rgba(201,17,95,0.15)' : 'rgba(255,255,255,0.05)', border: isSaved ? '1px solid rgba(201,17,95,0.3)' : '1px solid rgba(255,255,255,0.1)' }}
              >
                <BookmarkPlus size={15} color={isSaved ? '#c9115f' : '#99a1af'} />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowKebab(k => !k)}
                  className="flex items-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-3 py-2 active:scale-95"
                >
                  <MoreVertical size={15} color="#99a1af" />
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

          {/* Description */}
          <div className="bg-[#111118] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-4 mb-5">
            <p className="text-[#99a1af] text-[14px] leading-[22px] tracking-[-0.15px]">{video.description}</p>
          </div>

          {/* Chapters */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white font-bold text-[15px]">Chapters</h2>
              <span className="text-[#99a1af] text-[10px]">{video.chapters.length} chapters</span>
            </div>
            {video.chapters.map((ch, i) => (
              <button
                key={i}
                onClick={() => jumpToChapter(ch.timestamp)}
                className="w-full flex items-center gap-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[12px] px-3 py-3 mb-2 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(201,17,95,0.3)] transition-colors"
              >
                <span className="bg-[rgba(255,89,0,0.2)] text-white text-[10px] font-bold px-2 py-[3px] rounded-[8px] flex-none">{ch.timestamp}</span>
                <span className="text-[#d1d5dc] text-[13px] font-semibold text-left">{ch.label}</span>
              </button>
            ))}
          </div>

          {/* Related Videos */}
          {video.relatedVideos.length > 0 && (
            <>
              <h2 className="text-white font-bold text-[15px] mb-3">More Videos</h2>
              <div className="flex flex-col gap-3">
                {video.relatedVideos.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(v.path)}
                    className="flex gap-3 items-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[14px] p-3 text-left hover:border-[rgba(201,17,95,0.3)] transition-all active:scale-[0.98]"
                  >
                    {/* Thumbnail */}
                    <div className="flex-none w-[72px] h-[52px] rounded-[10px] overflow-hidden bg-[#111118]">
                      <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#f5f5f7] text-[12px] font-medium leading-tight mb-1 line-clamp-2">{v.title}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[#c9115f] text-[9px] font-bold">{v.tag}</span>
                        <span className="text-[#6a7282] text-[9px]">·</span>
                        <Clock size={9} color="#6a7282" />
                        <span className="text-[#6a7282] text-[9px]">{v.duration}</span>
                      </div>
                    </div>
                    <div className="flex-none w-[24px] h-[24px] rounded-full bg-[rgba(201,17,95,0.15)] border border-[rgba(201,17,95,0.3)] flex items-center justify-center">
                      <Play size={9} fill="#c9115f" color="#c9115f" className="ml-0.5" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
