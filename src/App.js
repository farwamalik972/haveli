import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Style.scss';
import Home from './pages/Home';
import About from './pages/About';
import OurHistory from './pages/OurHistory';
import MissionVission from './pages/MissionVission';
import OurTeam from "./pages/OurTeam";
import DiningExperience from "./pages/DiningExperience";
import OpnSky from "./pages/OpnSky";
import PhotoGellary from "./pages/PhotoGellary";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import ClubNames from "./pages/ClubNames";
import ClubInfo from "./pages/ClubInfo";
import Catering from "./pages/Catering";
import BirthdayPage from "./pages/BirthdayPage";
import HaveliGarden from "./pages/HaveliGarden";
import Verandah from "./pages/Verandah";
import BaroodKhana from "./pages/BaroodKhana";
import Museum from "./pages/Museum";
import SultanateRoom from "./pages/SultanateRoom";
import KhalsaRoom from "./pages/KhalsaRoom";
import MughalRoom from "./pages/MughalRoom";
import RajRoom from "./pages/RajRoom";
import SammarPalace from "./pages/SammarPalace";
import NikkahGallery from "./pages/NikkahGallery";
import EventDecor from "./pages/EventDeco";
import CorporateEventDecor from "./pages/CorporateEventDecor";
import OffPremisesCatering from "./pages/OffPremisesCatering";
import WalledCityTours from "./pages/WalledCityTours";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/mission-vision" element={<MissionVission />} />
        <Route path="/our-team" element={<OurTeam/>} />
        <Route path="/dining-experience" element={<DiningExperience/>} />
        <Route path="/open-sky" element={<OpnSky/>} />
        <Route path="/haveligarden" element={<HaveliGarden/>} />
        <Route path="/verandha" element={<Verandah/>} />
        <Route path="/baroodkhana" element={<BaroodKhana/>} />
        <Route path="/musem" element={<Museum/>} />
        <Route path="/gellary" element={<PhotoGellary/>} />
        <Route path="birthday/" element={<BirthdayPage/>} />
        <Route path="/club" element={<ClubNames/>} />
        <Route path="/clubinfo" element={<ClubInfo/>} />
        <Route path="/catering" element={<Catering/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/sultanroom" element={<SultanateRoom/>} />
        <Route path="/khalsaroom" element={<KhalsaRoom/>} />
        <Route path="/mughal" element={<MughalRoom/>} />
        <Route path="/raj" element={<RajRoom/>} />
        <Route path="/sammr" element={<SammarPalace/>} />
        <Route path="/nikha" element={<NikkahGallery/>} />
        <Route path="/event" element={<EventDecor/>} />
        <Route path="/corporateevent" element={<CorporateEventDecor/>} />
        <Route path="/offpremises" element={<OffPremisesCatering/>} />
        <Route path="/citytours" element={<WalledCityTours/>} />
      </Routes>
    </Router>
  );
}

export default App;
