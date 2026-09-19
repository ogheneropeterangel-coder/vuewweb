import { productsDirection } from '../../data/company';
import Reveal from '../ui/Reveal';
import './ProductsDirection.css';

export default function ProductsDirection() {
  return (
    <section
      className="section theme-light products-direction"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="section__inner">
        <div className="products-direction__head">
          <Reveal>
            <span className="eyebrow eyebrow--accent">{productsDirection.label}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="products-title" className="t-display-lg products-direction__title">
              {productsDirection.heading}
            </h2>
          </Reveal>
        </div>

        <div className="products-direction__intro">
          {productsDirection.intro.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.08 + index * 0.06}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <ol className="products-direction__timeline">
          {productsDirection.stages.map((stage, index) => (
            <Reveal as="li" key={stage.stage} className="products-direction__stage" delay={0.05 * index}>
              <span className="products-direction__stage-label">{stage.stage}</span>
              <h3 className="products-direction__stage-title">{stage.title}</h3>
              <p className="products-direction__stage-copy">{stage.description}</p>
              <span className="products-direction__state">{stage.state}</span>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="products-direction__note">{productsDirection.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
