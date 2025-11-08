import { SmoothScrollProvider } from "./providers/SmoothScrollProvider";
import { MainLayout } from "./components/layout/MainLayout";
import {
  HeroSection,
  ExpertiseSection,
  ProjectsSection,
  HighlightsSection,
  ProcessSection,
  CvSection,
  ContactSection
} from "./sections";

function App(): JSX.Element {
  return (
    <SmoothScrollProvider>
      <MainLayout>
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <HighlightsSection />
        <ProcessSection />
        <CvSection />
        <ContactSection />
      </MainLayout>
    </SmoothScrollProvider>
  );
}

export default App;

