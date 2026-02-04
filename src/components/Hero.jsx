import { useState, useEffect, useCallback } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      badge: 'Your Reliable Technology Partner',
      title: 'Illuminating Excellence in',
      highlight: 'IT Services',
      subtitle: 'We craft top-notch solutions to streamline your operations and fuel your growth with cutting-edge technology.',
      cta: 'Start Your Project',
      image: 'code'
    },
    {
      badge: 'Digital Transformation',
      title: 'Accelerate Your Business with',
      highlight: 'AI & Innovation',
      subtitle: 'Leverage artificial intelligence and machine learning to unlock your business\'s full potential.',
      cta: 'Explore AI Solutions',
      image: 'ai'
    },
    {
      badge: '200+ IT Experts',
      title: 'Building The Future of',
      highlight: 'Mobile & Web',
      subtitle: 'From startups to enterprises, we deliver scalable solutions across 21+ countries worldwide.',
      cta: 'View Our Work',
      image: 'mobile'
    }
  ]

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating, slides.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-mesh"></div>
        <div className="grid-pattern"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="hero-badge glass-card">
                <span className="badge-dot"></span>
                {slide.badge}
              </div>

              <h1 className="hero-title">
                {slide.title}{' '}
                <span className="text-gradient">{slide.highlight}</span>
              </h1>

              <p className="hero-subtitle">{slide.subtitle}</p>

              <div className="hero-tagline">
                <span className="tagline-line">In a world of technology</span>
                <span className="tagline-highlight">People make the difference</span>
              </div>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary btn-lg">
                  <span>{slide.cta}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#services" className="btn btn-secondary btn-lg">
                  Explore Services
                </a>
              </div>
            </div>
          ))}

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className="indicator-progress"></span>
              </button>
            ))}
          </div>

          {/* Trust Section */}
          <div className="hero-trust">
            <span className="trust-label">Trusted by leading companies worldwide</span>
            <div className="trust-logos">
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company) => (
                <div key={company} className="trust-logo">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: calc(80px + var(--spacing-4xl)) 0 var(--spacing-4xl);
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .gradient-mesh {
          position: absolute;
          inset: 0;
          background: var(--gradient-mesh);
          opacity: 0.8;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
          opacity: 0.5;
        }

        .floating-shapes {
          position: absolute;
          inset: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
          animation: float 8s ease-in-out infinite, morphBlob 12s ease-in-out infinite;
        }

        .shape-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.4), rgba(6, 182, 212, 0.3));
          top: -10%;
          right: -5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.25));
          bottom: 10%;
          left: -10%;
          animation-delay: -2s;
        }

        .shape-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(251, 191, 36, 0.25));
          top: 50%;
          left: 30%;
          animation-delay: -4s;
        }

        .shape-4 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(16, 185, 129, 0.25));
          bottom: 30%;
          right: 20%;
          animation-delay: -6s;
        }

        .hero-content {
          position: relative;
          max-width: 900px;
          text-align: center;
          margin: 0 auto;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .slide.active {
          position: relative;
          opacity: 1;
          visibility: visible;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-lg);
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-primary);
          margin-bottom: var(--spacing-xl);
          animation: fadeInUp 0.6s ease forwards;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--color-primary);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-title {
          font-size: var(--font-size-6xl);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: var(--spacing-lg);
          color: var(--color-text-primary);
          animation: fadeInUp 0.6s ease 0.1s forwards;
          opacity: 0;
        }

        .hero-subtitle {
          font-size: var(--font-size-lg);
          color: var(--color-text-muted);
          max-width: 700px;
          margin: 0 auto var(--spacing-xl);
          line-height: 1.7;
          animation: fadeInUp 0.6s ease 0.2s forwards;
          opacity: 0;
        }

        .hero-tagline {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-2xl);
          animation: fadeInUp 0.6s ease 0.3s forwards;
          opacity: 0;
        }

        .tagline-line {
          font-size: var(--font-size-xl);
          color: var(--color-text-muted);
          font-weight: 300;
        }

        .tagline-highlight {
          font-family: var(--font-heading);
          font-size: var(--font-size-3xl);
          font-weight: 700;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
          animation: fadeInUp 0.6s ease 0.4s forwards;
          opacity: 0;
        }

        .slide-indicators {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-3xl);
        }

        .indicator {
          width: 60px;
          height: 4px;
          background: var(--color-border-strong);
          border-radius: var(--radius-full);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .indicator:hover {
          background: var(--color-text-muted);
        }

        .indicator-progress {
          display: block;
          width: 0;
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width 0.3s ease;
        }

        .indicator.active .indicator-progress {
          width: 100%;
          animation: progress 5s linear forwards;
        }

        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }

        .hero-trust {
          animation: fadeInUp 0.6s ease 0.5s forwards;
          opacity: 0;
        }

        .trust-label {
          display: block;
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-lg);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .trust-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-2xl);
          flex-wrap: wrap;
        }

        .trust-logo {
          font-family: var(--font-heading);
          font-size: var(--font-size-lg);
          font-weight: 700;
          color: var(--color-text-muted);
          opacity: 0.4;
          transition: all var(--transition-base);
        }

        .trust-logo:hover {
          opacity: 1;
          color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .hero {
            padding: calc(80px + var(--spacing-2xl)) 0 var(--spacing-2xl);
          }

          .hero-title {
            font-size: var(--font-size-4xl);
          }

          .hero-subtitle {
            font-size: var(--font-size-base);
          }

          .tagline-highlight {
            font-size: var(--font-size-2xl);
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-actions .btn {
            width: 100%;
          }

          .trust-logos {
            gap: var(--spacing-lg);
          }

          .trust-logo {
            font-size: var(--font-size-base);
          }

          .indicator {
            width: 40px;
          }
        }
      `}</style>
    </section>
  )
}
