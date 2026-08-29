import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";

import { LinkButton } from "@/components/ui/Button";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }
  
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pb-32">
      {/* Project Hero */}
      <section className="page-container mt-24 md:mt-32 mb-12">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#111111] mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#686868] max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Metadata Grid */}
      <section className="page-container mb-20">
        <div className="border-t border-[#DCDCDC] pt-8">
          <div className="swiss-grid text-sm">
            {project.client && (
              <div className="col-span-2 md:col-span-2">
                <h3 className="text-[#999999] uppercase tracking-wider mb-2">Client</h3>
                <p className="text-[#111111] font-medium">{project.client}</p>
              </div>
            )}
            <div className="col-span-2 md:col-span-2">
              <h3 className="text-[#999999] uppercase tracking-wider mb-2">Category</h3>
              <p className="text-[#111111] font-medium">{project.category}</p>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h3 className="text-[#999999] uppercase tracking-wider mb-2">Services</h3>
              <ul className="text-[#111111] font-medium space-y-1">
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            {project.year && (
              <div className="col-span-2 md:col-span-2">
                <h3 className="text-[#999999] uppercase tracking-wider mb-2">Year</h3>
                <p className="text-[#111111] font-medium">{project.year}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="page-container mb-24">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#EAEAEA] relative overflow-hidden">
          {project.coverImage ? (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${project.coverImage})` }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#999999]">
              [Hero Image]
            </div>
          )}
        </div>
      </section>

      {/* Project Content Sections */}
      <section className="page-container swiss-grid gap-y-24">
        
        {project.challenge && (
          <div className="col-span-4 md:col-span-8 lg:col-span-12 swiss-grid items-start">
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868] mb-4">
                Challenge
              </h2>
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-7">
              <p className="text-xl md:text-2xl text-[#111111] leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>
        )}

        {project.approach && (
          <div className="col-span-4 md:col-span-8 lg:col-span-12 swiss-grid items-start">
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868] mb-4">
                Approach
              </h2>
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-7">
              <p className="text-[#686868] text-lg leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.gallery.map((img, i) => (
                <div key={i} className="w-full aspect-[4/3] bg-[#EAEAEA] relative">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {project.outcome && (
          <div className="col-span-4 md:col-span-8 lg:col-span-12 swiss-grid items-start">
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868] mb-4">
                Outcome
              </h2>
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-7">
              <p className="text-[#111111] text-lg font-medium leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Next Project / CTA */}
      <section className="page-container mt-32 border-t border-[#DCDCDC] pt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111] mb-8">
          Ready for your own digital transformation?
        </h2>
        <LinkButton href="/contact" size="lg">
          Start a project
        </LinkButton>
      </section>
    </article>
  );
}
