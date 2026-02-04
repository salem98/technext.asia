import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

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
        <div className="section-loader">
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

export default function App() {
    return (
        <div className="app">
            <Header />
            <main>
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
    )
}
