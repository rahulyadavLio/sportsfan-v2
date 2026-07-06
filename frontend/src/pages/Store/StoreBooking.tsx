import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Check, User, Tag, MapPin, Pencil, X } from 'lucide-react';
import { useState } from 'react';

const services = [
  { id: 1, title: 'Technique Analysis', duration: '60 min', price: '₹1,800', desc: 'Video-based biomechanical breakdown with actionable fixes.' },
  { id: 2, title: 'Competition Preparation', duration: '90 min', price: '₹2,500', desc: 'Peak performance strategy session with mental prep and race-day plan.' },
  { id: 3, title: 'Monthly Mentorship', duration: '4 sessions', price: '₹6,500', desc: 'Structured monthly coaching with progress tracking and personalized plan.' },
];


const coachNames: Record<string, string> = {
  '1': 'Ravi Shastri',
  '2': 'Priya Sharma',
  '3': 'Arun Kumar',
  '4': 'Sneha Patel',
};

const stepLabels = ['Service', 'Review'];

export default function StoreBooking() {
  const navigate = useNavigate();
  const { id } = useParams();
  const coachName = coachNames[id || '1'] || 'Ravi Shastri';

  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [location, setLocation] = useState('Bengaluru, Karnataka');
  const [editingLocation, setEditingLocation] = useState(false);
  const [locationDraft, setLocationDraft] = useState('');

  const selectedServiceData = services.find((s) => s.id === selectedService);

  const canProceed =
    (step === 0 && selectedService !== null) ||
    step === 1;

  const handleNext = () => {
    if (step < 1) setStep((s) => s + 1);
    else navigate(`/store/payment/${id || '1'}`);
  };

  const startEditLocation = () => {
    setLocationDraft(location);
    setEditingLocation(true);
  };

  const saveLocation = () => {
    if (locationDraft.trim()) setLocation(locationDraft.trim());
    setEditingLocation(false);
  };

  return (
    <div className="bg-black w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)]">
          <div className="h-[56px] flex items-center px-4 gap-3">
            <button
              onClick={() => (step > 0 ? setStep((s) => s - 1) : navigate(-1))}
              className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center"
            >
              <ArrowLeft className="w-[18px] h-[18px] text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-white font-bold text-[17px]">Book a Session</h1>
              <p className="text-[#99A1AF] text-[11px]">{coachName}</p>
            </div>
          </div>

          {/* Step indicator */}
          <div className="flex items-center px-4 pb-3 gap-0">
            {stepLabels.map((label, i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                      i < step
                        ? 'bg-gradient-to-br from-[#c9115f] to-[#cd620e] text-white'
                        : i === step
                        ? 'bg-gradient-to-br from-[#c9115f] to-[#cd620e] text-white shadow-[0_0_10px_rgba(201,17,95,0.5)]'
                        : 'bg-[rgba(255,255,255,0.08)] text-[#99A1AF]'
                    }`}
                  >
                    {i < step ? <Check className="w-[12px] h-[12px]" /> : i + 1}
                  </div>
                  <span className={`text-[9px] font-semibold ${i <= step ? 'text-white' : 'text-[#99A1AF]'}`}>{label}</span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div className={`flex-1 h-[2px] mx-1 mb-4 rounded-full transition-all ${i < step ? 'bg-gradient-to-r from-[#c9115f] to-[#cd620e]' : 'bg-[rgba(255,255,255,0.08)]'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-[88px] no-scrollbar">
          {/* Step 0: Select Service */}
          {step === 0 && (
            <div className="px-4 pt-5">
              <p className="text-[#99A1AF] text-[13px] mb-4">Choose the type of session you want to book</p>
              <div className="flex flex-col gap-3">
                {services.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedService(svc.id)}
                    className={`w-full rounded-[16px] border p-4 text-left transition-all ${
                      selectedService === svc.id
                        ? 'bg-[rgba(201,17,95,0.1)] border-[rgba(201,17,95,0.5)] shadow-[0_0_12px_rgba(201,17,95,0.2)]'
                        : 'bg-[#111116] border-[rgba(255,255,255,0.07)]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-white text-[14px] font-semibold">{svc.title}</p>
                        <p className="text-[#99A1AF] text-[11px] mt-0.5">{svc.duration}</p>
                        <p className="text-[#99A1AF] text-[12px] mt-2 leading-snug">{svc.desc}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[15px] font-bold">{svc.price}</p>
                        {selectedService === svc.id && (
                          <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center">
                            <Check className="w-[11px] h-[11px] text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Review */}
          {step === 1 && selectedServiceData && (
            <div className="px-4 pt-5">
              <p className="text-[#99A1AF] text-[13px] mb-4">Review your booking details before payment</p>

              {/* Summary card */}
              <div className="bg-[#111116] rounded-[20px] border border-[rgba(255,255,255,0.07)] p-4 mb-4">
                <div className="flex flex-col gap-3">
                  {[
                    { icon: User, label: 'Coach', value: coachName },
                    { icon: Tag, label: 'Service', value: selectedServiceData.title },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-[28px] h-[28px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center">
                          <Icon className="w-[13px] h-[13px] text-[#99A1AF]" />
                        </div>
                        <span className="text-[#99A1AF] text-[13px]">{label}</span>
                      </div>
                      <span className="text-white text-[13px] font-semibold">{value}</span>
                    </div>
                  ))}

                  {/* Location row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-[28px] h-[28px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center">
                        <MapPin className="w-[13px] h-[13px] text-[#99A1AF]" />
                      </div>
                      <span className="text-[#99A1AF] text-[13px]">Location</span>
                    </div>
                    {editingLocation ? (
                      <div className="flex items-center gap-1.5">
                        <input
                          autoFocus
                          value={locationDraft}
                          onChange={(e) => setLocationDraft(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && saveLocation()}
                          className="bg-[rgba(255,255,255,0.07)] border border-[rgba(201,17,95,0.4)] rounded-[8px] px-2 py-1 text-white text-[12px] w-[140px] focus:outline-none"
                        />
                        <button onClick={saveLocation} className="w-[24px] h-[24px] rounded-full bg-gradient-to-br from-[#c9115f] to-[#cd620e] flex items-center justify-center">
                          <Check className="w-[11px] h-[11px] text-white" />
                        </button>
                        <button onClick={() => setEditingLocation(false)} className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center">
                          <X className="w-[11px] h-[11px] text-[#99A1AF]" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-white text-[13px] font-semibold">{location}</span>
                        <button
                          onClick={startEditLocation}
                          className="w-[24px] h-[24px] rounded-full bg-[rgba(255,255,255,0.07)] flex items-center justify-center hover:bg-[rgba(201,17,95,0.2)] transition-colors"
                        >
                          <Pencil className="w-[11px] h-[11px] text-[#99A1AF]" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="bg-[#111116] rounded-[20px] border border-[rgba(255,255,255,0.07)] p-4 mb-4">
                <h3 className="text-white text-[14px] font-bold mb-3">Price Breakdown</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="text-[#99A1AF] text-[13px]">Session Fee</span>
                    <span className="text-white text-[13px]">{selectedServiceData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#99A1AF] text-[13px]">Platform Fee</span>
                    <span className="text-white text-[13px]">₹99</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between">
                      <span className="text-[#00c864] text-[13px]">Coupon (SPORT20)</span>
                      <span className="text-[#00c864] text-[13px]">-₹360</span>
                    </div>
                  )}
                  <div className="h-[1px] bg-[rgba(255,255,255,0.07)] my-1" />
                  <div className="flex justify-between">
                    <span className="text-white text-[14px] font-bold">Total</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[16px] font-bold">
                      {couponApplied ? '₹1,539' : selectedServiceData.price.replace(/₹(\d+),?(\d*)/, (_, a, b) => `₹${parseInt(a + b) + 99}`)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coupon */}
              <div className="flex gap-2">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] px-4 py-2.5 text-white text-[13px] placeholder:text-[#99A1AF] focus:outline-none focus:border-[rgba(201,17,95,0.5)]"
                />
                <button
                  onClick={() => { if (coupon.trim()) setCouponApplied(true); }}
                  className="px-4 py-2.5 bg-gradient-to-r from-[#c9115f] to-[#cd620e] rounded-[12px] text-white text-[13px] font-semibold"
                >
                  Apply
                </button>
              </div>
              {couponApplied && <p className="text-[#00c864] text-[12px] mt-2">✓ Coupon applied! You saved ₹360</p>}
            </div>
          )}
        </div>

        {/* Sticky CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0b0b0f] border-t border-[rgba(255,255,255,0.07)] px-4 py-3">
          <button
            disabled={!canProceed}
            onClick={handleNext}
            className={`w-full rounded-full py-3.5 text-white text-[15px] font-bold transition-all ${
              canProceed
                ? 'bg-gradient-to-r from-[#c9115f] to-[#cd620e] shadow-[0_0_20px_rgba(201,17,95,0.5)]'
                : 'bg-[rgba(255,255,255,0.1)] opacity-50'
            }`}
          >
            {step === 1 ? 'Proceed to Payment' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
