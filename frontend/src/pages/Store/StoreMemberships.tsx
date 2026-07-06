import { useNavigate } from 'react-router';
 
import { ArrowLeft, CheckCircle, Star, Zap, Crown, ChevronRight, PauseCircle, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const tiers = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '₹499',
    period: '/month',
    popular: false,
    color: '#6b7280',
    gradientFrom: 'rgba(107,114,128,0.15)',
    gradientTo: 'rgba(107,114,128,0.05)',
    benefits: [
      'Access to Dolly AI (5 analyses/month)',
      'Fantasy & Fan Battle participation',
      'Match Centre live stats',
      'Basic Records Explorer',
      'Fan Zone community access',
    ],
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: '₹1,199',
    period: '/3 months',
    popular: true,
    color: '#c9115f',
    gradientFrom: 'rgba(201,17,95,0.2)',
    gradientTo: 'rgba(205,98,14,0.1)',
    benefits: [
      'Everything in Monthly',
      'Dolly AI (25 analyses/month)',
      'Priority coach booking',
      'Exclusive experience early access',
      'Store discounts (10% off)',
      'Advanced Records Explorer',
      'Watch Along interactive features',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '₹3,999',
    period: '/year',
    popular: false,
    color: '#FFD700',
    gradientFrom: 'rgba(255,215,0,0.12)',
    gradientTo: 'rgba(205,98,14,0.08)',
    benefits: [
      'Everything in Quarterly',
      'Unlimited Dolly AI analyses',
      'AFI athlete meet & greet eligibility',
      'Signed memorabilia drops (2/year)',
      'Free experience bookings (1/quarter)',
      'Store discounts (20% off)',
      'Personal coach matching service',
      'Elite badge on profile',
    ],
  },
];

const currentMembership = {
  tier: 'quarterly',
  renewalDate: 'Oct 3, 2026',
  price: '₹1,199',
  daysLeft: 92,
};

export default function StoreMemberships() {
  const navigate = useNavigate();
  const [view, setView] = useState<'plans' | 'active'>('active');
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [upgraded, setUpgraded] = useState(false);

  const activeTier = tiers.find(t => t.id === currentMembership.tier)!;

  if (upgraded) {
    return (
      <div className="bg-black w-full flex justify-center min-h-screen">
        <div className="w-full max-w-[390px] bg-[#0b0b0f] flex flex-col items-center justify-center px-6 py-12 text-center">
          <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#FFD700] to-[#cd620e] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
            <Crown className="w-[36px] h-[36px] text-white" />
          </div>
          <h2 className="text-white text-[22px] font-bold mb-2">You're Elite!</h2>
          <p className="text-[#99A1AF] text-[13px] mb-6">Your upgrade to Elite membership is active. Enjoy all premium perks.</p>
          <button
            onClick={() => { setUpgraded(false); setView('active'); }}
            className="rounded-full px-8 py-3 text-white text-[14px] font-semibold"
            style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)' }}
          >
            View My Membership
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)]">
          <div className="h-[56px] flex items-center px-4 gap-3">
            <button
              onClick={() => navigate('/store')}
              className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center"
            >
              <ArrowLeft className="w-[18px] h-[18px] text-white" />
            </button>
            <div>
              <h1 className="text-white font-bold text-[17px]">Memberships</h1>
              <p className="text-[#99A1AF] text-[11px]">Unlock the full SF360 experience</p>
            </div>
          </div>

          <div className="flex px-4 pb-3 gap-3">
            {(['active', 'plans'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setView(tab)}
                className="flex-1 py-2 rounded-full text-[13px] font-semibold capitalize border transition-all"
                style={view === tab ? {
                  background: 'linear-gradient(135deg,#c9115f,#cd620e)',
                  border: '1px solid transparent',
                  color: 'white',
                } : {
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#99A1AF',
                }}
              >
                {tab === 'active' ? 'My Membership' : 'All Plans'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-[70px] no-scrollbar px-4 pt-4">
          {view === 'active' ? (
            <>
              {/* Active membership card */}
              <div
                className="rounded-[20px] p-5 mb-5"
                style={{ background: `linear-gradient(135deg, ${activeTier.gradientFrom}, ${activeTier.gradientTo})`, border: `1px solid ${activeTier.color}30` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[#99A1AF] text-[11px] mb-1">Current Plan</p>
                    <p className="text-white text-[24px] font-bold">{activeTier.name}</p>
                    <p className="text-[13px] font-semibold" style={{ color: activeTier.color }}>{activeTier.price}{activeTier.period}</p>
                  </div>
                  <div className="w-[56px] h-[56px] rounded-[16px] flex items-center justify-center" style={{ background: activeTier.color }}>
                    <Star className="w-[24px] h-[24px] text-white fill-white" />
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-[12px] p-3 mb-4" style={{ background: 'rgba(0,0,0,0.25)' }}>
                  <div>
                    <p className="text-[#99A1AF] text-[10px]">Renewal Date</p>
                    <p className="text-white text-[13px] font-semibold">{currentMembership.renewalDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#99A1AF] text-[10px]">Days Left</p>
                    <p className="text-white text-[13px] font-semibold">{currentMembership.daysLeft} days</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    className="flex-1 rounded-full py-2.5 text-[13px] font-semibold flex items-center justify-center gap-1.5 border border-[rgba(255,255,255,0.15)] text-[#99A1AF]"
                  >
                    <PauseCircle className="w-[13px] h-[13px]" /> Pause
                  </button>
                  <button
                    onClick={() => setView('plans')}
                    className="flex-1 rounded-full py-2.5 text-[13px] font-semibold flex items-center justify-center gap-1.5 text-white"
                    style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)' }}
                  >
                    <TrendingUp className="w-[13px] h-[13px]" /> Upgrade
                  </button>
                </div>
              </div>

              {/* Benefits list */}
              <p className="text-white text-[14px] font-bold mb-3">Your Benefits</p>
              <div className="flex flex-col gap-2">
                {activeTier.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-[rgba(255,255,255,0.05)]">
                    <CheckCircle className="w-[14px] h-[14px] flex-shrink-0" style={{ color: activeTier.color }} />
                    <span className="text-[#c8c8d0] text-[13px]">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-5 rounded-full py-3 text-[13px] font-semibold border border-[rgba(255,0,80,0.2)] text-[rgba(255,0,80,0.6)]">
                Cancel Membership
              </button>
            </>
          ) : (
            <>
              <p className="text-[#99A1AF] text-[13px] mb-4">Choose a plan that works for you</p>
              <div className="flex flex-col gap-4">
                {tiers.map(tier => (
                  <div
                    key={tier.id}
                    className="rounded-[20px] p-5 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${tier.gradientFrom}, ${tier.gradientTo})`, border: `1px solid ${tier.color}30` }}
                  >
                    {tier.popular && (
                      <div
                        className="absolute top-0 right-5 px-3 py-1 rounded-b-full text-[10px] font-bold text-white"
                        style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)' }}
                      >
                        Most Popular
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-white text-[20px] font-bold">{tier.name}</p>
                        <p className="text-[22px] font-bold" style={{ color: tier.color }}>{tier.price}<span className="text-[13px] font-normal text-[#99A1AF]">{tier.period}</span></p>
                      </div>
                      <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center" style={{ background: tier.color }}>
                        {tier.id === 'elite' ? <Crown className="w-[20px] h-[20px] text-white" /> :
                          tier.id === 'quarterly' ? <Zap className="w-[20px] h-[20px] text-white" /> :
                          <Star className="w-[20px] h-[20px] text-white" />}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                      {tier.benefits.slice(0, 4).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-[12px] h-[12px] flex-shrink-0" style={{ color: tier.color }} />
                          <span className="text-[#c8c8d0] text-[12px]">{benefit}</span>
                        </div>
                      ))}
                      {tier.benefits.length > 4 && (
                        <button onClick={() => setSelectedTier(selectedTier === tier.id ? null : tier.id)} className="flex items-center gap-1 text-[11px]" style={{ color: tier.color }}>
                          +{tier.benefits.length - 4} more <ChevronRight className="w-[11px] h-[11px]" />
                        </button>
                      )}
                      {selectedTier === tier.id && tier.benefits.slice(4).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-[12px] h-[12px] flex-shrink-0" style={{ color: tier.color }} />
                          <span className="text-[#c8c8d0] text-[12px]">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {tier.id === currentMembership.tier ? (
                      <div className="w-full rounded-full py-3 text-center text-[13px] font-semibold border border-[rgba(255,255,255,0.15)] text-[#99A1AF]">
                        Current Plan
                      </div>
                    ) : (
                      <button
                        onClick={() => tier.id === 'elite' && setUpgraded(true)}
                        className="w-full rounded-full py-3 text-white text-[14px] font-bold"
                        style={{ background: `linear-gradient(135deg, ${tier.color === '#FFD700' ? '#cd620e' : tier.color}, ${tier.color})`, boxShadow: `0 0 16px ${tier.color}30` }}
                      >
                        {tier.id === 'elite' ? 'Go Elite' : 'Get Started'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
 
    </div>
  );
}
