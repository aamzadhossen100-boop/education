import React, { useEffect, useRef } from "react";
import { siteConfig } from "../config/siteConfig";

/**
 * AdSlot Component
 * 
 * Safe, reusable advertisement container designed for Adsterra banner scripts.
 * - Prevents script duplication on React re-renders.
 * - Keeps ads completely isolated from the video player.
 * - Displays a clean, neutral, non-clickable placeholder during development.
 * - Can be hidden completely by setting `siteConfig.ads.showPlaceholders = false`.
 * - Strictly does NOT force clicks, spawn popups, or disrupt user experience.
 */
export default function AdSlot({
  slotId,
  label = "Advertisement Area",
  format = "responsive", // '728x90' | '300x250' | 'responsive' | '160x600'
  className = "",
}) {
  const containerRef = useRef(null);
  const slotConfig = siteConfig.ads.slots[slotId] || {};
  const isEnabled = slotConfig.enabled !== false;
  const scriptSnippet = slotConfig.scriptSnippet || "";
  const showPlaceholders = siteConfig.ads.showPlaceholders;

  useEffect(() => {
    // If real Adsterra script snippet is supplied, safely inject into container without duplicating
    if (!containerRef.current || !scriptSnippet || !isEnabled) return;

    const container = containerRef.current;
    container.innerHTML = ""; // Clear existing content to prevent duplicate scripts

    // Check if snippet contains script tags or HTML
    const range = document.createRange();
    range.selectNode(container);
    const documentFragment = range.createContextualFragment(scriptSnippet);

    // ContextualFragment executes embedded scripts safely in standard DOM
    container.appendChild(documentFragment);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [scriptSnippet, isEnabled]);

  // If slot is disabled entirely
  if (!isEnabled) {
    return null;
  }

  // If real ad script is provided, render the target container
  if (scriptSnippet && scriptSnippet.trim().length > 0) {
    return (
      <aside
        className={`ad-container ad-format-${format} ${className}`}
        aria-label={label}
      >
        <div className="ad-inner-content" ref={containerRef} />
      </aside>
    );
  }

  // If no script provided yet, either show neutral development placeholder or hide
  if (!showPlaceholders) {
    return null;
  }

  return (
    <aside
      className={`ad-container ad-placeholder ad-format-${format} ${className}`}
      aria-label={`${label} Placeholder`}
      role="region"
    >
      <div className="ad-placeholder-content">
        <div className="ad-badge">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ad-badge-icon"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M10 4v4" />
            <path d="M2 8h20" />
            <path d="M6 4v4" />
          </svg>
          <span>Adsterra Placeholder</span>
        </div>
        <p className="ad-slot-name">{slotConfig.label || label}</p>
        <p className="ad-slot-instructions">
          Ready for your Adsterra ad code in <code>src/config/siteConfig.js</code>
        </p>
      </div>
    </aside>
  );
}
