import { useState, useEffect, useCallback } from 'react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      quote: "Tech Next Solutions is keen on submitting deliverables on time in order to help us meet our project goals within the timeframe. They work hard and exhibit skills that ease up the overall process for both parties.",
      author: "Michael Chen",
      role: "CTO, FinTech Startup",
      company: "Singapore",
      rating: 5
    },
    {
      quote: "The team's technical expertise and professionalism exceeded our expectations. They delivered a robust enterprise solution that transformed our operations. Highly recommended for complex projects.",
      author: "Sarah Johnson",
      role: "VP of Engineering",
      company: "E-commerce Platform",
      rating: 5
    },
    {
      quote: "Working with Tech Next has been a game-changer for our digital transformation journey. Their AI solutions have significantly improved our customer engagement and operational efficiency.",
      author: "David Lee",
      role: "Digital Director",
      company: "Retail Corporation",
      rating: 5
    }
  ]

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, testimonials.length])

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

  const goToTestimonial = (index) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          We win clients' hearts by keeping them informed and allowing direct collaboration.
          Many have renewed their contracts with us.
        </p>

        <div className="testimonials-wrapper">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card glass-card ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="quote-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <p className="testimonial-quote">{testimonial.quote}</p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-nav">
            <button
              className="nav-btn prev"
              onClick={() => goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="nav-btn next"
              onClick={() => nextTestimonial()}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="trust-stats">
          <div className="trust-stat">
            <span className="trust-value">95%</span>
            <span className="trust-label">Contract Renewals</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-stat">
            <span className="trust-value">100+</span>
            <span className="trust-label">Happy Clients</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-stat">
            <span className="trust-value">4.9/5</span>
            <span className="trust-label">Client Rating</span>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials {
          background: var(--color-bg);
          position: relative;
          overflow: hidden;
        }

        .testimonials::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-mesh);
          opacity: 0.5;
        }

        .testimonials-wrapper {
          max-width: 800px;
          margin: 0 auto var(--spacing-3xl);
          position: relative;
        }

        .testimonial-slider {
          position: relative;
          min-height: 350px;
        }

        .testimonial-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          text-align: center;
          padding: var(--spacing-2xl);
          opacity: 0;
          transform: translateX(50px);
          visibility: hidden;
          transition: all 0.5s ease;
        }

        .testimonial-card.active {
          opacity: 1;
          transform: translateX(0);
          visibility: visible;
          position: relative;
        }

        .quote-icon {
          color: var(--color-primary);
          margin-bottom: var(--spacing-lg);
        }

        .rating {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xs);
          margin-bottom: var(--spacing-lg);
        }

        .testimonial-quote {
          font-size: var(--font-size-lg);
          line-height: 1.8;
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-2xl);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
        }

        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: var(--font-size-xl);
          font-weight: 700;
          color: white;
        }

        .author-info {
          text-align: left;
        }

        .author-name {
          font-family: var(--font-heading);
          font-size: var(--font-size-lg);
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .author-role {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .author-company {
          font-size: var(--font-size-sm);
          color: var(--color-primary);
          font-weight: 500;
        }

        .testimonial-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .nav-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--glass-bg);
          border: 1px solid var(--color-border);
          border-radius: 50%;
          color: var(--color-text-secondary);
          transition: all var(--transition-base);
        }

        .nav-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
          transform: scale(1.1);
        }

        .testimonial-dots {
          display: flex;
          gap: var(--spacing-sm);
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--color-border-strong);
          transition: all var(--transition-base);
          cursor: pointer;
        }

        .dot:hover {
          background: var(--color-text-muted);
        }

        .dot.active {
          background: var(--color-primary);
          box-shadow: 0 0 10px var(--color-primary);
          transform: scale(1.2);
        }

        .trust-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-2xl);
          padding: var(--spacing-xl);
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-2xl);
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          box-shadow: var(--glass-shadow);
        }

        .trust-stat {
          text-align: center;
        }

        .trust-value {
          display: block;
          font-family: var(--font-heading);
          font-size: var(--font-size-3xl);
          font-weight: 700;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--spacing-xs);
        }

        .trust-label {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }

        .trust-divider {
          width: 1px;
          height: 40px;
          background: var(--color-border);
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: var(--spacing-xl);
          }

          .testimonial-quote {
            font-size: var(--font-size-base);
          }

          .trust-stats {
            flex-direction: column;
            gap: var(--spacing-lg);
          }

          .trust-divider {
            width: 60px;
            height: 1px;
          }
        }
      `}</style>
    </section>
  )
}
