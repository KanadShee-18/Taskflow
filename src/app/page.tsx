import { CtaSection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/featured-section";
import { Footer } from "@/components/landing/footer-section";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/landing-nav";
import { RolesSection } from "@/components/landing/roles-section";
import { WorkflowSection } from "@/components/landing/workflow-section";

const page = () => {
  return (
    <div className="font-manrope bg-red-600 selection:bg-cyan-400/30 relative w-screen overflow-x-hidden">
      <div className="absolute inset-0 w-screen z-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <Navbar />
      <HeroSection />
      <div className="max-w-[1408px] mx-auto">
        <FeaturesSection />
        <WorkflowSection />
        <RolesSection />
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
};
export default page;
