import { Metadata } from 'next';
import CoursesLandingPage from './page-client';

export const metadata: Metadata = {
  title: 'Academia Webunica | Cursos y Talleres de Shopify y E-commerce 2026',
  description: 'Lidera el mercado con formación de élite. Cursos de Shopify, Dropshipping, IA aplicada y SEO para tiendas online en Chile.',
  alternates: {
    canonical: 'https://cursos.webunica.cl',
  },
  openGraph: {
    title: 'Academia Webunica | Cursos y Talleres Pro',
    description: 'Formación de élite en Shopify, IA y Dropshipping para escalar tu negocio.',
    url: 'https://cursos.webunica.cl',
    siteName: 'Webunica Academia',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function Page() {
  return <CoursesLandingPage />;
}
