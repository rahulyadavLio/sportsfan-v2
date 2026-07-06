import { createBrowserRouter } from "react-router";
import AppLayout from "@/components/layout/AppLayout";
import HomeScreen from "@/pages/Home/HomeScreen";
import AthleteProfile from "@/pages/AthleteProfile/AthleteProfile";
import Playbook from "@/pages/Playbook/Playbook";
import AudioPlayerScreen from "@/pages/Media/AudioPlayerScreen";
import VideoScreen from "@/pages/Media/VideoScreen";
import FanZone from "@/pages/FanZone/FanZone";
import WatchAlong from "@/pages/WatchAlong/WatchAlong";
import WatchAlongEvent from "@/pages/WatchAlong/WatchAlongEvent";
import MatchIntelligence from "@/pages/MatchIntelligence/MatchIntelligence";
import FanBattle from "@/pages/FanBattle/FanBattle";
import AskAI from "@/pages/AskAI/AskAI";
import AskAIChat from "@/pages/AskAI/AskAIChat";
import RecordsExplorer from "@/pages/RecordsExplorer/RecordsExplorer";
import MatchCentre from "@/pages/MatchCentre/MatchCentre";
import Predictions from "@/pages/Predictions/Predictions";
import StoreScreen from "@/pages/Store/Store";
import StoreCoachListing from "@/pages/Store/StoreCoachListing";
import StoreFeaturedServices from "@/pages/Store/StoreFeaturedServices";
import StoreServiceDetail from "@/pages/Store/StoreServiceDetail";
import StoreCoachProfile from "@/pages/Store/StoreCoachProfile";
import StoreBooking from "@/pages/Store/StoreBooking";
import StorePayment from "@/pages/Store/StorePayment";
import StoreBookingSuccess from "@/pages/Store/StoreBookingSuccess";
import StoreMyBookings from "@/pages/Store/StoreMyBookings";
import StoreReview from "@/pages/Store/StoreReview";
import AFIProfile from "@/pages/AFIProfile/AFIProfile";
import ArticleDetails from "@/pages/ArticleScreen/ArticleScreen";
import StoreExperiences from "@/pages/Store/StoreExperiences"
import StoreSessionRequests from "@/pages/Store/StoreSessionRequests"
import StoreAthleteMarketplace from "@/pages/Store/StoreAthleteMarketplace"
import StoreMemorabilia from "@/pages/Store/StoreMemorabilia"
import StoreAuctions from "@/pages/Store/StoreAuctions"
import StoreBrands from "@/pages/Store/StoreBrands"
import StoreDigital from "@/pages/Store/StoreDigital"
import StoreMemberships from "@/pages/Store/StoreMemberships"
import StoreAIDolly from "@/pages/Store/StoreAIDolly"
import StoreTicketedEvents from "@/pages/Store/StoreTicketedEvents"

export const router = createBrowserRouter([
  {
    // AppLayout wraps all main routes — provides the persistent bottom nav bar
    Component: AppLayout,
    children: [
      { path: "/", Component: HomeScreen },
      { path: "/athlete/:id", Component: AthleteProfile },
      { path: "/playbook", Component: Playbook },
      { path: "/audio/:id", Component: AudioPlayerScreen },
      { path: "/audio", Component: AudioPlayerScreen },
      { path: "/video/:id", Component: VideoScreen },
      { path: "/video", Component: VideoScreen },
      { path: "/fan-zone", Component: FanZone },
      { path: "/watch-along", Component: WatchAlong },
      { path: "/watch-along/:eventId", Component: WatchAlongEvent },
      { path: "/match-intelligence", Component: MatchIntelligence },
      { path: "/fan-battle", Component: FanBattle },
      { path: "/ask-ai", Component: AskAI },
      { path: "/ask-ai-chat", Component: AskAIChat },
      { path: "/records-explorer", Component: RecordsExplorer },
      { path: "/match-centre", Component: MatchCentre },
      { path: "/predictions", Component: Predictions },
      { path: "/store", Component: StoreScreen },
      { path: "/store/coaches", Component: StoreCoachListing },
      { path: "/store/services", Component: StoreFeaturedServices },
      { path: "/store/service/:id", Component: StoreServiceDetail },
      { path: "/store/coach/:id", Component: StoreCoachProfile },
      { path: "/store/booking/:id", Component: StoreBooking },
      { path: "/store/payment/:id", Component: StorePayment },
      { path: "/store/booking-success/:id", Component: StoreBookingSuccess },
      { path: "/store/my-bookings", Component: StoreMyBookings },
      { path: "/store/review/:id", Component: StoreReview },
      { path: "/store/experiences", Component: StoreExperiences },
      { path: "/store/session-requests", Component: StoreSessionRequests },
      { path: "/store/athletes", Component: StoreAthleteMarketplace },
      { path: "/store/memorabilia", Component: StoreMemorabilia },
      { path: "/store/auctions", Component: StoreAuctions },
      { path: "/store/brands", Component: StoreBrands },
      { path: "/store/digital", Component: StoreDigital },
      { path: "/store/memberships", Component: StoreMemberships },
      { path: "/store/dolly", Component: StoreAIDolly },
      { path: "/store/ticketed-events", Component: StoreTicketedEvents },
      { path: "/athlete/afi", Component: AFIProfile },
      { path: "/articles/:id", Component: ArticleDetails },
    ],
  },
]);
