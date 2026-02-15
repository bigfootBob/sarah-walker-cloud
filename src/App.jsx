// The "Clean" way
import { Navbar, Hero, Footer } from './components';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Hero />
        {/* Other sections like Portfolio or About would go here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;