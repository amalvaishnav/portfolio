import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ThemeToggle />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        {/* Next: Skills, Projects, Off the clock, Contact */}
      </main>
    </>
  );
}
