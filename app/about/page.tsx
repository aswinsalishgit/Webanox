import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Webanox is an independent digital studio founded by two best friends, combining technical development and design craft for the cinema industry.",
};

export default function AboutPage() {
  return (
    <div className="pb-32">
      {/* Header */}
      <section className="page-container mt-24 md:mt-32 mb-20">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-9">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#313031] leading-tight mb-8">
              We are an independent digital studio built for cinema.
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="page-container mb-32">
        <div className="border-t border-[#DCDCDC] pt-12">
          <div className="swiss-grid items-start">
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868] mb-4">
                Our Story
              </h2>
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-7 flex flex-col gap-6 text-base md:text-lg text-[#313031] leading-relaxed">
              <p>
                Webanox was co-founded by two best friends with a shared belief: digital products should be crafted with the same attention to detail as the physical experiences they support.
              </p>
              <p>
                We are a small, focused team. By combining technical development and design craft, we work directly with our clients from concept to code. There are no layers of account management or corporate bureaucracy—just direct communication and focused execution.
              </p>
              <p className="text-[#686868]">
                We specialize in the cinema industry because we understand its unique operational realities. From showtime scheduling to the ticketing funnel, we build systems that respect both the business of exhibition and the magic of the movies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page-container">
        <div className="border-t border-[#DCDCDC] pt-12">
          <div className="swiss-grid">
            <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-8 md:mb-0">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868]">
                Philosophy
              </h2>
            </div>
            
            <div className="col-span-4 md:col-span-6 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {[
                {
                  title: "Craft & Precision",
                  desc: "We believe in doing things right. Every pixel, every line of code, and every interaction is intentional."
                },
                {
                  title: "Direct Collaboration",
                  desc: "As a founder-led studio, you work directly with the people building your product."
                },
                {
                  title: "Technical Excellence",
                  desc: "Design means nothing if it doesn't perform. We build fast, accessible, and maintainable systems."
                },
                {
                  title: "Industry Focus",
                  desc: "We don't just build generic websites; we build specialized digital infrastructure for modern cinema."
                }
              ].map((value) => (
                <div key={value.title} className="flex flex-col gap-3">
                  <h3 className="text-base font-medium text-[#313031]">{value.title}</h3>
                  <p className="text-[#686868] leading-relaxed text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-container mt-32 text-center">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-[#313031] mb-8">
          Let&apos;s build something great together.
        </h2>
        <LinkButton href="/contact" size="lg">
          Start a project
        </LinkButton>
      </section>
    </div>
  );
}
