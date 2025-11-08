import React from 'react';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Narrative />
      <Product />
      <About />
      <Footer />
    </div>
  );
}

export default App;
