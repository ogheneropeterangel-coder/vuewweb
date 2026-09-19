import { Link } from 'react-router-dom';
import { projects, workPage } from '../data/work';
import { seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import PageIntro from '../components/sections/PageIntro';
import ContactCTA from '../components/sections/ContactCTA';
import Media from '../components/ui/Media';
import Reveal from '../components/ui/Reveal';
import { ArrowRight } from '../components/ui/Icon';
import './Projects.css';

export default function Projects() {
  useDocumentMeta({
    title: seo.projects.title,
    description: seo.projects.description,
    path: '/projects',
  });

  return (
    <>
      <PageIntro
        label={workPage.label}
        title={workPage.heading}
        lede={workPage.description}
        meta={[
          { term: 'Case study structure', value: 'Overview · Challenge · Approach · Solution · Outcome' },
          { term: 'Publishing rule', value: 'Only work the client has approved' },
        ]}
      />

      <section className="section projects-page" aria-label="Projects">
        <div className="section__inner">
          <Reveal>
            <p className="projects-page__notice">
              <span className="chip chip--placeholder">Placeholder content</span>
              {workPage.placeholderNotice}
            </p>
          </Reveal>

          <ul className="projects-page__list">
            {projects.map((project, index) => (
              <Reveal as="li" key={project.id} className="projects-page__item" delay={0.04 * index}>
                <Link to={`/projects/${project.id}`} className="projects-page__link">
                  <Media
                    src={project.image}
                    alt={project.imageAlt}
                    aspect="wide"
                    className="projects-page__media"
                  />

                  <div className="projects-page__body">
                    <span className="projects-page__meta">
                      <span className="projects-page__index">{project.index}</span>
                      {project.discipline}
                    </span>

                    <h2 className="t-display-sm projects-page__title">{project.title}</h2>
                    <p className="projects-page__summary">{project.summary}</p>

                    <dl className="projects-page__facts">
                      <div>
                        <dt>Status</dt>
                        <dd>{project.status}</dd>
                      </div>
                      <div>
                        <dt>Timeframe</dt>
                        <dd>{project.timeframe}</dd>
                      </div>
                      <div>
                        <dt>Technologies</dt>
                        <dd>To be confirmed</dd>
                      </div>
                    </dl>

                    <span className="link-arrow projects-page__link-arrow">
                      View case study
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
