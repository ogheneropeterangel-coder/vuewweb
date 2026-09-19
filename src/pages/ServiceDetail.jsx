import { Link, useParams } from 'react-router-dom';
import { getService, services } from '../data/services';
import { seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import PageIntro from '../components/sections/PageIntro';
import ContactCTA from '../components/sections/ContactCTA';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import NotFound from './NotFound';
import { ArrowRight } from '../components/ui/Icon';
import './Services.css';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = getService(id);

  useDocumentMeta({
    title: service ? `${service.name} — VUEW` : seo.services.title,
    description: service ? service.summary : seo.services.description,
    path: `/services/${id}`,
  });

  if (!service) {
    return <NotFound />;
  }

  const related = services.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <>
      <PageIntro
        label={`${service.index} — Service`}
        title={service.promise}
        lede={service.summary}
        meta={[
          { term: 'Discipline', value: service.name },
          { term: 'Well suited to', value: service.goodFor[0] },
        ]}
      >
        <Button to="/contact" size="lg" withArrow>
          Start a project
        </Button>
        <Button to="/services" variant="ghost" size="lg">
          All services
        </Button>
      </PageIntro>

      <section className="section" aria-labelledby="service-overview">
        <div className="section__inner service-detail__grid">
          <div className="service-detail__prose">
            <Reveal>
              <span className="eyebrow">Overview</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="service-overview" className="t-display-sm">
                {service.name}
              </h2>
            </Reveal>
            {service.overview.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.08 + index * 0.04}>
                <p className="t-body-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="service-detail__panel">
            <div>
              <h3>What we offer</h3>
              <ul>
                {service.offerings.map((offering) => (
                  <li key={offering}>{offering}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>What you receive</h3>
              <ul>
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--raised" aria-labelledby="service-considerations">
        <div className="section__inner">
          <SectionHeading
            id="service-considerations"
            label="Before we start"
            title="Things worth deciding early."
            lede="Projects move faster when these questions have answers. If they do not yet, that is usually the first thing we work through together."
          />

          <ul className="service-detail__list">
            {service.considerations.map((consideration, index) => (
              <Reveal as="li" key={consideration} className="service-detail__list-item">
                <span className="service-detail__list-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="service-detail__list-text">{consideration}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="service-detail__section">
              <span className="eyebrow">Who this suits</span>
              <ul className="service-detail__chips">
                {service.goodFor.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="service-related">
        <div className="section__inner">
          <SectionHeading
            id="service-related"
            label="Related"
            title="Other ways we can help."
            size="sm"
          />

          <ul className="service-detail__related-list">
            {related.map((item) => (
              <li key={item.id}>
                <Link to={`/services/${item.id}`} className="service-detail__related-link">
                  <span>
                    {item.index} — {item.name}
                  </span>
                  <ArrowRight size={15} />
                </Link>
              </li>
            ))}
          </ul>

          <Reveal>
            <div className="service-detail__section">
              <span className="eyebrow">Selected work</span>
              <p className="service-detail__note">
                Case studies are published once the client has approved them. Our projects page
                shows the structure each one will follow.
              </p>
              <Button to="/projects" variant="ghost" withArrow className="service-detail__action">
                View projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
