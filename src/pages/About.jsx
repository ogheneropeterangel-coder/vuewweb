import { companyPage, mission, story, values, vision } from '../data/company';
import { seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import PageIntro from '../components/sections/PageIntro';
import Approach from '../components/sections/Approach';
import ContactCTA from '../components/sections/ContactCTA';
import VisualStatement from '../components/sections/VisualStatement';
import Media from '../components/ui/Media';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import './About.css';

export default function About() {
  useDocumentMeta({ title: seo.about.title, description: seo.about.description, path: '/about' });

  return (
    <>
      <PageIntro
        label={companyPage.label}
        title={companyPage.heading}
        lede={companyPage.intro[0]}
        meta={companyPage.facts}
      />

      <section className="section about-story" aria-labelledby="story-title">
        <div className="section__inner">
          <div className="about-story__grid">
            <div className="about-story__aside">
              <Reveal>
                <span className="eyebrow">{story.label}</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 id="story-title" className="t-display-md about-story__title">
                  {story.heading}
                </h2>
              </Reveal>
            </div>

            <div className="about-story__body">
              {story.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.04 * index}>
                  <p className="t-body-lg about-story__paragraph">{paragraph}</p>
                </Reveal>
              ))}

              <Reveal delay={0.16}>
                <Media
                  src={companyPage.cover}
                  alt={companyPage.coverAlt}
                  aspect="wide"
                  priority
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--raised about-purpose" aria-labelledby="purpose-title">
        <div className="section__inner">
          <Reveal>
            <span className="eyebrow">Direction</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="purpose-title" className="t-display-md section__title about-purpose__title">
              What we are working towards.
            </h2>
          </Reveal>

          <div className="about-purpose__grid">
            <Reveal className="about-purpose__panel">
              <span className="about-purpose__label">{mission.label}</span>
              <h3 className="t-heading">{mission.heading}</h3>
              <p>{mission.body}</p>
            </Reveal>

            <Reveal delay={0.08} className="about-purpose__panel">
              <span className="about-purpose__label">{vision.label}</span>
              <h3 className="t-heading">{vision.heading}</h3>
              <p>{vision.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-values" aria-labelledby="values-title">
        <div className="section__inner">
          <SectionHeading
            id="values-title"
            label="What guides our work"
            title="Five things we do not compromise on."
          />

          <ul className="about-values__list">
            {values.map((value, index) => (
              <Reveal as="li" key={value.name} className="about-values__item" delay={0.04 * index}>
                <span className="about-values__index">{value.index}</span>
                <h3 className="t-heading about-values__name">{value.name}</h3>
                <p className="about-values__copy">{value.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Approach />
      <VisualStatement />
      <ContactCTA />
    </>
  );
}
