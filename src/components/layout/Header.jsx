import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { brand, navigation, primaryCta } from '../../data/site';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import Button from '../ui/Button';
import { ArrowRight, Close, Menu } from '../ui/Icon';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  /**
   * The menu is open *for a route*. Storing the path rather than a boolean
   * means any navigation — including a link the user follows from inside the
   * menu, or the browser back button — closes it without an effect that
   * fights the render it was triggered by.
   */
  const [menuPath, setMenuPath] = useState(null);
  const menuOpen = menuPath === location.pathname;
  const openMenu = () => setMenuPath(location.pathname);
  const closeMenu = () => setMenuPath(null);

  const toggleRef = useRef(null);
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  /* ---- Subtle state change once the page moves ---------------------- */
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 16);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* ---- Close when the viewport grows to desktop --------------------- */
  useEffect(() => {
    const query = window.matchMedia('(min-width: 900px)');
    const onChange = (event) => {
      if (event.matches) setMenuPath(null);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  /* ---- Keyboard behaviour: Escape + focus trap ---------------------- */
  useEffect(() => {
    if (!menuOpen) return undefined;

    const panel = panelRef.current;
    /* Captured now so the cleanup focuses the button that still exists. */
    const toggle = toggleRef.current;
    const focusables = () =>
      Array.from(
        panel.querySelectorAll('a[href], button:not([disabled])'),
      ).filter((element) => element.offsetParent !== null);

    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuPath(null);
        return;
      }

      if (event.key !== 'Tab') return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      toggle?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  /* ---- Prevent interaction with the page behind the menu ------------ */
  useLockBodyScroll(menuOpen);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
        <div className="site-nav__inner">
          <Link to="/" className="site-nav__logo" aria-label={`${brand.name} — home`}>
            <img src={brand.logo} alt="" width="28" height="28" />
            <span>{brand.name}</span>
          </Link>

          <nav className="site-nav__links" aria-label="Primary">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-nav__actions">
            <Button to={primaryCta.href} size="sm" withArrow className="site-nav__cta">
              {primaryCta.label}
            </Button>

            <button
              ref={toggleRef}
              type="button"
              className="site-nav__toggle"
              onClick={openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu__bar">
              <span className="menu__brand">{brand.name}</span>
              <button
                ref={closeRef}
                type="button"
                className="menu__close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <Close size={20} />
              </button>
            </div>

            <nav className="menu__nav" aria-label="Mobile">
              <ul>
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.34,
                      delay: prefersReducedMotion ? 0 : 0.04 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                      onClick={closeMenu}
                    >
                      <span className="menu__index">{String(index + 1).padStart(2, '0')}</span>
                      <span>{item.label}</span>
                      <ArrowRight size={18} />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="menu__footer">
              <Button
                to={primaryCta.href}
                block
                withArrow
                onClick={closeMenu}
              >
                {primaryCta.label}
              </Button>
              <p className="menu__note">{brand.statement}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
