import { useEffect, useRef, useState } from 'react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { value: 7, suffix: '+', label: 'Years Experience' },
    { value: 200, suffix: '+', label: 'Projects Delivered' },
    { value: 21, suffix: '+', label: 'Countries Served' },
    { value: 200, suffix: '+', label: 'Team Members' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`stat-item ${isVisible ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className="stat-value">
                <Counter value={stat.value} isVisible={isVisible} />
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats {
          background: var(--color-bg-secondary);
          padding: var(--spacing-3xl) 0;
          position: relative;
          overflow: hidden;
        }

        .stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-mesh);
          opacity: 0.4;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-xl);
          position: relative;
        }

        .stat-item {
          text-align: center;
          padding: var(--spacing-xl);
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          transition-delay: var(--delay);
        }

        .stat-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-item:hover {
          transform: translateY(-4px) !important;
          box-shadow: var(--shadow-lg), var(--shadow-glow);
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: var(--font-size-5xl);
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: var(--spacing-sm);
          display: flex;
          align-items: baseline;
          justify-content: center;
        }

        .stat-suffix {
          font-size: var(--font-size-2xl);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-value {
            font-size: var(--font-size-4xl);
          }
        }
      `}</style>
    </section>
  )
}

function Counter({ value, isVisible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return <span>{count}</span>
}
