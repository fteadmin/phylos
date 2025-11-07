import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import About from './components/About';
// import Membership from './components/Membership';
// import Events from './components/Events';
// import Clubs from './components/Clubs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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

export default App;