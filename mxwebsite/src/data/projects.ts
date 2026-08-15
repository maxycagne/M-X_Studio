export type ProjectCategory = "ALL" | "MOBILE" | "WEB" | "DESKTOP" | "ENTERPRISE";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  category: Exclude<ProjectCategory, "ALL">;
  categoryLabel: string;
  tech: string[];
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "listah",
    title: "Listah Smart Home",
    description:
      "A focused productivity app for chores, meals, and shared household routines.",
    problem: "Household coordination was fragmented across chats and notes.",
    solution:
      "A calm, minimal interface for chores, meals, and shared routines with clear ownership.",
    outcome: "Faster planning loops and clearer household ownership.",
    category: "MOBILE",
    categoryLabel: "Mobile Application",
    tech: ["React Native", "Tailwind CSS", "Firebase"],
    featured: true,
  },
  {
    id: "coinsdrop",
    title: "Coinsdrop Apparel",
    description:
      "A high-conversion commerce system with clean catalog flows and disciplined brand alignment.",
    problem: "The brand needed a storefront that converted without visual noise.",
    solution:
      "A commerce platform with focused merchandising paths and a quiet, on-brand checkout experience.",
    outcome: "Smoother checkout paths and stronger merchandising clarity.",
    category: "WEB",
    categoryLabel: "E-Commerce Platform",
    tech: ["React", "Tailwind", "Node.js"],
    featured: true,
  },
  {
    id: "wah",
    title: "WAH Enterprise System",
    description:
      "A secure backend platform for payroll, evaluations, and authenticated live-server workflows.",
    problem: "Operations depended on fragile, disconnected internal tools.",
    solution:
      "Centralized payroll, evaluations, and authenticated live-server workflows under one secure architecture.",
    outcome: "Centralized operations with stronger access control.",
    category: "ENTERPRISE",
    categoryLabel: "Secure Architecture",
    tech: ["PHP", "Laravel", "MySQL"],
    featured: true,
  },
  {
    id: "agila",
    title: "AGILA",
    description:
      "Report corruption, rate public services, and view government information in one app.",
    problem: "Citizen feedback was scattered and difficult to act on.",
    solution:
      "A mobile civic reporting surface with structured service ratings and government information.",
    outcome: "A clearer civic reporting loop with structured service ratings.",
    category: "MOBILE",
    categoryLabel: "Mobile Application",
    tech: ["Android", "Java", "Firebase", "Maps"],
  },
  {
    id: "meal-planner",
    title: "Meal Planner",
    description:
      "Plan meals, track nutrition, and create grocery lists without friction.",
    problem: "Meal planning required too many disconnected tools.",
    solution:
      "One planning surface from recipe intent through nutrition tracking to grocery execution.",
    outcome: "One planning surface from recipe intent to grocery execution.",
    category: "MOBILE",
    categoryLabel: "Mobile Application",
    tech: ["Android", "Java", "MySQL"],
  },
  {
    id: "dine-sync",
    title: "Dine Sync",
    description:
      "A tablet system for ordering, kitchen processing, and restaurant sales.",
    problem: "Floor-to-kitchen communication broke under peak load.",
    solution:
      "Synchronized tablet workflows across dining floor, kitchen stations, and sales recording.",
    outcome: "Synchronized order flow across dining and kitchen stations.",
    category: "DESKTOP",
    categoryLabel: "Desktop / Tablet",
    tech: ["Android", "Java", "MySQL", "PHP"],
  },
  {
    id: "portfolio-site",
    title: "Editorial Portfolio",
    description:
      "A personal website to showcase projects, skills, and experience.",
    problem: "Work history lacked a durable public presentation layer.",
    solution:
      "A fast editorial site with clear project narrative structure and performance-first delivery.",
    outcome: "A fast editorial site with clear project narrative structure.",
    category: "WEB",
    categoryLabel: "Web Application",
    tech: ["Next.js", "Tailwind", "React"],
  },
];

export const featuredProjects = portfolioProjects.filter((p) => p.featured);

export const portfolioFilters: ProjectCategory[] = [
  "ALL",
  "MOBILE",
  "WEB",
  "DESKTOP",
  "ENTERPRISE",
];
