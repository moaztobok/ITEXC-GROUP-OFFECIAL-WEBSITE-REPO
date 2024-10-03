import { CarouselData, ProcessStep, Product } from "./types";
export const services = [
  {
    title: "Software development",
    desc: "Custom software solutions",
    href: "/engineering"
  },
  {
    title: "Branding & Design",
    desc: "Impactful brand identity",
    href: "/branding"
  },
  {
    title: "Erp Solutions",
    desc: "Streamline core operations",
    href: "/erp"
  },
  {
    title: "Hr Managments",
    desc: "Optimize workforce management",
    href: "/hr"
  }
];
export const units = [
  {
    title: "Incubyte",
    desc: "Incubate,Develop talent, nurture entrepreneurs.",
    url: "/units/itexc-academy",
    imageUrl: "/icons/incubyte.dz.svg"
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

export const HomeServices = [
  {
    id: "item-1",
    icon: "./icons/software-icon.svg",
    title: "Software engineering",
    description:
      "Our software engineers build custom solutions tailored to your business needs. From web and mobile apps to complex enterprise systems, we deliver high-quality software.",
    url: "/services/software-engineering"
  },
  {
    id: "item-2",
    icon: "./icons/design-icon.svg",
    title: "Design and branding",
    description:
      "We create stunning designs that capture your brand's essence. Our team specializes in UI/UX, branding, and graphic design. We help you stand out in a crowded market.",
    url: "/services/design-branding"
  },
  {
    id: "item-3",
    icon: "./icons/erp-icon.svg",
    title: "Enterprise resource planning",
    description:
      "Optimize your operations with our ERP solutions. We implement, customize, and support ERP systems to drive efficiency",
    url: "/services/erp"
  },
  {
    id: "item-4",
    icon: "./icons/hr-icon.svg",
    title: "Human resource services",
    description:
      "We help you manage your workforce effectively. Our HR services include recruitment, payroll, and HR consulting.",
    url: "/services/hr"
  }
];
export const carouselData: CarouselData[] = [
  {
    id: "1",
    title: "Neuron : Streamlining Medical Office Management",
    description:
      " Cabinet Medical is a comprehensive digital platform designed to simplify the operations of medical offices. With features like patient management, medical records, scheduling, and financial tracking, Cabinet Medical aims to improve efficiency, reduce errors, and enhance overall patient care..",
    image: "/thumbnails/Neuron.png",
    url: "/projects/neuron"
  },
  {
    id: "2",
    title: "Stack Render: Accelerating Code Generation",
    description:
      "Stack Render is a code generation platform that leverages AI and machine learning to streamline the software development process. By analyzing past data and user inputs, Stack Render generates customizable code in various programming languages and frameworks, saving developers time and effort. With its user-friendly interface and integration capabilities, Stack Render empowers developers to build high-quality applications faster and more efficiently.",
    image: "/thumbnails/stack-render.png",
    url: "/projects/sustainable-energy"
  },
  {
    id: "3",
    title: "LAQUI Driver : Safety for women drivers",
    description:
      "LAQUI Driver is a mobile application that promotes safety for transportation for women. As a LAQUI driver, you are an ambassador of safety and comfort, playing an essential role in the daily lives of women in the Oranie region. By providing reliable and attentive service, you help create positive travel experiences and alleviate safety concerns.",
    image: "/thumbnails/Laqui.png",
    url: "/projects/personalized-medicine"
  },
  {
    id: "4",
    title: "ZST: Streamlining Wholesale-to-Retail Transactions",
    description:
      "ZST is a comprehensive e-commerce platform designed to connect wholesalers and retailers, streamlining the process of buying and selling goods. With features like product management, bidding, and order processing, ZST aims to improve efficiency, reduce costs, and enhance transparency in the wholesale-to-retail market.",
    image: "/thumbnails/zst.png",
    url: "/projects/zst"
  },
  {
    id: "5",
    title: "Vitolker: Comprehensive Language Services",
    description:
      "Vitolker provides professional translation, interpretation, proofreading, copywriting, desktop publishing, and voiceover services. With a focus on quality and efficiency, we help businesses and individuals communicate effectively across languages",
    image: "/thumbnails/vitolker.jpeg",
    url: "/projects/cybersecurity"
  },
  {
    id: "6",
    title: "Akarkom's solution combines technology and real estate",
    description:
      "Akarkom is a comprehensive real estate platform that simplifies the process of finding and purchasing properties. With a focus on quality and transparency, Akarkom offers a range of services, including structural studies and online property sales.",
    image: "/thumbnails/Akarkom.png",
    url: "/projects/cybersecurity"
  }
];

export const customerData: Product[] = [
  {
    title: "ERP SOLUTIONS",
    description:
      "We deliver customized ERP systems that integrate your core business processes. Our solutions streamline operations, improve efficiency, and provide real-time insights for informed decision-making across finance, HR, supply chain, and more.",
    url: "/units/erp-solutions",
    image: "/thumbnails/odoo-partner.png",
    serviceUrl: "/services/erp"
  },
  {
    title: "BRANDING & DESIGN STUDIO",
    description:
      "Our creative team develops strong brand identities that resonate with your audience. We create impactful logos, engaging websites, and consistent visual branding to enhance your market presence and drive customer engagement.",
    url: "/units/studio",
    image: "/thumbnails/studio.png",
    serviceUrl: "/services/studio"
  },
  {
    title: "HR SERVICES",
    description:
      "We offer comprehensive HR solutions to simplify workforce management. From recruitment to performance tracking, our user-friendly systems support your HR team in nurturing talent and boosting organizational productivity.",
    url: "/units/hr",
    image: "/thumbnails/hr.png",
    serviceUrl: "/services/hr"
  }
];

export const WebDevProducts: Product[] = [
  {
    title: "Custom Website Development",
    description:
      "Create a unique and tailored website that reflects your brand and meets your specific business needs.",
    url: "/#",
    image: "https://images.unsplash.com/photo-1727773377765-04d5bd488f44  ",
    serviceUrl: "/#"
  },
  {
    title: "E-commerce Development",
    description:
      "Build an online store to sell products or services, complete with payment processing, inventory management, and shipping options.",
    url: "/#",
    image: "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c",
    serviceUrl: "/#"
  },
  {
    title: "Responsive Web Design",
    description:
      "Ensure your website is accessible and looks great on all devices, from desktops to smartphones.",
    url: "/#",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    serviceUrl: "/#"
  }
];

export const MobileDevProducts: Product[] = [
  {
    title: "Native Mobile App Development",
    description:
      "Create high-performance apps tailored for iOS and Android devices.",
    url: "/#",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    serviceUrl: "/#"
  },
  {
    title: "Hybrid Mobile App Development",
    description:
      "Build cross-platform apps using web technologies for faster development.",
    url: "/#",
    image:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    serviceUrl: "/#"
  },
  {
    title: "Mobile App Design and UI/UX",
    description:
      "Create visually appealing and user-friendly interfaces for your mobile apps.",
    url: "/#",
    image:
      "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    serviceUrl: "/#"
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

export const engineeringProces: ProcessStep[] = [
  {
    image:
      "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Planning and Analysis",
    icon: "planning-icon.svg",
    description:
      "Understand requirements, conduct feasibility studies, and create project plans."
  },
  {
    image:
      "https://images.unsplash.com/photo-1659728516023-34bc994a626a?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Design and Architecture",
    icon: "design-icon.svg",
    description:
      "Define system architecture, database design, and user interface."
  },
  {
    image:
      "https://images.unsplash.com/photo-1652449823136-b279fbe5dfd3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Development and Coding",
    icon: "development-icon.svg",
    description: "Write code, conduct unit and integration testing."
  },
  {
    image:
      "https://images.unsplash.com/photo-1682846133858-c0599bc99874?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Testing and Deployment",
    icon: "testing-icon.svg",
    description:
      "Conduct system and user acceptance testing, deploy the software, and provide ongoing maintenance."
  }
];

export const studioSteps: ProcessStep[] = [
  {
    image: "consultation-image.png",
    title: "Initial Consultation",
    icon: "consultation-icon.svg",
    description:
      "Discuss your project goals and needs. We'll provide tailored recommendations."
  },
  {
    image: "discovery-image.png",
    title: "Discovery and Planning",
    icon: "discovery-icon.svg",
    description:
      "Together, we'll define the scope of your project, set goals, and create a detailed plan."
  },
  {
    image: "creation-image.png",
    title: "Creative Execution",
    icon: "creation-icon.svg",
    description:
      "Our team will bring your vision to life through branding, design, photography, or other services you choose."
  },
  {
    image: "delivery-image.png",
    title: "Delivery and Support",
    icon: "delivery-icon.svg",
    description:
      "We'll deliver high-quality results and provide ongoing support to ensure your satisfaction."
  }
];
