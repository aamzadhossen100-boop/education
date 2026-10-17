import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoModal from "./components/InfoModal";
import Home from "./pages/Home";
import { siteConfig } from "./config/siteConfig";

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    // Ensure accurate page title based on siteConfig
    document.title = `${siteConfig.pageTitle} | ${siteConfig.siteName}`;
  }, []);

  return (
    <div className="app-layout">
      {/* Top Header */}
      <Header onOpenModal={(type) => setActiveModal(type)} />

      {/* Main Home Page */}
      <Home onOpenModal={(type) => setActiveModal(type)} />

      {/* Global Footer */}
      <Footer onOpenModal={(type) => setActiveModal(type)} />

      {/* Dynamic Modal Dialog */}
      <InfoModal
        modalType={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
