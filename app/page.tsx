import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { ProjectCard } from "@/components/project/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="page-container mt-24 md:mt-32 lg:mt-40">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-6 lg:col-span-10 flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#686868] mb-6">
              Webanox Studio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] leading-[1.1] font-medium tracking-tight text-[#111111] mb-8">
              Digital systems for modern cinema.
            </h1>
            <p className="text-lg md:text-xl text-[#686868] max-w-2xl leading-relaxed mb-12">
              Webanox designs and builds websites, software, apps, and identities
              for businesses that live on screen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <LinkButton href="/contact" size="lg">
                Start a project
              </LinkButton>
              <LinkButton href="/work" variant="outline" size="lg">
                View our work
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="page-container">
        <div className="flex justify-between items-end mb-12 border-b border-[#DCDCDC] pb-6">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#111111]">
            Selected Work
          </h2>
          <LinkButton href="/work" variant="link" className="hidden md:flex gap-2 p-0 h-auto">
            View all <ArrowRight size={16} />
          </LinkButton>
        </div>
        
        <div className="flex flex-col gap-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} large={index === 0} />
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="page-container">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868] mb-12">
          Capabilities
        </h2>
        <div className="swiss-grid">
          {[
            { id: "01", title: "Websites", desc: "Performance-focused digital experiences." },
            { id: "02", title: "Software", desc: "Custom operational systems and tools." },
            { id: "03", title: "Apps", desc: "Native and web-based applications." },
            { id: "04", title: "Branding", desc: "Visual identity and design systems." },
          ].map((item) => (
            <div key={item.id} className="col-span-4 md:col-span-4 lg:col-span-3 border-t border-[#DCDCDC] pt-6 mb-8 lg:mb-0">
              <div className="text-xs text-[#999999] mb-4">{item.id}</div>
              <h3 className="text-xl font-medium text-[#111111] mb-2">{item.title}</h3>
              <p className="text-[#686868] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialization Section */}
      <section className="bg-[#111111] text-[#F7F7F5] py-32">
        <div className="page-container swiss-grid">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-8">
              Built around the business of cinema.
            </h2>
            <p className="text-[#999999] text-lg md:text-xl max-w-2xl leading-relaxed">
              We understand that theatres are more than screens. They are customer experiences, showtimes, ticketing, food & beverage, and digital communication. Our technical solutions are designed for the unique operational realities of exhibition.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="page-container">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868] mb-12">
          Process
        </h2>
        <div className="flex flex-col">
          {["Discover", "Define", "Design", "Build", "Launch"].map((step, i) => (
            <div key={step} className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#DCDCDC] group">
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-sm text-[#999999]">0{i + 1}</span>
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-[#111111] group-hover:text-[#686868] transition-colors">
                  {step}
                </h3>
              </div>
              <ArrowRight size={24} className="text-[#DCDCDC] md:text-[#111111] opacity-0 md:opacity-100 group-hover:translate-x-4 transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="page-container swiss-grid">
        <div className="col-span-4 md:col-span-8 lg:col-span-12 border-t border-[#DCDCDC] pt-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868] shrink-0 md:w-32">
              Studio
            </h2>
            <div className="max-w-3xl">
              <p className="text-2xl md:text-4xl font-medium tracking-tight leading-snug text-[#111111]">
                Webanox is a small, independent studio combining technical development and design craft. We work directly with our clients from concept to code.
              </p>
              <div className="mt-8">
                <LinkButton href="/about" variant="link" className="p-0 h-auto gap-2">
                  Read our story <ArrowRight size={16} />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-container text-center pt-16">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#111111] mb-12 max-w-4xl mx-auto">
          Have a cinema that deserves a better digital experience?
        </h2>
        <LinkButton href="/contact" size="lg">
          Start a project
        </LinkButton>
      </section>
    </div>
  );
}
