export type CarouselData = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
};

export interface Product {
  team_id: number;
  title: string;
  description: string;
  url: string;
  serviceUrl: string;
  image: string;
}

export interface ProcessStep {
  image: string;
  title: string;
  icon: string;
  description: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  url: string;
}
