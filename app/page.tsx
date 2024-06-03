import { CarouselPrints } from 'components/carouselPrints';
import { HomepageShirts } from 'components/grid/homepageShirts';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'Okay XL - Season 1: Fake Anime Shows Your Friends Have Never Heard Of',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <HomepageShirts />
      <Suspense>
        <CarouselPrints />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
