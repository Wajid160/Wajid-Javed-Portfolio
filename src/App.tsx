import { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Projects } from './components/Sections/Projects';
import { Skills } from './components/Sections/Skills';
import { Contact } from './components/Sections/Contact';
import { ChatbotShell } from './components/Chatbot/ChatbotShell';

function App() {
    const [, setIsChatbotOpen] = useState(false);

    const handleOpenChatbot = () => {
        // Find and click the chatbot FAB button
        const chatbotButton = document.querySelector('[aria-label="Open chatbot"]') as HTMLButtonElement;
        if (chatbotButton) {
            chatbotButton.click();
        }
    };

    return (
        <div className="min-h-screen bg-[#F7F7FA] dark:bg-[#0B1220] transition-colors duration-300">
            <Header />

            <main>
                <section id="home">
                    <Hero
                        onOpenProjects={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        onOpenChatbot={handleOpenChatbot}
                    />
                </section>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />

            {/* Chatbot always available */}
            <ChatbotShell />
        </div>
    );
}

export default App;
