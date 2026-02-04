import { useState, useEffect, useRef } from 'react'

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('development')
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleCards, setVisibleCards] = useState(false)
  const stackRef = useRef(null)

  const pipelines = {
    development: [
      { id: 'dev', label: 'Developers', icon: 'dev', color: '#3b82f6' },
      { id: 'vcs', label: 'Version control', sublabel: '(combining branch)', icon: 'git', color: '#f59e0b' },
      { id: 'build', label: 'Build Integration', sublabel: 'Team', icon: 'build', color: '#8b5cf6' },
      { id: 'compile', label: 'Compile', icon: 'compile', color: '#06b6d4' },
      { id: 'package', label: 'Package with', sublabel: 'Instruction', icon: 'package', color: '#22c55e' },
      { id: 'ops', label: 'Operation Teams', icon: 'ops', color: '#ec4899' },
      { id: 'test', label: 'Test', sublabel: 'Environment', icon: 'test', color: '#f97316' },
      { id: 'prod', label: 'Public/General', sublabel: 'Availability', icon: 'prod', color: '#ef4444' },
    ],
    operations: [
      { id: 'monitor', label: 'Monitoring', icon: 'monitor', color: '#3b82f6' },
      { id: 'alert', label: 'Alerting', icon: 'alert', color: '#f59e0b' },
      { id: 'log', label: 'Log', sublabel: 'Management', icon: 'log', color: '#8b5cf6' },
      { id: 'infra', label: 'Infrastructure', sublabel: 'as Code', icon: 'infra', color: '#06b6d4' },
      { id: 'config', label: 'Configuration', sublabel: 'Management', icon: 'config', color: '#22c55e' },
      { id: 'container', label: 'Containerization', icon: 'container', color: '#ec4899' },
      { id: 'orchestrate', label: 'Orchestration', icon: 'orchestrate', color: '#f97316' },
      { id: 'secure', label: 'Security', sublabel: 'Scanning', icon: 'secure', color: '#ef4444' },
    ]
  }

  const techStack = [
    {
      category: 'Frontend',
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      techs: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      techs: ['Node.js', 'Python', 'Ruby on Rails', 'Java', 'Go']
    },
    {
      category: 'Mobile',
      icon: '📱',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      category: 'Cloud',
      icon: '☁️',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes']
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCards(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (stackRef.current) {
      observer.observe(stackRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleTabChange = (tab) => {
    if (tab === activeTab || isAnimating) return
    setIsAnimating(true)
    setActiveTab(tab)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const renderIcon = (iconType, color) => {
    const icons = {
      dev: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" fill={color} /><path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      git: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3v18M6 9l6-6 6 6M6 15l6 6 6-6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
      build: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="2" fill={color} /><circle cx="7" cy="12" r="2" fill="white" /><circle cx="12" cy="12" r="2" fill="white" /><circle cx="17" cy="12" r="2" fill="white" /></svg>,
      compile: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" fill={color} /><path d="M2 17l10 5 10-5" stroke={color} strokeWidth="2" /><path d="M2 12l10 5 10-5" stroke={color} strokeWidth="2" /></svg>,
      package: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" fill={color} /><path d="M3 9h18M9 21V9" stroke="white" strokeWidth="2" /></svg>,
      ops: <svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="4" fill={color} /><circle cx="17" cy="7" r="3" fill={color} opacity="0.6" /><path d="M4 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" fill={color} /></svg>,
      test: <svg viewBox="0 0 24 24" fill="none"><path d="M9 3h6v6l3 9a2 2 0 01-2 2H8a2 2 0 01-2-2l3-9V3z" fill={color} /><path d="M9 3h6" stroke={color} strokeWidth="2" /></svg>,
      prod: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill={color} /><path d="M2 12h4M18 12h4M12 2v4M12 18v4" stroke={color} strokeWidth="2" /></svg>,
      monitor: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" fill={color} /><path d="M8 21h8M12 17v4" stroke={color} strokeWidth="2" /></svg>,
      alert: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 20h20L12 2z" fill={color} /><path d="M12 9v4M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>,
      log: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" fill={color} /><path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>,
      infra: <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h16v6H4zM4 14h16v6H4z" fill={color} /><circle cx="7" cy="7" r="1.5" fill="white" /><circle cx="7" cy="17" r="1.5" fill="white" /></svg>,
      config: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.8-6.4 4.8 2.4-7.4-6-4.6h7.6z" fill={color} /></svg>,
      container: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="14" rx="2" fill={color} /><path d="M6 10h3v3H6zM10 10h3v3h-3zM14 10h3v3h-3zM6 14h3v3H6zM10 14h3v3h-3z" fill="white" /></svg>,
      orchestrate: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill={color} /><circle cx="12" cy="3" r="2" fill={color} /><circle cx="21" cy="12" r="2" fill={color} /><circle cx="12" cy="21" r="2" fill={color} /><circle cx="3" cy="12" r="2" fill={color} /><path d="M12 5v4M12 15v4M15 12h4M5 12h4" stroke={color} strokeWidth="1.5" /></svg>,
      secure: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5.5-3.5 10-8 11-4.5-1-8-5.5-8-11V6l8-4z" fill={color} /><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    }
    return icons[iconType] || icons.dev
  }

  return (
    <section className="technologies section" id="technologies">
      <div className="container">
        <h2 className="tech-title">Technologies we use</h2>
        <p className="tech-subtitle">
          Our development process ensures that we are notified of any bugs or
          errors at each phase, optimizing the entire process and saving resources.
        </p>

        {/* Tab Buttons */}
        <div className="tech-tabs">
          <button
            className={`tech-tab ${activeTab === 'development' ? 'active' : ''}`}
            onClick={() => handleTabChange('development')}
          >
            Development
          </button>
          <button
            className={`tech-tab ${activeTab === 'operations' ? 'active' : ''}`}
            onClick={() => handleTabChange('operations')}
          >
            Operations
          </button>
        </div>

        {/* Pipeline */}
        <div className="pipeline-wrapper">
          <div className={`pipeline ${isAnimating ? 'animating' : ''}`}>
            {pipelines[activeTab].map((step, index) => (
              <div
                key={step.id}
                className="pipeline-item"
                style={{ '--i': index, '--color': step.color }}
              >
                <div className="pipeline-icon">
                  {renderIcon(step.icon, step.color)}
                </div>
                <div className="pipeline-label">
                  <span className="label-main">{step.label}</span>
                  {step.sublabel && <span className="label-sub">{step.sublabel}</span>}
                </div>
                {index < pipelines[activeTab].length - 1 && (
                  <svg className="connector" viewBox="0 0 60 20">
                    <path
                      d="M0,10 C20,10 40,10 55,10"
                      fill="none"
                      stroke="var(--color-border-strong)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="connector-path"
                    />
                    <polygon points="55,5 60,10 55,15" fill="var(--color-text-muted)" className="connector-arrow" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Flow Lines to Testing */}
          <div className="flow-lines">
            <svg className="flow-svg" viewBox="0 0 800 80" preserveAspectRatio="none">
              <path className="flow-path p1" d="M100,0 L100,30 Q100,50 120,50 L400,50" />
              <path className="flow-path p2" d="M250,0 L250,20 Q250,40 270,40 L400,40" />
              <path className="flow-path p3" d="M400,0 L400,35" />
              <path className="flow-path p4" d="M550,0 L550,20 Q550,40 530,40 L400,40" />
              <path className="flow-path p5" d="M700,0 L700,30 Q700,50 680,50 L400,50" />
            </svg>
          </div>

          {/* Testing Team Bar */}
          <div className="testing-bar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span>Testing team</span>
          </div>
        </div>

        {/* Tech Stack - Enhanced Cards */}
        <div className="tech-stack" ref={stackRef}>
          <h3 className="stack-title">Our Technology Stack</h3>
          <div className="stack-grid">
            {techStack.map((cat, catIndex) => (
              <div
                key={cat.category}
                className={`stack-card ${visibleCards ? 'visible' : ''}`}
                style={{ '--delay': `${catIndex * 0.15}s`, '--gradient': cat.gradient }}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-header">
                    <span className="card-icon">{cat.icon}</span>
                    <h4 className="stack-category">{cat.category}</h4>
                  </div>
                  <div className="card-divider"></div>
                  <div className="stack-techs">
                    {cat.techs.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="tech-pill"
                        style={{ '--tech-delay': `${(catIndex * 0.15) + (techIndex * 0.08)}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .technologies {
          background: var(--color-bg);
          overflow: hidden;
        }

        .tech-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-4xl);
          font-weight: 700;
          text-align: center;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--spacing-md);
        }

        .tech-subtitle {
          text-align: center;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto var(--spacing-2xl);
        }

        .tech-tabs {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-bottom: var(--spacing-3xl);
        }

        .tech-tab {
          padding: var(--spacing-md) var(--spacing-2xl);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: var(--font-size-sm);
          border: 2px solid var(--color-primary);
          background: transparent;
          color: var(--color-text-secondary);
          transition: all var(--transition-base);
        }

        .tech-tab:first-child {
          border-radius: var(--radius-full) 0 0 var(--radius-full);
          border-right: none;
        }

        .tech-tab:last-child {
          border-radius: 0 var(--radius-full) var(--radius-full) 0;
        }

        .tech-tab.active {
          background: var(--color-primary);
          color: white;
        }

        .tech-tab:hover {
          transform: scale(1.02);
        }

        .pipeline-wrapper {
          position: relative;
          margin-bottom: var(--spacing-4xl);
        }

        .pipeline {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xs);
          flex-wrap: wrap;
          padding: 0 var(--spacing-md);
        }

        .pipeline.animating .pipeline-item {
          animation: pipelinePop 0.5s ease forwards;
          animation-delay: calc(var(--i) * 0.08s);
          opacity: 0;
          transform: translateY(-20px);
        }

        @keyframes pipelinePop {
          0% { opacity: 0; transform: translateY(-20px) scale(0.8); }
          60% { transform: translateY(5px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .pipeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          min-width: 90px;
          transition: transform var(--transition-base);
        }

        .pipeline-item:hover {
          transform: translateY(-8px);
        }

        .pipeline-item:hover .pipeline-icon {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .pipeline-icon {
          width: 56px;
          height: 56px;
          background: white;
          border-radius: var(--radius-lg);
          padding: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          margin-bottom: var(--spacing-sm);
          transition: all var(--transition-bounce);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pipeline-icon svg {
          width: 100%;
          height: 100%;
        }

        .pipeline-label {
          text-align: center;
        }

        .label-main {
          display: block;
          font-size: var(--font-size-xs);
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .label-sub {
          display: block;
          font-size: 10px;
          color: var(--color-text-muted);
        }

        .connector {
          position: absolute;
          right: -35px;
          top: 20px;
          width: 40px;
          height: 20px;
        }

        .connector-path {
          animation: dashMove 1s linear infinite;
        }

        @keyframes dashMove {
          to { stroke-dashoffset: -16; }
        }

        .flow-lines {
          height: 60px;
          margin: var(--spacing-md) 0;
        }

        .flow-svg {
          width: 100%;
          height: 100%;
        }

        .flow-path {
          fill: none;
          stroke: var(--color-primary);
          stroke-width: 2;
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawLine 1.5s ease forwards;
        }

        .flow-path.p1 { animation-delay: 0.1s; }
        .flow-path.p2 { animation-delay: 0.2s; }
        .flow-path.p3 { animation-delay: 0.3s; }
        .flow-path.p4 { animation-delay: 0.4s; }
        .flow-path.p5 { animation-delay: 0.5s; }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        .testing-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-lg) var(--spacing-4xl);
          background: linear-gradient(90deg, var(--color-primary), #06b6d4);
          color: white;
          font-family: var(--font-heading);
          font-weight: 600;
          border-radius: var(--radius-full);
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3); }
          50% { box-shadow: 0 4px 40px rgba(14, 165, 233, 0.5); }
        }

        /* Enhanced Tech Stack Cards */
        .tech-stack {
          margin-top: var(--spacing-4xl);
        }

        .stack-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-2xl);
          font-weight: 700;
          text-align: center;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-3xl);
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-xl);
          perspective: 1000px;
        }

        .stack-card {
          position: relative;
          background: var(--color-bg);
          border-radius: var(--radius-2xl);
          padding: 3px;
          opacity: 0;
          transform: translateY(40px) rotateX(10deg);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          transition-delay: var(--delay);
        }

        .stack-card.visible {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }

        .stack-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-2xl);
          padding: 2px;
          background: linear-gradient(135deg, var(--color-border), transparent 50%, var(--color-border));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          transition: opacity var(--transition-base);
        }

        .stack-card:hover::before {
          background: var(--gradient);
          opacity: 1;
        }

        .stack-card:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .card-glow {
          position: absolute;
          inset: -1px;
          border-radius: var(--radius-2xl);
          background: var(--gradient);
          opacity: 0;
          filter: blur(20px);
          transition: opacity var(--transition-base);
          z-index: -1;
        }

        .stack-card:hover .card-glow {
          opacity: 0.4;
        }

        .card-content {
          background: var(--color-bg);
          border-radius: calc(var(--radius-2xl) - 2px);
          padding: var(--spacing-xl);
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s ease;
          pointer-events: none;
        }

        .stack-card:hover .card-shine {
          left: 100%;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .card-icon {
          font-size: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .stack-card:nth-child(2) .card-icon { animation-delay: -0.5s; }
        .stack-card:nth-child(3) .card-icon { animation-delay: -1s; }
        .stack-card:nth-child(4) .card-icon { animation-delay: -1.5s; }

        .stack-category {
          font-family: var(--font-heading);
          font-size: var(--font-size-lg);
          font-weight: 700;
          color: var(--color-text-primary);
          margin: 0;
        }

        .card-divider {
          height: 3px;
          background: var(--gradient);
          border-radius: var(--radius-full);
          margin-bottom: var(--spacing-lg);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
          transition-delay: calc(var(--delay) + 0.3s);
        }

        .stack-card.visible .card-divider {
          transform: scaleX(1);
        }

        .stack-techs {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }

        .tech-pill {
          padding: var(--spacing-xs) var(--spacing-md);
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          opacity: 0;
          transform: translateY(10px);
          animation: pillReveal 0.4s ease forwards;
          animation-delay: calc(var(--tech-delay) + 0.4s);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        @keyframes pillReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-pill:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.25);
        }

        @media (max-width: 1024px) {
          .stack-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .connector {
            display: none;
          }

          .pipeline-item {
            min-width: 70px;
          }
        }

        @media (max-width: 640px) {
          .stack-grid {
            grid-template-columns: 1fr;
          }

          .pipeline-icon {
            width: 48px;
            height: 48px;
          }

          .tech-tabs {
            flex-direction: column;
            align-items: center;
          }

          .tech-tab {
            width: 200px;
          }

          .tech-tab:first-child {
            border-radius: var(--radius-full) var(--radius-full) 0 0;
            border-right: 2px solid var(--color-primary);
            border-bottom: none;
          }

          .tech-tab:last-child {
            border-radius: 0 0 var(--radius-full) var(--radius-full);
          }

          .flow-lines {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
