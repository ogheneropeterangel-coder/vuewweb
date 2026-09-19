import { contactCta } from '../data/company';
import { contactDetails, seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import PageIntro from '../components/sections/PageIntro';
import ContactForm from '../components/sections/ContactForm';
import Reveal from '../components/ui/Reveal';
import { Mail } from '../components/ui/Icon';
import './Contact.css';

export default function Contact() {
  useDocumentMeta({
    title: seo.contact.title,
    description: seo.contact.description,
    path: '/contact',
  });

  return (
    <>
      <PageIntro
        label={contactCta.label}
        title={contactCta.heading}
        lede={contactCta.body}
        meta={[
          { term: 'Email', value: contactDetails.email },
          { term: 'Based in', value: contactDetails.location },
          { term: 'Availability', value: contactDetails.availability },
        ]}
      />

      <section className="section contact-page" aria-label="Contact form">
        <div className="section__inner contact-page__grid">
          <div className="contact-page__form">
            <Reveal>
              <h2 className="t-display-sm contact-page__form-title">Project inquiry</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <ContactForm />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="contact-page__aside">
            <div className="contact-page__block">
              <span className="eyebrow eyebrow--plain">Direct contact</span>
              <a href={`mailto:${contactDetails.email}`} className="contact-page__email">
                <Mail size={16} />
                {contactDetails.email}
              </a>
            </div>

            <div className="contact-page__block">
              <span className="eyebrow eyebrow--plain">What happens next</span>
              <ol className="contact-page__steps">
                <li>
                  <span>01</span> We read your message and look at what you already have.
                </li>
                <li>
                  <span>02</span> We reply with a few focused questions or a proposed direction.
                </li>
                <li>
                  <span>03</span> If it is a fit, we agree scope, timeline and budget in writing
                  before work starts.
                </li>
              </ol>
            </div>

            <div className="contact-page__block">
              <span className="eyebrow eyebrow--plain">Good to know</span>
              <p className="contact-page__note">{contactDetails.responseNote}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
