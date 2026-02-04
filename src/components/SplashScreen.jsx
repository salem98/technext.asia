import { useState, useEffect } from 'react'

export default function SplashScreen({ onComplete }) {
    const [progress, setProgress] = useState(0)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setFadeOut(true)
                    setTimeout(() => onComplete(), 500)
                    return 100
                }
                return prev + 2
            })
        }, 30)

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="splash-content">
                {/* Animated Logo */}
                <div className="splash-logo">
                    <svg viewBox="0 0 60 60" className="logo-icon">
                        <defs>
                            <linearGradient id="splash-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0ea5e9" />
                                <stop offset="50%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#14b8a6" />
                            </linearGradient>
                        </defs>
                        <circle cx="30" cy="30" r="28" fill="none" stroke="url(#splash-gradient)" strokeWidth="2" className="logo-circle" />
                        <path d="M20 30 L28 38 L40 22" fill="none" stroke="url(#splash-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="logo-check" />
                    </svg>
                    <span className="logo-text">Tech Next</span>
                </div>

                {/* Progress Bar */}
                <div className="splash-progress">
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span className="progress-text">{progress}%</span>
                </div>

                {/* Loading Text */}
                <p className="splash-tagline">Your Reliable Technology Partner</p>
            </div>

            <style>{`
        .splash-screen {
          position: fixed;
          inset: 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .splash-screen.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .splash-content {
          text-align: center;
        }

        .splash-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .logo-icon {
          width: 60px;
          height: 60px;
          animation: pulse 2s ease-in-out infinite;
        }

        .logo-circle {
          stroke-dasharray: 176;
          stroke-dashoffset: 176;
          animation: drawCircle 1.5s ease forwards;
        }

        .logo-check {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: drawCheck 0.5s ease forwards 1s;
        }

        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }

        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .logo-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }

        .splash-progress {
          width: 200px;
          margin: 0 auto 1.5rem;
        }

        .progress-track {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0ea5e9, #06b6d4, #14b8a6);
          border-radius: 2px;
          transition: width 0.1s ease;
        }

        .progress-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .splash-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.05em;
        }
      `}</style>
        </div>
    )
}
