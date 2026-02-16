import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import PartnersSection from './components/PartnersSection';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import SolutionDetails from './components/SolutionDetails';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClientsSection from './components/ClientsSection';
import LatestNews from './components/LatestNews';
import NewsDetails from './pages/NewsDetails';
import WhatsAppFloating from './components/WhatsAppFloating';

// ICT
import DataNetwork from './ict/DataNetwork';
import UnifiedCommunications from './ict/UnifiedCommunications';
import Wireless from './ict/Wireless';
import DataCenter from './ict/DataCenter';
import NetworkSecurity from './ict/NetworkSecurity';
import IpTelephony from './ict/IpTelephony';

// Low Current
import FireAlarm from './low-current-systems/FireAlarm';
import CCTV from './low-current-systems/CCTV';
import AccessControl from './low-current-systems/AccessControl';
import MasterClock from './low-current-systems/MasterClock';

// AV
import MeetingConferenceRoomsAV from './Audio_Visual_Systems/MeetingConferenceRoomsAV';
import AuditoriumsTheaters from './Audio_Visual_Systems/AuditoriumsTheaters';
import IPTVDigitalSignage from './Audio_Visual_Systems/IPTVDigitalSignage';
import VideoWallMounting from './Audio_Visual_Systems/VideoWallMounting';
import InteractiveScreens from './Audio_Visual_Systems/InteractiveScreens';

// OSP
import OSP_Solutions from './OSP_Solutions/OSP_Solutions';
import {
  DEFAULT_LOCALE,
  getLocaleDirection,
  isSupportedLocale,
  withLocale,
} from './utils/localeRouting';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Solutions />
    <WhyChooseUs />
    <PartnersSection />
    <ClientsSection />
    <LatestNews />
  </>
);

const LocaleLayout: React.FC = () => {
  const { i18n } = useTranslation();
  const { locale } = useParams();
  const location = useLocation();
  const activeLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  useEffect(() => {
    if (i18n.language !== activeLocale) {
      void i18n.changeLanguage(activeLocale);
    }

    document.documentElement.lang = activeLocale;
    document.documentElement.dir = getLocaleDirection(activeLocale);
  }, [activeLocale, i18n]);

  if (!isSupportedLocale(locale)) {
    return <Navigate to={withLocale(location.pathname, DEFAULT_LOCALE)} replace />;
  }

  return (
    <div className="min-h-screen bg-white text-dark-blue overflow-x-hidden font-body">
      <Header />

      <Routes>
        <Route index element={<HomePage />} />

        <Route path="about" element={<About />} />
        <Route path="services" element={<Solutions />} />
        <Route path="solution-details" element={<SolutionDetails />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />

        <Route path="news/:slug" element={<NewsDetails />} />

        <Route path="ict/data-network" element={<DataNetwork />} />
        <Route path="ict/unified-communications" element={<UnifiedCommunications />} />
        <Route path="ict/wireless" element={<Wireless />} />
        <Route path="ict/data-center" element={<DataCenter />} />
        <Route path="ict/network-security" element={<NetworkSecurity />} />
        <Route path="ict/ip-telephony" element={<IpTelephony />} />

        <Route path="low-current/fire-alarm" element={<FireAlarm />} />
        <Route path="low-current/cctv" element={<CCTV />} />
        <Route path="low-current/access-control" element={<AccessControl />} />
        <Route path="low-current/master-clock" element={<MasterClock />} />

        <Route path="av/meeting-rooms" element={<MeetingConferenceRoomsAV />} />
        <Route path="av/auditoriums" element={<AuditoriumsTheaters />} />
        <Route path="av/iptv" element={<IPTVDigitalSignage />} />
        <Route path="av/video-wall" element={<VideoWallMounting />} />
        <Route path="av/interactive-screens" element={<InteractiveScreens />} />

        <Route path="osp-solutions" element={<OSP_Solutions />} />
        <Route path="*" element={<Navigate to={withLocale("/", activeLocale)} replace />} />
      </Routes>

      {/* زر واتساب ثابت بكل الصفحات */}
      <WhatsAppFloating />

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.lang = DEFAULT_LOCALE;
    document.documentElement.dir = getLocaleDirection(DEFAULT_LOCALE);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={withLocale("/", DEFAULT_LOCALE)} replace />} />
        <Route path="/:locale/*" element={<LocaleLayout />} />
        <Route path="*" element={<Navigate to={withLocale("/", DEFAULT_LOCALE)} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
