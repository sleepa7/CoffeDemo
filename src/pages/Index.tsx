import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const StorySection = lazy(() => import("@/components/StorySection"));
const DetailsSection = lazy(() => import("@/components/DetailsSection"));
const MenuSection = lazy(() => import("@/components/MenuSection"));
const SpaceSection = lazy(() => import("@/components/SpaceSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CtaBanner = lazy(() => import("@/components/CtaBanner"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <StorySection />
        <DetailsSection />
        <MenuSection />
        <SpaceSection />
        <TestimonialsSection />
        <CtaBanner />
        <FooterSection />
      </Suspense>
    </main>
  );
};

export default Index;
