import { lazy, Suspense, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SplashScreen from './components/SplashScreen'

// Lazy load below-the-fold components for better performance
const Stats = lazy(() => import('./components/Stats'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Services = lazy(() => import('./components/Services'))
const Technologies = lazy(() => import('./components/Technologies'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Offices = lazy(() => import('./components/Offices'))
const Footer = lazy(() => import('./components/Footer'))

// Loading fallback component
function SectionLoader() {
    return (
        <div className="section-loader" role="status" aria-label="Loading section">
            <div className="loader-spinner"></div>
            <style>{`
        .section-loader {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          background: var(--color-bg);
        }
        .loader-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--color-border);
          border-top-color: var(--color-primary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    )
}

// Skip to main content link for accessibility
function SkipLink() {
    return (
        <a href="#main-content" className="skip-link">
            Skip to main content
            <style>{`
        .skip-link {
          position: absolute;
          top: -100%;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          z-index: 10000;
          transition: top 0.3s ease;
          font-weight: 600;
        }
        .skip-link:focus {
          top: 1rem;
        }
      `}</style>
        </a>
    )
}

export default function App() {
    const [showSplash, setShowSplash] = useState(true)

    return (
        <>
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            <div className="app" style={{ visibility: showSplash ? 'hidden' : 'visible' }}>
                <SkipLink />
                <Header />
                <main id="main-content" role="main" aria-label="Main content">
                    <Hero />
                    <Suspense fallback={<SectionLoader />}>
                        <Stats />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <WhyChooseUs />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Services />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Technologies />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Testimonials />
                    </Suspense>
                    <Suspense fallback={<SectionLoader />}>
                        <Offices />
                    </Suspense>
                </main>
                <Suspense fallback={<SectionLoader />}>
                    <Footer />
                </Suspense>
            </div>
        </>
    )
}
