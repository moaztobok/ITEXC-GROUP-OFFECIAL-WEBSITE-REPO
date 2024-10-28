import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateString = (title: string, maxLength: number): string => {
  if (title.length <= maxLength) {
    return title;
  }
  return title.slice(0, maxLength) + "...";
};

export const getTailwindBackgroundColor = (pathname: string) => {
  switch (pathname.toLowerCase()) {
    case "/services/engineering":
      return "bg-primary";
    case "/services/branding":
      return "bg-primary-studio";
    case "/services/erp":
      return "bg-primary-erp";
    case "/services/hr":
      return "bg-primary-hr";
    default:
      return "bg-primary";
  }
};

export const getUnitColor = (pathname: string) => {
  switch (pathname.toLowerCase()) {
    case "/services/engineering":
    case "software":
      return "#1F00FF";
    case "/services/branding":
      return "#FB3737";
    case "/services/erp":
      return "#FF0099";
    case "/services/hr":
      return "#B4F049";
    default:
      return "#1F00FF";
  }
};
export const getTailwindTextColor = (pathname: string) => {
  switch (pathname.toLowerCase()) {
    case "hr":
      return "text-black";
    default:
      return "text-white";
  }
};

export const getTailwindFillColor = (pathname: string) => {
  switch (pathname.toLowerCase()) {
    case "main":
    case "software":
      return "fill-blue-500";
    case "group":
      return "fill-blue-700";
    case "studio":
      return "fill-red-500";
    case "erp":
      return "fill-pink-500";
    case "hr":
      return "fill-green-400";
    default:
      return "fill-gray-500";
  }
};

export const getTailwindStrokeColor = (pathname: string) => {
  switch (pathname.toLowerCase()) {
    case "main":
    case "software":
      return "stroke-blue-500";
    case "group":
      return "stroke-blue-700";
    case "studio":
      return "stroke-red-500";
    case "erp":
      return "stroke-pink-500";
    case "hr":
      return "stroke-green-400";
    default:
      return "stroke-gray-500";
  }
};

// Example usage:
// const bgClass = getTailwindBackgroundColor('studio');
// const textClass = getTailwindTextColor('studio');
// const fillClass = getTailwindFillColor('studio');
// const strokeClass = getTailwindStrokeColor('studio');

export const getTeamId = (pathname: string): number => {
  switch (pathname.toLowerCase()) {
    case "/services/engineering":
      return 7;
    case "software":
      return 7;
    case "/services/branding":
      return 6;
    case "/services/erp":
      return 1;
    case "/services/hr":
      return 5;
    default:
      return 1;
  }
};

export const teamlead = (team: number): string => {
  switch (team) {
    case 6:
      return "Studio Sales team";
    case 7:
      return "IT Sales team";
    case 5:
      return "HR Managment team";
    case 1:
      return "ERP Sales team";
    default:
      return "Our team";
  }
};
