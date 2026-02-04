export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Professionalism & Quality',
      description: 'Work directly with our talented engineers. Our project coordinators ensure seamless communication without hindering direct contact.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Fast & Reliable Delivery',
      description: 'We are keen on submitting deliverables on time to help you meet your project goals within the timeframe.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: 'Transparency & Trust',
      description: 'If any issues arise, you receive immediate explanations and solutions from our IT experts. No hidden surprises.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
          <polyline points="7.5,19.79 7.5,14.6 3,12" />
          <polyline points="21,12 16.5,14.6 16.5,19.79" />
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: 'Scalable Solutions',
      description: 'From startups to enterprises, our solutions grow with your business. We handle everything from initial build to maintenance.'
    }
  ]

  return (
    <section className="why-choose-us section" id="about">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Because we value your business as ours. We began from humble beginnings,
          and with a talented team, we can achieve remarkable growth together.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-choose-us {
          position: relative;
          background: var(--color-bg-secondary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-xl);
        }

        .feature-card {
          position: relative;
          overflow: hidden;
          text-align: left;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--transition-base);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity var(--transition-base);
          pointer-events: none;
        }

        .feature-card:hover .feature-glow {
          opacity: 1;
        }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: var(--gradient-primary);
          border-radius: var(--radius-lg);
          color: white;
          margin-bottom: var(--spacing-lg);
          transition: transform var(--transition-bounce);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        .feature-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-xl);
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          color: var(--color-text-primary);
        }

        .feature-description {
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
