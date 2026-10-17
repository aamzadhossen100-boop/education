import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";

export default function Header({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="LearnHub Home">
          <div className="brand-icon-wrapper">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="brand-name">
            Learn<span className="brand-accent">Hub</span>
          </span>
          <span className="brand-badge">PRO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a href="#lesson-section" className="nav-link">
            Lesson
          </a>
          <a href="#about-section" className="nav-link">
            About
          </a>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => onOpenModal && onOpenModal("contact")}
          >
            Contact
          </button>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => onOpenModal && onOpenModal("privacy")}
          >
            Privacy
          </button>
        </nav>

        {/* Telegram Direct Action Button (Optimized for Telegram traffic) */}
        <div className="header-actions">
          <a
            href={siteConfig.telegram.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-telegram"
            title="Join our official Telegram Channel"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            <span className="btn-text">Join Telegram</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <a
            href="#lesson-section"
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Watch Lesson
          </a>
          <a
            href="#about-section"
            className="mobile-nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About LearnHub
          </a>
          <button
            type="button"
            className="mobile-nav-link text-left"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal && onOpenModal("contact");
            }}
          >
            Contact Support
          </button>
          <button
            type="button"
            className="mobile-nav-link text-left"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal && onOpenModal("privacy");
            }}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            className="mobile-nav-link text-left"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal && onOpenModal("terms");
            }}
          >
            Terms of Service
          </button>

          <a
            href={siteConfig.telegram.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-telegram mobile-telegram-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            <span>Join Telegram Channel</span>
          </a>
        </div>
      )}
    </header>
  );
}
