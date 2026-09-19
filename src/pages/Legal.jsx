import { brand, contactDetails } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import PageIntro from '../components/sections/PageIntro';
import Reveal from '../components/ui/Reveal';
import './Legal.css';

/**
 * Plain-language legal pages.
 *
 * These describe how the site actually behaves today (no server, no
 * analytics, no accounts). They are a starting point and should be
 * reviewed before launch — see the notice rendered on the page.
 */

const content = {
  privacy: {
    label: 'Legal',
    title: 'Privacy',
    lede: `How ${brand.name} handles the small amount of information this website comes into contact with.`,
    updated: 'Last reviewed: September 2026',
    sections: [
      {
        heading: 'What this website collects',
        paragraphs: [
          'This website has no server-side application and no database. There are no user accounts, no newsletter sign-up and no analytics or advertising cookies.',
          'The contact form composes an email in your own mail client. Your name, email address, company, selected service, budget range and project description are sent to us by you, through your own email provider. Nothing is stored by this website.',
        ],
      },
      {
        heading: 'Third-party requests',
        paragraphs: [
          'Typefaces are loaded from Google Fonts. When that file is requested, Google receives your IP address and basic request information. If you prefer to avoid this, your browser settings or a local font override can block it.',
          'If we later add analytics or a form backend, this page will be updated before that change goes live.',
        ],
      },
      {
        heading: 'How we use what you send',
        paragraphs: [
          'We use the information in your email only to reply to your enquiry and to prepare a proposal. We do not sell, rent or share it with third parties for marketing.',
          'Emails are retained in our inbox so we can follow up on conversations. You can ask us to delete your messages at any time.',
        ],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          `To ask a question about your data, or to request deletion, email ${contactDetails.email} and we will respond directly.`,
        ],
      },
    ],
  },
  terms: {
    label: 'Legal',
    title: 'Terms of use',
    lede: `The terms that apply to using the ${brand.name} website.`,
    updated: 'Last reviewed: September 2026',
    sections: [
      {
        heading: 'Using this website',
        paragraphs: [
          'You are welcome to read, reference and share the content on this site. Please do not present it as your own work, or use our name, marks or designs in a way that suggests a partnership that does not exist.',
        ],
      },
      {
        heading: 'Content and accuracy',
        paragraphs: [
          'We describe our services in good faith and keep the wording as accurate as we can. Nothing on this site is a quotation, a guarantee of a particular result, or a promise of availability for a specific project.',
          'Any pricing ranges shown are indicative and are confirmed in writing for each project.',
        ],
      },
      {
        heading: 'Project work',
        paragraphs: [
          'Client engagements are governed by a separate written agreement or proposal covering scope, deliverables, timeline, payment terms and ownership of the finished work. Nothing on this website replaces that agreement.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          `Questions about these terms can be sent to ${contactDetails.email}.`,
        ],
      },
    ],
  },
};

export default function Legal({ kind = 'privacy' }) {
  const page = content[kind] ?? content.privacy;

  useDocumentMeta({
    title: `${page.title} — ${brand.name}`,
    description: page.lede,
    path: `/${kind}`,
  });

  return (
    <>
      <PageIntro label={page.label} title={page.title} lede={page.lede} />

      <section className="section legal">
        <div className="section__inner container--narrow">
          <Reveal>
            <p className="legal__notice">
              <span className="chip chip--placeholder">Review before launch</span>
              This page describes the website as it works today. Have it reviewed for your
              jurisdiction before launch.
            </p>
          </Reveal>

          <div className="prose legal__body">
            <p className="legal__updated">{page.updated}</p>

            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
