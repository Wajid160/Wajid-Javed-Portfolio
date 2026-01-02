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
        headline: 'Give Your Business Its Time Back',
        subheadline: 'Production-ready AI automation systems that eliminate 20+ hours/week of manual work—so you can focus on what actually grows your business.',
        description: '',
        statsBar: [
            { icon: 'Check', text: '100+ Hours/Week Automated' },
            { icon: 'Check', text: '90% Automation Rate' },
            { icon: 'Check', text: '1-3 Week Delivery' },
        ],
        ctaPrimary: 'Book Free Workflow Audit',
        ctaSecondary: 'See Case Studies ↓',
        image: '/images/hero.png',
    },

    // Problem Section (NEW)
    problem: {
        headline: 'Your Team Shouldn\'t Be Doing This Manually',
        intro: 'Every day, your team wastes hours on work that doesn\'t need a human:',
        tasks: [
            { task: 'Processing returns and refunds', hours: '12+ hours/week' },
            { task: 'Answering "Where is my order?" inquiries', hours: '9+ hours/week' },
            { task: 'Manually posting content across platforms', hours: '6+ hours/week' },
            { task: 'Sorting emails and creating tasks', hours: '5+ hours/week' },
            { task: 'Data entry between systems', hours: '8+ hours/week' },
        ],
        conclusion: 'That\'s 40+ hours every week—an entire employee\'s time—spent on tasks AI could handle while you sleep.',
        cta: 'What if you could get that time back?',
    },

    // Social Proof Section - TESTIMONIALS
    socialProof: {
        headline: 'Real Results from Real Businesses',
        subtitle: '',
        testimonials: [
            {
                quote: 'We were spending 12 hours every week processing returns. The AI system cut that to less than an hour. Our team can finally focus on growth instead of operations.',
                name: 'Sarah Chen',
                role: 'E-commerce Business Owner',
                metrics: [
                    { icon: 'DollarSign', value: '$31K+', label: 'Annual Value' },
                    { icon: 'Clock', value: '11 Hours/Week', label: 'Saved' },
                    { icon: 'BarChart', value: '90%', label: 'Automation Rate' },
                ],
            },
            {
                quote: 'The AI agent handles 95% of "Where is my order?" inquiries instantly. No more customer service bottleneck. Our satisfaction scores actually went UP.',
                name: 'Marcus Rodriguez',
                role: 'Operations Manager',
                metrics: [
                    { icon: 'DollarSign', value: '$23K+', label: 'Annual Value' },
                    { icon: 'Clock', value: '9 Hours/Week', label: 'Saved' },
                    { icon: 'Zap', value: 'Sub-Minute', label: 'Response Time' },
                ],
            },
            {
                quote: 'We tripled our content output without hiring anyone. The automation system handles distribution across all platforms while we focus on creating.',
                name: 'Alex Thompson',
                role: 'Marketing Director',
                metrics: [
                    { icon: 'DollarSign', value: '$15K+', label: 'Annual Value' },
                    { icon: 'Clock', value: '6 Hours/Week', label: 'Saved' },
                    { icon: 'TrendingUp', value: '3x', label: 'Content Output' },
                ],
            },
        ],
    },

    // How It Works Section - 4 STEPS
    howItWorks: {
        headline: 'I Build Systems That Work 24/7 (So Your Team Doesn\'t Have To)',
        subtitle: 'I design and deploy production-ready automation workflows using N8N, Claude AI, and multi-agent architectures. Not demos. Not prototypes. Real systems that run in production and actually work.',
        steps: [
            {
                number: '01',
                icon: 'Search',
                title: 'Free Workflow Audit (30 min)',
                description: 'We identify your biggest time drain. I show you exactly how to automate it. You get a detailed blueprint—no obligation.',
            },
            {
                number: '02',
                icon: 'Layout',
                title: 'Custom System Design (Week 1)',
                description: 'I design the workflow architecture. Map all integrations and logic. You approve before we build.',
            },
            {
                number: '03',
                icon: 'Cog',
                title: 'Build & Deploy (Weeks 1-3)',
                description: 'I build the automation system. Test in real conditions. Deploy to production.',
            },
            {
                number: '04',
                icon: 'Activity',
                title: 'Monitor & Optimize (Ongoing)',
                description: 'System runs 24/7 autonomously. I monitor performance. We optimize based on results.',
            },
        ],
        benefits: {
            headline: 'WHAT YOU GET:',
            items: [
                'Time back for your team (10-20+ hours/week typical)',
                'Zero manual work on repetitive tasks',
                'Measurable ROI (we track hours saved)',
                'Production-grade reliability (not experiments)',
            ],
        },
    },

    // Services & Pricing Section - CORRECTED PRICING
    services: {
        headline: 'Choose Your Starting Point',
        subtitle: '',
        promoHeadline: 'Q1 2026 Special: First 10 Clients Get Deep Discounts',
        promoSubtitle: 'Lock in founding rates before they increase',
        spotsInfo: {
            filled: 3,
            total: 10,
        },
        tiers: [
            {
                id: 'starter',
                name: 'Workflow Automation',
                originalPrice: '$1,500',
                price: '$500',
                savings: '$1,000',
                description: 'Perfect for first automation project',
                features: [
                    '1 automated workflow',
                    '1-week delivery',
                    'Documentation & training',
                    '1 week support',
                    'Before/after metrics',
                ],
                cta: 'Book Free Audit →',
                popular: false,
            },
            {
                id: 'standard',
                name: 'Automation System',
                originalPrice: '$3,000',
                price: '$1,200',
                savings: '$1,800',
                description: 'Perfect for key operations',
                features: [
                    'Multi-step workflow',
                    '2-week delivery',
                    'Full documentation',
                    '2 weeks support',
                    'ROI tracking',
                ],
                cta: 'Book Free Audit →',
                popular: true,
            },
            {
                id: 'advanced',
                name: 'Multi-Agent System',
                originalPrice: '$5,000',
                price: '$2,000',
                savings: '$3,000',
                description: 'Perfect for complex processes',
                features: [
                    'Advanced architecture',
                    '3-week delivery',
                    'Multiple integrations',
                    '1 month support',
                    'Ongoing optimization',
                ],
                cta: 'Book Free Audit →',
                popular: false,
            },
        ],
        footnote: '💡 Not sure which package fits? Book a free workflow audit and I\'ll recommend the right approach.',
        monthlySupportNote: '🔄 Monthly Support Available: Starting at $1,000/month for ongoing maintenance and new automations.',
    },

    // Why Me Section (NEW)
    whyMe: {
        headline: 'Why Work With Me?',
        features: [
            {
                icon: 'Rocket',
                title: 'Production-Ready',
                subtitle: 'Real Systems, Not Demos',
                description: 'I build for production, not presentations. Systems that run 24/7 with real error handling, edge cases, and reliability.',
            },
            {
                icon: 'BarChart',
                title: 'Measurable Impact',
                subtitle: 'Track Every Hour Saved',
                description: 'Every project includes before/after metrics. You\'ll know exactly how much time and money you\'re reclaiming.',
            },
            {
                icon: 'Handshake',
                title: 'Transparent Process',
                subtitle: 'Build With You, Not For You',
                description: 'You see the entire design process. Approve before we build. No surprises. No black boxes.',
            },
            {
                icon: 'Zap',
                title: 'Fast Delivery',
                subtitle: '1-3 Week Turnaround',
                description: 'Most projects delivered in 1-3 weeks. You\'re not waiting months to see results.',
            },
        ],
    },

    // Case Studies (transformed from projects)
    caseStudies: {
        headline: 'See How It Works',
        subtitle: '',
        previewCards: [
            {
                id: 'shopify-returns',
                title: 'E-commerce Returns Automation',
                before: '12 hours/week manual processing',
                after: '1 hour/week, 90% automated',
                tech: 'N8N + Claude AI + Shopify API',
                linkText: 'Read Full Case Study →',
            },
            {
                id: 'shopify-wismo',
                title: 'Customer Service AI Agent',
                before: '9 hours/week answering WISMO',
                after: 'Instant responses, 95% resolution',
                tech: 'Multi-agent system + Integrations',
                linkText: 'Read Full Case Study →',
            },
            {
                id: 'content-distribution',
                title: 'Content Distribution System',
                before: '6 hours/week manual posting',
                after: 'Automated multi-platform, 3x output',
                tech: 'N8N + Claude AI + Platform APIs',
                linkText: 'Read Full Case Study →',
            },
        ],
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
        headline: 'Building Systems That Give Time Back',
        profileImage: '/images/about.png',
        narrative: [
            'I\'m building AI automation systems for small businesses.',
            'I started noticing a pattern: every small business I talked to had the same problem. They were spending 15-20 hours every week on manual work they couldn\'t afford to hire out. Returns processing. Customer inquiries. Data entry. Content distribution.',
            'Work that didn\'t need a human—it needed a system.',
            'So I started building those systems. Using N8N for workflow orchestration, Claude AI for intelligent decision-making, and multi-agent architectures for complex logic, I create automation that actually works in production.',
            'Not demos. Not prototypes. Real systems that businesses depend on.',
        ],
        approach: {
            headline: 'MY APPROACH:',
            points: [
                'Outcome-First: I optimize for hours saved and ROI, not technical elegance',
                'Production-Ready: Systems must work reliably in the real world',
                'Measurable: Every project tracks time saved and efficiency gained',
                'Transparent: You see the entire design and build process',
            ],
        },
        techStack: {
            headline: 'MY TECH STACK:',
            items: [
                'N8N (expert level, MCP integration)',
                'Claude AI & multi-agent systems',
                'Python, TypeScript, Docker',
                'Business integrations (Shopify, Google, Slack, CRMs, APIs)',
            ],
        },
        differentiator: {
            headline: 'WHY I\'M DIFFERENT:',
            text: 'Most automation "experts" build impressive demos that break in production. I build boring, reliable systems that just work. Because your business needs reliability, not flash.',
        },
        currently: {
            headline: 'CURRENTLY:',
            text: 'Taking on 10 automation projects for Q1 2026. If you\'re spending 10-20 hours/week on work that feels automatable, let\'s talk.',
        },
    },

    // FAQ Section - UPDATED WITH CORRECTED PRICING
    faq: {
        headline: 'Common Questions',
        items: [
            {
                question: 'Do I need technical knowledge?',
                answer: 'Not at all. I handle all the technical work. You just need to explain your current process, and I\'ll design the automation.',
            },
            {
                question: 'What if my process is too complex?',
                answer: 'I specialize in complex workflows. Multi-step processes with lots of edge cases are exactly what AI agents excel at handling.',
            },
            {
                question: 'How long until I see ROI?',
                answer: 'Most clients reclaim 10-20 hours/week immediately after deployment. At typical labor costs, that\'s a payback period of 2-8 weeks.',
            },
            {
                question: 'What if something breaks?',
                answer: 'All projects include support (1 week to 1 month depending on package). Plus, I build with error handling and monitoring so issues are caught early.',
            },
            {
                question: 'Can you integrate with [my tool]?',
                answer: 'If it has an API or webhook, yes. I work with Shopify, Google, Slack, Airtable, CRMs, and most business tools. Rare exceptions: we\'ll discuss during the free audit.',
            },
            {
                question: 'Do you offer ongoing support?',
                answer: 'Yes. Monthly support packages start at $1,000/month and include maintenance, optimization, and new automation development.',
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
        headline: 'Let\'s Find Your Biggest Time Drain',
        subheadline: 'Book a free 30-minute workflow audit. I\'ll:',
        benefits: [
            'Analyze one workflow in your business',
            'Show you exactly how to automate it',
            'Give you a detailed implementation blueprint',
            'Calculate the time and cost savings',
        ],
        noObligationText: 'No sales pitch. No obligation. Just value.',
        valueStatement: 'Even if we don\'t work together, you\'ll walk away with a clear automation plan.',
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
