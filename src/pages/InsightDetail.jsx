import { useParams } from 'react-router-dom';
import { getInsight, insightsPage } from '../data/insights';
import { seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import ContactCTA from '../components/sections/ContactCTA';
import Button from '../components/ui/Button';
import Media from '../components/ui/Media';
import Reveal from '../components/ui/Reveal';
import NotFound from './NotFound';
import './Insights.css';

const formatDate = (value) =>
  new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export default function InsightDetail() {
  const { slug } = useParams();
  const article = getInsight(slug);

  useDocumentMeta({
    title: article ? `${article.title} — VUEW` : seo.insights.title,
    description: article ? article.excerpt : seo.insights.description,
    path: `/insights/${slug}`,
  });

  if (!article) {
    return (
      <NotFound
        title="That article is not published."
        body="The piece you were looking for either does not exist yet or has moved. Everything we have published is listed on the insights page."
      />
    );
  }

  return (
    <>
      <article className="section article">
        <div className="section__inner container--narrow">
          <Reveal>
            <span className="eyebrow">{article.category}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="t-display-md article__title">{article.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="article__meta">
              <span>{formatDate(article.date)}</span>
              <span className="meta-row__sep" aria-hidden="true" />
              <span>{article.readingTime}</span>
            </p>
          </Reveal>

          {article.cover && (
            <Reveal delay={0.14}>
              <Media
                src={article.cover}
                alt={article.coverAlt}
                aspect="wide"
                priority
                className="article__hero"
              />
            </Reveal>
          )}

          <div className="prose article__body">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="article__meta">
            <Button to="/insights" variant="ghost" withArrow={false}>
              Back to {insightsPage.label}
            </Button>
          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  );
}
