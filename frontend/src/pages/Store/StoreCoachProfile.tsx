import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Star, Clock, Share2, Bookmark, Award, Shield, MessageCircle, ChevronDown, ChevronUp, CheckCircle, Zap } from 'lucide-react';
import { useState } from 'react';

const coachData: Record<string, {
  id: number; name: string; role: string; experience: string; rating: number; reviews: number;
  sessionsCompleted: number; price: string; nextSlot: string; image: string; verified: boolean;
  tagline: string; about: string; achievements: string[]; certifications: string[];
  services: { title: string; duration: string; price: string; desc: string }[];
  slots: { date: string; day: string; num: number; times: string[] }[];
  reviewList: { user: string; rating: number; comment: string; date: string }[];
}> = {
  '1': {
    id: 1, name: 'Ravi Singh', role: 'Head Athletics Coach', experience: '15 yrs',
    rating: 4.9, reviews: 312, sessionsCompleted: 1240, price: '₹1,800/hr', nextSlot: 'Today 4PM',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=900&fit=crop&auto=format&q=80',
    verified: true,
    tagline: 'Trained 3 CWG qualifiers · 12 national champions',
    about: "Former national-level javelin athlete turned elite coach. Specializes in technical refinement, competition preparation, and mental conditioning for high-performance athletes.",
    achievements: ['3x National Championship Coach Award', 'Asian Athletics Federation Certified', 'Trained 3 CWG 2026 qualifiers', '12+ national record breakthroughs'],
    certifications: ['IAAF Level 3 Coach', 'Sports Science MSc – Loughborough', 'SAI Coaching License', 'NSCA Certified Strength Coach'],
    services: [
      { title: 'Technique Analysis', duration: '60 min', price: '₹1,800', desc: 'Video-based biomechanical breakdown of your form with actionable fixes.' },
      { title: 'Competition Prep', duration: '90 min', price: '₹2,500', desc: 'Peak performance strategy with mental prep and race-day plan.' },
      { title: 'Monthly Mentorship', duration: '4 sessions', price: '₹6,500', desc: 'Structured monthly coaching with progress tracking.' },
    ],
    slots: [
      { date: 'Today', day: 'Mon', num: 16, times: ['4:00 PM', '5:30 PM', '7:00 PM'] },
      { date: 'Tue', day: 'Tue', num: 17, times: ['9:00 AM', '11:00 AM', '3:00 PM'] },
      { date: 'Thu', day: 'Thu', num: 19, times: ['10:00 AM', '2:00 PM', '6:00 PM'] },
      { date: 'Fri', day: 'Fri', num: 20, times: ['8:00 AM', '4:30 PM'] },
      { date: 'Sat', day: 'Sat', num: 21, times: ['9:00 AM', '11:30 AM', '1:00 PM'] },
    ],
    reviewList: [
      { user: 'Arjun M.', rating: 5, comment: "Completely transformed my javelin release angle. Went from 72m to 81m in 3 months!", date: '2 days ago' },
      { user: 'Pooja K.', rating: 5, comment: "Incredibly detail-oriented. His video analysis is unlike anything I've experienced.", date: '1 week ago' },
      { user: 'Santosh R.', rating: 4, comment: "Very professional and motivating. Highly recommend for serious athletes.", date: '2 weeks ago' },
    ],
  },
  '2': {
    id: 2, name: 'Priya Sharma', role: 'Sports Nutritionist', experience: '10 yrs',
    rating: 4.8, reviews: 278, sessionsCompleted: 890, price: '₹1,200/hr', nextSlot: 'Tomorrow 10AM',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=900&fit=crop&auto=format&q=80',
    verified: true,
    tagline: 'Nutritionist for India Athletics Team 2024',
    about: "RD-certified sports nutritionist with a decade of experience working with elite track and field athletes. Specializes in periodized nutrition and competition fueling.",
    achievements: ['Nutritionist for India Athletics Team 2024', '4 national athletes on optimized plans', 'Published researcher in sports dietetics', 'IOC Diploma in Sports Nutrition'],
    certifications: ['Registered Dietitian (RD)', 'IOC Diploma in Sports Nutrition', 'NSCA Certified Performance Nutrition', 'Sports Science BSc – Delhi University'],
    services: [
      { title: 'Nutrition Assessment', duration: '60 min', price: '₹1,200', desc: 'Comprehensive diet analysis with personalized macro targets.' },
      { title: 'Competition Fueling Plan', duration: '45 min', price: '₹1,800', desc: 'Pre/during/post-competition nutrition strategy for your event.' },
      { title: 'Monthly Nutrition Plan', duration: '4 check-ins', price: '₹4,200', desc: 'Full-month periodized nutrition with weekly adjustments.' },
    ],
    slots: [
      { date: 'Tue', day: 'Tue', num: 17, times: ['10:00 AM', '11:30 AM', '2:00 PM'] },
      { date: 'Wed', day: 'Wed', num: 18, times: ['9:00 AM', '12:00 PM'] },
      { date: 'Thu', day: 'Thu', num: 19, times: ['10:00 AM', '3:00 PM', '5:00 PM'] },
      { date: 'Fri', day: 'Fri', num: 20, times: ['11:00 AM', '2:30 PM'] },
    ],
    reviewList: [
      { user: 'Megha T.', rating: 5, comment: "Priya's plan helped me shave 0.3s off my 400m time. Nutrition is everything!", date: '3 days ago' },
      { user: 'Deepak S.', rating: 5, comment: "Finally a nutritionist who understands athlete schedules. Worth every rupee.", date: '1 week ago' },
      { user: 'Rina P.', rating: 4, comment: "Very responsive and knowledgeable. The competition fueling plan was a game changer.", date: '3 weeks ago' },
    ],
  },
};

const defaultCoach = coachData['1'];

export default function StoreCoachProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const coach = coachData[id || '1'] || defaultCoach;

  const [saved, setSaved] = useState(false);
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState(0);

  const currentSlot = coach.slots[selectedDateIdx];

  return (
    <div className="bg-black w-full flex justify-center h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">

        {/* ─── HERO ─────────────────────────────────────────── */}
        <div className="relative flex-shrink-0" style={{ height: 250 }}>
          <img
            src={coach.image}
            alt={coach.name}
            className="w-full h-full object-cover object-top"
          />
          {/* layered gradients for depth */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 35%, rgba(11,11,15,0.7) 70%, #0b0b0f 100%)' }} />
          {/* subtle vignette sides */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)' }} />

          {/* top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-12">
            <button
              onClick={() => navigate(-1)}
              className="w-[38px] h-[38px] rounded-full backdrop-blur-md flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.14)' }}
            >
              <ArrowLeft className="w-[18px] h-[18px] text-white" />
            </button>
            <div className="flex gap-2">
              <button
                className="w-[38px] h-[38px] rounded-full backdrop-blur-md flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <Share2 className="w-[15px] h-[15px] text-white" />
              </button>
              <button
                onClick={() => setSaved(s => !s)}
                className="w-[38px] h-[38px] rounded-full backdrop-blur-md flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <Bookmark
                  className="w-[15px] h-[15px]"
                  style={{ color: saved ? '#c9115f' : 'white', fill: saved ? '#c9115f' : 'none' }}
                />
              </button>
            </div>
          </div>

          {/* name + role on hero */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-5">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-white text-[26px] font-bold leading-none">{coach.name}</h1>
              {coach.verified && (
                <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)' }}>
                  <span className="text-white text-[10px] font-bold">✓</span>
                </div>
              )}
            </div>
            <p className="text-[rgba(255,255,255,0.65)] text-[13px]">{coach.role}</p>
            <p className="text-[rgba(255,255,255,0.45)] text-[11px] mt-0.5">{coach.tagline}</p>
          </div>
        </div>

        {/* ─── STATS STRIP ──────────────────────────────────── */}
        <div className="mx-4 mt-1 mb-4 rounded-[18px] overflow-hidden" style={{ background: 'linear-gradient(135deg,rgba(201,17,95,0.18),rgba(205,98,14,0.18))', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex divide-x divide-[rgba(255,255,255,0.08)]">
            {[
              { label: 'Rating', value: `${coach.rating}★`, sub: `${coach.reviews} reviews` },
              { label: 'Experience', value: coach.experience, sub: 'field expertise' },
              { label: 'Sessions', value: `${(coach.sessionsCompleted / 1000).toFixed(1)}k`, sub: 'completed' },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 py-3 flex flex-col items-center gap-0.5">
                <p className="text-white text-[16px] font-bold leading-none">{stat.value}</p>
                <p className="text-[rgba(255,255,255,0.5)] text-[10px]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SCROLLABLE BODY ──────────────────────────────── */}
        <div className="flex-1 overflow-y-auto pb-40 no-scrollbar">

          {/* ── Date Picker ─────────────────────────────────── */}
          <div className="mb-5">
            <div className="flex items-center justify-between px-4 mb-3">
              <p className="text-white text-[14px] font-bold">Select Date</p>
              <div className="flex items-center gap-1">
                <div className="w-[6px] h-[6px] rounded-full bg-[#00c864]" />
                <span className="text-[#00c864] text-[11px] font-medium">{coach.slots.length} days available</span>
              </div>
            </div>
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar px-4 pb-1">
              {coach.slots.map((slot, i) => {
                const active = selectedDateIdx === i;
                return (
                  <button
                    key={i}
                    onClick={() => { setSelectedDateIdx(i); setSelectedTime(null); }}
                    className="flex-shrink-0 flex flex-col items-center rounded-[14px] py-3 px-3.5 transition-all"
                    style={{
                      minWidth: 60,
                      background: active ? 'linear-gradient(135deg,#c9115f,#cd620e)' : 'rgba(255,255,255,0.05)',
                      border: active ? '1px solid rgba(201,17,95,0.6)' : '1px solid rgba(255,255,255,0.08)',
                      boxShadow: active ? '0 0 14px rgba(201,17,95,0.35)' : 'none',
                    }}
                  >
                    <span className="text-[10px] font-semibold" style={{ color: active ? 'rgba(255,255,255,0.8)' : '#99A1AF' }}>{slot.day}</span>
                    <span className="text-[20px] font-bold leading-none mt-0.5" style={{ color: 'white' }}>{slot.num}</span>
                    <span className="text-[9px] mt-1 font-semibold rounded-full px-1.5 py-0.5" style={{ background: active ? 'rgba(255,255,255,0.2)' : 'rgba(0,200,100,0.15)', color: active ? 'white' : '#00c864' }}>
                      {slot.times.length} slots
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Time Picker ─────────────────────────────────── */}
          <div className="mb-6 px-4">
            <p className="text-white text-[14px] font-bold mb-3">Select Time</p>
            <div className="flex flex-wrap gap-2">
              {currentSlot.times.map((time) => {
                const active = selectedTime === time;
                return (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className="rounded-full px-4 py-2 text-[13px] font-semibold transition-all"
                    style={{
                      background: active ? 'linear-gradient(135deg,#c9115f,#cd620e)' : 'rgba(255,255,255,0.06)',
                      border: active ? '1px solid rgba(201,17,95,0.6)' : '1px solid rgba(255,255,255,0.1)',
                      color: active ? 'white' : '#c8c8d0',
                      boxShadow: active ? '0 0 12px rgba(201,17,95,0.4)' : 'none',
                    }}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Services ────────────────────────────────────── */}
          {/* <div className="mb-6 px-4">
            <p className="text-white text-[14px] font-bold mb-3">Choose Service</p>
            <div className="flex flex-col gap-2.5">
              {coach.services.map((svc, i) => {
                const active = selectedService === i;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedService(i)}
                    className="w-full text-left rounded-[16px] p-4 transition-all"
                    style={{
                      background: active ? 'rgba(201,17,95,0.09)' : '#111116',
                      border: active ? '1px solid rgba(201,17,95,0.4)' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-white text-[14px] font-semibold">{svc.title}</p>
                          {i === 0 && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: '#c9115f', color: 'white' }}>POPULAR</span>}
                        </div>
                        <p className="text-[#99A1AF] text-[11px] mt-0.5">⏱ {svc.duration}</p>
                        <p className="text-[#a0a0b0] text-[12px] mt-1.5 leading-snug">{svc.desc}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <p className="text-transparent bg-clip-text text-[16px] font-bold" style={{ backgroundImage: 'linear-gradient(135deg,#c9115f,#cd620e)' }}>{svc.price}</p>
                        {active && (
                          <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)' }}>
                            <CheckCircle className="w-[12px] h-[12px] text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div> */}

          {/* ── About ───────────────────────────────────────── */}
          <div className="mb-6 px-4">
            <p className="text-white text-[14px] font-bold mb-2">About</p>
            <p className={`text-[#a8a8b8] text-[13px] leading-relaxed ${!expandedAbout ? 'line-clamp-3' : ''}`}>
              {coach.about}
            </p>
            <button
              onClick={() => setExpandedAbout(e => !e)}
              className="flex items-center gap-1 text-[12px] font-semibold mt-2"
              style={{ color: '#c9115f' }}
            >
              {expandedAbout ? <><ChevronUp className="w-[12px] h-[12px]" />Show less</> : <><ChevronDown className="w-[12px] h-[12px]" />Read more</>}
            </button>
          </div>

          {/* ── Achievements ────────────────────────────────── */}
          <div className="mb-6 px-4">
            <p className="text-white text-[14px] font-bold mb-3">Achievements</p>
            <div className="grid grid-cols-2 gap-2">
              {coach.achievements.map((a, i) => (
                <div
                  key={i}
                  className="rounded-[12px] p-3 flex items-start gap-2"
                  style={{ background: 'rgba(201,17,95,0.07)', border: '1px solid rgba(201,17,95,0.16)' }}
                >
                  <Award className="w-[13px] h-[13px] flex-shrink-0 mt-0.5" style={{ color: '#c9115f' }} />
                  <p className="text-[#d8d8e8] text-[11px] leading-snug">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Certifications ──────────────────────────────── */}
          <div className="mb-6 px-4">
            <p className="text-white text-[14px] font-bold mb-3">Certifications</p>
            <div className="flex flex-col gap-2">
              {coach.certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 rounded-[12px] p-3" style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <Shield className="w-[14px] h-[14px] flex-shrink-0" style={{ color: '#cd620e' }} />
                  <span className="text-[#d0d0e0] text-[13px]">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Reviews ─────────────────────────────────────── */}
          <div className="mb-6 px-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white text-[14px] font-bold">Reviews</p>
              <div className="flex items-center gap-1">
                <Star className="w-[13px] h-[13px] text-[#FFD700] fill-[#FFD700]" />
                <span className="text-[#FFD700] text-[13px] font-bold">{coach.rating}</span>
                <span className="text-[#99A1AF] text-[11px]"> / 5</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {coach.reviewList.map((rev, i) => (
                <div key={i} className="rounded-[14px] p-4" style={{ background: '#111116', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)' }}>
                        <span className="text-white text-[13px] font-bold">{rev.user[0]}</span>
                      </div>
                      <div>
                        <p className="text-white text-[13px] font-semibold leading-none">{rev.user}</p>
                        <p className="text-[#4a4a5a] text-[10px] mt-0.5">{rev.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: rev.rating }).map((_, j) => (
                        <Star key={j} className="w-[10px] h-[10px] text-[#FFD700] fill-[#FFD700]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#a8a8b8] text-[12px] leading-relaxed">"{rev.comment}"</p>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-1.5 text-[12px] font-semibold mt-3" style={{ color: '#c9115f' }}>
              <MessageCircle className="w-[13px] h-[13px]" />
              View all {coach.reviews} reviews
            </button>
          </div>
        </div>

        {/* ─── STICKY BOOK SESSION ──────────────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3"
          style={{ background: 'linear-gradient(to top, #0b0b0f 80%, transparent)', borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {selectedTime && (
            <div className="flex items-center gap-2 mb-2.5 px-1">
              <Clock className="w-[12px] h-[12px]" style={{ color: '#00c864' }} />
              <span className="text-[12px] text-[#00c864] font-medium">
                {currentSlot.date === 'Today' ? 'Today' : `${currentSlot.day} ${currentSlot.num} Jun`} · {selectedTime}
              </span>
              <span className="text-[#4a4a5a] text-[11px]">·</span>
              <span className="text-[#99A1AF] text-[11px]">{coach.services[selectedService].title}</span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[#99A1AF] text-[11px]">From</p>
              <p
                className="text-[18px] font-bold leading-none"
                style={{
                  background: 'linear-gradient(135deg,#c9115f,#cd620e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {coach.services[selectedService].price}
              </p>
            </div>

            <button
              className="flex-1 rounded-full py-3.5 text-white text-[15px] font-bold flex items-center justify-center gap-2 transition-all"
              style={{
                background: selectedTime
                  ? 'linear-gradient(135deg,#c9115f,#cd620e)'
                  : 'rgba(255,255,255,0.1)',
                boxShadow: selectedTime
                  ? '0 0 22px rgba(201,17,95,0.5)'
                  : 'none',
                opacity: selectedTime ? 1 : 0.6,
              }}
              onClick={() =>
                selectedTime && navigate(`/store/booking/${id || '1'}`)
              }
            >
              <Zap className="w-[15px] h-[15px] fill-white" />
              {selectedTime ? 'Book Session' : 'Select a time slot'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
