/**
 * VUEW — site-level configuration.
 *
 * Everything here is content, not presentation. Edit these values to
 * update the brand across the whole site.
 *
 * NOTE ON UNKNOWNS: values marked `TODO` are placeholders that must be
 * replaced with verified information before launch. Nothing in this file
 * claims results, clients, awards or scale that we cannot evidence.
 */

export const brand = {
  name: 'VUEW',
  statement: 'Build smarter, scale further.',
  tagline: 'Digital technology & creative solutions',
  description:
    'VUEW is a digital technology company focused on creating modern, functional and visually appealing digital solutions for individuals, startups, businesses and organizations.',
  /** Canonical origin used for Open Graph URLs. TODO: confirm the live domain. */
  url: 'https://vuew.com',
  logo: '/vuew-logo.png',
};

export const contactDetails = {
  /** TODO: confirm the address that should receive project inquiries. */
  email: 'hello@vuew.com',
  location: 'Nigeria',
  availability: 'Working with clients locally and remotely',
  responseNote:
    'We read every message ourselves. Expect a reply with next steps, or a clear answer if we are not the right fit.',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Insights', href: '/insights' },
];

export const primaryCta = { label: 'Start a project', href: '/contact' };

export const footerContent = {
  blurb:
    'VUEW combines technology, creativity and innovation to build digital products and solutions that hold up over time.',
  columnTitle: 'Company',
  serviceColumnTitle: 'Services',
  /**
   * Social profiles are intentionally absent until real accounts exist.
   * Add entries here (label + verified https URL) and the footer will
   * render them automatically.
   */
  social: [],
  legalLinks: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export const seo = {
  home: {
    title: 'VUEW — Build smarter, scale further.',
    description:
      'VUEW is a digital technology company building websites, mobile applications, interfaces, brands and digital templates for individuals, startups and organizations.',
  },
  about: {
    title: 'About VUEW — Technology, creativity and a long-term vision',
    description:
      'Learn how VUEW works, what we believe about building digital products, and where the company is heading next.',
  },
  services: {
    title: 'Services — VUEW',
    description:
      'Website development, mobile app development, UI/UX design, templates, graphics design, branding and custom digital solutions.',
  },
  projects: {
    title: 'Projects — VUEW',
    description:
      'Selected projects and digital experiences from VUEW. Case studies are published as work is released.',
  },
  insights: {
    title: 'Insights — VUEW',
    description:
      'Perspectives on digital products, design, technology and the process of building useful software.',
  },
  contact: {
    title: 'Contact VUEW — Start a project',
    description:
      'Tell VUEW about your project, business idea or digital challenge and we will respond with clear next steps.',
  },
  notFound: {
    title: 'Page not found — VUEW',
    description: 'The page you were looking for does not exist.',
  },
};
