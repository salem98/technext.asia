import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Testimonials from './components/Testimonials'
import Offices from './components/Offices'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <Stats />
                <WhyChooseUs />
                <Services />
                <Technologies />
                <Testimonials />
                <Offices />
            </main>
            <Footer />
        </div>
    )
}
