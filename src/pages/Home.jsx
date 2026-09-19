import { seo } from '../data/site';
import useDocumentMeta from '../lib/useDocumentMeta';
import Hero from '../components/sections/Hero';
import BrandIntro from '../components/sections/BrandIntro';
import ServicesIndex from '../components/sections/ServicesIndex';
import ServicesShowcase from '../components/sections/ServicesShowcase';
import SelectedWork from '../components/sections/SelectedWork';
import Approach from '../components/sections/Approach';
import ProductsDirection from '../components/sections/ProductsDirection';
import VisualStatement from '../components/sections/VisualStatement';
import InsightsPreview from '../components/sections/InsightsPreview';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  useDocumentMeta({ title: seo.home.title, description: seo.home.description, path: '/' });

  return (
    <>
      <Hero />
      <BrandIntro />
      <ServicesIndex />
      <ServicesShowcase />
      <SelectedWork />
      <Approach />
      <ProductsDirection />
      <VisualStatement />
      <InsightsPreview />
      <ContactCTA />
    </>
  );
}
