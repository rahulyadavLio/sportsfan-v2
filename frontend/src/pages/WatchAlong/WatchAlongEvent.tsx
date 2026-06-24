import { useNavigate, useParams } from 'react-router';
import { Tv, Gamepad2, Store, Trophy, ChevronLeft, MoreVertical, Share2, Send, Heart, Clock, Check, X, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from '../../components/common/ImageWithFallback.tsx'

const eventData: Record<string, any> = {
  'cwg-2026': {
    title: 'Commonwealth Games 2026',
    subtitle: 'Athletics Championship',
    commentator: 'Rahul Kumar',
    score: "Women's 100m Final",
    team: 'ATH',
  },
  default: {
    title: 'World Athletics Championship',
    subtitle: 'Track & Field Finals',
    commentator: 'Rahul Kumar',
    score: "Women's Relay Heat 2",
    team: 'ATH',
  },
};

const INITIAL_CHAT = [
  { id: 1, user: 'SportsFreak247', message: "This is incredible! 🔥", time: '2s ago', isOwn: false },
  { id: 2, user: 'AthleteJunkie', message: "Neeraj is on fire today!", time: '5s ago', isOwn: false },
  { id: 3, user: 'You', message: "What a throw! 🎯", time: '8s ago', isOwn: true },
  { id: 4, user: 'RunFast2026', message: "Can't believe the form", time: '12s ago', isOwn: false },
  { id: 5, user: 'GoldMedalist88', message: "Best performance I've seen 💪", time: '15s ago', isOwn: false },
  { id: 6, user: 'TrackStar', message: "Commonwealth record incoming!", time: '20s ago', isOwn: false },
  { id: 7, user: 'TeamIndia', message: "Let's gooo! 🇮🇳", time: '30s ago', isOwn: false },
];

const INCOMING_MSGS = [
  { user: 'SpeedDemon', message: "Unbelievable speed! ⚡" },
  { user: 'AthleticsNerd', message: "Personal best incoming?!" },
  { user: 'CWGFan2026', message: "History being made 🏆" },
  { user: 'RunnerUp99', message: "This crowd is electric! 🔥" },
  { user: 'GoldRush', message: "India India India! 🇮🇳💪" },
];

const PREDICTIONS = [
  { id: 0, question: 'Will Neeraj Chopra win gold in Javelin?', options: ['Yes', 'No'], votes: [1240, 320] },
  { id: 1, question: 'Next medal in which event?', options: ['100m Sprint', '200m Sprint', 'Relay'], votes: [560, 210, 430] },
  { id: 2, question: 'Will there be a Commonwealth record?', options: ['Yes', 'No'], votes: [890, 450], timerInit: 45 },
];

const FLASH_QUIZZES = [
  { id: 0, question: 'Who holds the Commonwealth 100m record?', options: ['Usain Bolt', 'Yohan Blake', 'Akani Simbine', 'Ferdinand Omanyala'], correct: 0, timerInit: 30, points: 100 },
  { id: 1, question: 'How many athletics events in CWG 2026?', options: ['38', '42', '45', '50'], correct: 1, timerInit: 25, points: 100 },
];

const EMOJI_OPTIONS = ['🔥', '⚡', '💪', '👏', '🏃', '🥇', '💯', '🎯'];

export default function WatchAlongEvent() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const event = eventData[eventId || 'default'] || eventData['default'];

  const [activeTab, setActiveTab] = useState('Live Chat');
  const tabs = ['Live Chat', 'Prediction', 'Flash Quiz', 'Emoji Storm'];

  // ── Live Chat state ──────────────────────────────────────────
  const [chatMessages, setChatMessages] = useState(INITIAL_CHAT);
  const [chatInput, setChatInput] = useState('');
  const [heartCount, setHeartCount] = useState(2500);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(100);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    if (activeTab !== 'Live Chat') return;
    const t = setInterval(() => {
      const rnd = INCOMING_MSGS[Math.floor(Math.random() * INCOMING_MSGS.length)];
      setChatMessages(prev => [
        ...prev,
        { id: ++msgIdRef.current, user: rnd.user, message: rnd.message, time: 'now', isOwn: false },
      ]);
    }, 4000);
    return () => clearInterval(t);
  }, [activeTab]);

  const sendChat = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [
      ...prev,
      { id: ++msgIdRef.current, user: 'You', message: chatInput.trim(), time: 'now', isOwn: true },
    ]);
    setChatInput('');
  };

  // ── Prediction state ─────────────────────────────────────────
  const [predVotes, setPredVotes] = useState<(number | null)[]>(PREDICTIONS.map(() => null));
  const [predCounts, setPredCounts] = useState(PREDICTIONS.map(p => [...p.votes]));

  const votePrediction = (pIdx: number, oIdx: number) => {
    if (predVotes[pIdx] !== null) return;
    const newVotes = [...predVotes];
    newVotes[pIdx] = oIdx;
    setPredVotes(newVotes);
    const newCounts = predCounts.map((arr, i) =>
      i === pIdx ? arr.map((v, j) => (j === oIdx ? v + 1 : v)) : arr
    );
    setPredCounts(newCounts);
  };

  // ── Flash Quiz state ─────────────────────────────────────────
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>(FLASH_QUIZZES.map(() => null));
  const [quizTimers, setQuizTimers] = useState(FLASH_QUIZZES.map(q => q.timerInit));
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    if (activeTab !== 'Flash Quiz') return;
    const t = setInterval(() => {
      setQuizTimers(prev => prev.map((v, i) => (quizAnswers[i] !== null ? v : Math.max(0, v - 1))));
    }, 1000);
    return () => clearInterval(t);
  }, [activeTab, quizAnswers]);

  const answerQuiz = (qIdx: number, oIdx: number) => {
    if (quizAnswers[qIdx] !== null || quizTimers[qIdx] === 0) return;
    const newAnswers = [...quizAnswers];
    newAnswers[qIdx] = oIdx;
    setQuizAnswers(newAnswers);
    if (oIdx === FLASH_QUIZZES[qIdx].correct) {
      setQuizScore(s => s + FLASH_QUIZZES[qIdx].points);
    }
  };

  // ── Emoji Storm state ────────────────────────────────────────
  const [emojiCounts, setEmojiCounts] = useState<number[]>(EMOJI_OPTIONS.map(() => Math.floor(Math.random() * 500 + 100)));
  const [burst, setBurst] = useState<{ emoji: string; id: number; x: number } | null>(null);
  const burstIdRef = useRef(0);

  const tapEmoji = (emoji: string, idx: number) => {
    setEmojiCounts(prev => prev.map((v, i) => (i === idx ? v + 1 : v)));
    const x = Math.random() * 60 + 20;
    setBurst({ emoji, id: ++burstIdRef.current, x });
    setTimeout(() => setBurst(null), 900);
  };

  const totalReactions = emojiCounts.reduce((a, b) => a + b, 0);
  const topEmoji = EMOJI_OPTIONS[emojiCounts.indexOf(Math.max(...emojiCounts))];

  return (
    <div className="bg-black w-full flex justify-center h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">

        {/* Header */}
        <div className="sticky top-0 left-0 right-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)] h-[56px] flex items-center justify-between px-4 gap-3">
          <button onClick={() => navigate('/watch-along')} className="w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
            <ChevronLeft className="w-[18px] h-[18px] text-white" />
          </button>
          <div className="flex-1 flex items-center justify-center gap-2">
            <div className="bg-[#fb2c36] px-2 py-1 rounded-full flex items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
              <span className="text-white text-[10px] font-bold">LIVE</span>
            </div>
            <span className="text-white text-[12px] font-bold">{event.commentator}</span>
          </div>
          <button className="w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
            <MoreVertical className="w-[18px] h-[18px] text-white" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-scroll no-scrollbar pb-[57px]">
          {/* Video Player */}
          <div className="relative bg-black aspect-video overflow-hidden">

            <video
              src="https://res.cloudinary.com/dflnsufit/video/upload/v1781798584/WhatsApp_Video_2026-06-18_at_21.25.50_w1fghp.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3)] to-black" />
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-transparent px-3 py-3">
              <div className="flex items-center gap-2">
                <span className="text-[#c9115f] text-[11px] font-bold">{event.team}</span>
                <span className="text-white text-[12px] font-bold">{event.score}</span>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 bg-[#fb2c36] px-2 py-1 rounded-full flex items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
              <span className="text-white text-[10px] font-bold">LIVE</span>
            </div>
            <div className="absolute bottom-3 right-3">
              <div className="w-[88px] h-[88px] rounded-[12px] overflow-hidden border-[3px] border-[#fb2c36] shadow-[0_0_24px_rgba(251,44,54,0.7)]">
                {/* <ImageWithFallback src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" alt={event.commentator} className="w-full h-full object-cover" /> */}
                <video
                  src="https://res.cloudinary.com/dflnsufit/video/upload/v1781886065/WhatsApp_Video_2026-06-19_at_17.39.04_awqvys.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#fb2c36] px-2 py-0.5 rounded-full whitespace-nowrap">
                <span className="text-white text-[8px] font-bold">{event.commentator}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-[#161616] border-b border-[#1a1a1a] px-4 py-2">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${activeTab === tab ? 'bg-[#c9115f] text-white' : 'bg-[#222] text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ── LIVE CHAT ── */}
          {activeTab === 'Live Chat' && (
            <div className="px-3 py-3 flex flex-col" style={{ minHeight: 420 }}>
              <div ref={chatContainerRef} className="flex-1 space-y-2 mb-3 overflow-y-auto max-h-[320px]">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[75%] flex flex-col ${msg.isOwn ? 'items-end' : 'items-start'}`}>
                      {!msg.isOwn && <span className="text-[#99A1AF] text-[10px] font-semibold mb-1 px-2">{msg.user}</span>}
                      <div className={`rounded-[16px] px-4 py-2.5 ${msg.isOwn ? 'bg-gradient-to-r from-[#c9115f] to-[#cd620e] rounded-br-[4px]' : 'bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-bl-[4px]'}`}>
                        <p className="text-white text-[13px]">{msg.message}</p>
                      </div>
                      <span className="text-[#666] text-[9px] mt-1 px-2">{msg.time}</span>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              <div className="bg-[#0b0b0f] pt-2 pb-1 border-t border-[rgba(255,255,255,0.05)]">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendChat()}
                    placeholder="Send a message..."
                    className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2.5 text-white text-[13px] placeholder:text-[#666] focus:outline-none focus:border-[rgba(201,17,95,0.5)]"
                  />
                  <button
                    onClick={sendChat}
                    className="w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#c9115f] to-[#cd620e] flex items-center justify-center shadow-[0_0_20px_rgba(201,17,95,0.4)] active:scale-95"
                  >
                    <Send className="w-[18px] h-[18px] text-white" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => setHeartCount(c => c + 1)}
                    className="flex items-center gap-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-3 py-1 active:scale-95 transition-transform"
                  >
                    <Heart className="w-[12px] h-[12px] text-[#ff0055] fill-[#ff0055]" />
                    <span className="text-white text-[10px] font-semibold">{(heartCount / 1000).toFixed(1)}K</span>
                  </button>
                  <div className="flex-1 text-[#99A1AF] text-[10px]">
                    <span className="text-[#00c864]">●</span> 8.2K watching now
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── PREDICTIONS ── */}
          {activeTab === 'Prediction' && (
            <div className="px-3 py-4 space-y-4">
              {PREDICTIONS.map((pred, pIdx) => {
                const voted = predVotes[pIdx];
                const counts = predCounts[pIdx];
                const total = counts.reduce((a, b) => a + b, 0);
                return (
                  <div key={pred.id} className="bg-[rgba(255,255,255,0.06)] rounded-[14px] p-4 border border-[rgba(255,255,255,0.12)]">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-white text-[13px] font-semibold flex-1 text-left leading-snug">{pred.question}</h3>
                      <div className="flex items-center gap-2 ml-2">
                        {pred.timerInit && voted === null && (
                          <div className="bg-[rgba(201,17,95,0.2)] border border-[rgba(201,17,95,0.4)] px-2 py-1 rounded-full flex items-center gap-1">
                            <Clock className="w-[9px] h-[9px] text-[#c9115f]" />
                            <span className="text-[#c9115f] text-[9px] font-bold">0:{pred.timerInit}</span>
                          </div>
                        )}
                        <button className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <Share2 className="w-[11px] h-[11px] text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {pred.options.map((opt, oIdx) => {
                        const pct = Math.round((counts[oIdx] / total) * 100);
                        const isSelected = voted === oIdx;
                        const isWinner = voted !== null && counts[oIdx] === Math.max(...counts);
                        return (
                          <button
                            key={oIdx}
                            disabled={voted !== null}
                            onClick={() => votePrediction(pIdx, oIdx)}
                            className="w-full relative rounded-[10px] overflow-hidden border transition-all active:scale-[0.98]"
                            style={{
                              borderColor: isSelected ? '#c9115f' : 'rgba(255,255,255,0.15)',
                              background: 'rgba(255,255,255,0.05)',
                            }}
                          >
                            {voted !== null && (
                              <div
                                className="absolute left-0 top-0 bottom-0 rounded-[10px] transition-all duration-700"
                                style={{
                                  width: `${pct}%`,
                                  background: isSelected
                                    ? 'linear-gradient(90deg, rgba(201,17,95,0.35), rgba(205,98,14,0.35))'
                                    : 'rgba(255,255,255,0.06)',
                                }}
                              />
                            )}
                            <div className="relative flex items-center justify-between px-3 py-2.5">
                              <span className="text-white text-[12px] font-medium">{opt}</span>
                              {voted !== null && (
                                <span className={`text-[12px] font-bold ${isSelected ? 'text-[#c9115f]' : 'text-[#99A1AF]'}`}>{pct}%</span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {voted !== null && (
                      <p className="text-[#99A1AF] text-[10px] mt-2 text-right">{total.toLocaleString()} votes</p>
                    )}
                    {voted === null && (
                      <p className="text-[#4a4a5a] text-[10px] mt-2 text-right">Tap to vote</p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── FLASH QUIZ ── */}
          {activeTab === 'Flash Quiz' && (
            <div className="px-3 py-4 space-y-4">
              {/* Score banner */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[rgba(201,17,95,0.15)] to-[rgba(205,98,14,0.15)] border border-[rgba(201,17,95,0.3)] rounded-[12px] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <Star className="w-[14px] h-[14px] text-[#FFD700] fill-[#FFD700]" />
                  <span className="text-white text-[13px] font-bold">Your Score</span>
                </div>
                <span className="text-[#c9115f] text-[18px] font-bold">{quizScore} pts</span>
              </div>

              {FLASH_QUIZZES.map((quiz, qIdx) => {
                const answered = quizAnswers[qIdx];
                const expired = quizTimers[qIdx] === 0 && answered === null;
                return (
                  <div key={quiz.id} className="bg-[rgba(255,255,255,0.06)] rounded-[14px] p-4 border border-[rgba(255,255,255,0.12)]">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-white text-[13px] font-semibold flex-1 text-left leading-snug">{quiz.question}</h3>
                      <div className="ml-2 flex items-center gap-1">
                        {answered === null && !expired && (
                          <div className={`px-2 py-1 rounded-full flex items-center gap-1 ${quizTimers[qIdx] <= 10 ? 'bg-[rgba(251,44,54,0.2)] border border-[rgba(251,44,54,0.4)]' : 'bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]'}`}>
                            <Clock className={`w-[9px] h-[9px] ${quizTimers[qIdx] <= 10 ? 'text-[#fb2c36]' : 'text-white'}`} />
                            <span className={`text-[9px] font-bold ${quizTimers[qIdx] <= 10 ? 'text-[#fb2c36]' : 'text-white'}`}>0:{String(quizTimers[qIdx]).padStart(2, '0')}</span>
                          </div>
                        )}
                        {answered !== null && (
                          <div className={`px-2 py-1 rounded-full flex items-center gap-1 ${answered === quiz.correct ? 'bg-[rgba(0,200,100,0.2)] border border-[rgba(0,200,100,0.4)]' : 'bg-[rgba(251,44,54,0.2)] border border-[rgba(251,44,54,0.4)]'}`}>
                            {answered === quiz.correct
                              ? <Check className="w-[10px] h-[10px] text-[#00c864]" />
                              : <X className="w-[10px] h-[10px] text-[#fb2c36]" />
                            }
                            <span className={`text-[9px] font-bold ${answered === quiz.correct ? 'text-[#00c864]' : 'text-[#fb2c36]'}`}>
                              {answered === quiz.correct ? `+${quiz.points}` : 'Wrong'}
                            </span>
                          </div>
                        )}
                        {expired && (
                          <div className="px-2 py-1 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]">
                            <span className="text-[#99A1AF] text-[9px] font-bold">Time's up</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {quiz.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === quiz.correct;
                        const isSelected = answered === oIdx;
                        let bg = 'bg-[rgba(255,255,255,0.07)] border-[rgba(255,255,255,0.15)]';
                        if (answered !== null || expired) {
                          if (isCorrect) bg = 'bg-[rgba(0,200,100,0.15)] border-[rgba(0,200,100,0.5)]';
                          else if (isSelected) bg = 'bg-[rgba(251,44,54,0.15)] border-[rgba(251,44,54,0.5)]';
                          else bg = 'bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] opacity-50';
                        }
                        return (
                          <button
                            key={oIdx}
                            disabled={answered !== null || expired}
                            onClick={() => answerQuiz(qIdx, oIdx)}
                            className={`rounded-[10px] border px-3 py-2.5 text-left transition-all active:scale-95 ${bg}`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-white text-[11px] font-medium">{opt}</span>
                              {(answered !== null || expired) && isCorrect && <Check className="w-[12px] h-[12px] text-[#00c864]" />}
                              {answered !== null && isSelected && !isCorrect && <X className="w-[12px] h-[12px] text-[#fb2c36]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── EMOJI STORM ── */}
          {activeTab === 'Emoji Storm' && (
            <div className="px-3 py-4 relative overflow-hidden">
              {/* Floating burst */}
              {burst && (
                <div
                  key={burst.id}
                  className="absolute text-[32px] pointer-events-none z-50 animate-bounce"
                  style={{ left: `${burst.x}%`, bottom: '60%', animation: 'floatUp 0.9s ease-out forwards' }}
                >
                  {burst.emoji}
                </div>
              )}

              <div className="bg-[rgba(255,255,255,0.06)] rounded-[14px] p-4 border border-[rgba(255,255,255,0.12)] mb-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white text-[14px] font-bold">React to the Action!</h3>
                  <button className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                    <Share2 className="w-[11px] h-[11px] text-white" />
                  </button>
                </div>
                <p className="text-[#99A1AF] text-[11px] mb-4">Tap emojis to react live</p>

                <div className="grid grid-cols-4 gap-3 mb-4">
                  {EMOJI_OPTIONS.map((emoji, idx) => (
                    <button
                      key={idx}
                      onClick={() => tapEmoji(emoji, idx)}
                      className="flex flex-col items-center gap-1 aspect-square bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] rounded-[12px] justify-center hover:bg-[rgba(255,255,255,0.14)] hover:scale-110 active:scale-95 transition-all"
                    >
                      <span className="text-[26px]">{emoji}</span>
                      <span className="text-[#99A1AF] text-[9px] font-semibold">{emojiCounts[idx] >= 1000 ? `${(emojiCounts[idx] / 1000).toFixed(1)}K` : emojiCounts[idx]}</span>
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  {EMOJI_OPTIONS
                    .map((emoji, idx) => ({ emoji, count: emojiCounts[idx] }))
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 3)
                    .map(({ emoji, count }, rank) => (
                      <div key={emoji} className="flex items-center gap-2">
                        <span className="text-[#4a4a5a] text-[10px] w-4">#{rank + 1}</span>
                        <span className="text-[18px]">{emoji}</span>
                        <div className="flex-1 h-[4px] rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#c9115f] to-[#cd620e]"
                            style={{ width: `${Math.round((count / totalReactions) * 100)}%` }}
                          />
                        </div>
                        <span className="text-[#99A1AF] text-[10px] w-8 text-right">{count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="p-3 bg-[rgba(201,17,95,0.1)] rounded-[10px] border border-[rgba(201,17,95,0.25)] flex items-center justify-between">
                <div>
                  <p className="text-[#c9115f] text-[12px] font-semibold">🔥 {totalReactions.toLocaleString()} total reactions!</p>
                  <p className="text-[#99A1AF] text-[10px] mt-0.5">Most popular: {topEmoji}</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#00c864] animate-pulse" />
                  <span className="text-[#00c864] text-[10px] font-semibold">Live</span>
                </div>
              </div>
            </div>
          )}

          {/* Event info */}
          <div className="px-4 py-4 bg-[rgba(255,255,255,0.02)]">
            <h2 className="text-white text-[18px] font-bold mb-1">{event.title}</h2>
            <p className="text-[#99A1AF] text-[13px] mb-4">{event.subtitle}</p>
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center shadow-[0_0_15px_rgba(201,17,95,0.4)]">
                <Trophy className="w-[20px] h-[20px] text-white" />
              </div>
              <div>
                <p className="text-white text-[13px] font-semibold">Earn SXP Points</p>
                <p className="text-[#99A1AF] text-[11px]">Predict, quiz & react to earn</p>
              </div>
            </div>
          </div>
        </div>



        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-120px) scale(1.5); opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
}
