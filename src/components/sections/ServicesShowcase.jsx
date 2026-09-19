import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import useMediaQuery from '../../hooks/useMediaQuery';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ArrowRight } from '../ui/Icon';
import './ServicesShowcase.css';

function ServiceDetail({ service }) {
  return (
    <div className="showcase__detail">
      <span className="showcase__promise">{service.promise}</span>
      <p className="showcase__summary">{service.summary}</p>

      <div className="showcase__offerings">
        <h4 className="showcase__offerings-title">What it usually includes</h4>
        <ul>
          {service.offerings.slice(0, 4).map((offering) => (
            <li key={offering}>{offering}</li>
          ))}
        </ul>
      </div>

      <Link to={`/services/${service.id}`} className="link-arrow showcase__link">
        Explore {service.name}
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

export default function ServicesShowcase() {
  const [activeId, setActiveId] = useState(services[0].id);
  const tabRefs = useRef([]);
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const activeService = services.find((service) => service.id === activeId) ?? services[0];

  /* Roving tabindex: arrows move between tabs, Home/End jump to the ends. */
  const onTabKeyDown = (event) => {
    const currentIndex = services.findIndex((service) => service.id === activeId);
    let nextIndex = null;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % services.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + services.length) % services.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = services.length - 1;
    }

    if (nextIndex === null) return;
    event.preventDefault();
    setActiveId(services[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="section showcase" aria-labelledby="showcase-title">
      <div className="section__inner">
        <SectionHeading
          id="showcase-title"
          label="Capabilities"
          title="Look closer at what we actually build."
          lede="Select a service to see the kind of work it covers, what it typically includes, and how we approach it."
          wide
        />

        {isDesktop ? (
          <div className="showcase__layout">
            <div
              className="showcase__tabs"
              role="tablist"
              aria-orientation="vertical"
              aria-label="Services"
            >
              {services.map((service, index) => {
                const selected = service.id === activeId;
                return (
                  <button
                    key={service.id}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    id={`tab-${service.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${service.id}`}
                    tabIndex={selected ? 0 : -1}
                    className={`showcase__tab ${selected ? 'is-active' : ''}`}
                    onClick={() => setActiveId(service.id)}
                    onKeyDown={onTabKeyDown}
                  >
                    <span className="showcase__tab-index">{service.index}</span>
                    <span className="showcase__tab-name">{service.name}</span>
                  </button>
                );
              })}
            </div>

            <div
              className="showcase__panel"
              role="tabpanel"
              id={`panel-${activeService.id}`}
              aria-labelledby={`tab-${activeService.id}`}
              tabIndex={0}
              key={activeService.id}
            >
              <ServiceDetail service={activeService} />
            </div>
          </div>
        ) : (
          <ul className="showcase__accordion">
            {services.map((service) => {
              const open = service.id === activeId;
              return (
                <li key={service.id}>
                  <h3>
                    <button
                      type="button"
                      className={`showcase__accordion-trigger ${open ? 'is-open' : ''}`}
                      aria-expanded={open}
                      aria-controls={`accordion-${service.id}`}
                      onClick={() => setActiveId(open ? null : service.id)}
                    >
                      <span className="showcase__tab-index">{service.index}</span>
                      <span>{service.name}</span>
                      <span className="showcase__accordion-sign" aria-hidden="true">
                        {open ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  {open && (
                    <div id={`accordion-${service.id}`} className="showcase__accordion-panel">
                      <ServiceDetail service={service} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        <Reveal>
          <div className="showcase__footer">
            <p className="showcase__footer-text">
              Not sure which of these fits? Describe the problem and we will tell you honestly
              what it needs.
            </p>
            <Button to="/contact" variant="ghost" withArrow>
              Talk it through
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
