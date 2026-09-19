/**
 * VUEW — services.
 *
 * Copy is written per service on purpose: each detail page explains a
 * different kind of work, a different set of considerations and a
 * different outcome. Avoid collapsing these into shared boilerplate.
 */

export const services = [
  {
    id: 'website-development',
    index: '01',
    name: 'Website Development',
    promise: 'Websites that do more than look good.',
    summary:
      'We design and develop modern, responsive websites that communicate your brand, connect with your audience and create a strong foundation for your digital presence.',
    overview: [
      'A website is usually the first serious interaction someone has with a business. It has to load quickly, read clearly, work on the phone in front of them, and make the next step obvious. Those are engineering and editorial decisions before they are visual ones.',
      'We build sites as a system rather than a set of pages: a shared layout, a typographic scale, reusable sections and content that the people running the business can actually maintain after launch.',
    ],
    offerings: [
      'Business, marketing and corporate websites',
      'Landing pages built around one clear action',
      'Portfolio and editorial sites',
      'Custom web applications and internal dashboards',
      'Performance, accessibility and SEO fundamentals',
      'Post-launch iteration and support',
    ],
    considerations: [
      'Content — what exists already and what needs writing or restructuring',
      'Growth — how much the site needs to expand in the next 12 months',
      'Integrations — payments, booking, CRM, analytics or third-party APIs',
      'Handover — whether your team edits the site, or we maintain it',
    ],
    deliverables: [
      'Information architecture and page structure',
      'Responsive designs across mobile, tablet and desktop',
      'Front-end build with semantic, accessible markup',
      'Content migration or authoring support',
      'Deployment, analytics and handover documentation',
    ],
    goodFor: [
      'Businesses building or rebuilding their online presence',
      'Founders launching something for the first time',
      'Teams whose current site no longer matches the work they do',
    ],
  },
  {
    id: 'mobile-app-development',
    index: '02',
    name: 'Mobile App Development',
    promise: 'Digital experiences built for mobile.',
    summary:
      'We create mobile application experiences designed around usability, functionality and the needs of the people who use them.',
    overview: [
      'Mobile work forces decisions early: what belongs on a small screen, how much can happen offline, how the app behaves when the network drops, and where the user is when they open it.',
      'We start with the smallest useful version of the product — the core loop that has to work — then design and build outward from it, so effort goes into the parts people actually use.',
    ],
    offerings: [
      'Product definition and scope for a first release',
      'Interface design for small screens and touch',
      'Cross-platform application development',
      'Prototypes for testing flows before full build',
      'Custom mobile features and integrations',
    ],
    considerations: [
      'Platform strategy — iOS, Android, or a shared cross-platform codebase',
      'Accounts, data and offline behaviour',
      'Distribution — store requirements, review timelines and updates',
      'Long-term maintenance once real users are involved',
    ],
    deliverables: [
      'Scoped feature list for the first release',
      'Screen designs and interaction states',
      'Working application build for testing',
      'Store submission preparation',
      'Technical documentation for future development',
    ],
    goodFor: [
      'Founders validating a mobile-first product idea',
      'Businesses replacing manual or paper processes with an app',
      'Teams that need a working prototype before committing budget',
    ],
  },
  {
    id: 'ui-ux-design',
    index: '03',
    name: 'UI/UX Design',
    promise: 'Design that makes technology easier to use.',
    summary:
      'We design digital interfaces that balance visual appeal with clarity, usability and purpose.',
    overview: [
      'Interface design is mostly a sorting exercise. Deciding what matters on each screen, then arranging it so the answer is obvious without explanation. When that work is skipped, teams end up building features nobody can find.',
      'We map the flow before the visual, and give every screen a job. The result is a design system your developers can build against and your team can extend without redesigning from scratch.',
    ],
    offerings: [
      'Product and interface design',
      'User flows, wireframes and prototypes',
      'Design systems, tokens and component libraries',
      'Usability review of an existing product',
      'Design documentation for engineering teams',
    ],
    considerations: [
      'Existing brand and visual language',
      'The states nobody designs — empty, loading, error, success',
      'Accessibility, contrast and keyboard behaviour',
      'How the design system is maintained as the product grows',
    ],
    deliverables: [
      'Research summary and problem framing',
      'Flow diagrams and wireframes',
      'High-fidelity screen designs across breakpoints',
      'Reusable component library with usage notes',
      'Prototype for stakeholder review or testing',
    ],
    goodFor: [
      'Products that are functional but hard to use',
      'Teams scaling up who need one consistent system',
      'Founders who need a design language before building',
    ],
  },
  {
    id: 'website-templates',
    index: '04',
    name: 'Website Templates',
    promise: 'A stronger starting point for your next website.',
    summary:
      'We create thoughtfully designed website templates that help individuals, creators and businesses launch professional digital experiences with less friction.',
    overview: [
      'Not every project needs a custom build. A well-constructed template gives a small business or independent creator a credible presence now, with a structure that can be customised later instead of thrown away.',
      'Templates we produce are built the same way we build client work: real content structure, clean responsive behaviour, accessible markup and documentation that explains how to adapt it.',
    ],
    offerings: [
      'Business and corporate templates',
      'Portfolio and personal site templates',
      'Landing page and campaign templates',
      'Editable layouts with clear documentation',
      'Customisation support after purchase',
    ],
    considerations: [
      'Which platform you intend to run it on',
      'How much editing you want to do yourself',
      'Whether your content follows the template structure',
      'Long-term hosting and maintenance ownership',
    ],
    deliverables: [
      'Responsive template files',
      'Setup and customisation guide',
      'Typography and colour configuration',
      'Placeholder content you can replace',
      'Support during initial setup',
    ],
    goodFor: [
      'Individuals launching a first professional site',
      'Small businesses with a limited budget or timeline',
      'Creators who need a strong base to customise',
    ],
  },
  {
    id: 'ui-templates',
    index: '05',
    name: 'UI Templates',
    promise: 'Designed interfaces. Ready for your ideas.',
    summary:
      'We develop reusable interface designs and UI resources that help designers and developers move from concept to execution more efficiently.',
    overview: [
      'Interface kits are useful when they reduce genuine work: consistent spacing, sensible states, and components that behave the way a real product needs them to. Assembled properly, they remove the repetitive parts of building a product.',
      'Our UI resources are organised as systems — foundations, components, patterns — so they can be extended to match a specific product instead of forcing it into a fixed look.',
    ],
    offerings: [
      'Component libraries and UI kits',
      'Dashboard and application templates',
      'Form, table and data-display patterns',
      'Icon and asset sets that match the system',
      'Documentation for team use',
    ],
    considerations: [
      'The design tool your team works in',
      'How components will be implemented in code',
      'Naming conventions your team already uses',
      'How updates reach the people using the kit',
    ],
    deliverables: [
      'Structured component files',
      'Foundations: type scale, colour, spacing, elevation',
      'Interactive states and variants',
      'Usage documentation',
      'Version history as the kit evolves',
    ],
    goodFor: [
      'Design teams standardising their output',
      'Developers building an interface without a designer',
      'Products that need consistency across many screens',
    ],
  },
  {
    id: 'graphics-design',
    index: '06',
    name: 'Graphics Design',
    promise: 'Visuals that give your ideas a clear identity.',
    summary:
      'We create visual communication materials that help individuals and businesses present their ideas with clarity and consistency.',
    overview: [
      'Most graphic work is communication under constraint: a format, a message, an audience and usually a deadline. Good design makes the message land before anyone reads a word of it.',
      'We work from the message outward, and make sure whatever we produce is reusable — a set of rules rather than one-off files nobody can extend.',
    ],
    offerings: [
      'Marketing and campaign graphics',
      'Social media design systems',
      'Presentation and pitch materials',
      'Digital promotional assets',
      'Print items such as cards, flyers and posters',
    ],
    considerations: [
      'Where the work will appear and at what sizes',
      'Whether it needs to match an existing brand system',
      'Who will produce the next batch of assets',
      'Source files and future editability',
    ],
    deliverables: [
      'Design direction and layout system',
      'Final assets in the formats you need',
      'Templates for recurring artwork',
      'Organised source files',
      'Usage notes for your team',
    ],
    goodFor: [
      'Businesses producing content regularly',
      'Launch and campaign moments that need to look sharp',
      'Teams without in-house design capacity',
    ],
  },
  {
    id: 'branding',
    index: '07',
    name: 'Branding',
    promise: 'Build a brand people can recognise.',
    summary:
      'We help businesses develop visual identities that communicate who they are and how they want to be experienced.',
    overview: [
      'A brand is what people remember after they leave. The visual system — mark, type, colour, tone, layout — is how that memory is built consistently across every touchpoint.',
      'We define the system and document it, so the tenth piece of content your team makes looks like it belongs to the same company as the first.',
    ],
    offerings: [
      'Logo and mark development',
      'Visual identity systems',
      'Colour and typography systems',
      'Brand guidelines and usage rules',
      'Applied identity across digital and print',
    ],
    considerations: [
      'Positioning — what the business is actually for',
      'The market you need to stand apart from',
      'Where the identity is applied now and next',
      'Who inside the business applies it day to day',
    ],
    deliverables: [
      'Logo suite and file formats',
      'Colour, typography and layout foundations',
      'Brand guideline document',
      'Applied examples across key touchpoints',
      'Handover session with your team',
    ],
    goodFor: [
      'New businesses starting from nothing',
      'Established companies whose identity looks dated or inconsistent',
      'Organizations preparing to enter a new market',
    ],
  },
  {
    id: 'digital-solutions',
    index: '08',
    name: 'Digital Solutions',
    promise: 'Have a problem that needs a digital solution?',
    summary:
      'Some needs do not fit a predefined service. We work with clients to explore the problem and develop a practical solution suited to their goals and resources.',
    overview: [
      'Occasionally the brief is not a website, an app or a brand. It is a process that should be faster, a workflow held together with spreadsheets, or a question about whether technology can help at all.',
      'We start by understanding the problem properly — sometimes the right answer is a small tool, sometimes it is a change in process, and sometimes it is a build. We will tell you which, even when it is not the larger piece of work.',
    ],
    offerings: [
      'Discovery and problem definition',
      'Technical scoping and feasibility review',
      'Custom tools, automations and integrations',
      'Data and reporting setups',
      'Advice on sequencing work across a budget',
    ],
    considerations: [
      'What the problem actually costs you today',
      'Who uses the solution and how often',
      'Existing tools you already pay for',
      'What a realistic first version looks like',
    ],
    deliverables: [
      'Written problem summary and recommendation',
      'Proposed scope and approach',
      'Working solution or prototype',
      'Documentation and handover',
      'Recommended next steps',
    ],
    goodFor: [
      'Businesses with an internal process that keeps breaking',
      'Organizations unsure whether a problem needs software at all',
      'Teams that need a small, deliberate first step',
    ],
  },
];

export const servicesPage = {
  label: 'What we do',
  heading: 'We build the digital foundation for what comes next.',
  description:
    "Whether you're starting something new, improving an existing business or exploring your next digital product, we provide solutions that bring clarity, functionality and creativity to the process.",
  note: 'Every engagement starts with the same question: what is this actually for? The scope follows from there.',
};

export const getService = (id) => services.find((service) => service.id === id);
