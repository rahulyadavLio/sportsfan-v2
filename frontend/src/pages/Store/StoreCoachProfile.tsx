import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Star, Clock, Share2, Bookmark, Award, Shield, MessageCircle, ChevronDown, ChevronUp, CheckCircle, Zap } from 'lucide-react';
import { useState } from 'react';
import { CoachBadge } from './Store';

const coachData: Record<string, {
  id: number; name: string; role: string; experience: string; rating: number; reviews: number;
  sessionsCompleted: number; price: string; nextSlot: string; image: string; verified: boolean;
  badge: 'afi' | 'independent';
  tagline: string; about: string; achievements: string[]; certifications: string[];
  services: { title: string; duration: string; price: string; desc: string }[];
  slots: { date: string; day: string; num: number; times: string[] }[];
  reviewList: { user: string; rating: number; comment: string; date: string }[];
}> = {
  '1': {
    id: 1, name: 'Anubhav Karmakar', role: 'Founder, Athloft Multisport', experience: '12 yrs',
    rating: 4.9, reviews: 218, sessionsCompleted: 870, price: '₹2,200/hr', nextSlot: 'Today 5PM',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&h=900&fit=crop&auto=format&q=80',
    verified: true, badge: 'independent',
    tagline: 'USATF-certified · Marathons & IronMan specialist',
    about: "Founder of Athloft Multisport, Anubhav is a USATF-certified coach who has guided athletes across global major marathons including Boston, Berlin, and Tokyo, as well as IronMan events worldwide. His coaching blends biomechanical precision with event-specific periodisation.",
    achievements: ['USATF Level 2 Certified Coach', 'Coached 40+ Boston Marathon finishers', 'IronMan 70.3 Age Group Coach of the Year 2023', '12 athletes with sub-4hr marathon PBs under his plan'],
    certifications: ['USATF Level 2 Track & Field', 'IRONMAN Certified Coach', 'Sports Science Diploma – ISSA', 'First Aid & CPR Certified'],
    services: [
      { title: 'Marathon Training Plan', duration: '16 weeks', price: '₹8,500', desc: 'Full periodised marathon plan with weekly check-ins and race strategy.' },
      { title: 'IronMan Prep Session', duration: '90 min', price: '₹3,200', desc: 'Multi-discipline pacing, nutrition strategy, and transition practice.' },
      { title: 'Monthly Online Coaching', duration: '4 sessions', price: '₹6,500', desc: 'Remote coaching with video analysis, structured training blocks and recovery tracking.' },
    ],
    slots: [
      { date: 'Today', day: 'Thu', num: 3, times: ['5:00 PM', '6:30 PM'] },
      { date: 'Fri', day: 'Fri', num: 4, times: ['7:00 AM', '5:00 PM', '6:30 PM'] },
      { date: 'Sat', day: 'Sat', num: 5, times: ['8:00 AM', '10:00 AM', '12:00 PM'] },
      { date: 'Sun', day: 'Sun', num: 6, times: ['7:00 AM', '9:00 AM'] },
      { date: 'Mon', day: 'Mon', num: 7, times: ['6:00 AM', '5:30 PM'] },
    ],
    reviewList: [
      { user: 'Rahul M.', rating: 5, comment: "Anubhav's marathon plan took me from 4:45 to 3:58. Incredibly structured and motivating.", date: '1 week ago' },
      { user: 'Preethi S.', rating: 5, comment: "Best IronMan coach in Bengaluru. His multi-sport periodisation is elite-level.", date: '2 weeks ago' },
      { user: 'Kartik V.', rating: 4, comment: "Very knowledgeable about global events. The Boston qualifier plan was spot on.", date: '1 month ago' },
    ],
  },
  '2': {
    id: 2, name: 'Vikas Srinivasan', role: 'Founder, Runpundit', experience: '14 yrs',
    rating: 4.8, reviews: 342, sessionsCompleted: 1420, price: '₹1,800/hr', nextSlot: 'Tomorrow 9AM',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&h=900&fit=crop&auto=format&q=80',
    verified: true, badge: 'independent',
    tagline: 'Coached 3,500+ runners · 5K to ultra-marathon',
    about: "Vikas Srinivasan is the founder of Runpundit, one of Bangalore's most trusted running coaching platforms. With 14 years of experience, he has personally coached over 3,500 runners across distances from 5K to full ultra-marathons, both in-person and online.",
    achievements: ['3,500+ runners coached across all distances', 'Runpundit community of 8,000+ members', 'Featured in Runner\'s World India 2022 & 2023', '18 athletes with first sub-3:30 marathons'],
    certifications: ['Athletics Federation of India – Distance Coach', 'USATF Level 1 Certified', 'Sports Psychology Certificate – NIMHANS', 'Ultra Running Coach Certification'],
    services: [
      { title: '5K Speed Programme', duration: '8 weeks', price: '₹4,200', desc: 'Speed-focused periodised block for 5K PB seekers with weekly intervals and test runs.' },
      { title: 'Marathon to Ultra Transition', duration: '12 weeks', price: '₹7,000', desc: 'Structured ultra-running introduction with trail running fundamentals and race strategy.' },
      { title: 'Video Running Analysis', duration: '60 min', price: '₹1,800', desc: 'Slow-motion gait analysis with corrective drills and footstrike recommendations.' },
    ],
    slots: [
      { date: 'Fri', day: 'Fri', num: 4, times: ['9:00 AM', '11:00 AM', '3:00 PM'] },
      { date: 'Sat', day: 'Sat', num: 5, times: ['6:30 AM', '8:00 AM', '10:00 AM'] },
      { date: 'Sun', day: 'Sun', num: 6, times: ['7:00 AM', '5:00 PM'] },
      { date: 'Mon', day: 'Mon', num: 7, times: ['6:00 AM', '7:30 AM', '6:00 PM'] },
    ],
    reviewList: [
      { user: 'Anjali K.', rating: 5, comment: "Vikas transformed my running. Went from half-marathon to 50K with his program. Incredible!", date: '3 days ago' },
      { user: 'Sathish P.', rating: 5, comment: "The video analysis alone was worth it. Fixed my heel-striking in 3 sessions.", date: '1 week ago' },
      { user: 'Divya R.', rating: 4, comment: "Very accessible for online coaching. His feedback is always timely and detailed.", date: '3 weeks ago' },
    ],
  },
  '3': {
    id: 3, name: 'Kiran Badiger', role: 'Distance Running Coach', experience: '9 yrs',
    rating: 4.7, reviews: 156, sessionsCompleted: 620, price: '₹1,500/hr', nextSlot: 'Today 7PM',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=900&fit=crop&auto=format&q=80',
    verified: true, badge: 'independent',
    tagline: 'International marathon qualifier specialist',
    about: "Kiran Badiger is an independent distance running coach focused on guiding recreational and competitive runners toward international marathon qualifier standards. His methodical approach emphasises aerobic base building, threshold training, and race-day execution.",
    achievements: ['9 athletes qualified for international marathon majors', 'Berlin Marathon qualifier specialist', 'Coached runners in Tokyo, Chicago, and London majors', 'Former Karnataka State Cross Country runner'],
    certifications: ['AFI Club Coach Certificate', 'Distance Running Specialist – AIMS Certified', 'Sports Nutrition Fundamentals', 'Mental Performance Coaching Basics'],
    services: [
      { title: 'International Qualifier Plan', duration: '20 weeks', price: '₹9,800', desc: 'Target-specific plan to achieve BQ/Berlin/Tokyo qualifier standards with progressive long runs.' },
      { title: 'Aerobic Base Camp', duration: '8 weeks', price: '₹5,200', desc: 'Foundation block with Z2 runs, strides and mobility for injury-free base building.' },
      { title: 'Race Strategy Session', duration: '45 min', price: '₹1,500', desc: 'Pre-race briefing covering pacing, nutrition, weather adjustment, and mental tactics.' },
    ],
    slots: [
      { date: 'Today', day: 'Thu', num: 3, times: ['7:00 PM', '8:00 PM'] },
      { date: 'Sat', day: 'Sat', num: 5, times: ['6:00 AM', '7:30 AM', '9:00 AM'] },
      { date: 'Sun', day: 'Sun', num: 6, times: ['6:00 AM', '8:00 AM'] },
      { date: 'Tue', day: 'Tue', num: 8, times: ['7:00 PM', '8:30 PM'] },
    ],
    reviewList: [
      { user: 'Mohan K.', rating: 5, comment: "Got my BQ with Kiran's plan. He understood exactly what time I was targeting.", date: '2 weeks ago' },
      { user: 'Smitha L.', rating: 4, comment: "Great race strategy sessions. His Tokyo qualifier plan was very well structured.", date: '1 month ago' },
      { user: 'Arjun N.', rating: 5, comment: "Finally achieved sub-3:30 after 2 years of trying. Kiran's method works.", date: '1 month ago' },
    ],
  },
  '4': {
    id: 4, name: 'Pramod Deshpande', role: 'Core Team, Jayanagar Jaguars', experience: '11 yrs',
    rating: 4.8, reviews: 289, sessionsCompleted: 980, price: '₹1,600/hr', nextSlot: 'Wed 6AM',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&h=900&fit=crop&auto=format&q=80',
    verified: true, badge: 'independent',
    tagline: 'Jayanagar Jaguars core coach · Group running specialist',
    about: "Pramod Deshpande is a core coaching member of Jayanagar Jaguars, one of Bangalore's best-known and most active running communities. With 11 years of experience in group coaching and community running, Pramod specialises in building consistent training habits and fostering a strong running culture.",
    achievements: ['Core coach of Jayanagar Jaguars since 2015', 'Led 500+ group long runs across Bangalore', 'Developed marathon training plans for 200+ runners', '3 runners from JJ placed in top 10 at TCS World 10K'],
    certifications: ['AFI Club Coach Certified', 'Group Fitness Instructor – ACE', 'Running Biomechanics Workshop – Bangalore Athletics', 'Community Coach Recognition Award 2022'],
    services: [
      { title: 'Group Morning Run', duration: '90 min', price: '₹500/session', desc: 'Structured group long run with pacing guidance, hydration stops and form cues.' },
      { title: '10K to Half-Marathon Block', duration: '10 weeks', price: '₹4,500', desc: 'Progressive block to bridge 10K runners into half-marathon readiness.' },
      { title: 'Personal Coaching Session', duration: '60 min', price: '₹1,600', desc: 'One-on-one analysis, goal setting, and next-step planning for your running journey.' },
    ],
    slots: [
      { date: 'Wed', day: 'Wed', num: 9, times: ['6:00 AM', '7:00 AM'] },
      { date: 'Sat', day: 'Sat', num: 5, times: ['5:30 AM', '6:30 AM', '7:30 AM'] },
      { date: 'Sun', day: 'Sun', num: 6, times: ['5:30 AM', '6:30 AM'] },
    ],
    reviewList: [
      { user: 'Vikram A.', rating: 5, comment: "Pramod's group runs are the highlight of my week. Best running community in Bangalore.", date: '1 week ago' },
      { user: 'Lakshmi S.', rating: 5, comment: "His 10K to half-marathon plan is solid. Completed my first half feeling strong!", date: '2 weeks ago' },
      { user: 'Rohan T.', rating: 4, comment: "Very encouraging and experienced. The group dynamic really helps on tough days.", date: '1 month ago' },
    ],
  },
  '5': {
    id: 5, name: 'Nakul Butta', role: 'Founder, All In Running', experience: '10 yrs',
    rating: 4.9, reviews: 197, sessionsCompleted: 740, price: '₹2,000/hr', nextSlot: 'Fri 7AM',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=900&fit=crop&auto=format&q=80',
    verified: true, badge: 'independent',
    tagline: 'All In Running · Strength + Yoga integrated coaching',
    about: "Nakul Butta founded All In Running on the belief that endurance performance can be unlocked by integrating strength training and yoga alongside traditional run coaching. His holistic approach reduces injury rates while building the power and flexibility needed for faster, more consistent running.",
    achievements: ['Founder, All In Running platform', '14 athletes with marathon PBs in 2024', 'Yoga for Runners specialist certification', 'Strength training integration pioneer in Bangalore running scene'],
    certifications: ['USATF Level 1 Certified', 'Yoga Alliance RYT-200', 'NSCA Certified Strength & Conditioning Specialist', 'Sports Rehabilitation Basics – ISAK'],
    services: [
      { title: 'Integrated Run + Strength Block', duration: '12 weeks', price: '₹9,200', desc: 'Holistic programme combining 4 run sessions with 2 strength sessions per week, yoga cool-downs included.' },
      { title: 'Yoga for Runners Workshop', duration: '90 min', price: '₹1,200', desc: 'Targeted yoga session for hip flexors, hamstrings and glutes with runner-specific flows.' },
      { title: 'Strength Assessment', duration: '60 min', price: '₹2,000', desc: 'Identify muscular imbalances affecting your running economy with corrective exercise prescription.' },
    ],
    slots: [
      { date: 'Fri', day: 'Fri', num: 4, times: ['7:00 AM', '8:30 AM', '6:00 PM'] },
      { date: 'Sat', day: 'Sat', num: 5, times: ['7:00 AM', '9:00 AM'] },
      { date: 'Mon', day: 'Mon', num: 7, times: ['6:30 AM', '5:30 PM', '7:00 PM'] },
      { date: 'Wed', day: 'Wed', num: 9, times: ['6:30 AM', '7:30 AM'] },
    ],
    reviewList: [
      { user: 'Nidhi K.', rating: 5, comment: "The strength + run integration is a game changer. Zero injuries in 6 months of training.", date: '4 days ago' },
      { user: 'Suresh M.', rating: 5, comment: "Nakul's yoga sessions are mandatory in my training now. Completely reduced my tightness.", date: '2 weeks ago' },
      { user: 'Priya G.', rating: 4, comment: "Very balanced approach. It's not just about running more, it's about running smarter.", date: '1 month ago' },
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
    <div className="bg-black w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">

        {/* HERO */}
        <div className="relative flex-shrink-0" style={{ height: 320 }}>
          <img src={coach.image} alt={coach.name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 35%, rgba(11,11,15,0.7) 70%, #0b0b0f 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)' }} />

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
                <Bookmark className="w-[15px] h-[15px]" style={{ color: saved ? '#c9115f' : 'white', fill: saved ? '#c9115f' : 'none' }} />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-5">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h1 className="text-white text-[26px] font-bold leading-none">{coach.name}</h1>
              {coach.verified && (
                <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)' }}>
                  <span className="text-white text-[10px] font-bold">✓</span>
                </div>
              )}
              <CoachBadge type={coach.badge} />
            </div>
            <p className="text-[rgba(255,255,255,0.65)] text-[13px]">{coach.role}</p>
            <p className="text-[rgba(255,255,255,0.45)] text-[11px] mt-0.5">{coach.tagline}</p>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="mx-4 -mt-1 mb-4 rounded-[18px] overflow-hidden" style={{ background: 'linear-gradient(135deg,rgba(201,17,95,0.18),rgba(205,98,14,0.18))', border: '1px solid rgba(255,255,255,0.08)' }}>
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

        {/* SCROLLABLE BODY */}
        <div className="flex-1 overflow-y-auto pb-[96px] no-scrollbar">

          {/* Date Picker */}
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

          {/* Time Picker */}
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

          {/* Services */}
          <div className="mb-6 px-4">
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
          </div>

          {/* About */}
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

          {/* Achievements */}
          <div className="mb-6 px-4">
            <p className="text-white text-[14px] font-bold mb-3">Achievements</p>
            <div className="grid grid-cols-2 gap-2">
              {coach.achievements.map((a, i) => (
                <div key={i} className="rounded-[12px] p-3 flex items-start gap-2" style={{ background: 'rgba(201,17,95,0.07)', border: '1px solid rgba(201,17,95,0.16)' }}>
                  <Award className="w-[13px] h-[13px] flex-shrink-0 mt-0.5" style={{ color: '#c9115f' }} />
                  <p className="text-[#d8d8e8] text-[11px] leading-snug">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
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

          {/* Reviews */}
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

        {/* STICKY BOOK SESSION */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3"
          style={{ background: 'linear-gradient(to top, #0b0b0f 80%, transparent)', borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {selectedTime && (
            <div className="flex items-center gap-2 mb-2.5 px-1">
              <Clock className="w-[12px] h-[12px]" style={{ color: '#00c864' }} />
              <span className="text-[12px] text-[#00c864] font-medium">
                {currentSlot.date === 'Today' ? 'Today' : `${currentSlot.day} ${currentSlot.num} Jul`} · {selectedTime}
              </span>
              <span className="text-[#4a4a5a] text-[11px]">·</span>
              <span className="text-[#99A1AF] text-[11px]">{coach.services[selectedService].title}</span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[#99A1AF] text-[11px]">From</p>
              <p className="text-[18px] font-bold leading-none" style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {coach.services[selectedService].price}
              </p>
            </div>
            <button
              className="flex-1 rounded-full py-3.5 text-white text-[15px] font-bold flex items-center justify-center gap-2 transition-all"
              style={{
                background: selectedTime ? 'linear-gradient(135deg,#c9115f,#cd620e)' : 'rgba(255,255,255,0.1)',
                boxShadow: selectedTime ? '0 0 22px rgba(201,17,95,0.5)' : 'none',
                opacity: selectedTime ? 1 : 0.6,
              }}
              onClick={() => selectedTime && navigate(`/store/booking/${id || '1'}`)}
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
