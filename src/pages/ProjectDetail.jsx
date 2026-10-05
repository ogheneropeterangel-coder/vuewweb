import { useParams } from 'react-router-dom';
import { getProject, workPage } from '../data/work';
import { seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import PageIntro from '../components/sections/PageIntro';
import ContactCTA from '../components/sections/ContactCTA';
import Button from '../components/ui/Button';
import Media from '../components/ui/Media';
import Reveal from '../components/ui/Reveal';
import NotFound from './NotFound';
import './Projects.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);

  useDocumentMeta({
    title: project ? `${project.title} — VUEW` : seo.projects.title,
    description: project ? project.summary : seo.projects.description,
    path: `/projects/${id}`,
  });

  if (!project) {
    return <NotFound />;
  }

  const sections = [
    { title: 'Overview', body: project.overview },
    { title: 'Challenge', body: project.challenge },
    { title: 'Approach', body: project.approach },
    { title: 'Solution', body: project.solution },
    { title: 'Outcome', body: project.outcome },
  ];

  return (
    <>
      <PageIntro
        label={`${project.index} — ${project.discipline}`}
        title={project.title}
        lede={project.summary}
        meta={[
          { term: 'Status', value: project.status },
          { term: 'Publication', value: project.isPlaceholder ? 'Placeholder — not a published case study' : 'Published' },
        ]}
      >
        <Button to="/contact" withArrow>
          Discuss your project
        </Button>
        <Button to="/projects" variant="ghost">
          All projects
        </Button>
      </PageIntro>

      <section className="section" aria-label="Case study">
        <div className="section__inner">
          {project.isPlaceholder && (
            <Reveal>
              <p className="projects-page__notice">
                <span className="chip chip--placeholder">Placeholder content</span>
                This page shows the structure a real case study will follow. The paragraphs below
                are placeholders, not project outcomes. Replace them in
                <code> src/data/work.js</code> when the work is approved for publication.
              </p>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <Media
              src={project.image}
              alt={project.imageAlt}
              aspect="wide"
              priority
              className="project-detail__hero"
            />
          </Reveal>

          <div className="project-detail__sections">
            {sections.map((section) => (
              <Reveal key={section.title} className="project-detail__section">
                <h2>{section.title}</h2>
                <p className={project.isPlaceholder ? 'project-detail__placeholder' : undefined}>
                  {section.body}
                </p>
              </Reveal>
            ))}

            <Reveal className="project-detail__section">
              <h2>Technologies</h2>
              <p className="project-detail__placeholder">
                {project.technologies.length > 0
                  ? project.technologies.join(' · ')
                  : 'Technologies used will be listed here once confirmed.'}
              </p>
            </Reveal>
          </div>

<Reveal>
            <div className="project-detail__gallery">
              <Media
                src={project.image}
                alt={project.imageAlt}
                aspect="photo"
                priority
              />
              {(project.gallery ?? []).map((item) => (
                <Media key={item.src} src={item.src} alt={item.alt} aspect="photo" />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="project-detail__meta">
              <div>
                <dt>Discipline</dt>
                <dd>{project.discipline}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{project.status}</dd>
              </div>
              <div>
                <dt>Timeframe</dt>
                <dd>{project.timeframe}</dd>
              </div>
              <div>
                <dt>Publishing rule</dt>
                <dd>{workPage.placeholderNotice}</dd>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
