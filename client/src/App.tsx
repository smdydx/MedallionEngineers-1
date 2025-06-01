import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/coming-soon';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Team from './pages/team';
import NotFound from './pages/not-found';
import CompanyOverview from './pages/company-overview';
import History from './pages/history';
import MissionVision from './pages/mission-vision';
import Leadership from './pages/leadership';
import CoreValues from './pages/core-values';
import Careers from './pages/careers';
import StructuralEngineering from './pages/structural-engineering';
import ProjectManagement from './pages/project-management';
import Infrastructure from './pages/infrastructure';
import TunnelSystems from './pages/tunnel-systems';
import UrbanDevelopment from './pages/urban-development';
import FeaturedProjects from './pages/featured-projects';
import InfrastructureProjects from './pages/infrastructure-projects';
import TransportationProjects from './pages/transportation-projects';
import TunnelStructures from './pages/tunnel-structures';
import Experts from './pages/experts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import CookieConsent from './components/CookieConsent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/company-overview" element={<CompanyOverview />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/mission-vision" element={<MissionVision />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/core-values" element={<CoreValues />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/structural-engineering" element={<StructuralEngineering />} />
            <Route path="/services/project-management" element={<ProjectManagement />} />
            <Route path="/services/infrastructure" element={<Infrastructure />} />
            <Route path="/services/tunnel-systems" element={<TunnelSystems />} />
            <Route path="/services/urban-development" element={<UrbanDevelopment />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/featured" element={<FeaturedProjects />} />
            <Route path="/projects/infrastructure" element={<InfrastructureProjects />} />
            <Route path="/projects/transportation" element={<TransportationProjects />} />
            <Route path="/projects/tunnel-structures" element={<TunnelStructures />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/experts" element={<Experts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <CookieConsent />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;