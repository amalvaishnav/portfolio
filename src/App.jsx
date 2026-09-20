import Hero from './components/Hero/Hero.jsx';
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
        {/* Next: About, Experience, Skills, Projects, Off the clock, Contact */}
      </main>
    </>
  );
}
