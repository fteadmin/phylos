import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import About from './components/About';
import RunClub from './components/RunClub';
// import Membership from './components/Membership';
// import Events from './components/Events';
// import Clubs from './components/Clubs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Home page component
function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <VisionMission />
      <About />
      {/* <Membership /> */}
      {/* <Events /> */}
      {/* <Clubs /> */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

// Run Club page component
function RunClubPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <RunClub />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/runclub" element={<RunClubPage />} />
      </Routes>
    </Router>
  );
}

export default App;