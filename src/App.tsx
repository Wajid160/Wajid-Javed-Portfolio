import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { SocialProof } from './components/Sections/SocialProof';
import { HowItWorks } from './components/Sections/HowItWorks';
import { Services } from './components/Sections/Services';
import { FreeAuditCTA } from './components/Sections/FreeAuditCTA';
import { CaseStudies } from './components/Sections/CaseStudies';
import { About } from './components/Sections/About';
import { Skills } from './components/Sections/Skills';
import { FAQ } from './components/Sections/FAQ';
import { Contact } from './components/Sections/Contact';
import { ChatbotShell } from './components/Chatbot/ChatbotShell';

function App() {
    const handleOpenChatbot = () => {
        // Find and click the chatbot FAB button
        const chatbotButton = document.querySelector('[aria-label="Open chatbot"]') as HTMLButtonElement;
        if (chatbotButton) {
            chatbotButton.click();
        }
    };

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            <Header />

            <main>
                {/* Hero - Above the fold with clear value prop */}
                <section id="home">
                    <Hero onOpenChatbot={handleOpenChatbot} />
                </section>

                {/* Social Proof - Build trust immediately */}
                <SocialProof />

                {/* How It Works - Simple 3-step process */}
                <HowItWorks />

                {/* Services & Pricing - Transparent pricing */}
                <Services />

                {/* First CTA - Primary conversion point */}
                <FreeAuditCTA variant="primary" />

                {/* Case Studies - Proof of results */}
                <CaseStudies />

                {/* About - Our story */}
                <About />

                {/* Skills - Technical credibility (lower priority) */}
                <Skills />

                {/* FAQ - Address objections */}
                <FAQ />

                {/* Second CTA - Another conversion opportunity */}
                <FreeAuditCTA variant="secondary" />

                {/* Contact - Social links */}
                <Contact />
            </main>

            <Footer />

            {/* Chatbot always available */}
            <ChatbotShell />
        </div>
    );
}

export default App;
