import { useNavigate } from 'react-router';
 
import { ArrowLeft, Play, FileText, Cpu, Download, ChevronRight, CheckCircle, BookOpen, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const typeIcons: Record<string, React.ReactNode> = {
  'Training Program': <FileText className="w-[14px] h-[14px] text-[#c9115f]" />,
  'Video Course': <Play className="w-[14px] h-[14px] text-[#cd620e]" />,
  'AI Report': <Cpu className="w-[14px] h-[14px] text-[#00c864]" />,
  'PDF Guide': <Download className="w-[14px] h-[14px] text-[#cd620e]" />,
};

const products = [
  {
    id: 1,
    type: 'Video Course',
    title: 'Javelin Throw Mastery — Full Biomechanics Series',
    creator: 'AFI Performance Lab',
    price: '₹3,999',
    duration: '6 hrs 20 min',
    lessons: 22,
    hasPreview: true,
    description: 'A comprehensive 22-lesson video series covering approach mechanics, release timing, flight phases, and landing. Shot at the AFI Performance Lab with elite coaching staff.',
    highlights: ['Slow-motion biomechanical breakdown', '22 structured lessons', 'Drills library with 40+ exercises', 'Certificate of completion'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=250&fit=crop&auto=format',
    progress: null,
  },
  {
    id: 2,
    type: 'Training Program',
    title: 'Sub-3:30 Marathon Plan — 16 Weeks',
    creator: 'Vikas Srinivasan',
    price: '₹2,499',
    duration: '16 weeks',
    lessons: 4,
    hasPreview: true,
    description: 'A structured 16-week periodised plan designed to take runners from 3:45 to sub-3:30 finish time, built on proven principles by Runpundit coach Vikas Srinivasan.',
    highlights: ['Week-by-week schedule (PDF)', 'GPS workout files (.gpx)', 'Strength routine supplements', 'Race-week and taper protocol'],
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=250&fit=crop&auto=format',
    progress: null,
  },
  {
    id: 3,
    type: 'AI Report',
    title: 'Dolly Sprint Mechanics Analysis',
    creator: 'Dolly AI by SF360',
    price: '₹799',
    duration: 'Instant',
    lessons: 1,
    hasPreview: false,
    description: 'Upload your sprint video and receive a comprehensive AI-generated biomechanical report covering start mechanics, drive phase, top-speed and deceleration analysis with corrective drill recommendations.',
    highlights: ['Instant report generation', 'Phase-by-phase breakdown', 'Personalised drill prescription', 'Share directly with your coach'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&auto=format',
    progress: null,
  },
  {
    id: 4,
    type: 'PDF Guide',
    title: 'Race-Day Nutrition Playbook',
    creator: 'AFI Sports Science Team',
    price: '₹499',
    duration: '48 pages',
    lessons: 1,
    hasPreview: true,
    description: 'A complete pre-race, during-race, and recovery nutrition guide written by the AFI sports science team. Includes event-specific protocols for 5K, 10K, half-marathon, and full marathon.',
    highlights: ['Event-specific protocols', 'Hydration tables', 'Supplement guidance', 'Sample race-day menus'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop&auto=format',
    progress: null,
  },
  {
    id: 5,
    type: 'Video Course',
    title: 'Strength for Runners — 8-Week Foundation',
    creator: 'Nakul Butta / All In Running',
    price: '₹2,999',
    duration: '4 hrs 15 min',
    lessons: 16,
    hasPreview: true,
    description: 'An 8-week gym programme built specifically for runners. Covers glute activation, single-leg strength, hip mobility, and injury-prevention routines that complement your run training.',
    highlights: ['16 video sessions', 'Progressive loading structure', 'Home & gym variants', 'Yoga cool-down flows'],
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=400&h=250&fit=crop&auto=format',
    progress: null,
  },
];

const libraryItems = [
  { id: 3, type: 'AI Report', title: 'Dolly Sprint Mechanics Analysis', creator: 'Dolly AI by SF360', progress: 100 },
  { id: 4, type: 'PDF Guide', title: 'Race-Day Nutrition Playbook', creator: 'AFI Sports Science Team', progress: 60 },
];

function ProductDetail({ product, onBack, onBuy }: { product: typeof products[0]; onBack: () => void; onBuy: (id: number) => void }) {
  return (
    <div className="flex-1 overflow-y-auto pb-[100px] no-scrollbar">
      <div className="relative h-[200px]">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] to-transparent" />
        {product.hasPreview && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[56px] h-[56px] rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] flex items-center justify-center">
              <Play className="w-[22px] h-[22px] text-white fill-white ml-1" />
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[rgba(0,0,0,0.7)] rounded-full px-2.5 py-1">
          {typeIcons[product.type]}
          <span className="text-white text-[10px] font-semibold">{product.type}</span>
        </div>
      </div>

      <div className="px-4 pt-4">
        <p className="text-[#99A1AF] text-[12px] mb-1">{product.creator}</p>
        <h2 className="text-white text-[18px] font-bold leading-tight mb-2">{product.title}</h2>
        <div className="flex items-center gap-3 mb-4 text-[#99A1AF] text-[12px]">
          <span>{product.duration}</span>
          {product.lessons > 1 && <><span>·</span><span>{product.lessons} lessons</span></>}
        </div>

        <p className="text-[#a8a8b8] text-[13px] leading-relaxed mb-5">{product.description}</p>

        <div className="mb-5">
          <p className="text-white text-[14px] font-bold mb-3">What's included</p>
          <div className="flex flex-col gap-2">
            {product.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-[14px] h-[14px] text-[#00c864] flex-shrink-0" />
                <span className="text-[#c8c8d0] text-[13px]">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-4"
        style={{ background: 'linear-gradient(to top, #0b0b0f 85%, transparent)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-3">
          <div>
            <p className="text-[#99A1AF] text-[11px]">Price</p>
            <p className="text-[20px] font-bold" style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {product.price}
            </p>
          </div>
          <button
            onClick={() => onBuy(product.id)}
            className="flex-1 rounded-full py-3.5 text-white text-[15px] font-bold flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)', boxShadow: '0 0 20px rgba(201,17,95,0.4)' }}
          >
            <Download className="w-[16px] h-[16px]" />
            Buy — Instant Access
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StoreDigital() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'shop' | 'library'>('shop');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [purchasedIds, setPurchasedIds] = useState<number[]>([3, 4]);

  const handleBuy = (id: number) => {
    setPurchasedIds(prev => [...prev, id]);
    setSelectedProduct(null);
    setActiveTab('library');
  };

  const allLibraryItems = [
    ...libraryItems,
    ...purchasedIds.filter(id => !libraryItems.find(l => l.id === id)).map(id => {
      const p = products.find(p => p.id === id)!;
      return { id, type: p.type, title: p.title, creator: p.creator, progress: 0 };
    }),
  ];

  return (
    <div className="bg-black w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] relative flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 bg-[#0b0b0f] border-b border-[rgba(255,255,255,0.05)]">
          <div className="h-[56px] flex items-center px-4 gap-3">
            <button
              onClick={() => selectedProduct ? setSelectedProduct(null) : navigate('/store')}
              className="w-[36px] h-[36px] rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center"
            >
              <ArrowLeft className="w-[18px] h-[18px] text-white" />
            </button>
            <div>
              <h1 className="text-white font-bold text-[17px]">{selectedProduct ? selectedProduct.title : 'Digital Products'}</h1>
              {!selectedProduct && <p className="text-[#99A1AF] text-[11px]">Courses, programs & AI reports</p>}
            </div>
          </div>

          {!selectedProduct && (
            <div className="flex px-4 pb-3 gap-3">
              {(['shop', 'library'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 py-2 rounded-full text-[13px] font-semibold capitalize border transition-all"
                  style={activeTab === tab ? {
                    background: 'linear-gradient(135deg,#c9115f,#cd620e)',
                    border: '1px solid transparent',
                    color: 'white',
                  } : {
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#99A1AF',
                  }}
                >
                  {tab === 'library' ? `My Library (${allLibraryItems.length})` : 'Shop'}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} onBuy={handleBuy} />
        ) : activeTab === 'shop' ? (
          <div className="flex-1 overflow-y-auto pb-[70px] no-scrollbar px-4 pt-4">
            <div className="flex flex-col gap-4">
              {products.map(product => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-[#111116] rounded-[18px] border border-[rgba(255,255,255,0.07)] overflow-hidden text-left active:scale-[0.98] transition-transform"
                >
                  <div className="relative h-[140px]">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111116] to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[rgba(0,0,0,0.7)] rounded-full px-2.5 py-1">
                      {typeIcons[product.type]}
                      <span className="text-white text-[10px] font-semibold">{product.type}</span>
                    </div>
                    {product.hasPreview && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[rgba(0,200,100,0.15)] text-[#00c864]">PREVIEW</span>
                      </div>
                    )}
                    {purchasedIds.includes(product.id) && (
                      <div className="absolute bottom-3 right-3">
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[rgba(0,200,100,0.15)] text-[#00c864] flex items-center gap-1">
                          <CheckCircle className="w-[9px] h-[9px]" /> Owned
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-[#99A1AF] text-[11px] mb-1">{product.creator}</p>
                    <p className="text-white text-[14px] font-bold leading-tight">{product.title}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[15px] font-bold">{product.price}</span>
                      <div className="flex items-center gap-1 text-[#c9115f] text-[12px] font-semibold">
                        {purchasedIds.includes(product.id) ? 'View in Library' : 'Buy now'} <ChevronRight className="w-[13px] h-[13px]" />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pb-[70px] no-scrollbar px-4 pt-4">
            {allLibraryItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <BookOpen className="w-[40px] h-[40px] text-[#4a4a5a] mb-3" />
                <p className="text-[#99A1AF] text-[14px]">No purchases yet</p>
                <button onClick={() => setActiveTab('shop')} className="mt-3 text-[#c9115f] text-[13px] font-semibold">Browse products →</button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {allLibraryItems.map(item => (
                  <div key={item.id} className="bg-[#111116] rounded-[18px] border border-[rgba(255,255,255,0.07)] p-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          {typeIcons[item.type]}
                          <span className="text-[10px] text-[#99A1AF]">{item.type}</span>
                        </div>
                        <p className="text-white text-[14px] font-semibold leading-tight">{item.title}</p>
                        <p className="text-[#99A1AF] text-[11px] mt-0.5">{item.creator}</p>
                      </div>
                      <button className="text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 flex-shrink-0" style={{ background: 'linear-gradient(135deg,#c9115f,#cd620e)', color: 'white' }}>
                        <Play className="w-[10px] h-[10px]" /> Open
                      </button>
                    </div>
                    {item.progress !== undefined && (
                      <>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1">
                            <BarChart3 className="w-[11px] h-[11px] text-[#99A1AF]" />
                            <span className="text-[#99A1AF] text-[10px]">Progress</span>
                          </div>
                          <span className="text-[#99A1AF] text-[10px]">{item.progress}%</span>
                        </div>
                        <div className="h-[4px] bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${item.progress}%`, background: 'linear-gradient(135deg,#c9115f,#cd620e)' }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
 
    </div>
  );
}
