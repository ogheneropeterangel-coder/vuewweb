import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { approach } from '../../data/company';
import useElementProgress from '../../hooks/useElementProgress';
import Reveal from '../ui/Reveal';
import './Approach.css';

export default function Approach() {
  const prefersReducedMotion = useReducedMotion();
  const stepsRef = useRef(null);
  const progress = useElementProgress(stepsRef, { enabled: !prefersReducedMotion });

  return (
    <section className="section approach" id="approach" aria-labelledby="approach-title">
      <div className="section__inner approach__grid">
        <div className="approach__aside">
          <Reveal>
            <span className="eyebrow">{approach.label}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="approach-title" className="t-display-md section__title">
              {approach.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="t-body approach__intro">{approach.intro}</p>
          </Reveal>

          <div className="approach__rail" aria-hidden="true">
            <span
              className="approach__rail-fill"
              style={{ transform: `scaleY(${progress})` }}
            />
          </div>
        </div>

        <ol className="approach__steps" ref={stepsRef}>
          {approach.principles.map((principle) => (
            <Reveal as="li" key={principle.title} className="approach__step" amount={0.3}>
              <span className="approach__step-index">{principle.index}</span>
              <h3 className="t-display-sm approach__step-title">{principle.title}</h3>
              <p className="approach__step-subtitle">{principle.subtitle}</p>
              <p className="approach__step-copy">{principle.description}</p>
              <ul className="approach__detail">
                {principle.detail.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
