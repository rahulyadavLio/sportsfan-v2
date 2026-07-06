import { useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';
import { Tv, Gamepad2, Store, Trophy } from 'lucide-react';
import { ScrollToTop } from '@/components/common/ScrollToTop/ScrollToTop';

const NAV_ITEMS = [
 {
  label: 'Feed',
  path: '/',
  icon: (active: boolean) => (
    <svg
      className={`w-[20px] h-[20px] ${
        active ? 'text-[#ff006c]' : 'text-[#99A1AF]'
      }`}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M2.5 10.8333L10 3.33333L17.5 10.8333V17.5H12.5V13.3333H7.5V17.5H2.5V10.8333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  ),
  exact: true,
},
  {
    label: 'Watch',
    path: '/watch-along',
    icon: (active: boolean) => (
      <Tv className={`w-[20px] h-[20px] ${active ? 'text-[#ff006c]' : 'text-[#99A1AF]'}`} strokeWidth={1.66667} />
    ),
    exact: false,
  },
  {
    label: 'Fantasy',
    path: '/fan-battle',
    icon: (active: boolean) => (
      <Gamepad2 className={`w-[20px] h-[20px] ${active ? 'text-[#ff006c]' : 'text-[#99A1AF]'}`} strokeWidth={1.66667} />
    ),
    exact: false,
  },
  {
    label: 'Store',
    path: '/store',
    icon: (active: boolean) => (
      <Store className={`w-[20px] h-[20px] ${active ? 'text-[#ff006c]' : 'text-[#99A1AF]'}`} strokeWidth={1.66667} />
    ),
    exact: false,
  },
  {
    label: 'Fan Zone',
    path: '/fan-zone',
    icon: (active: boolean) => (
      <Trophy className={`w-[20px] h-[20px] ${active ? 'text-[#ff006c]' : 'text-[#99A1AF]'}`} strokeWidth={1.66667} />
    ),
    exact: false,
  },
];

const HIDE_APP_LAYOUT_ROUTES = [
  '/ask-ai',
  '/login',
  '/articles/:id',
  '/playbook',
  '/athlete/afi',
  '/athlete/:id',
  '/video/:id',
  '/audio/:id',
  '/articles',
  '/video',
  '/audio',
  '/ask-ai-chat',
  '/records-explorer',
  '/match-centre',
  '/store/coaches',
  '/store/services',
  '/store/service/:id',
  '/store/coach/:id',
  '/store/booking/:id',
  '/store/payment/:id',
  '/store/booking-success/:id',
  '/store/my-bookings',
  '/store/review/:id',
];

export default function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  const hideLayout =
    HIDE_APP_LAYOUT_ROUTES.some(
      (route) =>
        location.pathname === route ||
        location.pathname.startsWith(route + '/')
    ) ||
    location.pathname.startsWith('/athlete/') ||
    location.pathname.startsWith('/store/');


  if (hideLayout) {
    return (
      <>
        <ScrollToTop scrollRef={mainRef} />
        <Outlet />
      </>
    );
  }

  function isActive(item: (typeof NAV_ITEMS)[number]) {
    if (item.exact) return location.pathname === item.path;
    return (
      location.pathname === item.path ||
      location.pathname.startsWith(item.path + '/')
    );
  }

  return (
    <div className="bg-black w-full flex justify-center h-[100dvh]">
      <div className="w-full max-w-[390px] bg-[#0b0b0f] flex flex-col h-full">
        <ScrollToTop scrollRef={mainRef} />

        <main ref={mainRef} className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
          <Outlet />
        </main>

        <nav className="flex-shrink-0 z-50 bg-[#0b0b0f] border-t border-[#353535] h-[57px] flex items-center justify-around px-2">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);

            return (
              <button
                key={item.path}
                className="flex flex-col items-center gap-[3px] flex-1 py-1"
                onClick={() => navigate(item.path)}
              >
                {item.icon(active)}
                <span
                  className={`text-[10px] font-semibold ${
                    active ? 'text-[#ff006c]' : 'text-[#99A1AF]'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}