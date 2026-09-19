import { Link } from 'react-router-dom';
import { brand, contactDetails, footerContent, navigation, primaryCta } from '../../data/site';
import { services } from '../../data/services';
import Button from '../ui/Button';
import { ArrowUpRight, Mail } from '../ui/Icon';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const featuredServices = services.slice(0, 6);

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <p className="site-footer__statement">{brand.statement}</p>
          <div className="site-footer__top-aside">
            <p className="site-footer__blurb">{footerContent.blurb}</p>
            <Button to={primaryCta.href} variant="ghost" size="sm" withArrow>
              {primaryCta.label}
            </Button>
          </div>
        </div>

        <div className="site-footer__columns">
          <div className="site-footer__column">
            <h2 className="site-footer__heading">{footerContent.columnTitle}</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__heading">{footerContent.serviceColumnTitle}</h2>
            <ul>
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`}>{service.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/services">All services</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__heading">Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${contactDetails.email}`} className="site-footer__mail">
                  <Mail size={15} />
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <span className="site-footer__static">{contactDetails.location}</span>
              </li>
              <li>
                <Link to="/contact">Start a project</Link>
              </li>
            </ul>

            {footerContent.social.length > 0 && (
              <ul className="site-footer__social">
                {footerContent.social.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noreferrer noopener">
                      {item.label}
                      <ArrowUpRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <ul className="site-footer__legal">
            {footerContent.legalLinks.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <p className="site-footer__tagline">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
