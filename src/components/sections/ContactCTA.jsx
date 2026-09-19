import { contactCta } from '../../data/company';
import { contactDetails } from '../../data/site';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { Mail } from '../ui/Icon';
import './ContactCTA.css';

export default function ContactCTA() {
  return (
    <section className="section cta-panel" aria-labelledby="cta-title">
      <div className="section__inner">
        <div className="cta-panel__inner">
          <Reveal>
            <span className="eyebrow">{contactCta.label}</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 id="cta-title" className="t-display-lg cta-panel__title">
              {contactCta.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="cta-panel__body">{contactCta.body}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="cta-panel__actions">
              <Button to={contactCta.cta.href} size="lg" withArrow>
                {contactCta.cta.label}
              </Button>
              <Button href={`mailto:${contactDetails.email}`} variant="ghost" size="lg">
                <span className="cta-panel__mail">
                  <Mail size={15} />
                  {contactDetails.email}
                </span>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="cta-panel__note">
              {contactDetails.availability} · {contactDetails.responseNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
