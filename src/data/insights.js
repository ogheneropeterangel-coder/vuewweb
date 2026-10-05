/**
 * VUEW — insights.
 *
 * The article list intentionally starts EMPTY. We do not publish invented
 * articles, so the page shows a designed empty state until real writing
 * exists. To add an article, copy the shape below into `insights`:
 *
 *   {
 *     slug: 'why-we-scope-before-we-build',
 *     category: 'Technology',            // must match one of `insightCategories`
 *     title: 'Why we scope before we build',
 *     excerpt: 'One or two sentences that summarise the piece.',
 *     date: '2026-03-04',                // ISO date, formatted for display
 *     readingTime: '5 min read',
 *     cover: '/images/insight-example.jpg',
 *     coverAlt: 'Describe the image for screen readers.',
 *     body: [
 *       'First paragraph.',
 *       'Second paragraph.',
 *     ],
 *   }
 */

export const insights = [
  {
    slug: 'the-future-of-modular-design',
    category: 'Design',
    title: 'The Future of Modular Design Systems',
    excerpt: 'How component-driven architecture is reshaping the way teams build digital products at scale.',
    date: '2026-01-15',
    readingTime: '6 min read',
    cover: '/images/insight-modular-design.jpg',
    coverAlt:
      'Repeating geometric modules on a modern architectural facade — a physical analogy for a modular design system',
    body: ['Modular design has become essential for teams building at scale. This article explores the architectural patterns behind successful design systems.'],
  },
  {
    slug: 'building-for-performance',
    category: 'Technology',
    title: 'Building for Performance at the Edge',
    excerpt: 'Strategies for delivering sub-second experiences across global networks without sacrificing richness.',
    date: '2025-12-03',
    readingTime: '8 min read',
    cover: '/images/insight-edge-performance.jpg',
    coverAlt:
      'Rows of server racks in a data centre — the distributed infrastructure edge performance depends on',
    body: ['Performance is no longer optional. Users abandon sites that take more than three seconds to load. We explore the techniques that make edge-first architectures viable.'],
  },
  {
    slug: 'designing-for-trust',
    category: 'Product Development',
    title: 'Designing for Trust in Digital Products',
    excerpt: 'The psychology behind interfaces that feel honest, reliable, and worth returning to.',
    date: '2025-10-21',
    readingTime: '5 min read',
    cover: '/images/insight-trust.jpg',
    coverAlt: 'A hand holding a smartphone with an app interface in soft focus in an office setting',
    body: ['Trust is the invisible currency of digital products. We examine how micro-interactions, transparency cues, and consistent patterns build user confidence.'],
  },
];

export const insightCategories = [
  'Technology',
  'Design',
  'Product Development',
  'Business',
  'Company Updates',
];

export const insightsPage = {
  label: 'Insights',
  heading: 'Ideas, perspectives and the work behind technology.',
  description:
    'Thoughts on digital products, design, technology and the process of building meaningful solutions.',
  emptyState: {
    title: 'The first pieces are being written.',
    body: 'We would rather publish four considered articles than forty rushed ones. When the first insights go live they will appear here, organised by the categories below.',
  },
  allLabel: 'All',
  emptyFilter: {
    title: 'Nothing published in this category yet.',
    body: 'Try another category, or read everything that has been published so far.',
  },
};

export const getInsight = (slug) => insights.find((article) => article.slug === slug);
