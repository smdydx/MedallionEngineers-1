import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieConsent } from "@/components/CookieConsent";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Projects from "@/pages/projects";
import Team from "@/pages/team";
import Contact from "@/pages/contact";

// About pages
import CompanyOverview from "@/pages/company-overview";
import MissionVision from "@/pages/mission-vision";
import CoreValues from "@/pages/core-values";
import History from "@/pages/history";

// Service pages
import TunnelStructures from "@/pages/tunnel-structures";
import TunnelSystems from "@/pages/tunnel-systems";
import StructuralEngineering from "@/pages/structural-engineering";
import Infrastructure from "@/pages/infrastructure";
import ProjectManagement from "@/pages/project-management";

// Project pages
import FeaturedProjects from "@/pages/featured-projects";
import TransportationProjects from "@/pages/transportation-projects";
import UrbanDevelopment from "@/pages/urban-development";
import InfrastructureProjects from "@/pages/infrastructure-projects";

// Team pages
import Leadership from "@/pages/leadership";
import Experts from "@/pages/experts";
import Careers from "@/pages/careers";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Main pages */}
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      
      {/* About pages */}
      <Route path="/company-overview" component={CompanyOverview} />
      <Route path="/mission-vision" component={MissionVision} />
      <Route path="/core-values" component={CoreValues} />
      <Route path="/history" component={History} />
      
      {/* Service pages */}
      <Route path="/tunnel-structures" component={TunnelStructures} />
      <Route path="/tunnel-systems" component={TunnelSystems} />
      <Route path="/structural-engineering" component={StructuralEngineering} />
      <Route path="/infrastructure" component={Infrastructure} />
      <Route path="/project-management" component={ProjectManagement} />
      
      {/* Project pages */}
      <Route path="/featured-projects" component={FeaturedProjects} />
      <Route path="/transportation-projects" component={TransportationProjects} />
      <Route path="/urban-development" component={UrbanDevelopment} />
      <Route path="/infrastructure-projects" component={InfrastructureProjects} />
      
      {/* Team pages */}
      <Route path="/leadership" component={Leadership} />
      <Route path="/experts" component={Experts} />
      <Route path="/careers" component={Careers} />
      
      {/* 404 page */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
