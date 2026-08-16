import { Hero } from "@/components/ui/Hero";
import { MainContent } from "@/components/ui/MainContent";

export default function Home() {
  return (
    <div className="font-body mt-12">
      {/* Hero Section */}
      <Hero />

      {/* Content Area */}
      <MainContent />
    </div>
  );
}
