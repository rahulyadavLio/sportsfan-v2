import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Timer, Trophy, Users, Video, ChevronRight, CheckCircle2, QrCode, Shield, Bell, X, CreditCard } from 'lucide-react';
import { storeService } from '@/services/store.service';
import { formatPrice } from '@/utils/formatters';

type WorkflowStep = 'book' | 'waitlist' | 'confirmed' | 'participated' | 'memento';

const WORKFLOW: { step: WorkflowStep; label: string; desc: string; icon: React.ElementType; color: string }[] = [
  { step: 'book', label: 'Book & Pay', desc: 'Reserve your seat', icon: CreditCard, color: '#c9115f' },
  { step: 'waitlist', label: 'Join Waitlist', desc: 'We notify you when live', icon: Bell, color: '#cd620e' },
  { step: 'confirmed', label: 'Date Confirmed', desc: 'Participation locked in', icon: CheckCircle2, color: '#0ea5e9' },
  { step: 'participated', label: 'QR Code Issued', desc: 'Show at venue / event', icon: QrCode, color: '#00c864' },
];

function EventCard({ event, onBook }: { event: any; onBook: (event: any) => void }) {
  const pct = Math.round(((event.seats - event.seatsLeft) / event.seats) * 100);

  return (
    <div
      className="rounded-[20px] overflow-hidden mx-4 mb-4"
      style={{ background: '#0f0f17', border: '1px solid rgba(255,215,0,0.15)' }}
    >
      <div className="relative h-[150px]">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,23,1) 5%, rgba(0,0,0,0.35) 100%)' }} />
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[8px] font-black text-white bg-[#ff4444]">
          {event.badge || 'LIVE BOOKING'}
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/65 backdrop-blur-sm rounded-full px-2 py-0.5">
          <Timer className="w-[8px] h-[8px] text-[#FFD700]" />
          <span className="text-[#FFD700] text-[8px] font-bold">{event.dates || 'Oct 2025'}</span>
        </div>
        {/* seats bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
          <div className="flex-1 h-[4px] rounded-full bg-white/10">
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #ff4444, #FFD700)' }} />
          </div>
          <span className="text-[8px] font-bold text-white">{event.seatsLeft}/{event.seats} seats left</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Trophy className="w-[9px] h-[9px] text-[#FFD700]" />
            <span className="text-[8px] font-bold text-[#FFD700]">
              {event.type === 'virtual' ? 'Virtual Event' : 'In-Person Event'}
            </span>
          </div>
        </div>
        <h3 className="text-white text-[15px] font-bold leading-tight mb-1">{event.title}</h3>
        <p className="text-[#99A1AF] text-[11px] leading-snug mb-3">{event.description}</p>
        <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.06)]">
          <span className="text-white text-[15px] font-black">{formatPrice(event.pricePaise)}</span>
          <button
            onClick={() => onBook(event)}
            className="px-4 py-1.5 rounded-full text-white text-[11px] font-bold bg-gradient-to-r from-[#FFD700] to-[#cd620e] shadow-[0_0_12px_rgba(255,215,0,0.2)]"
          >
            Get Ticket →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StoreTicketedEvents() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [step, setStep] = useState<number>(-1); // -1 = closed, 0 = booking panel, 1 = confirm payment, 2 = waitlist/confirmed
  const [qty, setQty] = useState(1);

  useEffect(() => {
    storeService.getProducts('events')
      .then((res) => {
        setEvents(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const totalAmount = selectedEvent ? (selectedEvent.pricePaise * qty) : 0;

  return (
    <div className="bg-black w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)] h-[56px] flex items-center px-4 gap-3">
          <button
            onClick={() => navigate('/store')}
            className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center"
          >
            <ArrowLeft className="w-[18px] h-[18px] text-white" />
          </button>
          <div>
            <h1 className="text-white font-bold text-[17px]">Ticketed Events</h1>
            <p className="text-[#99A1AF] text-[11px]">Secure your participation pass</p>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto pb-[90px] no-scrollbar">
          {loading ? (
            <p className="text-center text-[#99A1AF] text-[12px] py-10">Loading events...</p>
          ) : events.length === 0 ? (
            <p className="text-center text-[#99A1AF] text-[12px] py-10">No events found.</p>
          ) : (
            <div className="pt-4">
              {events.map((ev) => (
                <EventCard
                  key={ev.id}
                  event={ev}
                  onBook={(event) => {
                    setSelectedEvent(event);
                    setQty(1);
                    setStep(0);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom Booking Drawer */}
        {step === 0 && selectedEvent && (
          <div className="fixed inset-0 z-[300] flex items-end justify-center" style={{ background: 'rgba(0,0,0,0.85)' }}>
            <div className="w-full max-w-[390px] rounded-t-[28px] overflow-hidden" style={{ background: '#0b0b0f', border: '1px solid rgba(255,215,0,0.2)' }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-[17px] font-black">Book Experience</h3>
                  <button onClick={() => setStep(-1)} className="text-[#4a4a5a]"><X className="w-[18px] h-[18px]" /></button>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-[16px] mb-4 bg-yellow-500/10 border border-yellow-500/20">
                  <div className="w-[44px] h-[44px] rounded-[14px] flex items-center justify-center flex-shrink-0 bg-yellow-500/20">
                    <Trophy className="w-[20px] h-[20px] text-[#FFD700]" />
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-black">{selectedEvent.title}</p>
                    <p className="text-[#5a5a6a] text-[10px]">{selectedEvent.dates || 'Oct 2025'}</p>
                  </div>
                </div>
                {/* Quantity */}
                <div className="flex items-center justify-between mb-4 p-3.5 rounded-[16px] bg-white/5 border border-white/10">
                  <span className="text-white text-[12px] font-semibold">Seats</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-white font-black text-[16px] bg-white/10">−</button>
                    <span className="text-white text-[15px] font-black w-[16px] text-center">{qty}</span>
                    <button onClick={() => setQty(q => Math.min(selectedEvent.seatsLeft, q + 1))} className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-white font-black text-[16px] bg-white/10">+</button>
                  </div>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="w-full py-3.5 rounded-[16px] text-white text-[14px] font-black flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                  style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)', boxShadow: '0 6px 20px rgba(201,17,95,0.45)' }}
                >
                  <Shield className="w-[14px] h-[14px]" />
                  Pay {formatPrice(totalAmount)} Securely
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Drawer */}
        {step === 1 && selectedEvent && (
          <div className="fixed inset-0 z-[300] flex items-end justify-center" style={{ background: 'rgba(0,0,0,0.85)' }}>
            <div className="w-full max-w-[390px] rounded-t-[28px] overflow-hidden" style={{ background: '#0b0b0f', border: '1px solid rgba(0,200,100,0.3)' }}>
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center mb-3 bg-[#00c864]/20">
                  <CheckCircle2 className="w-[28px] h-[28px] text-[#00c864]" />
                </div>
                <span className="text-[9px] font-black px-3 py-1 rounded-full text-white mb-3 bg-[#00c864]">DATE CONFIRMED</span>
                <h3 className="text-white text-[18px] font-black mb-1">{selectedEvent.title}</h3>
                <p className="text-[#5a5a6a] text-[11px] mb-5">{selectedEvent.dates} · {qty} seat{qty > 1 ? 's' : ''}</p>
                <p className="text-[#7a7a8a] text-[12px] mb-6 leading-relaxed">
                  Your participation is confirmed! Your digital QR code has been generated.
                </p>
                <button
                  onClick={() => setStep(-1)}
                  className="w-full py-3 rounded-[14px] text-white text-[13px] font-black bg-gradient-to-r from-[#0ea5e9] to-[#c9115f]"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
