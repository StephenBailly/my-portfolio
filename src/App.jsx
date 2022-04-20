import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Work from './components/Work';
import './App.scss';

function App() {
  return (
    <div className="app" >
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;