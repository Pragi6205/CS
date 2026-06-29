import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoServices from './components/BentoServices';
import InteractiveBuilder from './components/InteractiveBuilder';
import ProjectShowcase from './components/ProjectShowcase';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import RoiCalculator from './components/RoiCalculator';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartProject = () => {
    scrollToSection('#contact');
  };

  const handleViewWork = () => {
    scrollToSection('#showcase');
  };

  const handleProjectBuilderClick = () => {
    scrollToSection('#builder');
  };

  const handleStartProjectWithBuild = (buildType: string) => {
    // Scroll to contact and prepopulate mail trigger context if clicked
    scrollToSection('#contact');
    const mailLink = document.getElementById('cta-consult-btn') as HTMLAnchorElement;
    if (mailLink) {
      mailLink.href = `mailto:clouqsolutions@gmail.com?subject=Start%20a%20Custom%20${buildType.toUpperCase()}%20Project%20with%20ClouQ&body=Hello%20ClouQ%20Team,%20I'm%20interested%20in%20building%20a%20custom%20${buildType}%20and%20would%20like%20to%20get%20started!`;
    }
  };

  return (
    <div className="relative bg-[#070708] min-h-screen text-white font-sans selection:bg-[#16A34A] selection:text-white overflow-hidden">
      {/* Decorative Elegant Ambient Glow Gradients (Spanned vertically to illuminate the entire website) */}
      <div className="absolute top-[-5%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-[#16A34A]/20 via-[#15803D]/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-bl from-[#16A34A]/15 via-[#15803D]/0 to-transparent rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[45%] left-[-15%] w-[60vw] h-[60vw] bg-gradient-to-tr from-[#16A34A]/18 via-[#15803D]/5 to-transparent rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute top-[70%] right-[-10%] w-[55vw] h-[55vw] bg-gradient-to-br from-[#16A34A]/15 via-emerald-950/5 to-transparent rounded-full blur-[160px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute bottom-[5%] left-[-10%] w-[65vw] h-[65vw] bg-gradient-to-tr from-[#16A34A]/18 via-[#15803D]/5 to-transparent rounded-full blur-[185px] pointer-events-none z-0" />

      {/* Floating Header */}
      <Navbar 
         onContactClick={handleStartProject} 
         onProjectBuilderClick={handleProjectBuilderClick} 
      />

      <main className="relative z-10">
        {/* Unforgettable Hero section */}
        <Hero 
          onContactClick={handleStartProject} 
          onViewWorkClick={handleViewWork} 
        />

        {/* Bento Grid Services section */}
        <BentoServices />

        {/* "What do you want to build?" selector tool */}
        <InteractiveBuilder onStartProjectWithBuild={handleStartProjectWithBuild} />

        {/* Project portfolio showcase */}
        <ProjectShowcase />

        {/* Before / After comparison slider */}
        <BeforeAfterSlider />

        {/* Growth ROI Calculator */}
        <RoiCalculator />

        {/* Closing Final Call to Action */}
        <FinalCta />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
