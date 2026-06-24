import { useNavigate, useLocation } from 'react-router';
import { ChevronLeft, Sparkles, Plus, Mic, Paperclip, Send, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';

interface Message {
  type: 'user' | 'ai';
  content: string;
  data?: any;
}

export default function AskAIChat() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialQuery = location.state?.query || '';

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (initialQuery) {
      const aiResponse = generateAIResponse(initialQuery);
      setMessages([
        { type: 'user', content: initialQuery },
        aiResponse,
      ]);
    }
  }, [initialQuery]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage = inputValue.trim();
      setMessages([...messages, { type: 'user', content: userMessage }]);
      setInputValue('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = generateAIResponse(userMessage);
        setMessages(prev => [...prev, aiResponse]);
      }, 800);
    }
  };

  const generateAIResponse = (query: string): Message => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('100m') || lowerQuery.includes('100 m') || lowerQuery.includes('fastest 100')) {
      return {
        type: 'ai',
        content: 'Fastest 100m Athletes — 2025 World Leaders',
        data: {
          type: 'athlete-ranking',
          subtitle: 'Based on 2025 season best performances',
          statLabel: 'Time',
          statSuffix: '',
          stats: { best: '9.79s', avg: '9.86s', count: 5 },
          athletes: [
            { rank: 1, name: 'Noah Lyles', country: 'USA', flag: '🇺🇸', distance: '9.79s', trend: 'up', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&fit=crop&auto=format' },
            { rank: 2, name: 'Kishane Thompson', country: 'Jamaica', flag: '🇯🇲', distance: '9.80s', trend: 'up', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&fit=crop&auto=format' },
            { rank: 3, name: 'Fred Kerley', country: 'USA', flag: '🇺🇸', distance: '9.83s', trend: 'down', image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&fit=crop&auto=format' },
            { rank: 4, name: 'Marcell Jacobs', country: 'Italy', flag: '🇮🇹', distance: '9.85s', trend: 'up', image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&fit=crop&auto=format' },
            { rank: 5, name: 'Ferdinand Omanyala', country: 'Kenya', flag: '🇰🇪', distance: '9.86s', trend: 'up', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&fit=crop&auto=format' },
          ],
        },
      };
    }

    if (lowerQuery.includes('javelin') || lowerQuery.includes('thrower')) {
      return {
        type: 'ai',
        content: 'Top 5 Javelin Throwers — 2025 Season',
        data: {
          type: 'athlete-ranking',
          subtitle: 'Based on 2025 season best performances',
          statLabel: 'Distance',
          statSuffix: 'm',
          stats: { best: '88.13m', avg: '85.33m', count: 5 },
          athletes: [
            { rank: 1, name: 'Neeraj Chopra', country: 'India', flag: '🇮🇳', distance: '88.13m', trend: 'up', image: 'https://images.unsplash.com/photo-1706889393102-03f883b80e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
            { rank: 2, name: 'Anderson Peters', country: 'Grenada', flag: '🇬🇩', distance: '86.89m', trend: 'up', image: 'https://images.unsplash.com/photo-1744035858093-d8de2d27ec15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
            { rank: 3, name: 'Jakub Vadlejch', country: 'Czech Republic', flag: '🇨🇿', distance: '85.73m', trend: 'down', image: 'https://images.unsplash.com/photo-1769878519806-305883b6f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
            { rank: 4, name: 'Julian Weber', country: 'Germany', flag: '🇩🇪', distance: '85.30m', trend: 'up', image: 'https://images.unsplash.com/photo-1769878519950-b54af2874b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
            { rank: 5, name: 'Arshad Nadeem', country: 'Pakistan', flag: '🇵🇰', distance: '84.62m', trend: 'up', image: 'https://images.unsplash.com/photo-1769708046817-84dc9066baba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
          ],
        },
      };
    }

    // Check for different query types
    if (lowerQuery.includes('compare') || lowerQuery.includes('vs')) {
      return {
        type: 'ai',
        content: 'Athlete Comparison',
        data: {
          type: 'comparison',
          text: 'Here\'s a detailed comparison of the athletes you requested. Both have shown exceptional performance in their respective events with consistent improvements over the season.'
        }
      };
    }

    if (lowerQuery.includes('record') || lowerQuery.includes('best')) {
      return {
        type: 'ai',
        content: 'Records & Best Performances',
        data: {
          type: 'records',
          text: 'Current records show outstanding achievements across multiple events. The javelin throw record stands at 89.94m (Jan Železný, 1996), while the 100m record is 9.58s (Usain Bolt, 2009).'
        }
      };
    }

    if (lowerQuery.includes('medal') || lowerQuery.includes('gold') || lowerQuery.includes('silver') || lowerQuery.includes('bronze')) {
      return {
        type: 'ai',
        content: 'Medal History & Statistics',
        data: {
          type: 'medals',
          text: 'India has won multiple medals in athletics at Commonwealth Games. Neeraj Chopra won gold at Tokyo 2020 Olympics with a throw of 87.58m, making history as the first Indian to win an Olympic gold in athletics.'
        }
      };
    }

    if (lowerQuery.includes('trend') || lowerQuery.includes('performance') || lowerQuery.includes('improvement')) {
      return {
        type: 'ai',
        content: 'Performance Trends',
        data: {
          type: 'trends',
          text: 'Recent performance trends show significant improvements in throwing events, with consistent personal bests being achieved. Athletes are showing 5-8% improvement year-over-year in key metrics.'
        }
      };
    }

    if (lowerQuery.includes('schedule') || lowerQuery.includes('upcoming') || lowerQuery.includes('event')) {
      return {
        type: 'ai',
        content: 'Upcoming Events & Schedule',
        data: {
          type: 'schedule',
          text: 'Commonwealth Games 2026 is scheduled for Glasgow, Scotland. Key athletics events include 100m, 200m, javelin throw, and relay races. The event is 247 days away with India targeting 70+ medals.'
        }
      };
    }

    // Default response
    return {
      type: 'ai',
      content: 'AI Response',
      data: {
        type: 'general',
        text: `I can help you with information about athletes, records, medals, schedules, and performance trends. ${query.length > 50 ? 'Your question is quite detailed - ' : ''}Here's what I found: Athletics data shows continuous improvements across all major events. Would you like specific details about any athlete or event?`
      }
    };
  };

  const followUpChips = [
    'Compare athletes',
    'Show records',
    'Medal history',
    'Performance trends',
  ];

  return (
    <div className="bg-[#050505] w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#050505] relative flex flex-col min-h-screen">
        {/* Top Navigation */}
        <div className="sticky top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)]">
          <div className="h-[56px] flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/ask-ai')}
                className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              >
                <ChevronLeft className="w-[18px] h-[18px] text-white" />
              </button>

              <h1 className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif] bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-[16px] h-[16px] text-[#FF7A00]" />
                ASK AI
              </h1>
            </div>

            <button className="w-[36px] h-[36px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] flex items-center justify-center shadow-[0_0_20px_rgba(255,122,0,0.3)]">
              <Plus className="w-[18px] h-[18px] text-white" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 pb-[120px]">
          {messages.map((message, idx) => (
            <div key={idx} className="mb-6">
              {message.type === 'user' ? (
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] rounded-[20px] rounded-tr-[4px] px-5 py-3 max-w-[280px] shadow-[0_0_20px_rgba(255,122,0,0.2)]">
                    <p className="text-white text-[15px] leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ) : (
                <div className="flex justify-start">
                  <div className="max-w-[340px]">
                    {message.data?.type === 'general' || message.data?.type === 'comparison' || message.data?.type === 'records' || message.data?.type === 'medals' || message.data?.type === 'trends' || message.data?.type === 'schedule' ? (
                      <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden">
                        <div className="bg-gradient-to-r from-[rgba(255,122,0,0.1)] to-[rgba(255,77,166,0.1)] p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] flex items-center justify-center">
                              <Sparkles className="w-[16px] h-[16px] text-white" />
                            </div>
                            <h3 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif]">
                              {message.content}
                            </h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-[#d1d5dc] text-[14px] leading-relaxed">{message.data.text}</p>
                        </div>
                      </div>
                    ) : null}
                    {message.data?.type === 'athlete-ranking' && (
                      <div className="bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[rgba(255,122,0,0.1)] to-[rgba(255,77,166,0.1)] p-4 border-b border-[rgba(255,255,255,0.05)]">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] flex items-center justify-center">
                              <Sparkles className="w-[16px] h-[16px] text-white" />
                            </div>
                            <h3 className="text-white text-[16px] font-bold font-['Inter:Bold',sans-serif]">
                              {message.content}
                            </h3>
                          </div>
                            <p className="text-[#999999] text-[12px]">{message.data.subtitle || 'Based on 2025 season best performances'}</p>
                        </div>

                        {/* Athletes List */}
                        <div className="p-3 space-y-2">
                          {message.data.athletes.map((athlete: any, athleteIdx: number) => (
                            <div
                              key={athleteIdx}
                              className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[12px] p-3 hover:border-[rgba(255,122,0,0.2)] transition-all"
                            >
                              <div className="flex items-center gap-3">
                                {/* Rank */}
                                <div className="w-[32px] h-[32px] shrink-0 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF4DA6] flex items-center justify-center shadow-lg">
                                  <span className="text-white text-[14px] font-bold font-['Inter:Bold',sans-serif]">
                                    {athlete.rank}
                                  </span>
                                </div>

                                {/* Avatar */}
                                <div className="w-[44px] h-[44px] shrink-0 rounded-full overflow-hidden border-2 border-[rgba(255,122,0,0.3)]">
                                  <ImageWithFallback
                                    src={athlete.image}
                                    alt={athlete.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <p className="text-white text-[14px] font-semibold font-['Inter:Semi_Bold',sans-serif] truncate">
                                      {athlete.name}
                                    </p>
                                    <span className="text-[16px]">{athlete.flag}</span>
                                  </div>
                                  <p className="text-[#999999] text-[11px]">{athlete.country}</p>
                                </div>

                                {/* Distance & Trend */}
                                <div className="text-right shrink-0">
                                  <p className="text-white text-[15px] font-bold font-['Inter:Bold',sans-serif] mb-0.5">
                                    {athlete.distance}
                                  </p>
                                  <div className="flex items-center justify-end gap-1">
                                    {athlete.trend === 'up' ? (
                                      <ArrowUp className="w-[12px] h-[12px] text-[#06FFA5]" />
                                    ) : (
                                      <ArrowDown className="w-[12px] h-[12px] text-[#FF4DA6]" />
                                    )}
                                    <span
                                      className={`text-[10px] font-semibold ${
                                        athlete.trend === 'up' ? 'text-[#06FFA5]' : 'text-[#FF4DA6]'
                                      }`}
                                    >
                                      {athlete.trend === 'up' ? 'Rising' : 'Falling'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Stats Summary */}
                        <div className="p-4 border-t border-[rgba(255,255,255,0.05)] bg-[rgba(255,122,0,0.02)]">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="text-center">
                              <p className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif]">
                                  {message.data.stats?.best || '88.13m'}
                              </p>
                                <p className="text-[#999999] text-[10px]">Best</p>
                            </div>
                            <div className="text-center border-x border-[rgba(255,255,255,0.05)]">
                              <p className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif]">
                                  {message.data.stats?.avg || '85.33m'}
                              </p>
                              <p className="text-[#999999] text-[10px]">Average</p>
                            </div>
                            <div className="text-center">
                                <p className="text-white text-[18px] font-bold font-['Inter:Bold',sans-serif]">{message.data.stats?.count || 5}</p>
                              <p className="text-[#999999] text-[10px]">Athletes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Follow-up Chips */}
                    {idx === messages.length - 1 && (
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {followUpChips.map((chip, chipIdx) => (
                          <button
                            key={chipIdx}
                            onClick={() => {
                              const userMessage = chip;
                              setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
                              setTimeout(() => {
                                const aiResponse = generateAIResponse(userMessage);
                                setMessages(prev => [...prev, aiResponse]);
                              }, 800);
                            }}
                            className="bg-[#111111] border border-[rgba(255,122,0,0.2)] rounded-full px-3 py-1.5 text-[#FF7A00] text-[12px] font-semibold hover:bg-[rgba(255,122,0,0.1)] transition-all active:scale-95"
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>



      </div>
    </div>
  );
}
