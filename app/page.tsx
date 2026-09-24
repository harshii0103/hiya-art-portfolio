import HeroSection from "@/components/HeroSection";
import BrushstrokeLoader from "@/components/BrushstrokeLoader";
import AboutPreview from "@/components/AboutPreview";
import GalleryPreview from "@/components/GalleryPreview";
import MuralsPreview from "@/components/MuralsPreview";
import CommissionsPreview from "@/components/CommissionsPreview";
import ContactPreview from "@/components/ContactPreview";

export default function Home() {
  return (
    <div>
      <BrushstrokeLoader />
      <HeroSection />
      <AboutPreview />
      <GalleryPreview />
      <MuralsPreview />
      <CommissionsPreview />
      <ContactPreview />
    </div>
  );
}
