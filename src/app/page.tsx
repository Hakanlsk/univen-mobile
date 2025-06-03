import {
  HeroSection,
  AboutSection,
  PortfolioSection,
  TestimonialsSection,
  ContactSection,
} from "@/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
