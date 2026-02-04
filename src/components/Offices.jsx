export default function Offices() {
  const offices = [
    {
      country: 'Vietnam',
      flag: '🇻🇳',
      website: 'technext.asia',
      address: 'District 1, Ho Chi Minh City',
      phone: '+84 28 1234 5678'
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      website: 'technext.sg',
      address: '3 Coleman Street, #03-24',
      phone: '+65 6789 0123'
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      website: 'technext.com.au',
      address: 'Sydney CBD, NSW',
      phone: '+61 2 9876 5432'
    }
  ]

  return (
    <section className="offices section" id="contact">
      <div className="container">
        <h2 className="section-title">Our Offices</h2>
        <p className="section-subtitle">
          With offices across Asia-Pacific, we're positioned to serve clients globally
          while maintaining local expertise and support.
        </p>

        <div className="offices-grid">
          {offices.map((office) => (
            <div key={office.country} className="office-card glass-card">
              <div className="office-header">
                <span className="office-flag">{office.flag}</span>
                <h3 className="office-country">{office.country}</h3>
              </div>
              <div className="office-details">
                <div className="office-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="office-text">{office.website}</span>
                </div>
                <div className="office-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="office-text">{office.address}</span>
                </div>
                <div className="office-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="office-text">{office.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-cta glass-card">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-text">
              Contact us now to unlock your business's full potential with our
              reliable, cost-effective IT services.
            </p>
          </div>
          <a href="mailto:hello@technext.asia" className="btn btn-primary btn-lg">
            <span>Contact Us Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .offices {
          background: var(--color-bg-secondary);
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-3xl);
        }

        .office-card {
          text-align: left;
        }

        .office-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-lg);
          border-bottom: 1px solid var(--color-border);
        }

        .office-flag {
          font-size: 2.5rem;
        }

        .office-country {
          font-family: var(--font-heading);
          font-size: var(--font-size-xl);
          font-weight: 700;
          color: var(--color-text-primary);
        }

        .office-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .office-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--color-text-muted);
        }

        .office-item svg {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .office-text {
          font-size: var(--font-size-sm);
        }

        .contact-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-2xl);
          padding: var(--spacing-2xl);
        }

        .cta-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-sm);
        }

        .cta-text {
          color: var(--color-text-muted);
          max-width: 500px;
        }

        @media (max-width: 1024px) {
          .offices-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .offices-grid {
            grid-template-columns: 1fr;
          }

          .contact-cta {
            flex-direction: column;
            text-align: center;
          }

          .cta-text {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
