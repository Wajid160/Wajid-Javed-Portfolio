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
            id: 'dummy-a',
            title: 'DUMMY — AI Customer Support Agent',
            problem: 'Manual customer support handling is slow, repetitive, and expensive for growing businesses.',
            solution: 'Prototype of an AI-powered customer support agent capable of answering FAQs, handling conversations, and escalating complex queries. Integrates LLM responses with structured workflows for consistent outputs.',
            techStack: ['n8n', 'OpenAI API', 'REST APIs', 'Webhooks'],
            status: 'Prototype',
        },
        {
            id: 'dummy-b',
            title: 'DUMMY — University Application Automation System',
            problem: 'Applying to multiple universities requires repetitive data handling and manual communication.',
            solution: 'Automation pipeline that collects applicant data, processes requirements, and generates structured application materials to reduce manual effort and improve consistency.',
            techStack: ['n8n', 'APIs', 'Google Sheets/Docs', 'LLMs'],
            status: 'Case Study',
        },
        {
            id: 'dummy-c',
            title: 'DUMMY — AI Data Extraction & Processing Workflow',
            problem: 'Extracting and structuring data from unstructured sources is time-consuming.',
            solution: 'Automated workflow that extracts, cleans, and structures data using AI models for faster downstream analysis.',
            techStack: ['n8n', 'LLMs', 'APIs', 'Data Processing Tools'],
            status: 'Prototype',
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
        apiEndpoint: 'https://wajid4.app.n8n.cloud/webhook/portfolio-chat',
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
