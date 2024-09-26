import { CarouselData, CustomerCard } from "./types";
export const services = [
  {
    title: "Software development",
    desc: "Custom software solutions",
    href: "/services/engineering"
  },
  {
    title: "Branding & Design",
    desc: "Impactful brand identity",
    href: "/services/studio"
  },
  {
    title: "Erp Solutions",
    desc: "Streamline core operations",
    href: "/services/erp"
  },
  {
    title: "Hr Managments",
    desc: "Optimize workforce management",
    href: "/services/hr"
  }
];
export const units = [
  {
    title: "Itexc academy",
    desc: "Develop talent, nurture entrepreneurs.",
    url: "/units/itexc-academy",
    imageUrl: "/icons/academy.svg"
  },
  {
    title: "Itexc studio",
    desc: "Craft digital experiences, impactful branding.",
    url: "/units/itexc-studio",
    imageUrl: "/icons/studio.svg"
  },
  {
    title: "Itexc erp",
    desc: "Streamline core operations with custom ERP.",
    url: "/units/itexc-erp",
    imageUrl: "/icons/erp.svg"
  },
  {
    title: "Itexc hr",
    desc: "Optimize workforce management solutions.",
    url: "/units/itexc-hr",
    imageUrl: "/icons/hr.svg"
  }
];
export const carouselData: CarouselData[] = [
  {
    id: "1",
    title: "Revolutionizing E-commerce with AI",
    description:
      "Our AI-powered platform optimizes product recommendations, inventory management, and customer experiences, driving significant revenue growth for online retailers.",
    image: "/images/project1.jpg",
    url: "/projects/e-commerce-ai"
  },
  {
    id: "2",
    title: "Sustainable Energy Solutions",
    description:
      "Developing innovative technologies to harness renewable energy sources and reduce carbon footprint.",
    image: "/images/project2.jpg",
    url: "/projects/sustainable-energy"
  },
  {
    id: "3",
    title: "Healthcare Innovation: Personalized Medicine",
    description:
      "Creating a platform for precision medicine by analyzing patient data to develop tailored treatment plans.",
    image: "/images/project3.jpg",
    url: "/projects/personalized-medicine"
  },
  {
    id: "4",
    title: "Augmented Reality Experiences",
    description:
      "Immersive AR applications for education, gaming, and retail, pushing the boundaries of interactive technology.",
    image: "/images/project4.jpg",
    url: "/projects/ar-experiences"
  },
  {
    id: "5",
    title: "Cybersecurity Fortress",
    description:
      "Protecting sensitive data with cutting-edge cybersecurity solutions, ensuring robust digital defenses.",
    image: "/images/project5.jpg",
    url: "/projects/cybersecurity"
  }
];

export const customerData: CustomerCard[] = [
  {
    title: "ERP SOLUTIONS",
    description:
      "We deliver customized ERP systems that integrate your core business processes. Our solutions streamline operations, improve efficiency, and provide real-time insights for informed decision-making across finance, HR, supply chain, and more.",
    url: "/units/erp-solutions",
    image: "/images/erp.png",
    serviceUrl: "/services/erp"
  },
  {
    title: "BRANDING & DESIGN STUDIO",
    description:
      "Our creative team develops strong brand identities that resonate with your audience. We create impactful logos, engaging websites, and consistent visual branding to enhance your market presence and drive customer engagement.",
    url: "/units/studio",
    image: "/images/studio.png",
    serviceUrl: "/services/studio"
  },
  {
    title: "HR SERVICES",
    description:
      "We offer comprehensive HR solutions to simplify workforce management. From recruitment to performance tracking, our user-friendly systems support your HR team in nurturing talent and boosting organizational productivity.",
    url: "/units/hr",
    image: "/images/hr.png",
    serviceUrl: "/services/hr"
  }
];

export const projectStages = [
  {
    image: "/images/process-1.jpg",
    title: "Understanding the Vision",
    icon: "megaphone",
    description: "Engage clients, analyze needs, identify goals and challenges."
  },
  {
    image: "/images/process-2.jpg",
    title: "Charting the Course",
    icon: "folder",
    description: "Develop action plan, set priorities, organize tasks."
  },
  {
    image: "/images/process-3.jpg",
    title: "Bringing Ideas to Life",
    icon: "bell",
    description: "Implement strategy using agile methods, manage changes."
  },
  {
    image: "/images/process-4.jpg",
    title: "Refining for Excellence",
    icon: "trophy",
    description:
      "Bringing Ideas to Life implement strategy using agile methods, manage changes."
  }
];
