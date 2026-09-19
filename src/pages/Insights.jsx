import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  insightCategories,
  insights,
  insightsPage,
} from '../data/insights';
import { seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import PageIntro from '../components/sections/PageIntro';
import ContactCTA from '../components/sections/ContactCTA';
import EmptyState from '../components/ui/EmptyState';
import Media from '../components/ui/Media';
import Reveal from '../components/ui/Reveal';
import './Insights.css';

const formatDate = (value) =>
  new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState(null);

  useDocumentMeta({
    title: seo.insights.title,
    description: seo.insights.description,
    path: '/insights',
  });

  const filtered = useMemo(
    () => (activeCategory ? insights.filter((a) => a.category === activeCategory) : insights),
    [activeCategory],
  );

  return (
    <>
      <PageIntro
        label={insightsPage.label}
        title={insightsPage.heading}
        lede={insightsPage.description}
        meta={[
          { term: 'Topics', value: insightCategories.join(' · ') },
          { term: 'Published', value: `${insights.length} article${insights.length === 1 ? '' : 's'}` },
        ]}
      />

      <section className="section insights-page" aria-label="Articles">
        <div className="section__inner">
          <div className="insights-page__filters" role="group" aria-label="Filter by category">
            <button
              type="button"
              className={`insights-page__filter ${activeCategory === null ? 'is-active' : ''}`}
              aria-pressed={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            >
              {insightsPage.allLabel}
            </button>

            {insightCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`insights-page__filter ${activeCategory === category ? 'is-active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <ul className="insights-page__grid">
              {filtered.map((article, index) => (
                <Reveal as="li" key={article.slug} delay={0.04 * index}>
                  <Link to={`/insights/${article.slug}`} className="insights-page__card">
                    <Media src={article.cover} alt={article.coverAlt} aspect="wide" />
                    <span className="insights-page__category">{article.category}</span>
                    <h2 className="insights-page__title">{article.title}</h2>
                    <p className="insights-page__excerpt">{article.excerpt}</p>
                    <span className="insights-page__meta">
                      {formatDate(article.date)} · {article.readingTime}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          ) : activeCategory ? (
            <EmptyState
              title={insightsPage.emptyFilter.title}
              body={insightsPage.emptyFilter.body}
              className="insights-page__empty"
            >
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={() => setActiveCategory(null)}
              >
                <span>Show all topics</span>
              </button>
            </EmptyState>
          ) : (
            <div className="insights-page__empty-wrap">
              <EmptyState
                title={insightsPage.emptyState.title}
                body={insightsPage.emptyState.body}
              />

              <div className="insights-page__topics">
                <span className="eyebrow eyebrow--plain">Planned topics</span>
                <ul>
                  {insightCategories.map((category) => (
                    <li key={category} className="chip">
                      {category}
                    </li>
                  ))}
                </ul>
                <p className="insights-page__note">
                  Articles are stored in <code>src/data/insights.js</code>. Add an entry and it
                  appears here automatically, with its own page.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
