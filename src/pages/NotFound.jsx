import { seo } from '../data/site';
import { services } from '../data/services';
import useDocumentMeta from '../lib/useDocumentMeta';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound({
  title = 'This page does not exist.',
  body = 'The link may be out of date, or the page may have moved. Here are a few places that definitely exist.',
}) {
  useDocumentMeta({ title: seo.notFound.title, description: seo.notFound.description });

  return (
    <section className="section not-found" aria-labelledby="not-found-title">
      <div className="section__inner not-found__inner">
        <Reveal>
          <span className="eyebrow">404</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 id="not-found-title" className="t-display-lg not-found__title">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede not-found__body">{body}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="not-found__actions">
            <Button to="/" withArrow>
              Back to home
            </Button>
            <Button to="/contact" variant="ghost">
              Start a project
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="not-found__links">
            <span className="eyebrow eyebrow--plain">Popular pages</span>
            <ul>
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`}>{service.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
