import { Link } from 'react-router-dom';
import { projects, workPage } from '../../data/work';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { ArrowRight } from '../ui/Icon';
import './SelectedWork.css';

export default function SelectedWork() {
  return (
    <section className="section work" aria-labelledby="work-title">
      <div className="section__inner">
        <div className="work__head">
          <SectionHeading
            id="work-title"
            label={workPage.label}
            title={workPage.heading}
            lede={workPage.description}
          />
          <Reveal delay={0.12}>
            <Button to="/projects" variant="ghost" size="sm" withArrow>
              All projects
            </Button>
          </Reveal>
        </div>

        <ul className="work__list">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.id} className="work__item" delay={0.04 * index}>
              <Link to={`/projects/${project.id}`} className="work__link">
                <Media
                  src={project.image}
                  alt={project.imageAlt}
                  aspect="wide"
                  className="work__media"
                />

                <div className="work__body">
                  <span className="work__meta">
                    <span className="work__index">{project.index}</span>
                    {project.discipline}
                  </span>

                  <h3 className="t-display-sm work__title">{project.title}</h3>
                  <p className="work__summary">{project.summary}</p>

                  <span className="work__status">
                    <span className="chip chip--accent">{project.status}</span>
                    <span className="link-arrow">
                      View case study
                      <ArrowRight size={15} />
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
