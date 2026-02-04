import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="container">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <a href="#" className="logo" aria-label="Tech Next Solutions - Home">
            <span className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <span className="logo-text">Tech Next</span>
          </a>

          <ul className="nav-links hide-mobile" role="list">
            {navLinks.map((link) => (
              <li key={link.href} role="listitem">
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions hide-mobile">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
            <a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: var(--spacing-md) 0;
          transition: all var(--transition-base);
        }

        .header--scrolled {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--glass-border);
          padding: var(--spacing-sm) 0;
          box-shadow: var(--glass-shadow);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-xl);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--font-size-xl);
        }

        .logo-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          border-radius: var(--radius-md);
          color: white;
        }

        .logo-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--spacing-xl);
        }

        .nav-link {
          font-family: var(--font-heading);
          font-weight: 500;
          color: var(--color-text-secondary);
          transition: color var(--transition-fast);
          position: relative;
          padding: var(--spacing-xs) 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width var(--transition-base);
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }

        .theme-toggle {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          color: var(--color-text-secondary);
          transition: all var(--transition-fast);
        }

        .theme-toggle:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
          transform: rotate(15deg);
        }

        .mobile-menu-btn {
          display: none;
          padding: var(--spacing-sm);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: var(--color-text-primary);
          border-radius: 2px;
          transition: all var(--transition-base);
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: var(--spacing-lg);
          padding: var(--spacing-xl) 0;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all var(--transition-base);
        }

        .mobile-menu.active {
          opacity: 1;
          max-height: 500px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .mobile-nav-link {
          display: block;
          padding: var(--spacing-sm) 0;
          font-family: var(--font-heading);
          font-size: var(--font-size-lg);
          font-weight: 500;
          color: var(--color-text-secondary);
          transition: color var(--transition-fast);
        }

        .mobile-nav-link:hover {
          color: var(--color-primary);
        }

        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--color-border);
        }

        .mobile-actions .theme-toggle {
          width: 100%;
          height: auto;
          padding: var(--spacing-md);
          justify-content: center;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
