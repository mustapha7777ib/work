import Navbar from './navbar';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';
import Services from './services';
import Home from './home';
import About from './about';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-[#F8F1E9] text-black">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;