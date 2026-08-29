import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  large?: boolean;
}

export function ProjectCard({ project, large = false }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block w-full">
      <div className={`relative w-full overflow-hidden bg-[#EAEAEA] ${large ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'} mb-6`}>
        {/* Placeholder for project image */}
        {project.coverImage ? (
          // Use real image when available
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.coverImage})` }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#999999] transition-transform duration-700 group-hover:scale-105">
            [Project Image]
          </div>
        )}
      </div>
      
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-medium tracking-tight text-[#111111] mb-2 group-hover:text-[#686868] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#686868] text-sm">
            {project.client ? `${project.client} — ` : ''}{project.services.join(", ")}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm font-medium text-[#111111]">
          View case study
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
