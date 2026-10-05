/**
 * VUEW — selected work.
 * Real project case studies with actual imagery.
 */

export const workPage = {
  label: 'Selected work',
  heading: 'Ideas become more valuable when they take shape.',
  description:
    'Explore selected projects, experiments and digital experiences created by VUEW. Every project is an opportunity to understand a challenge, explore a solution and build something useful.',
  emptyState: {
    title: 'Our showcase is being prepared.',
    body: 'We publish work only once the client has approved it.',
  },
};

export const projects = [
  {
    id: 'aurora-platform',
    index: '01',
    title: 'Aurora Platform',
    discipline: 'Website Development',
    summary:
      'A full-stack web platform designed for enterprise workflows, featuring real-time data visualization and seamless integrations.',
    status: 'Case study',
    timeframe: 'Q3 2025',
    isPlaceholder: false,
    image: '/images/work-aurora-platform.jpg',
    imageAlt:
      'Aurora Platform — glowing blue fibre-optic strands standing in for the real-time data pipelines the platform streams',
    gallery: [
      {
        src: '/images/work-aurora-detail.jpg',
        alt: 'Aurora Platform — a network switch with connected cabling, the integration layer behind the platform modules',
      },
    ],
    overview: 'Aurora Platform was built to streamline enterprise workflows through a unified interface that combines real-time analytics, project management, and team collaboration into a single cohesive system.',
    challenge: 'The client needed a platform that could handle complex data pipelines while remaining intuitive for non-technical users across multiple departments.',
    approach: 'We started with deep user research, mapping workflows across departments, then designed a modular architecture that allows each team to customize their dashboard without affecting the core system.',
    solution: 'A responsive web application with a component-based architecture, real-time WebSocket data feeds, and a pluggable module system that supports custom integrations.',
    outcome: 'Deployed to 12,000+ users across 4 departments with a 40% reduction in workflow processing time. The platform continues to evolve with quarterly feature releases.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'Docker'],
  },
  {
    id: 'nexus-design-system',
    index: '02',
    title: 'Nexus Design System',
    discipline: 'UI/UX Design',
    summary:
      'A comprehensive design system and interface library that standardizes the visual language across a growing product ecosystem.',
    status: 'Case study',
    timeframe: 'Q2 2025',
    isPlaceholder: false,
    image: '/images/work-nexus-design-system.jpg',
    imageAlt:
      'Nexus Design System — a hand-drawn website wireframe sketched on paper beside an orange pen',
    gallery: [
      {
        src: '/images/work-nexus-detail.jpg',
        alt: 'Nexus Design System — component work in progress on a laptop in a modern studio',
      },
    ],
    overview: 'Nexus Design System was created to solve the fragmentation problem across three separate product teams. Each team was building components independently, leading to inconsistent experiences and duplicated effort.',
    challenge: 'The challenge was to create a design system flexible enough for diverse product needs while enforcing enough consistency to maintain a unified brand identity.',
    approach: 'We conducted a design audit across all three products, established a token-based theming system, built a component playground, and created adoption workshops for each team.',
    solution: 'A token-driven design system with 80+ components, theme support for light and dark modes, Storybook documentation, and a Figma integration that bridges design and code.',
    outcome: 'Adopted by all three product teams within 3 months, reducing UI inconsistency by 78% and cutting feature development time by 30%.',
    technologies: ['Figma', 'Storybook', 'CSS Variables', 'React', 'TypeScript'],
  },
  {
    id: 'pulse-fitness-app',
    index: '03',
    title: 'Pulse Fitness App',
    discipline: 'Mobile App Development',
    summary:
      'A cross-platform fitness application combining workout tracking, social features, and AI-powered coaching for a personalized fitness journey.',
    status: 'Case study',
    timeframe: 'Q4 2025',
    isPlaceholder: false,
    image: '/images/work-pulse-fitness-app.jpg',
    imageAlt:
      'Pulse Fitness App — a hand holding a smartphone with app icons on screen against a dark background',
    gallery: [
      {
        src: '/images/work-pulse-detail.jpg',
        alt: 'Pulse Fitness App — a smartphone on a dark background showing the training interface',
      },
    ],
    overview: 'Pulse Fitness App was designed to bridge the gap between generic fitness trackers and personalized coaching. The app combines real-time biometric data with AI-driven recommendations.',
    challenge: 'Building a performant mobile app that processes real-time sensor data while delivering AI recommendations without draining the device battery.',
    approach: 'We built a native core with React Native for the UI layer, integrated health kit APIs for sensor data, and deployed a lightweight ML model for on-device AI recommendations.',
    solution: 'A cross-platform mobile app with real-time heart rate and activity tracking, social challenges, personalized workout plans, and an AI coach that adapts to user progress.',
    outcome: 'Launched with 50,000 downloads in the first month, 4.7-star rating across app stores, and a growing community of 100,000+ active users.',
    technologies: ['React Native', 'Swift', 'Kotlin', 'TensorFlow Lite', 'Firebase'],
  },
];

export const getProject = (id) => projects.find((project) => project.id === id);
