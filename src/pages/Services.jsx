import { Link } from 'react-router-dom';
import { services, servicesPage } from '../data/services';
import { seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import PageIntro from '../components/sections/PageIntro';
import Approach from '../components/sections/Approach';
import ContactCTA from '../components/sections/ContactCTA';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { ArrowRight } from '../components/ui/Icon';
import './Services.css';

export default function Services() {
  useDocumentMeta({
    title: seo.services.title,
    description: seo.services.description,
    path: '/services',
  });

  return (
    <>
      <PageIntro
        label={servicesPage.label}
        title={servicesPage.heading}
        lede={servicesPage.description}
        meta={[
          { term: 'Engagements', value: 'Fixed scope or ongoing partnership' },
          { term: 'Starting point', value: 'A conversation about the problem' },
        ]}
      >
        <Button to="/contact" size="lg" withArrow>
          Start a project
        </Button>
        <Button to="/projects" variant="ghost" size="lg">
          See our work
        </Button>
      </PageIntro>

      <section className="section services-page" aria-label="All services">
        <div className="section__inner">
          <ul className="services-page__list">
            {services.map((service, index) => (
              <Reveal as="li" key={service.id} className="services-page__item" delay={Math.min(index * 0.03, 0.12)}>
                <div className="services-page__marker">
                  <span className="services-page__index">{service.index}</span>
                  <span className="services-page__line" aria-hidden="true" />
                </div>

                <div className="services-page__intro">
                  <h2 className="t-display-sm services-page__name">
                    <Link to={`/services/${service.id}`}>{service.name}</Link>
                  </h2>
                  <p className="services-page__promise">{service.promise}</p>
                </div>

                <div className="services-page__detail">
                  <p className="services-page__summary">{service.summary}</p>

                  <ul className="services-page__chips">
                    {service.offerings.slice(0, 3).map((offering) => (
                      <li key={offering} className="chip">
                        {offering}
                      </li>
                    ))}
                  </ul>

                  <Link to={`/services/${service.id}`} className="link-arrow services-page__link">
                    Explore {service.name}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <p className="services-page__note">{servicesPage.note}</p>
          </Reveal>
        </div>
      </section>

      <Approach />
      <ContactCTA />
    </>
  );
}
