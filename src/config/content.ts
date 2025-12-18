export const content = {
    hero: {
        headline: 'AI Automation & Agentic AI Developer',
        subheadline: 'I design and build intelligent AI agents and workflow automations using n8n and modern large language models.',
        ctaProjects: 'View Projects',
        ctaChatbot: 'Talk to My AI',
        image: '/images/hero.png',
    },
    about: {
        profileImage: '/images/about.png',
        bio: 'I am a BS IT graduate specializing in AI automation and agentic AI systems. My work focuses on building practical, production-ready workflows using n8n, APIs, and large language models to solve real operational problems. I am particularly interested in creating AI systems that are efficient, scalable, and human-centric.',
        highlights: [
            'BS Information Technology Graduate',
            'Focus: Agentic AI, AI Automation, n8n',
            'Product-oriented builder with real-world automation experience',
        ],
    },
    projects: [
        {
            id: 'shopify-wismo',
            title: 'AI-Powered Shopify WISMO Customer Support Agent',
            problem: 'E-commerce stores struggle with high volumes of "Where Is My Order" emails, leading to slow response times, increased support costs, and frustrated customers waiting for updates.',
            solution: 'An autonomous AI agent that monitors support emails 24/7, intelligently extracts order details, queries Shopify in real-time, and sends accurate, personalized responses instantly—without human intervention.',
            impact: 'Delivers near-instant responses to customer inquiries, dramatically reduces manual support workload, and builds customer trust through reliable, accurate order tracking information.',
            techStack: ['n8n', 'Agentic AI', 'Google Gemini', 'Shopify API', 'Gmail API'],
            status: 'Production',
            thumbnail: '/projects/shopify-wismo/thumbnail.png',
            resultImages: [
                '/projects/shopify-wismo/result-1.png',
                '/projects/shopify-wismo/result-2.png',
                '/projects/shopify-wismo/result-3.png',
            ],
            githubUrl: 'https://github.com/Wajid160/AI-Automation/tree/main/Customer-Support/Shopify-Customer-Support/WISMO-Agent',
        },
    ],
    skills: {
        ai: {
            title: 'AI & LLMs',
            items: [
                'Large Language Models — Used in Production',
                'Prompt Engineering — Advanced',
                'Agentic AI Design — Intermediate',
            ],
        },
        automation: {
            title: 'Automation & Workflows',
            items: [
                'n8n — Advanced (Core Tool)',
                'Webhooks — Advanced',
                'API Orchestration — Advanced',
            ],
        },
        backend: {
            title: 'Backend & APIs',
            items: [
                'REST APIs — Intermediate',
                'Data Processing Pipelines — Intermediate',
            ],
        },
        tools: {
            title: 'Tools & Platforms',
            items: [
                'OpenAI API',
                'Google Workspace APIs',
                'Git & GitHub',
            ],
        },
    },
    chatbot: {
        name: 'Ask My AI',
        welcomeMessage: "Hi, I'm Wajid's AI assistant. You can ask me about projects, skills, or potential collaborations.",
        suggestedPrompts: [
            'What projects has Wajid built?',
            'What AI automation tools does he use?',
            'Can he build custom AI agents?',
        ],
        apiEndpoint: '/api/chat',
    },
    contact: {
        intro: 'If you are interested in AI automation, agentic AI systems, or collaboration opportunities, feel free to reach out.',
        responseExpectation: 'Typically responds within 24–48 hours.',
        email: 'wajidjaved160@gmail.com',
        linkedin: 'https://www.linkedin.com/in/wajid-javed160',
        github: 'https://github.com/Wajid160',
        whatsappList: '+923471362616',
        whatsappLink: 'https://wa.me/923471362616',
        whatsappTel: 'tel:+923471362616',
    },
    footer: {
        text: 'Building intelligent automation systems with AI.',
    },
};
