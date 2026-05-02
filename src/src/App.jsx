import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import AppliancePage from './AppliancePage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <button className="text-blue-600 underline" onClick={() => setPage('home')}>หน้าแรก</button>
        <button className="text-blue-600 underline" onClick={() => setPage('appliance')}>อุปกรณ์</button>
      </nav>
      <main className="min-h-[60vh]">
        {page === 'home' && (
          <section id="center">
            <div className="hero">
              <img src={heroImg} className="base" width="170" height="179" alt="" />
              <img src={reactLogo} className="framework" alt="React logo" />
              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
            <div>
              <h1>Get started</h1>
              <p>
                Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
              </p>
            </div>
          </section>
        )}
        {page === 'appliance' && <AppliancePage />}
      </main>
    </div>
  );
}

export default App;
