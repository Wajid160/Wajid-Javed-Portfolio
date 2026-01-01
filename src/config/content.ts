// Content configuration for "The Time Reclamation Specialists"
// All content is centralized here for easy updates

export const content = {
    // Brand Info
    brand: {
        name: 'The Time Reclamation Specialists',
        tagline: 'Building AI automation systems that give you your time back',
        calendlyUrl: 'https://calendly.com/wajidjaved160/30min',
        calendlyColor: '10b981', // Electric Green (without #)
    },

    // Hero Section
    hero: {
        badge: 'Helping small businesses reclaim 20+ hours/week',
        headline: 'We Give Small Businesses Their Time Back',
        subheadline: 'AI automation systems that run 24/7, so you don\'t have to',
        description: 'Stop wasting 20+ hours each week on manual work. We build production-ready automation systems using N8N, Claude, and multi-agent AI—so you can focus on growing your business.',
        ctaPrimary: 'Book a Free Workflow Audit',
        ctaSecondary: 'Talk to My AI',
        image: '/images/hero.png',
    },

    // Social Proof Section
    socialProof: {
        headline: 'Built for Production, Not Demos',
        stats: [
            {
                value: '100+',
                label: 'Hours/Week Automated',
                description: 'Production systems handling real workloads',
            },
            {
                value: '24/7',
                label: 'Always Running',
                description: 'Systems that never sleep',
            },
            {
                value: 'ROI',
                label: 'Guaranteed',
                description: 'Or we fix it for free',
            },
        ],
        trustIndicators: [
            { text: 'Production-Ready Systems', icon: 'Shield' },
            { text: 'No-Code to Pro-Code', icon: 'Code' },
            { text: 'Full Transparency', icon: 'Eye' },
        ],
    },

    // How It Works Section
    howItWorks: {
        headline: 'Getting Your Time Back is Simple',
        steps: [
            {
                number: '01',
                icon: 'Search',
                title: 'We Analyze Your Workflows',
                description: 'Free 30-minute audit to identify where you\'re wasting time—no strings attached.',
            },
            {
                number: '02',
                icon: 'Cog',
                title: 'We Build Custom Automation',
                description: 'Production-ready systems using N8N, AI agents, and battle-tested architectures.',
            },
            {
                number: '03',
                icon: 'Clock',
                title: 'You Get Your Time Back',
                description: 'Systems run 24/7 while you focus on what matters—growing your business.',
            },
        ],
    },

    // Services & Pricing Section
    services: {
        headline: 'How We Can Help',
        subtitle: 'Transparent pricing, real results',
        promoHeadline: 'Q1 2026 Special: 20% Off Our Standard Rates',
        promoSubtitle: 'Limited to our first 10 clients',
        spotsInfo: {
            filled: 1,
            total: 10,
        },
        tiers: [
            {
                id: 'starter',
                name: 'Starter Workflow Automation',
                originalPrice: '$1,500',
                price: '$1,200',
                description: 'Perfect for automating your first process',
                features: [
                    'Single workflow automation',
                    '1-week delivery',
                    'Documentation & training',
                    '1 week support',
                ],
                cta: 'Get Started',
                popular: false,
            },
            {
                id: 'standard',
                name: 'Standard Automation System',
                originalPrice: '$3,000',
                price: '$2,400',
                description: 'Perfect for key operational workflows',
                features: [
                    'Multi-step workflow with integrations',
                    '2-week delivery',
                    'Full documentation & training',
                    '2 weeks support',
                ],
                cta: 'Let\'s Talk',
                popular: true,
            },
            {
                id: 'advanced',
                name: 'Advanced Multi-Agent System',
                originalPrice: '$5,000',
                price: '$4,000',
                description: 'Perfect for sophisticated automation needs',
                features: [
                    'Complex multi-agent architecture',
                    '3-week delivery',
                    'Advanced integrations & training',
                    '1 month support',
                ],
                cta: 'Get Started',
                popular: false,
            },
        ],
        footnote: 'Prices increase to standard rates after first 10 clients.',
        foundingClient: {
            enabled: true,
            title: '🎯 FOUNDING CLIENT PROGRAM',
            description: 'Looking for 3 detailed case study partners. Even deeper discounts available.',
            cta: 'Learn More',
        },
    },

    // Case Studies (transformed from projects)
    caseStudies: {
        headline: 'Real Results from Real Systems',
        subtitle: 'See how our automation systems deliver measurable ROI',
        projects: [
            {
                id: 'shopify-returns',
                title: 'Shopify Returns Automation',
                industry: 'E-commerce',
                problem: 'E-commerce businesses waste 10-15 hours/week manually processing returns, refunds, and customer communications.',
                solution: [
                    'Automatically processes return requests from multiple channels',
                    'AI agent analyzes return reasons and approves/flags cases',
                    'Generates personalized customer responses',
                    'Updates inventory and triggers refunds',
                    'Creates analytics dashboard for return patterns',
                ],
                results: {
                    hoursSaved: '12 hours/week',
                    automationRate: '90% handled automatically',
                    availability: '24/7 operation',
                    annualValue: '$31,000+',
                },
                techStack: ['N8N', 'Claude AI', 'Shopify API', 'Multi-agent orchestration'],
                thumbnail: '/projects/shopify-returns/thumbnail.png',
                resultImages: [
                    '/projects/shopify-returns/result-1.png',
                    '/projects/shopify-returns/result-2.png',
                    '/projects/shopify-returns/result-3.png',
                ],
                githubUrl: 'https://github.com/Wajid160/AI-Automation/tree/main/Customer-Support/shopify-returns-agent',
            },
            {
                id: 'shopify-wismo',
                title: 'Shopify WISMO Automation',
                industry: 'E-commerce',
                problem: '"Where is my order?" inquiries consume 8-10 hours/week of customer service time, creating bottlenecks and delayed responses.',
                solution: [
                    'Monitors support channels (email, chat, social)',
                    'Automatically retrieves order status from Shopify',
                    'AI generates personalized responses with tracking info',
                    'Escalates complex cases to human agents',
                    'Learns from interactions to improve responses',
                ],
                results: {
                    hoursSaved: '9 hours/week',
                    automationRate: '95% queries resolved instantly',
                    availability: 'Faster response times',
                    annualValue: '$23,000+',
                },
                techStack: ['N8N', 'Claude AI', 'Shopify API', 'Multi-channel integration'],
                thumbnail: '/projects/shopify-wismo/thumbnail.png',
                resultImages: [
                    '/projects/shopify-wismo/result-1.png',
                    '/projects/shopify-wismo/result-2.png',
                    '/projects/shopify-wismo/result-3.png',
                ],
                githubUrl: 'https://github.com/Wajid160/AI-Automation/tree/main/Customer-Support/Shopify-Customer-Support/WISMO-Agent',
            },
            {
                id: 'content-distribution',
                title: 'Multi-Platform Content Distribution',
                industry: 'Content Creation',
                problem: 'Content creators waste 5-7 hours/week manually posting content across platforms, reformatting for each channel, and tracking engagement.',
                solution: [
                    'Accepts content in any format (video, audio, text)',
                    'AI automatically repurposes for each platform',
                    'Optimizes formatting, captions, and hashtags per platform',
                    'Schedules posts at optimal times',
                    'Aggregates analytics across all channels',
                ],
                results: {
                    hoursSaved: '6 hours/week',
                    automationRate: '3x content output',
                    availability: 'Consistent multi-platform presence',
                    annualValue: '$15,600+',
                },
                techStack: ['N8N', 'Claude AI', 'Multi-agent workflow', 'Platform APIs'],
                thumbnail: '/projects/content-distribution/thumbnail.png',
                resultImages: [],
                githubUrl: '',
                isInternal: true,
            },
        ],
    },

    // About Section (revised)
    about: {
        headline: 'Our Story',
        profileImage: '/images/about.png',
        narrative: [
            'Every week, small businesses lose 20+ hours to tasks that should take minutes—copying data between tools, chasing email threads, manually updating spreadsheets. We\'ve seen it destroy productivity and burn out teams.',
            'That\'s why we started building. Not flashy demos that break in real-world use—but production-ready automation systems that run 24/7 without supervision.',
            'Today, we\'re The Time Reclamation Specialists. We build intelligent automation using N8N, Claude, and multi-agent AI. We\'re transparent about what works (and what doesn\'t). And we\'re obsessed with one metric: hours saved.',
            'If your team is drowning in manual work, let\'s fix that.',
        ],
        differentiators: [
            {
                title: 'We Build in Production',
                description: 'No flashy demos that break in real use. Battle-tested, enterprise patterns. 24/7 reliability.',
                icon: 'Rocket',
            },
            {
                title: 'We\'re Transparent',
                description: 'We share victories AND failures. We build in public. No corporate BS.',
                icon: 'Eye',
            },
            {
                title: 'We\'re Results-Obsessed',
                description: 'We measure in hours saved. ROI guaranteed. You get your time back, or we fix it.',
                icon: 'Target',
            },
        ],
    },

    // FAQ Section
    faq: {
        headline: 'Common Questions',
        items: [
            {
                question: 'What if I don\'t know what to automate?',
                answer: 'That\'s exactly what our free workflow audit is for. We\'ll analyze your current processes and identify the biggest time-wasters. Most businesses are surprised by how much time they\'re losing on repetitive tasks.',
            },
            {
                question: 'How long does it take to build an automation?',
                answer: 'Starter automations take 1 week. Standard systems take 2 weeks. Advanced multi-agent systems take 3 weeks. We\'ll give you a clear timeline in your free audit.',
            },
            {
                question: 'What if the automation doesn\'t work as expected?',
                answer: 'We guarantee ROI. If the system doesn\'t save you the hours we promised, we\'ll fix it for free. Our reputation depends on delivering real results.',
            },
            {
                question: 'Do I need technical knowledge to use the automations?',
                answer: 'No. We build systems that run autonomously. You\'ll get full documentation and training, but the goal is hands-off operation.',
            },
            {
                question: 'What tools do you work with?',
                answer: 'We specialize in N8N for workflow automation, Claude for AI agents, and custom integrations with your existing tools (Shopify, Gmail, Slack, and hundreds more).',
            },
            {
                question: 'I\'m a small business. Can I afford this?',
                answer: 'Our Starter package is just $1,200 during our Q1 2026 launch special (normally $1,500). Calculate the value: if you\'re paying someone $25/hr and we save them 10 hours/week, that\'s $13,000/year in value. The automation pays for itself in under 2 months.',
            },
        ],
    },

    // Skills Section (repositioned as "How We Build")
    skills: {
        headline: 'Our Technical Arsenal',
        subtitle: 'We use cutting-edge technology, but we speak plain business language',
        categories: [
            {
                title: 'AI & LLMs',
                items: [
                    'Large Language Models — Production Use',
                    'Prompt Engineering — Advanced',
                    'Agentic AI Design — Intermediate',
                ],
                color: 'blue',
            },
            {
                title: 'Automation & Workflows',
                items: [
                    'N8N — Advanced (Core Tool)',
                    'Webhooks — Advanced',
                    'API Orchestration — Advanced',
                ],
                color: 'green',
            },
            {
                title: 'Backend & APIs',
                items: [
                    'REST APIs — Intermediate',
                    'Data Processing Pipelines — Intermediate',
                ],
                color: 'purple',
            },
            {
                title: 'Tools & Platforms',
                items: [
                    'OpenAI API',
                    'Google Workspace APIs',
                    'Git & GitHub',
                ],
                color: 'cyan',
            },
        ],
    },

    // Chatbot (keep existing)
    chatbot: {
        name: 'Ask My AI',
        welcomeMessage: "Hi! I'm the AI assistant for The Time Reclamation Specialists. Ask me about our automation services, pricing, or how we can help your business save time.",
        suggestedPrompts: [
            'What automation services do you offer?',
            'How much does a workflow automation cost?',
            'Can you help automate my customer support?',
        ],
        apiEndpoint: 'https://wajid5.app.n8n.cloud/webhook-test/portfolio-chat',
    },

    // Contact Section (simplified)
    contact: {
        headline: 'Ready to Reclaim Your Time?',
        subtitle: 'Book a free 30-minute workflow audit. No strings attached.',
        email: 'wajidjaved160@gmail.com',
        linkedin: 'https://www.linkedin.com/in/wajid-javed160',
        github: 'https://github.com/Wajid160',
        whatsapp: '+923471362616',
        whatsappLink: 'https://wa.me/923471362616',
        n8nFormUrl: 'https://wajid16-my-n8n.hf.space/webhook-test/60391815-2ad4-468d-b383-a9c8ee289926',
    },

    // Footer
    footer: {
        tagline: 'Building AI automation systems that give you your time back',
        links: [
            { label: 'Home', href: '#home' },
            { label: 'Services', href: '#services' },
            { label: 'Case Studies', href: '#case-studies' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
        ],
    },

    // Free Audit CTA (appears twice)
    freeAuditCTA: {
        headline: 'See How Much Time You\'re Wasting',
        subheadline: 'Free 30-minute workflow audit—no strings attached',
        description: 'We\'ll analyze your current processes and show you exactly where automation can save you 10-20 hours per week. No sales pitch, just actionable insights.',
        cta: 'Book Your Free Audit',
        trustLine: '📅 Pick a time that works for you  •  💬 No commitment required  •  ⚡ Get insights in 30 minutes',
    },
};

// Legacy export for backward compatibility during migration
export const legacyProjects = content.caseStudies.projects.map(p => ({
    id: p.id,
    title: p.title,
    problem: p.problem,
    solution: Array.isArray(p.solution) ? p.solution.join(' ') : p.solution,
    impact: `${p.results.hoursSaved} saved, ${p.results.annualValue} annual value`,
    techStack: p.techStack,
    status: 'Production',
    thumbnail: p.thumbnail,
    resultImages: p.resultImages,
    githubUrl: p.githubUrl,
}));
