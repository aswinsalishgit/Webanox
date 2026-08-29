import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies and digital products by Webanox.",
};

export default function WorkPage() {
  return (
    <div className="pb-32">
      {/* Header */}
      <section className="page-container mt-24 md:mt-32 mb-20">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#111111] mb-6">
              Selected Work
            </h1>
            <p className="text-lg md:text-xl text-[#686868] max-w-2xl leading-relaxed">
              We design and build digital infrastructure for modern cinema businesses. Explore our recent projects below.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="page-container">
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} large={index === 0} />
          ))}
        </div>
      </section>
    </div>
  );
}
