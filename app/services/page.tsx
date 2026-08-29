import type { Metadata } from "next";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Webanox capabilities: Websites, Software, Apps, and Branding.",
};

const services = [
  {
    title: "Websites",
    description: "We build premium marketing websites and responsive experiences focused on performance, accessibility, and converting visitors. Our frontend architectures are robust and fast.",
    features: ["Marketing websites", "Cinema websites", "Responsive experiences", "Performance-focused frontends"],
  },
  {
    title: "Software",
    description: "We develop custom internal systems, workflow applications, and digital infrastructure that streamline operations and support cinema businesses.",
    features: ["Custom internal systems", "Business tools", "Workflow applications", "Digital infrastructure"],
  },
  {
    title: "Apps",
    description: "We create native and web-based applications that provide engaging, customer-facing interfaces on any device.",
    features: ["Web applications", "Mobile product interfaces", "Customer-facing experiences"],
  },
  {
    title: "Branding",
    description: "We design visual identities and digital brand systems that communicate confidence and craft. From logo to digital implementation, we ensure a cohesive presence.",
    features: ["Visual identity", "Digital brand systems", "Web identity", "Brand implementation"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-32">
      {/* Header */}
      <section className="page-container mt-24 md:mt-32 mb-20">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#111111] mb-6">
              Capabilities
            </h1>
            <p className="text-lg md:text-xl text-[#686868] max-w-2xl leading-relaxed">
              We provide end-to-end digital services for modern cinema, from brand identity to custom software development.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="page-container">
        <div className="flex flex-col border-t border-[#DCDCDC]">
          {services.map((service, index) => (
            <div key={service.title} className="swiss-grid py-12 md:py-20 border-b border-[#DCDCDC]">
              <div className="col-span-4 md:col-span-2 lg:col-span-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#999999] mb-2 block">
                  0{index + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-medium text-[#111111]">
                  {service.title}
                </h2>
              </div>
              
              <div className="col-span-4 md:col-span-6 lg:col-span-5 mt-6 md:mt-0">
                <p className="text-lg text-[#686868] leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#111111] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="page-container mt-32 text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#111111] mb-8">
          Need a specialized digital solution?
        </h2>
        <LinkButton href="/contact" size="lg">
          Discuss your project
        </LinkButton>
      </section>
    </div>
  );
}
