import { Hero } from "@/components/ui/Hero";
import { MainContent } from "@/components/ui/MainContent";
import { SparkMail } from "@/components/ui/SparkMail";

export default function Home() {
  return (
    <div className="font-body mt-14">
      {/* Hero Section */}
      <Hero />

      {/* Content Area */}
      <MainContent />

      {/* News Letter */}
      <SparkMail />
    </div>
  );
}
