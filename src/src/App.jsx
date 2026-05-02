import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import AppliancePage from './AppliancePage';
import Dashboard from './Dashboard';
import TaskTemplatePage from './TaskTemplatePage';
import MaintenanceLogPage from './MaintenanceLogPage';

function App() {
  const [page, setPage] = useState('dashboard');

  return (
    <div>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <button className={page === 'dashboard' ? 'font-bold underline text-blue-700' : 'text-blue-600 underline'} onClick={() => setPage('dashboard')}>Dashboard</button>
        <button className={page === 'appliance' ? 'font-bold underline text-blue-700' : 'text-blue-600 underline'} onClick={() => setPage('appliance')}>อุปกรณ์</button>
        <button className={page === 'tasktemplate' ? 'font-bold underline text-blue-700' : 'text-blue-600 underline'} onClick={() => setPage('tasktemplate')}>Task Template</button>
        <button className={page === 'log' ? 'font-bold underline text-blue-700' : 'text-blue-600 underline'} onClick={() => setPage('log')}>Maintenance Log</button>
      </nav>
      <main className="min-h-[60vh]">
        {page === 'dashboard' && <Dashboard />}
        {page === 'appliance' && <AppliancePage />}
        {page === 'tasktemplate' && <TaskTemplatePage />}
        {page === 'log' && <MaintenanceLogPage />}
      </main>
    </div>
  );
}

export default App;
