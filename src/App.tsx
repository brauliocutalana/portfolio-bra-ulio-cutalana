import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Top Banner & Hero Section */}
        <Hero />

        {/* Biography & Trajectory */}
        <About />

        {/* Technical Competences */}
        <Skills />

        {/* Get in Touch / Contact */}
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
