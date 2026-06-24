import { useNavigate } from 'react-router';
import { User, Bell, Mic, Send, Sparkles, TrendingUp, Trophy, Medal, Clock, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function AskAI() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    { icon: TrendingUp, text: 'Fastest 100m athletes', gradient: 'from-[#FF7A00] to-[#FF4DA6]' },
    { icon: Trophy, text: 'Top 5 javelin throwers in 2025', gradient: 'from-[#FFD700] to-[#FF7A00]' },
    { icon: Medal, text: 'Neeraj Chopra stats', gradient: 'from-[#FF4DA6] to-[#9D4EDD]' },
    { icon: Clock, text: 'Upcoming athletics events', gradient: 'from-[#06FFA5] to-[#00B4D8]' },
    { icon: Trophy, text: 'CWG 2026 schedule', gradient: 'from-[#FF7A00] to-[#FF4DA6]' },
    { icon: Medal, text: 'World record holders', gradient: 'from-[#9D4EDD] to-[#FF4DA6]' },
  ];

  const handleAsk = () => {
    if (inputValue.trim()) {
      navigate('/ask-ai-chat', { state: { query: inputValue } });
    }
  };

  const handleSuggestionClick = (text: string) => {
    navigate('/ask-ai-chat', { state: { query: text } });
  };

  return (
    <div className="bg-[#050505] w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px]  bg-[#050505] relative flex flex-col min-h-screen">
        {/* Top Navigation */}
        <div className="sticky top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)]">
          <div className="h-[56px] flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              >
                <ChevronLeft className="w-[18px] h-[18px] text-white" />
              </button>

              <h1 className="text-white text-[20px] font-bold font-['Inter:Bold',sans-serif] bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-[20px] h-[20px] text-[#FF7A00]" />
                ASK AI
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full p-2 hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <Bell className="w-[16px] h-[16px] text-white" />
                <div className="absolute -top-1 -right-1 bg-[#FF4DA6] rounded-full w-[16px] h-[16px] flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">2</span>
                </div>
              </button>

              <button className="w-[32px] h-[32px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#111111] flex items-center justify-center overflow-hidden">
                  <User className="w-[16px] h-[16px] text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Subtle track lanes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-[1px] w-full bg-white"
                  style={{ top: `${15 + i * 15}%` }}
                />
              ))}
            </div>

            {/* Glow particles */}
            <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] bg-[#FF7A00] opacity-[0.08] rounded-full blur-[100px]" />
            <div className="absolute top-[60%] right-[10%] w-[250px] h-[250px] bg-[#FF4DA6] opacity-[0.06] rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] left-[20%] w-[180px] h-[180px] bg-[#06FFA5] opacity-[0.05] rounded-full blur-[90px]" />
          </div>

          {/* Hero Section */}
          <div className="relative z-10 text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF4DA6] p-[2px] shadow-[0_0_40px_rgba(255,122,0,0.4)]">
                <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
                  <Sparkles className="w-[40px] h-[40px] text-[#FF7A00]" />
                </div>
              </div>
            </div>

            <h1 className="text-white text-[28px] font-bold font-['Inter:Bold',sans-serif] mb-3 leading-tight">
              Your AI companion for<br />athletics & Commonwealth<br />Games
            </h1>

            <p className="text-[#999999] text-[15px] leading-relaxed max-w-[320px] mx-auto">
              Ask about athletes, medals, records, schedules, and performance insights.
            </p>
          </div>
        </div>

        {/* Smart Suggestions - Fixed above input */}
        <div className="fixed bottom-[100px] pb-12 left-0 right-0 z-40">
          <div className="w-full max-w-[390px] mx-auto px-4">
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-3">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(suggestion.text)}
                  className="min-w-[180px] bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-3 hover:border-[rgba(255,122,0,0.3)] transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-[32px] h-[32px] rounded-full bg-gradient-to-r ${suggestion.gradient} flex items-center justify-center shadow-lg`}>
                      <suggestion.icon className="w-[16px] h-[16px] text-white" />
                    </div>
                  </div>
                  <p className="text-white text-[13px] font-semibold text-left group-hover:text-[#FF7A00] transition-colors">
                    {suggestion.text}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* AI Input Bar - Fixed at bottom */}
        <div className="fixed bottom-0  left-0 pb-16 right-0 z-50 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent pt-4 pb-6">
          <div className="w-full max-w-[390px] mx-auto px-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] rounded-full blur-xl opacity-30" />

              <div className="relative bg-[#111111] border border-[rgba(255,122,0,0.3)] rounded-full h-[58px] flex items-center px-4 gap-3 shadow-[0_0_30px_rgba(255,122,0,0.2)]">
                <button className="w-[36px] h-[36px] rounded-full bg-[rgba(255,122,0,0.1)] border border-[rgba(255,122,0,0.2)] flex items-center justify-center hover:bg-[rgba(255,122,0,0.2)] transition-colors">
                  <Mic className="w-[18px] h-[18px] text-[#FF7A00]" />
                </button>

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                  placeholder="Ask about athletes, events, records..."
                  className="flex-1 bg-transparent text-white text-[15px] placeholder:text-[#666666] focus:outline-none"
                />

                <button
                  onClick={handleAsk}
                  className="w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4DA6] flex items-center justify-center shadow-[0_0_20px_rgba(255,122,0,0.4)] hover:shadow-[0_0_25px_rgba(255,122,0,0.6)] transition-all active:scale-95"
                >
                  <Send className="w-[18px] h-[18px] text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
