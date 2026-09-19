import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageTransition from './components/ui/PageTransition';
import ScrollProgress from './components/ui/ScrollProgress';
import { PageSkeleton } from './components/ui/Skeleton';
import Home from './pages/Home';

/**
 * Routes are code-split so the first paint only carries what it needs.
 * Each split route shows a skeleton that mirrors its real content rather
 * than a generic spinner, and nothing is delayed on purpose.
 */
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback({ variant = 'cards' }) {
  return (
    <div className="section" aria-busy="true">
      <div className="section__inner">
        <span className="visually-hidden" role="status">
          Loading content
        </span>
        <PageSkeleton variant={variant} />
      </div>
    </div>
  );
}

function Load({ children, variant = 'cards' }) {
  return <Suspense fallback={<RouteFallback variant={variant} />}>{children}</Suspense>;
}

/** Every navigation starts at the top of the new page. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Header />

      <PageTransition>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <Load variant="text">
                  <About />
                </Load>
              }
            />
            <Route
              path="/services"
              element={
                <Load>
                  <Services />
                </Load>
              }
            />
            <Route
              path="/services/:id"
              element={
                <Load variant="detail">
                  <ServiceDetail />
                </Load>
              }
            />
            <Route
              path="/projects"
              element={
                <Load>
                  <Projects />
                </Load>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <Load variant="detail">
                  <ProjectDetail />
                </Load>
              }
            />
            <Route
              path="/insights"
              element={
                <Load>
                  <Insights />
                </Load>
              }
            />
            <Route
              path="/insights/:slug"
              element={
                <Load variant="detail">
                  <InsightDetail />
                </Load>
              }
            />
            <Route
              path="/contact"
              element={
                <Load variant="detail">
                  <Contact />
                </Load>
              }
            />
            <Route
              path="/privacy"
              element={
                <Load variant="text">
                  <Legal kind="privacy" />
                </Load>
              }
            />
            <Route
              path="/terms"
              element={
                <Load variant="text">
                  <Legal kind="terms" />
                </Load>
              }
            />
            <Route
              path="*"
              element={
                <Load variant="text">
                  <NotFound />
                </Load>
              }
            />
          </Routes>
        </main>
      </PageTransition>

      <Footer />
    </BrowserRouter>
  );
}
