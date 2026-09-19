import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { brand, contactDetails } from '../../data/site';
import useTypewriter from '../../hooks/useTypewriter';
import Button from '../ui/Button';
import './Hero.css';

const EASE = [0.22, 1, 0.36, 1];

const capabilities = [
  'websites',
  'mobile apps',
  'digital interfaces',
  'brand systems',
  'website templates',
];

const capabilitiesSentence =
  'We design and build websites, mobile apps, digital interfaces, brand systems and website templates.';

const stages = [
  { index: '01', label: 'Understand' },
  { index: '02', label: 'Explore' },
  { index: '03', label: 'Build' },
  { index: '04', label: 'Refine' },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const typed = useTypewriter(capabilities, { enabled: !prefersReducedMotion });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backdropY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const copyFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.08]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -104]);
  const visualFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  const drift = (y, opacity) => (prefersReducedMotion ? undefined : { y, opacity });

  const enter = (delay, distance = 26) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  const lineReveal = (delay) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { y: '115%' },
          animate: { y: '0%' },
          transition: { duration: 1.1, delay, ease: EASE },
        };

  const railFill = (delay) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { scaleX: 0 },
          animate: { scaleX: 1 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <motion.div
        className="hero__backdrop"
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { y: backdropY }}
      >
        <span className="hero__glow" />
        <span className="hero__sweep" />
        <span className="hero__grid" />
        <span className="hero__horizon" />
        <span className="hero__vignette" />
        <span className="hero__orb" />
      </motion.div>

      <div className="hero__inner container">
        <motion.div className="hero__copy" style={drift(copyY, copyFade)}>
          <motion.p className="eyebrow hero__eyebrow" {...enter(0.05)}>
            {brand.tagline}
          </motion.p>

          <h1 id="hero-title" className="t-display-xl hero__title" style={{ fontFamily: 'Sora, sans-serif' }}>
            <span className="hero__mask">
              <motion.span className="hero__line hero__line--type" data-text="Build smarter.">
                Build smarter.
              </motion.span>
            </span>
            <span className="hero__mask">
              <motion.span className="hero__line hero__line--type" data-text="Scale further.">
                Scale further.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero__typer"
            aria-hidden={prefersReducedMotion ? undefined : true}
            {...enter(0.5)}
          >
            <span className="hero__typer-prefix">We design &amp; build</span>
            {prefersReducedMotion ? (
              <span className="hero__typer-static">{capabilities.join(' · ')}</span>
            ) : (
              <span className="hero__typer-value">
                <span className="hero__typer-word">{typed}</span>
                <span className="hero__caret" />
              </span>
            )}
          </motion.p>

          {!prefersReducedMotion && (
            <span className="visually-hidden">{capabilitiesSentence}</span>
          )}

          <motion.p className="hero__lead" {...enter(0.58)}>
            We combine technology, creativity and thoughtful design to build digital solutions
            that help ideas take shape and businesses move forward.
          </motion.p>

          <motion.div className="hero__actions" {...enter(0.66)}>
            <Button to="/contact" size="lg" withArrow>
              Start a project
            </Button>
            <Button to="/projects" variant="ghost" size="lg">
              Explore our work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          aria-hidden="true"
          style={drift(visualY, visualFade)}
        >
          <motion.div className="hero__panel" {...enter(0.44, 34)}>
            <div className="hero__panel-head">
              <span className="status-dot" />
              <span>How we work</span>
              <span className="hero__panel-code">VUEW / 01</span>
            </div>

            <ul className="hero__stages">
              {stages.map((stage, index) => (
                <li key={stage.index}>
                  <span className="hero__stage-index">{stage.index}</span>
                  <span className="hero__stage-label">{stage.label}</span>
                  <span className="hero__stage-rail">
                    <motion.span
                      className="hero__stage-rail-fill"
                      {...railFill(0.72 + index * 0.08)}
                    />
                  </span>
                </li>
              ))}
            </ul>

            <div className="hero__panel-foot">
              <span>Services today</span>
              <span className="hero__panel-arrow" />
              <span>Products next</span>
            </div>
          </motion.div>

          <motion.div className="hero__tag hero__tag--top" {...enter(0.82)}>
            <span className="hero__tag-label">Discipline</span>
            <span>Design &amp; engineering</span>
          </motion.div>

          <motion.div className="hero__tag hero__tag--bottom" {...enter(0.9)}>
            <span className="hero__tag-label">Based in</span>
            <span>{contactDetails.location}</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="hero__foot container" {...enter(1)}>
        <span className="hero__foot-item">{brand.statement}</span>
        <span className="hero__foot-rule" aria-hidden="true" />
        <span className="hero__cue" aria-hidden="true">
          <span className="hero__cue-label">Scroll</span>
          <span className="hero__cue-rail">
            <span className="hero__cue-dot" />
          </span>
        </span>
      </motion.div>
    </section>
  );
}
