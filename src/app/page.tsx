import FeaturedGrid from "@/components/FeaturedGrid";
import WhyLavish from "@/components/WhyLavish";
import IntroHero from "@/components/IntroHero";
import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import ResultsCarousel from "@/components/ResultsCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";

import {
  featuredConditions,
  featuredTreatments,
} from "@/data/featured";

export default function Home() {
  return (
    <>
      <HeroSlider/>
      <StatsBar/>
      <IntroHero/>
      {/* Featured Conditions */}
      <FeaturedGrid
        title="Conditions We Treat"
        items={featuredConditions}
      />

      {/* Featured Treatments */}
      <FeaturedGrid
        title="Signature Treatments"
        items={featuredTreatments}
      />
      <ResultsCarousel />
      <ReviewsSection />
      <WhyLavish />
      <LocationSection />
    </>
  );
}
