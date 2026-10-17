/**
 * LearnHub Site & Content Configuration
 * 
 * Edit this file to customize:
 * - Website name, titles, descriptions
 * - Telegram channel link & social links
 * - Lesson metadata & notes
 * - Adsterra advertising code & toggles
 */

export const siteConfig = {
  // Website Identity
  siteName: "LearnHub",
  pageTitle: "Watch Learning Videos Online",
  tagline: "Empowering your journey through modern, accessible education.",

  // Main Hero / Video Content
  hero: {
    mainHeading: "Learn Something New",
    subHeading: "Watch this educational lesson and learn at your own pace.",
    badgeText: "Free Educational Lesson",
    video: {
      title: "Your Learning Lesson",
      description: "Watch this educational lesson and learn at your own pace. Discover key concepts, gain practical insights, and expand your skills with this complete step-by-step masterclass.",
      src: "/videos/lesson.mp4",
      poster: "/images/lesson-poster.svg", // Fallback to poster SVG if MP4 is not yet loaded
      durationText: "Full Lesson",
      qualityText: "1080p HD",
      category: "Education",
      updatedAt: "Updated Recently",
    },
  },

  // Telegram Integration (Optimized for Telegram visitors)
  telegram: {
    channelUrl: "https://t.me/backupfor_my01",
    channelName: "@backupfor_my01",
    callToAction: "Join Telegram Channel",
    announcement: "Join our official Telegram community for daily lesson notes, updates, and learning materials!",
  },

  // About Section
  about: {
    title: "About LearnHub",
    description:
      "LearnHub is a fast, responsive, and distraction-free learning platform built to provide high-quality educational videos to learners worldwide. Whether you are browsing on mobile, tablet, or desktop, or arriving directly from Telegram, our platform delivers seamless, smooth playback without unnecessary bloat.",
    features: [
      {
        title: "Mobile Optimized",
        desc: "Designed from the ground up for visitors on mobile devices and variable internet speeds.",
      },
      {
        title: "Zero Distractions",
        desc: "Clean layout focused strictly on your learning experience with crystal-clear controls.",
      },
      {
        title: "Direct Streaming",
        desc: "High-performance HTML5 streaming optimized with preload metadata for instant playback.",
      },
    ],
  },

  // Lesson Outline / Notes
  lessonNotes: [
    {
      step: "01",
      title: "Core Concepts & Fundamentals",
      summary: "Understand the foundational ideas and key terms introduced in this lesson.",
    },
    {
      step: "02",
      title: "Practical Demonstration",
      summary: "Follow along step-by-step with real-world examples and clear explanations.",
    },
    {
      step: "03",
      title: "Key Takeaways & Next Steps",
      summary: "Review the important points and apply your new knowledge immediately.",
    },
  ],

  // Contact Information
  contact: {
    email: "support@learnhub.com", // Replace with your contact email
    telegramSupport: "https://t.me/backupfor_my01",
    responseNotice: "We usually respond within 24 hours.",
  },

  // Adsterra Ads Configuration
  // Keep ad code centralized here for easy updates when you get your Adsterra approval.
  ads: {
    // Set to true to display neutral placeholders in development mode
    showPlaceholders: true,

    // Adsterra Slot Configs:
    // When you have your Adsterra script/codes, you can paste the script URL or inline snippet here.
    // The AdSlot component will execute and mount it safely without duplicates.
    slots: {
      topBanner: {
        id: "top-banner",
        enabled: true,
        label: "Top Banner (728x90 / 320x50 Responsive)",
        // Replace with your real Adsterra script tag or invoke snippet when received:
        scriptSnippet: "", // e.g. `<script type="text/javascript" src="//...invoke.js"></script>`
      },
      bottomBanner: {
        id: "bottom-banner",
        enabled: true,
        label: "Banner Below Video (728x90 Responsive)",
        scriptSnippet: "",
      },
      sidebarBanner: {
        id: "sidebar-banner",
        enabled: true,
        label: "Sidebar Banner (300x250 Rectangle)",
        scriptSnippet: "",
      },
      inContentBanner: {
        id: "in-content-banner",
        enabled: true,
        label: "Content Banner (300x250 / Native)",
        scriptSnippet: "",
      },
    },
  },
};
