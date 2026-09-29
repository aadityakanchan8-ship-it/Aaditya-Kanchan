import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { LogoMarquee } from './components/LogoMarquee';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SelectedWork } from './components/SelectedWork';
import { VerifiedLinksArchive } from './components/VerifiedLinksArchive';
import { MediaShowcase } from './components/MediaShowcase';
import { JournalismSection } from './components/JournalismSection';
import { EducationCertifications } from './components/EducationCertifications';
import { BeyondTheDesk } from './components/BeyondTheDesk';
import { ContactSection } from './components/ContactSection';
import { CaseStudyModal, VideoModal, ServiceModal, ContactModal } from './components/Modals';
import { PORTFOLIO_DATA, WorkProject, Service, MediaItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Handler to open video resume modal
  const handleOpenVideoResume = () => {
    const videoResume = PORTFOLIO_DATA.mediaShowcase.find((m) => m.isMainVideoResume) || PORTFOLIO_DATA.mediaShowcase[0];
    setActiveMedia(videoResume);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f1f5f9] selection:bg-teal-500/20 selection:text-teal-300 font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenVideoResume={handleOpenVideoResume}
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* 2. Impact Stats */}
        <StatsBanner />

        {/* 3. Organizations & Alma Mater Logos */}
        <LogoMarquee />

        {/* 4. About: “More Than Content.” */}
        <AboutSection />

        {/* 5. What I Do: 6 Interactive Pillars */}
        <ExpertiseSection onSelectService={(service) => setSelectedService(service)} />

        {/* 6. Career Timeline & Earlier Experience */}
        <ExperienceSection />

        {/* 7. Selected Work: Centerpiece Filterable Portfolio */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 8. Extracted Verified Works & Portfolio Links (PDF Archive) */}
        <VerifiedLinksArchive />

        {/* 9. Media Showcase: “Stories I've Told.” */}
        <MediaShowcase onPlayVideo={(media) => setActiveMedia(media)} />

        {/* 9. Journalism: “From Digital Campaigns to Newsrooms.” */}
        <JournalismSection />

        {/* 10. Education, Certifications & Tools */}
        <EducationCertifications />

        {/* 11. Beyond The Desk */}
        <BeyondTheDesk />

        {/* 12. Contact & Final CTA */}
        <ContactSection onOpenVideoResume={handleOpenVideoResume} />
      </main>

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenVideo={handleOpenVideoResume}
      />

      <VideoModal
        media={activeMedia}
        onClose={() => setActiveMedia(null)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
