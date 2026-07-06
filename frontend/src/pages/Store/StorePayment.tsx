import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Shield, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';

const paymentMethods = [
  { id: 'upi', label: 'UPI', subtitle: 'Pay via any UPI app', icon: '⚡' },
  { id: 'gpay', label: 'Google Pay', subtitle: 'Fast & secure', icon: '🟢' },
  { id: 'phonepe', label: 'PhonePe', subtitle: 'Instant transfer', icon: '💜' },
  { id: 'paytm', label: 'Paytm', subtitle: 'Paytm wallet / UPI', icon: '🔵' },
  { id: 'card', label: 'Credit / Debit Card', subtitle: 'Visa, Mastercard, RuPay', icon: '💳' },
];

export default function StorePayment() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selected, setSelected] = useState('gpay');
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      navigate(`/store/booking-success/${id || '1'}`);
    }, 1800);
  };

  return (
    <div className="bg-black w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)] h-[56px] flex items-center px-4 gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center"
          >
            <ArrowLeft className="w-[18px] h-[18px] text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white font-bold text-[17px]">Payment</h1>
            <p className="text-[#99A1AF] text-[11px]">Secure checkout</p>
          </div>
          <div className="flex items-center gap-1 bg-[rgba(0,200,100,0.1)] border border-[rgba(0,200,100,0.25)] rounded-full px-2.5 py-1">
            <Shield className="w-[11px] h-[11px] text-[#00c864]" />
            <span className="text-[#00c864] text-[10px] font-semibold">256-bit SSL</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-[88px] no-scrollbar px-4 pt-5">
          {/* Order summary pill */}
          <div className="bg-[rgba(201,17,95,0.08)] border border-[rgba(201,17,95,0.2)] rounded-[16px] p-4 mb-5 flex items-center justify-between">
            <div>
              <p className="text-white text-[13px] font-semibold">Technique Analysis · 60 min</p>
              <p className="text-[#99A1AF] text-[12px]">June 17, 2026 · 4:00 PM</p>
            </div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[18px] font-bold">₹1,899</p>
          </div>

          {/* Payment methods */}
          <h2 className="text-white text-[14px] font-bold mb-3">Choose Payment Method</h2>
          <div className="flex flex-col gap-2">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelected(method.id)}
                className={`w-full rounded-[14px] border p-3.5 flex items-center gap-3 text-left transition-all ${
                  selected === method.id
                    ? 'bg-[rgba(201,17,95,0.08)] border-[rgba(201,17,95,0.4)]'
                    : 'bg-[#111116] border-[rgba(255,255,255,0.07)]'
                }`}
              >
                <span className="text-[22px]">{method.icon}</span>
                <div className="flex-1">
                  <p className="text-white text-[14px] font-semibold">{method.label}</p>
                  <p className="text-[#99A1AF] text-[11px]">{method.subtitle}</p>
                </div>
                <div
                  className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center transition-all ${
                    selected === method.id ? 'border-[#c9115f] bg-[#c9115f]' : 'border-[rgba(255,255,255,0.2)]'
                  }`}
                >
                  {selected === method.id && <Check className="w-[11px] h-[11px] text-white" />}
                </div>
              </button>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 mt-5">
            {['No hidden fees', '100% refund policy', 'Verified coaches'].map((t) => (
              <div key={t} className="flex items-center gap-1">
                <Check className="w-[10px] h-[10px] text-[#00c864]" />
                <span className="text-[#99A1AF] text-[10px]">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0b0b0f] border-t border-[rgba(255,255,255,0.07)] px-4 py-3">
          <button
            onClick={handlePay}
            disabled={processing}
            className="w-full bg-gradient-to-r from-[#c9115f] to-[#cd620e] rounded-full py-3.5 text-white text-[15px] font-bold shadow-[0_0_20px_rgba(201,17,95,0.5)] flex items-center justify-center gap-2 disabled:opacity-80"
          >
            {processing ? (
              <>
                <div className="w-[16px] h-[16px] rounded-full border-2 border-white border-t-transparent animate-spin" />
                Processing...
              </>
            ) : (
              <>Pay ₹1,899 <ChevronRight className="w-[16px] h-[16px]" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
