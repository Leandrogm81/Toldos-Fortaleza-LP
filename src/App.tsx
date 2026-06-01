/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PolycarbonateSpecs from './components/PolycarbonateSpecs';
import BeforeAfter from './components/BeforeAfter';
import Simulator from './components/Simulator';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-850 font-sans selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden antialiased scroll-smooth" id="app-wrapper">
      {/* Structural navigation banner */}
      <Navbar />

      <main id="main-content-flow">
        {/* Core welcoming branding folds */}
        <Hero />

        {/* Technical advantages grids */}
        <Benefits />

        {/* Draggable transformation comparisons */}
        <BeforeAfter />

        {/* Policarbonat structural details */}
        <PolycarbonateSpecs />

        {/* Fully operational pricing estimator & customizer */}
        <Simulator />

        {/* Categorized photographical gallery */}
        <Portfolio />

        {/* Locally-sourced testimonials */}
        <Reviews />

        {/* Quick accordions */}
        <FAQ />
      </main>

      {/* Ground footer with geographical anchors */}
      <Footer />

      {/* Gracious whatsapp chat trigger overlays */}
      <FloatingWhatsApp />
    </div>
  );
}

