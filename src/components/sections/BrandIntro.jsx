import { companyPage, homeIntro } from '../../data/company';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import { ArrowRight } from '../ui/Icon';
import { Link } from 'react-router-dom';
import './BrandIntro.css';

export default function BrandIntro() {
  return (
    <section className="section brand-intro" id="about" aria-labelledby="brand-intro-title">
      <div className="section__inner brand-intro__grid">
        <div className="brand-intro__copy">
          <Reveal>
            <span className="eyebrow">{homeIntro.label}</span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 id="brand-intro-title" className="t-display-md section__title">
              Technology built around ideas that matter.
            </h2>
          </Reveal>

          {homeIntro.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.06}>
              <p className="t-body-lg brand-intro__paragraph">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <Link to={homeIntro.cta.href} className="link-arrow brand-intro__cta">
              {homeIntro.cta.label}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="brand-intro__aside">
          <Reveal delay={0.1}>
            <Media
              src={companyPage.cover}
              alt={companyPage.coverAlt}
              aspect="photo"
              priority
            />
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="brand-intro__facts">
              {companyPage.facts.map((fact) => (
                <div key={fact.term} className="brand-intro__fact">
                  <dt>{fact.term}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
