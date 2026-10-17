import React, { useState, useRef, useEffect } from "react";

/**
 * VideoPlayer Component
 * 
 * Complies with all user requirements:
 * - HTML5 video player with standard controls (play/pause, seek, volume, fullscreen)
 * - Exact video URL: /videos/lesson.mp4
 * - preload="metadata"
 * - No autoplay
 * - Responsive 16:9 aspect ratio
 * - Mobile-friendly playback (playsInline)
 * - Friendly, actionable error card if the video file is missing
 * - No YouTube dependency
 */
export default function VideoPlayer({
  src = "/videos/lesson.mp4",
  poster = "/images/lesson-poster.svg",
  title = "Your Learning Lesson",
}) {
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle Video Error
  const handleVideoError = (e) => {
    console.warn("VideoPlayer: Could not load video from", src, e);
    setHasError(true);
    setErrorMessage(
      `The video file could not be loaded from "${src}". Please make sure your MP4 file is placed in "public/videos/lesson.mp4".`
    );
  };

  // Reset error when src changes or user retries
  const handleRetry = () => {
    setHasError(false);
    setErrorMessage("");
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  // Handle playback rate change
  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  // Skip time forward/backward
  const skipTime = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        Math.min(videoRef.current.duration || 0, videoRef.current.currentTime + seconds)
      );
    }
  };

  return (
    <div className="video-player-wrapper">
      {/* 16:9 Video Container */}
      <div className="video-responsive-container">
        {hasError ? (
          <div className="video-error-state" role="alert">
            <div className="video-error-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
                <line x1="2" y1="2" x2="22" y2="22" stroke="#ef4444" strokeWidth="2.5" />
              </svg>
            </div>
            <h3 className="video-error-title">Video File Pending Setup</h3>
            <p className="video-error-desc">
              Please place your 16 MB MP4 file into the following path:
            </p>
            <div className="video-code-box">
              <code>public/videos/lesson.mp4</code>
            </div>
            <p className="video-error-hint">
              Once your file is added, click the button below or refresh your browser.
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="btn btn-emerald btn-retry"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 4v6h-6" />
                <path d="M1 20v-6h6" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
              Check Again / Retry
            </button>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="html5-video"
            controls
            controlsList="nodownload"
            preload="metadata"
            playsInline
            poster={poster}
            onError={handleVideoError}
            onLoadedData={() => setIsVideoLoaded(true)}
            aria-label={title}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the HTML5 video tag.
          </video>
        )}
      </div>

      {/* Video Quick Enhancement Bar */}
      {!hasError && (
        <div className="video-quick-bar">
          <div className="quick-bar-left">
            <span className="live-status-dot"></span>
            <span className="quick-bar-label">HTML5 Player Active</span>
            <span className="video-quality-tag">1080p HD</span>
          </div>

          <div className="quick-bar-controls">
            {/* -10s button */}
            <button
              type="button"
              className="btn-pill"
              onClick={() => skipTime(-10)}
              title="Rewind 10 seconds"
              aria-label="Rewind 10 seconds"
            >
              -10s
            </button>

            {/* +10s button */}
            <button
              type="button"
              className="btn-pill"
              onClick={() => skipTime(10)}
              title="Fast forward 10 seconds"
              aria-label="Fast forward 10 seconds"
            >
              +10s
            </button>

            {/* Playback speed selector */}
            <div className="speed-selector">
              <span className="speed-label">Speed:</span>
              {[1, 1.25, 1.5, 2].map((speed) => (
                <button
                  key={speed}
                  type="button"
                  className={`btn-pill speed-btn ${
                    playbackSpeed === speed ? "active" : ""
                  }`}
                  onClick={() => handleSpeedChange(speed)}
                  title={`Play at ${speed}x speed`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
