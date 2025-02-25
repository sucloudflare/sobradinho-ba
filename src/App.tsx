import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white font-poppins">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;