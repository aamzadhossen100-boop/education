import React from "react";
import { siteConfig } from "../config/siteConfig";

export default function InfoModal({ modalType, onClose }) {
  if (!modalType) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal: Contact */}
        {modalType === "contact" && (
          <div className="modal-body">
            <h3 className="modal-title">Contact & Support</h3>
            <p className="modal-subtitle">
              Have questions, feedback, or need help with our learning material? Reach out anytime.
            </p>

            <div className="contact-card-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Email Support</span>
                  <p className="contact-value">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Telegram Channel</span>
                  <a
                    href={siteConfig.telegram.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {siteConfig.telegram.channelName} (Click to open)
                  </a>
                </div>
              </div>
            </div>

            <p className="contact-notice">{siteConfig.contact.responseNotice}</p>
          </div>
        )}

        {/* Modal: Privacy Policy */}
        {modalType === "privacy" && (
          <div className="modal-body legal-modal">
            <h3 className="modal-title">Privacy Policy</h3>
            <p className="modal-subtitle">Last updated: October 2026</p>

            <div className="legal-text">
              <h4>1. Overview</h4>
              <p>
                At {siteConfig.siteName}, your privacy is our top priority. We do not require registration, passwords, or personal identity details to access our educational video lessons.
              </p>

              <h4>2. Information Collection</h4>
              <p>
                We do not collect sensitive personal data. Standard web analytics and server logs (such as IP address, browser type, and timestamp) may be automatically gathered by our hosting infrastructure (Vercel) to maintain uptime, performance, and security.
              </p>

              <h4>3. Third-Party Advertising</h4>
              <p>
                We may partner with third-party advertising networks (such as Adsterra) to support the hosting and maintenance of free educational resources. These third-party vendors may use cookies or web beacons to display non-intrusive contextual advertisements. You can manage or disable cookies through your browser settings at any time.
              </p>

              <h4>4. External Links</h4>
              <p>
                Our website may include links to our official Telegram channel and other external educational platforms. We encourage you to review their independent privacy practices.
              </p>
            </div>
          </div>
        )}

        {/* Modal: Terms of Service */}
        {modalType === "terms" && (
          <div className="modal-body legal-modal">
            <h3 className="modal-title">Terms of Service</h3>
            <p className="modal-subtitle">Last updated: October 2026</p>

            <div className="legal-text">
              <h4>1. Acceptance of Terms</h4>
              <p>
                By accessing and utilizing {siteConfig.siteName}, you acknowledge and agree to comply with these terms of service and all applicable laws and regulations.
              </p>

              <h4>2. Educational Purpose</h4>
              <p>
                All videos, outlines, and educational materials provided on this platform are designed purely for informational and learning purposes.
              </p>

              <h4>3. Fair Use & Prohibitions</h4>
              <p>
                You agree not to disrupt website services, attempt unauthorized server access, or distribute automated spam through our contact channels.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
