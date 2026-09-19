import { Link } from 'react-router-dom';
import { insightCategories, insights, insightsPage } from '../../data/insights';
import EmptyState from '../ui/EmptyState';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { ArrowRight } from '../ui/Icon';
import './InsightsPreview.css';

export default function InsightsPreview() {
  const latest = insights.slice(0, 3);

  return (
    <section className="section insights-preview" aria-labelledby="insights-title">
      <div className="section__inner">
        <div className="insights-preview__head">
          <SectionHeading
            id="insights-title"
            label={insightsPage.label}
            title={insightsPage.heading}
            lede={insightsPage.description}
          />
          <Reveal delay={0.1}>
            <Link to="/insights" className="link-arrow">
              All insights
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        {latest.length > 0 ? (
          <ul className="insights-preview__grid">
            {latest.map((article, index) => (
              <Reveal as="li" key={article.slug} delay={0.05 * index}>
                <Link to={`/insights/${article.slug}`} className="insights-preview__card">
                  <Media src={article.cover} alt={article.coverAlt} aspect="wide" />
                  <span className="insights-preview__category">{article.category}</span>
                  <h3 className="insights-preview__title">{article.title}</h3>
                  <p className="insights-preview__excerpt">{article.excerpt}</p>
                  <span className="insights-preview__meta">{article.readingTime}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        ) : (
          <div className="insights-preview__empty">
            <Reveal>
              <EmptyState
                title={insightsPage.emptyState.title}
                body={insightsPage.emptyState.body}
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="insights-preview__categories">
                <span className="eyebrow eyebrow--plain">Planned topics</span>
                <ul>
                  {insightCategories.map((category) => (
                    <li key={category} className="chip">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
