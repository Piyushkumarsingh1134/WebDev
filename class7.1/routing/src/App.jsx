import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { landing } from './components/landing'; // Corrected the import for Landing

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/dashboard')}>
        Dashboard
      </button>
      <button onClick={() => navigate('/')}>
        Landing
      </button>
    </div>
  );
}

export default App;



