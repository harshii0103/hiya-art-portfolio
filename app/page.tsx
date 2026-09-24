import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import GalleryPreview from "@/components/GalleryPreview";
import MuralsPreview from "@/components/MuralsPreview";
import CommissionsPreview from "@/components/CommissionsPreview";
import ContactPreview from "@/components/ContactPreview";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-16">
        <AboutPreview />
        <GalleryPreview />
        <MuralsPreview />
        <CommissionsPreview />
      </div>

      <ContactPreview />
    </div>
  );
}
