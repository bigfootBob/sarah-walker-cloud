import { Navbar, Hero, Footer } from './components';
import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;