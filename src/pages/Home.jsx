import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import AdSlot from "../components/AdSlot";
import { siteConfig } from "../config/siteConfig";

export default function Home({ onOpenModal }) {
  const [copyStatus, setCopyStatus] = useState("");

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${siteConfig.hero.video.title} | ${siteConfig.siteName}`,
          text: siteConfig.hero.video.description,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      // Fallback copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopyStatus("Link copied to clipboard!");
        setTimeout(() => setCopyStatus(""), 3000);
      } catch (err) {
        setCopyStatus("Could not copy link");
      }
    }
  };

  return (
    <main className="main-content">
      {/* Hero Header Section */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="content-container">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>{siteConfig.hero.badgeText}</span>
          </div>
          <h1 id="hero-heading" className="main-heading">
            {siteConfig.hero.mainHeading}
          </h1>
          <p className="hero-subheading">{siteConfig.hero.subHeading}</p>
        </div>
      </section>

      {/* 1. TOP ADVERTISEMENT BANNER (Above the video) */}
      <section className="ad-section top-ad-section" aria-label="Top Advertisement">
        <div className="content-container">
          <AdSlot
            slotId="topBanner"
            label="Top Banner (728x90 / Mobile 320x50)"
            format="728x90"
          />
        </div>
      </section>

      {/* MAIN VIDEO STAGE */}
      <section id="lesson-section" className="video-section" aria-labelledby="lesson-title">
        <div className="content-container">
          <div className="video-card">
            {/* HTML5 Video Player */}
            <VideoPlayer
              src={siteConfig.hero.video.src}
              poster={siteConfig.hero.video.poster}
              title={siteConfig.hero.video.title}
            />

            {/* Video Meta Info & Actions Bar */}
            <div className="video-details-header">
              <div className="video-title-wrap">
                <div className="video-tags-row">
                  <span className="tag-pill tag-emerald">
                    {siteConfig.hero.video.category}
                  </span>
                  <span className="tag-pill">
                    {siteConfig.hero.video.qualityText}
                  </span>
                  <span className="tag-pill">
                    {siteConfig.hero.video.durationText}
                  </span>
                </div>
                <h2 id="lesson-title" className="video-title">
                  {siteConfig.hero.video.title}
                </h2>
              </div>

              {/* Action Buttons: Share & Telegram */}
              <div className="video-actions-group">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleShare}
                  title="Share this lesson"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  <span>Share Lesson</span>
                </button>

                <a
                  href={siteConfig.telegram.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald-outline"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {copyStatus && (
              <div className="copy-notification" role="status">
                {copyStatus}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. BANNER BELOW VIDEO */}
      <section className="ad-section bottom-ad-section" aria-label="Bottom Video Advertisement">
        <div className="content-container">
          <AdSlot
            slotId="bottomBanner"
            label="Banner Below Video (728x90 Responsive)"
            format="728x90"
          />
        </div>
      </section>

      {/* TWO-COLUMN CONTENT & SIDEBAR SECTION */}
      <section className="lesson-body-section">
        <div className="content-container">
          <div className="content-sidebar-grid">
            {/* Left Column: Lesson Content, Description, In-Content Ad, About */}
            <div className="main-column">
              {/* Description Card */}
              <div className="content-card">
                <h3 className="section-title">Lesson Overview</h3>
                <p className="lesson-description">
                  {siteConfig.hero.video.description}
                </p>

                {/* 3. OPTIONAL IN-CONTENT AD BANNER (Near Description) */}
                <div className="in-content-ad-wrapper">
                  <AdSlot
                    slotId="inContentBanner"
                    label="In-Content Banner (300x250 / Native)"
                    format="300x250"
                  />
                </div>
              </div>

              {/* Lesson Outline / Takeaways */}
              <div id="notes-section" className="content-card">
                <h3 className="section-title">Lesson Key Chapters</h3>
                <div className="outline-list">
                  {siteConfig.lessonNotes.map((item) => (
                    <div key={item.step} className="outline-item">
                      <div className="outline-number">{item.step}</div>
                      <div className="outline-text">
                        <h4 className="outline-title">{item.title}</h4>
                        <p className="outline-desc">{item.summary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Section */}
              <div id="about-section" className="content-card about-card">
                <div className="about-header">
                  <div className="about-icon-badge">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="section-title">{siteConfig.about.title}</h3>
                    <p className="about-desc">{siteConfig.about.description}</p>
                  </div>
                </div>

                <div className="about-features-grid">
                  {siteConfig.about.features.map((feat, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-check">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="feature-title">{feat.title}</h4>
                        <p className="feature-desc">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column / Sidebar (Optimized for Telegram Visitors) */}
            <aside className="sidebar-column" aria-label="Lesson Sidebar">
              {/* Telegram Community Box */}
              <div className="sidebar-card telegram-sidebar-card">
                <div className="telegram-card-header">
                  <div className="telegram-icon-wrapper">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="telegram-card-title">Join on Telegram</h3>
                    <p className="telegram-card-sub">Daily updates & notes</p>
                  </div>
                </div>

                <p className="telegram-card-body">
                  {siteConfig.telegram.announcement}
                </p>

                <a
                  href={siteConfig.telegram.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald btn-block"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span>{siteConfig.telegram.callToAction}</span>
                </a>
              </div>

              {/* 4. OPTIONAL SIDEBAR AD BANNER (Desktop) */}
              <div className="sidebar-ad-card">
                <AdSlot
                  slotId="sidebarBanner"
                  label="Sidebar Banner (300x250 Rectangle)"
                  format="300x250"
                />
              </div>

              {/* Lesson Details Quick Card */}
              <div className="sidebar-card info-summary-card">
                <h4 className="sidebar-subheading">Lesson Information</h4>
                <div className="info-summary-row">
                  <span className="info-label">Streaming:</span>
                  <span className="info-val">HTML5 Local MP4</span>
                </div>
                <div className="info-summary-row">
                  <span className="info-label">Resolution:</span>
                  <span className="info-val">1080p Full HD</span>
                </div>
                <div className="info-summary-row">
                  <span className="info-label">Preload:</span>
                  <span className="info-val">Metadata (Fast)</span>
                </div>
                <div className="info-summary-row">
                  <span className="info-label">Access:</span>
                  <span className="info-val emerald-text">100% Free</span>
                </div>
              </div>

              {/* Help & Support Button */}
              <div className="sidebar-card help-card">
                <h4 className="sidebar-subheading">Need Assistance?</h4>
                <p className="help-text">
                  Encountering video or playback issues? Contact our team anytime.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-block"
                  onClick={() => onOpenModal && onOpenModal("contact")}
                >
                  Contact Support
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
