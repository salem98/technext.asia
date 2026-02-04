import { useState } from 'react'

export default function Services() {
  const [activeService, setActiveService] = useState(null)

  const servicesLeft = [
    'Web Development',
    'UX UI Design',
    'Automation Testing',
    'Mobile Development',
    'Project Management',
    'Development Team',
    'IT Solutions Consulting',
    'Cyber Security',
    'Digital Transformation',
    'Data Analytics',
    'Odoo ERP',
    'Microservices Architecture',
    'BOT - Build Operate Transfer',
    'AI',
  ]

  const processSteps = [
    'Idea Formation',
    'Requirement Analysis',
    'MVP Building',
    'Implementation',
    'Quality Testing',
    'Product Deploy',
    'SEO, Marketing',
  ]

  return (
    <section className="services-visual section" id="services">
      {/* Wave Background */}
      <div className="wave-bg">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(14, 165, 233, 0.03)" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container">
        <div className="services-header">
          <span className="section-badge">WHAT WE DO</span>
          <h2 className="section-title">We offer comprehensive software solutions</h2>
          <p className="section-subtitle">
            Our dedicated team of 200 IT experts specializes in a wide range of IT solutions
            and programming languages. This means you no longer need to disperse your efforts
            in searching for and managing scattered humans. We've got you covered!
          </p>
        </div>

        <div className="services-visual-container">
          {/* Left Side - What We Serve */}
          <div className="services-left">
            <h3 className="services-side-title">What we serve</h3>
            <div className="service-tags">
              {servicesLeft.map((service, index) => (
                <button
                  key={service}
                  className={`service-tag ${activeService === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  style={{ '--delay': `${index * 0.05}s` }}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Center - Animated Logo */}
          <div className="services-center">
            <div className="center-ring ring-outer">
              <div className="center-ring ring-middle">
                <div className="center-ring ring-inner">
                  <div className="center-logo">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Curved Lines - Left */}
            <svg className="curve-lines left" viewBox="0 0 200 400" preserveAspectRatio="none">
              <path className="curve-path" d="M200,50 Q100,50 50,100 T0,200" />
              <path className="curve-path" d="M200,150 Q120,150 80,180 T0,250" />
              <path className="curve-path" d="M200,250 Q100,250 50,300 T0,350" />
            </svg>

            {/* Curved Lines - Right */}
            <svg className="curve-lines right" viewBox="0 0 200 400" preserveAspectRatio="none">
              <path className="curve-path" d="M0,50 Q100,50 150,100 T200,200" />
              <path className="curve-path" d="M0,150 Q80,150 120,180 T200,250" />
              <path className="curve-path" d="M0,250 Q100,250 150,300 T200,350" />
            </svg>

            <a href="#contact" className="discover-btn">
              Discover more
            </a>
          </div>

          {/* Right Side - Process Steps */}
          <div className="services-right">
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="process-step"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="step-connector">
                    <span className="step-dot"></span>
                    {index < processSteps.length - 1 && <span className="step-line"></span>}
                  </div>
                  <span className="step-text">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .services-visual {
          background: linear-gradient(180deg, var(--color-primary) 0%, #1e40af 100%);
          position: relative;
          overflow: hidden;
          padding: var(--spacing-4xl) 0;
        }

        .wave-bg {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
        }

        .wave-bg svg {
          display: block;
          width: 100%;
          height: 200px;
        }

        .services-header {
          text-align: center;
          margin-bottom: var(--spacing-4xl);
        }

        .section-badge {
          display: inline-block;
          padding: var(--spacing-xs) var(--spacing-lg);
          background: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.4);
          border-radius: var(--radius-full);
          color: #fbbf24;
          font-size: var(--font-size-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: var(--spacing-lg);
        }

        .services-visual .section-title {
          color: white;
          background: none;
          -webkit-text-fill-color: white;
          font-size: var(--font-size-4xl);
        }

        .services-visual .section-subtitle {
          color: rgba(255, 255, 255, 0.8);
          max-width: 700px;
        }

        .services-visual-container {
          display: grid;
          grid-template-columns: 1fr 300px 1fr;
          gap: var(--spacing-xl);
          align-items: center;
          min-height: 500px;
        }

        /* Left Side */
        .services-left {
          text-align: right;
        }

        .services-side-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-xl);
          font-weight: 700;
          color: white;
          margin-bottom: var(--spacing-xl);
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: var(--spacing-sm);
        }

        .service-tag {
          padding: var(--spacing-sm) var(--spacing-lg);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          color: white;
          font-size: var(--font-size-sm);
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-base);
          animation: fadeInUp 0.5s ease forwards;
          animation-delay: var(--delay);
          opacity: 0;
        }

        .service-tag:hover,
        .service-tag.active {
          background: #fbbf24;
          border-color: #fbbf24;
          color: #1e293b;
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(251, 191, 36, 0.4);
        }

        /* Center */
        .services-center {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        .center-ring {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        .ring-outer {
          width: 200px;
          height: 200px;
          background: rgba(251, 191, 36, 0.1);
          border: 2px solid rgba(251, 191, 36, 0.3);
        }

        .ring-middle {
          width: 150px;
          height: 150px;
          background: rgba(251, 191, 36, 0.15);
          border: 2px solid rgba(251, 191, 36, 0.4);
          animation-delay: -1s;
        }

        .ring-inner {
          width: 100px;
          height: 100px;
          background: rgba(251, 191, 36, 0.2);
          border: 2px solid rgba(251, 191, 36, 0.5);
          animation-delay: -2s;
        }

        .center-logo {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #0ea5e9, #06b6d4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 40px rgba(14, 165, 233, 0.5);
        }

        .curve-lines {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 150px;
          height: 300px;
          pointer-events: none;
        }

        .curve-lines.left {
          left: -120px;
        }

        .curve-lines.right {
          right: -120px;
          transform: translateY(-50%) scaleX(-1);
        }

        .curve-path {
          fill: none;
          stroke: rgba(255, 255, 255, 0.2);
          stroke-width: 2;
          stroke-dasharray: 8 4;
          animation: dashFlow 2s linear infinite;
        }

        @keyframes dashFlow {
          to {
            stroke-dashoffset: -24;
          }
        }

        .discover-btn {
          position: absolute;
          bottom: 0;
          padding: var(--spacing-md) var(--spacing-2xl);
          background: #22c55e;
          color: white;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: var(--font-size-sm);
          border-radius: var(--radius-full);
          transition: all var(--transition-base);
          box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4);
        }

        .discover-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 30px rgba(34, 197, 94, 0.5);
        }

        /* Right Side */
        .services-right {
          display: flex;
          justify-content: flex-start;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          animation: fadeInUp 0.5s ease forwards;
          animation-delay: var(--delay);
          opacity: 0;
        }

        .step-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 50px;
        }

        .step-dot {
          width: 12px;
          height: 12px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
          flex-shrink: 0;
        }

        .step-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(180deg, #22c55e 0%, rgba(34, 197, 94, 0.3) 100%);
          min-height: 30px;
        }

        .step-text {
          padding: var(--spacing-sm) var(--spacing-lg);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-md);
          color: white;
          font-size: var(--font-size-sm);
          font-weight: 500;
          white-space: nowrap;
          transition: all var(--transition-base);
        }

        .process-step:hover .step-text {
          background: rgba(34, 197, 94, 0.2);
          border-color: #22c55e;
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .services-visual-container {
            grid-template-columns: 1fr;
            gap: var(--spacing-3xl);
          }

          .services-left {
            text-align: center;
          }

          .service-tags {
            justify-content: center;
          }

          .services-center {
            min-height: 300px;
          }

          .curve-lines {
            display: none;
          }

          .services-right {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .services-visual .section-title {
            font-size: var(--font-size-2xl);
          }

          .ring-outer {
            width: 160px;
            height: 160px;
          }

          .ring-middle {
            width: 120px;
            height: 120px;
          }

          .ring-inner {
            width: 80px;
            height: 80px;
          }

          .center-logo {
            width: 56px;
            height: 56px;
          }
        }
      `}</style>
    </section>
  )
}
