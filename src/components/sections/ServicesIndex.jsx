import { Link } from 'react-router-dom';
import { services, servicesPage } from '../../data/services';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ArrowUpRight } from '../ui/Icon';
import './ServicesIndex.css';

export default function ServicesIndex() {
  return (
    <section className="section section--raised services-index" id="services">
      <div className="section__inner">
        <SectionHeading
          label={servicesPage.label}
          title={servicesPage.heading}
          lede={servicesPage.description}
          wide
        />

        <ul className="services-index__list">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={Math.min(index * 0.03, 0.12)}>
              <Link to={`/services/${service.id}`} className="services-index__row">
                <span className="services-index__number">{service.index}</span>
                <span className="services-index__name">{service.name}</span>
                <span className="services-index__promise">{service.promise}</span>
                <span className="services-index__icon" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="services-index__note">{servicesPage.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
