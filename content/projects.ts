export type Project = {
  slug: string;
  title: string;
  client?: string;
  category: string;
  services: string[];
  year?: string;
  description: string;
  featured?: boolean;
  coverImage?: string;
  gallery?: string[];
  challenge?: string;
  approach?: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "local-cinema-experience",
    title: "Local Cinema Experience",
    client: "Independent Movie Theatre",
    category: "Websites",
    services: ["Website Design", "Frontend Development", "Ticketing Integration"],
    year: "2024",
    description: "A complete digital overhaul for a local independent cinema, focusing on seamless ticketing and premium brand presentation.",
    featured: true,
    challenge: "The cinema's previous website was outdated, slow, and lacked a cohesive brand identity. Customers struggled with finding showtimes and the ticketing process was disjointed.",
    approach: "We designed a highly visual, premium website that prioritizes current screenings and simplified the booking process. We established a new digital design system utilizing deep contrasts and elegant typography to reflect the magic of cinema.",
    outcome: "A beautiful, responsive platform that elevated the brand's digital presence and provided an intuitive user experience for moviegoers.",
  },
  // Add more mock or real projects here as needed
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
