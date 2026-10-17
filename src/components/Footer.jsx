import React from "react";
import { siteConfig } from "../config/siteConfig";

export default function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Footer Top Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="brand-logo footer-logo">
              <div className="brand-icon-wrapper">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="brand-name">
                Learn<span className="brand-accent">Hub</span>
              </span>
            </div>
            <p className="footer-desc">
              Watch this educational lesson and learn at your own pace. High-definition learning videos crafted for an uninterrupted educational experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#lesson-section">Watch Lesson</a>
              </li>
              <li>
                <a href="#about-section">About LearnHub</a>
              </li>
              <li>
                <a href="#notes-section">Lesson Outline</a>
              </li>
            </ul>
          </div>

          {/* Community & Telegram */}
          <div className="footer-col">
            <h4 className="footer-heading">Community</h4>
            <ul className="footer-links">
              <li>
                <a
                  href={siteConfig.telegram.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-telegram-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span>Telegram Channel</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-btn-link"
                  onClick={() => onOpenModal && onOpenModal("contact")}
                >
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div className="footer-col">
            <h4 className="footer-heading">Legal & Trust</h4>
            <ul className="footer-links">
              <li>
                <button
                  type="button"
                  className="footer-btn-link"
                  onClick={() => onOpenModal && onOpenModal("privacy")}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-btn-link"
                  onClick={() => onOpenModal && onOpenModal("terms")}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} {siteConfig.siteName}. All rights reserved. Built with React & Vite.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">Free Education</span>
            <span className="footer-badge">HTML5 Video</span>
            <span className="footer-badge">Vercel Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
