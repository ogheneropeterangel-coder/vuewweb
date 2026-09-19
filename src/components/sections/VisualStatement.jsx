import { brandStatement } from '../../data/company';
import { brand } from '../../data/site';
import Reveal from '../ui/Reveal';
import './VisualStatement.css';

export default function VisualStatement() {
  return (
    <section className="statement" aria-labelledby="statement-title">
      <div className="statement__lines" aria-hidden="true" />

      <div className="statement__inner container">
        <Reveal>
          <span className="eyebrow">{brandStatement.label}</span>
        </Reveal>

        <Reveal delay={0.08}>
          <p id="statement-title" className="statement__text">
            <span className="statement__word">Build smarter.</span>
            <span className="statement__word accent">Scale further.</span>
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="statement__body">{brandStatement.body}</p>
        </Reveal>

        <Reveal delay={0.22}>
          <span className="statement__signature">{brand.name}</span>
        </Reveal>
      </div>
    </section>
  );
}
