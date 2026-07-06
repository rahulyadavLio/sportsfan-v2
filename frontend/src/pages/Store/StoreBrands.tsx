import { useNavigate } from 'react-router';
 
import { ArrowLeft, Search, Tag, ChevronRight, ShoppingCart, Zap, Star } from 'lucide-react';
import { useState } from 'react';

const brands = [
  { id: 1, name: 'Adidas India', logo: '🏃', color: '#000000', offer: 'Up to 30% off' },
  { id: 2, name: 'ASICS Run', logo: '🎽', color: '#003366', offer: '15% Flash Sale' },
  { id: 3, name: 'Decathlon', logo: '🛍️', color: '#0082C3', offer: '₹500 off on ₹3000' },
  { id: 4, name: 'Puma Sports', logo: '🐆', color: '#FF0000', offer: 'Student Discount 20%' },
  { id: 5, name: 'NikeRun Club', logo: '✔️', color: '#111111', offer: 'Free shipping' },
  { id: 6, name: 'Reebok IN', logo: '💪', color: '#CC0000', offer: 'Buy 2 get 1 free' },
];

const products = [
  {
    id: 1,
    brand: 'Adidas India',
    name: 'Adizero Distance Running Shoe',
    price: '₹8,999',
    originalPrice: '₹12,999',
    rating: 4.7,
    reviews: 342,
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&auto=format',
    tag: 'Sale',
    tagColor: '#c9115f',
  },
  {
    id: 2,
    brand: 'ASICS Run',
    name: 'Gel-Nimbus 25 Marathon Edition',
    price: '₹14,499',
    originalPrice: '₹16,999',
    rating: 4.9,
    reviews: 218,
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&auto=format',
    tag: 'Flash Sale',
    tagColor: '#cd620e',
  },
  {
    id: 3,
    brand: 'Decathlon',
    name: 'Kalenji Run Support Compression Tights',
    price: '₹1,499',
    originalPrice: '₹2,199',
    rating: 4.4,
    reviews: 891,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=300&fit=crop&auto=format',
    tag: 'Popular',
    tagColor: '#c9115f',
  },
  {
    id: 4,
    brand: 'Puma Sports',
    name: 'EvoStrider Track & Field Spike',
    price: '₹6,299',
    originalPrice: '₹7,899',
    rating: 4.6,
    reviews: 156,
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    image: 'https://images.unsplash.com/photo-1584735175097-9ba52c0fc3d7?w=300&h=300&fit=crop&auto=format',
    tag: 'Student Deal',
    tagColor: '#00c864',
  },
  {
    id: 5,
    brand: 'NikeRun Club',
    name: 'Vaporfly 3 — Competition Road Racing',
    price: '₹19,999',
    originalPrice: '₹19,999',
    rating: 4.9,
    reviews: 512,
    sizes: ['UK 7', 'UK 8', 'UK 8.5', 'UK 9', 'UK 10'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&auto=format',
    tag: 'New',
    tagColor: '#6b7280',
  },
  {
    id: 6,
    brand: 'Decathlon',
    name: 'Kiprun KS900 Long Distance Running Shoe',
    price: '₹4,999',
    originalPrice: '₹5,999',
    rating: 4.5,
    reviews: 1245,
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&auto=format',
    tag: '₹500 off',
    tagColor: '#c9115f',
  },
];

function ProductDetail({ product, onBack }: { product: typeof products[0]; onBack: () => void }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [coupon, setCoupon] = useState('');
  const [added, setAdded] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto pb-[100px] no-scrollbar">
      <div className="relative h-[280px] bg-[#1a1a1f]">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-white text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: product.tagColor }}>
            {product.tag}
          </span>
        </div>
      </div>

      <div className="px-4 pt-4">
        <p className="text-[#99A1AF] text-[12px] mb-1">{product.brand}</p>
        <h2 className="text-white text-[18px] font-bold leading-tight mb-2">{product.name}</h2>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[22px] font-bold">{product.price}</span>
          {product.originalPrice !== product.price && (
            <span className="text-[#4a4a5a] text-[14px] line-through">{product.originalPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2 mb-5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-[13px] h-[13px]" style={{ color: i < Math.floor(product.rating) ? '#FFD700' : '#4a4a5a', fill: i < Math.floor(product.rating) ? '#FFD700' : '#4a4a5a' }} />
            ))}
          </div>
          <span className="text-[#FFD700] text-[12px] font-semibold">{product.rating}</span>
          <span className="text-[#4a4a5a] text-[11px]">({product.reviews} reviews)</span>
        </div>

        <div className="mb-5">
          <p className="text-white text-[13px] font-bold mb-3">Select Size</p>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className="px-3.5 py-2 rounded-[10px] text-[12px] font-semibold border transition-all"
                style={selectedSize === size ? {
                  background: 'linear-gradient(135deg,#c9115f,#cd620e)',
                  border: '1px solid transparent',
                  color: 'white',
                } : {
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#99A1AF',
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="text-white text-[13px] font-bold mb-2">Coupon Code</p>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[#99A1AF]" />
              <input
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] pl-9 pr-4 py-2.5 text-white text-[13px] placeholder:text-[#4a4a5a] focus:outline-none focus:border-[rgba(201,17,95,0.5)]"
              />
            </div>
            <button className="px-4 rounded-[12px] text-[13px] font-semibold border border-[rgba(201,17,95,0.4)] text-[#c9115f]">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-4"
        style={{ background: 'linear-gradient(to top, #0b0b0f 85%, transparent)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <button
          onClick={() => selectedSize && setAdded(true)}
          className="w-full rounded-full py-3.5 text-white text-[15px] font-bold flex items-center justify-center gap-2 transition-all"
          style={added ? {
            background: 'rgba(0,200,100,0.12)',
            border: '1px solid rgba(0,200,100,0.3)',
            color: '#00c864',
          } : {
            background: selectedSize ? 'linear-gradient(135deg,#c9115f,#cd620e)' : 'rgba(255,255,255,0.1)',
            boxShadow: selectedSize ? '0 0 20px rgba(201,17,95,0.4)' : 'none',
            opacity: selectedSize ? 1 : 0.5,
          }}
        >
          <ShoppingCart className="w-[16px] h-[16px]" />
          {added ? 'Added to Cart' : selectedSize ? 'Add to Cart' : 'Select a Size'}
        </button>
      </div>
    </div>
  );
}

export default function StoreBrands() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [search, setSearch] = useState('');
  const [activeBrand, setActiveBrand] = useState('All');

  const filteredProducts = products.filter(p => {
    const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
    const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchesBrand && matchesSearch;
  });

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
            <div className="flex-1">
              <h1 className="text-white font-bold text-[17px]">{selectedProduct ? selectedProduct.name : 'Brands'}</h1>
              {!selectedProduct && <p className="text-[#99A1AF] text-[11px]">Sports gear & apparel</p>}
            </div>
          </div>

          {!selectedProduct && (
            <>
              <div className="px-4 pb-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[#99A1AF]" />
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[10px] pl-9 pr-4 py-2 text-white text-[13px] placeholder:text-[#4a4a5a] focus:outline-none focus:border-[rgba(201,17,95,0.5)]"
                  />
                </div>
              </div>

              {/* Brand logos row */}
              <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 pb-3">
                <button
                  onClick={() => setActiveBrand('All')}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all"
                  style={activeBrand === 'All' ? {
                    background: 'linear-gradient(135deg,#c9115f,#cd620e)',
                    border: '1px solid transparent',
                    color: 'white',
                  } : {
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#99A1AF',
                  }}
                >
                  All Brands
                </button>
                {brands.map(brand => (
                  <button
                    key={brand.id}
                    onClick={() => setActiveBrand(brand.name)}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all"
                    style={activeBrand === brand.name ? {
                      background: 'linear-gradient(135deg,#c9115f,#cd620e)',
                      border: '1px solid transparent',
                      color: 'white',
                    } : {
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#99A1AF',
                    }}
                  >
                    <span>{brand.logo}</span>
                    <span>{brand.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Active offers strip */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 pb-3">
                {brands.map(brand => (
                  <div key={brand.id} className="flex-shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1" style={{ background: 'rgba(201,17,95,0.08)', border: '1px solid rgba(201,17,95,0.2)' }}>
                    <Zap className="w-[10px] h-[10px] text-[#c9115f]" />
                    <span className="text-[#c9115f] text-[10px] font-semibold">{brand.name.split(' ')[0]}: {brand.offer}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        ) : (
          <div className="flex-1 overflow-y-auto pb-[70px] no-scrollbar">
            <div className="grid grid-cols-2 gap-3 px-4 pt-4">
              {filteredProducts.map(product => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="bg-[#111116] rounded-[16px] border border-[rgba(255,255,255,0.07)] overflow-hidden text-left active:scale-[0.98] transition-transform"
                >
                  <div className="relative h-[130px] bg-[#1a1a1f]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2">
                      <span className="text-white text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: product.tagColor }}>
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[#99A1AF] text-[9px] mb-0.5">{product.brand}</p>
                    <p className="text-white text-[12px] font-semibold leading-tight line-clamp-2">{product.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-[10px] h-[10px] text-[#FFD700] fill-[#FFD700]" />
                      <span className="text-[#FFD700] text-[10px]">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9115f] to-[#cd620e] text-[13px] font-bold">{product.price}</span>
                      <ChevronRight className="w-[12px] h-[12px] text-[#4a4a5a]" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
 
    </div>
  );
}
