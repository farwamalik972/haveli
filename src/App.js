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
        <Route path="/gellary" element={<PhotoGellary/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </Router>
  );
}

export default App;
