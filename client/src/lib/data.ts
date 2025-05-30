// Service data
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Tunnel Construction",
    description: "Design and construction of sophisticated tunnel systems for transportation, water management, and utility infrastructure, ensuring safety and longevity.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 2,
    title: "Structural Engineering",
    description: "Comprehensive structural analysis, design, and engineering services for buildings, bridges, and industrial facilities with a focus on durability and safety.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 3,
    title: "Infrastructure Development",
    description: "End-to-end infrastructure solutions including highways, bridges, dams, and urban development projects with sustainable and efficient designs.",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 4,
    title: "Engineering Consultation",
    description: "Expert advisory services for complex engineering challenges, providing technical expertise, feasibility studies, and strategic planning for projects.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 5,
    title: "Project Management",
    description: "Comprehensive project management services ensuring timely delivery, quality control, and budget management for engineering and construction projects.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 6,
    title: "Surveying & Mapping",
    description: "Advanced surveying and mapping services using state-of-the-art technology to provide accurate geospatial data for project planning and execution.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

// Project data
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Highway Tunnel Project",
    description: "Construction of a 2.5km highway tunnel through mountainous terrain",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 2,
    title: "Metro Railway Bridge",
    description: "Design and construction of a 1.2km railway bridge for metro line",
    image: "https://pixabay.com/get/g7cb6ca8f305a73b7ba113f25796bae269196dd46d2063fa823fc2dc870c82add7f8cf7e2a771c90c6c3fcd58886ace77d7c5f2f39cfe96618b3ade12cce4fdc3_1280.jpg"
  },
  {
    id: 3,
    title: "Urban Water Management",
    description: "Comprehensive water management infrastructure for urban development",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 4,
    title: "Commercial Complex",
    description: "Structural design and engineering for a multi-story commercial complex",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 5,
    title: "National Highway Expansion",
    description: "Engineering and construction services for highway expansion project",
    image: "https://images.unsplash.com/photo-1506268452458-bfb3757ed859?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 6,
    title: "Underground Metro Station",
    description: "Design and construction of underground metro station complex",
    image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

// Team data
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  links: {
    linkedin?: string;
    email?: string;
    phone?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Afroz Alam",
    position: "Director",
    description: "Leading Medallion's strategic vision with over 15 years of experience in civil engineering and infrastructure development.",
    links: {
      linkedin: "#",
      email: "afroz.alam@medallionindia.com",
      phone: "+919934320255"
    }
  },
  {
    id: 2,
    name: "Technical Director",
    position: "Chief Engineer",
    description: "Overseeing technical aspects of all engineering projects with expertise in structural design and analysis.",
    links: {
      linkedin: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "Operations Head",
    position: "Project Management",
    description: "Managing project operations and ensuring timely delivery with quality assurance and client satisfaction.",
    links: {
      linkedin: "#",
      email: "#"
    }
  }
];

// Business hours
export interface BusinessHour {
  day: string;
  hours: string;
}

export const businessHours: BusinessHour[] = [
  {
    day: "Monday - Friday",
    hours: "9:00 AM - 6:00 PM"
  },
  {
    day: "Saturday",
    hours: "10:00 AM - 4:00 PM"
  },
  {
    day: "Sunday",
    hours: "Closed"
  }
];

// Navigation and Footer links
export interface SubMenuItem {
  title: string;
  href: string;
}

export interface MenuItem {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
}

export const navigationItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { 
    title: "About Us", 
    href: "/about",
    submenu: [
      { title: "Company Overview", href: "/company-overview" },
      { title: "Our Mission & Vision", href: "/mission-vision" },
      { title: "Core Values", href: "/core-values" },
      { title: "Our History", href: "/history" }
    ] 
  },
  { 
    title: "Services", 
    href: "/services",
    submenu: [
      { title: "Tunnel Structures", href: "/tunnel-structures" },
      { title: "Tunnel Systems", href: "/tunnel-systems" },
      { title: "Structural Engineering", href: "/structural-engineering" },
      { title: "Infrastructure Development", href: "/infrastructure" },
      { title: "Project Management", href: "/project-management" }
    ] 
  },
  { 
    title: "Projects", 
    href: "/projects",
    submenu: [
      { title: "Featured Projects", href: "/featured-projects" },
      { title: "Transportation Projects", href: "/transportation-projects" },
      { title: "Urban Development", href: "/urban-development" },
      { title: "Infrastructure Projects", href: "/infrastructure-projects" }
    ] 
  },
  { 
    title: "Our Team", 
    href: "/team",
    submenu: [
      { title: "Leadership Team", href: "/leadership" },
      { title: "Technical Experts", href: "/experts" },
      { title: "Careers", href: "/careers" }
    ] 
  },
  { title: "Contact", href: "/contact" }
];

// Quick links for footer
export const quickLinks = navigationItems.map(item => ({ 
  title: item.title, 
  href: item.href 
}));

// Footer services links
export interface ServiceLink {
  title: string;
  href: string;
}

export const serviceLinks: ServiceLink[] = [
  { title: "Tunnel Construction", href: "#" },
  { title: "Structural Engineering", href: "#" },
  { title: "Infrastructure Development", href: "#" },
  { title: "Engineering Consultation", href: "#" },
  { title: "Project Management", href: "#" }
];

// Company info
export const companyInfo = {
  name: "Medallion Engineers Private Limited",
  shortDesc: "Medallion Engineers Private Limited specializes in innovative engineering solutions for complex infrastructure challenges.",
  address: "B335/5(New B-930), Ground floor, Sangam Gali, New Ashok Nagar, Delhi-110096",
  phone: "+919934320255",
  landline: "+911135701742",
  email: "afroz.alam@medallionindia.com",
  socialLinks: {
    linkedin: "#",
    twitter: "#",
    facebook: "#"
  }
};