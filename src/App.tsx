import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import ServiceArea from './components/ServiceArea';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <ServiceArea />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
