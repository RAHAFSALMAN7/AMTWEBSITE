import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استدعاء الكومبوننتات
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import SolutionDetails from './components/SolutionDetails';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientsSection from './components/ClientsSection';
import LatestNews from './components/LatestNews';
import NewsDetails from './pages/NewsDetails';
import ScrollToTop from './components/ScrollToTop'; // ✅ استدعاء الكومبوننت الجديد

// صفحات السكشنات (ICT)
import DataNetwork from './ict/DataNetwork';
import UnifiedCommunications from './ict/UnifiedCommunications';
import Wireless from './ict/Wireless';
import DataCenter from './ict/DataCenter';
import NetworkSecurity from './ict/NetworkSecurity';
import IpTelephony from './ict/IpTelephony';

// صفحات السكشنات (Low Current Systems)
import FireAlarm from './low-current-systems/FireAlarm';
import CCTV from './low-current-systems/CCTV';
import AccessControl from './low-current-systems/AccessControl';
import MasterClock from './low-current-systems/MasterClock';

// صفحات Audio Visual Systems
import MeetingConferenceRoomsAV from './Audio_Visual_Systems/MeetingConferenceRoomsAV';
import AuditoriumsTheaters from './Audio_Visual_Systems/AuditoriumsTheaters';
import IPTVDigitalSignage from './Audio_Visual_Systems/IPTVDigitalSignage';
import VideoWallMounting from './Audio_Visual_Systems/VideoWallMounting';
import InteractiveScreens from './Audio_Visual_Systems/InteractiveScreens';

// صفحة فرع OSP_Solutions الجديد
import OSP_Solutions from './OSP_Solutions/OSP_Solutions';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ الكومبوننت هون */}
      <div className="min-h-screen bg-white text-dark-blue overflow-x-hidden font-body">
        <Header />

        <Routes>
          {/* الصفحة الرئيسية */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Solutions />
                <WhyChooseUs />
                <ClientsSection />
                <LatestNews />
              </>
            }
          />

          {/* صفحات رئيسية أخرى */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Solutions />} />
          <Route path="/solution-details" element={<SolutionDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />

          {/* صفحة تفاصيل الأخبار */}
          <Route path="/news/:id" element={<NewsDetails />} />

          {/* صفحات السكشنات (ICT) */}
          <Route path="/ict/data-network" element={<DataNetwork />} />
          <Route path="/ict/unified-communications" element={<UnifiedCommunications />} />
          <Route path="/ict/wireless" element={<Wireless />} />
          <Route path="/ict/data-center" element={<DataCenter />} />
          <Route path="/ict/network-security" element={<NetworkSecurity />} />
          <Route path="/ict/ip-telephony" element={<IpTelephony />} />

          {/* صفحات السكشنات (Low Current Systems) */}
          <Route path="/low-current/fire-alarm" element={<FireAlarm />} />
          <Route path="/low-current/cctv" element={<CCTV />} />
          <Route path="/low-current/access-control" element={<AccessControl />} />
          <Route path="/low-current/master-clock" element={<MasterClock />} />

          {/* صفحات Audio Visual Systems */}
          <Route path="/av/meeting-rooms" element={<MeetingConferenceRoomsAV />} />
          <Route path="/av/auditoriums" element={<AuditoriumsTheaters />} />
          <Route path="/av/iptv" element={<IPTVDigitalSignage />} />
          <Route path="/av/video-wall" element={<VideoWallMounting />} />
          <Route path="/av/interactive-screens" element={<InteractiveScreens />} />

          {/* صفحة فرع OSP_Solutions الجديد */}
          <Route path="/osp-solutions" element={<OSP_Solutions />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
