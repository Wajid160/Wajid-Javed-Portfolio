import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Problem } from './components/Sections/Problem';
import { HowItWorks } from './components/Sections/HowItWorks';
import { SocialProof } from './components/Sections/SocialProof';
import { CaseStudies } from './components/Sections/CaseStudies';
import { Services } from './components/Sections/Services';
import { WhyMe } from './components/Sections/WhyMe';
import { FreeAuditCTA } from './components/Sections/FreeAuditCTA';
import { FAQ } from './components/Sections/FAQ';
import { About } from './components/Sections/About';
import { Skills } from './components/Sections/Skills';
import { Contact } from './components/Sections/Contact';
import { QuickMessage } from './components/UI/QuickMessage';

function App() {
    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            <Header />

            <main>
                {/* 1. Hero - Above the fold with stats bar */}
                <section id="home">
                    <Hero />
                </section>

                {/* 2. Problem - New section showing manual work pain points */}
                <Problem />

                {/* 3. Solution - How It Works (4-step process) */}
                <HowItWorks />

                {/* 4. Social Proof - Testimonials with metrics */}
                <SocialProof />

                {/* 5. Case Studies - Preview cards */}
                <CaseStudies />

                {/* 6. Services & Pricing - With corrected pricing */}
                <Services />

                {/* 7. Why Me - New 4-column feature section */}
                <WhyMe />

                {/* 8. Free Audit CTA - Primary conversion point */}
                <FreeAuditCTA />

                {/* 9. FAQ - Address objections */}
                <FAQ />

                {/* 10. About - Our story */}
                <About />

                {/* 11. Skills - Technical credibility */}
                <Skills />

                {/* 12. Contact - Social links */}
                <Contact />
            </main>

            <Footer />

            {/* Quick Message button instead of chatbot */}
            <QuickMessage />
        </div>
    );
}

export default App;
