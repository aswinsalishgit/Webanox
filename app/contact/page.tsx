"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for now (stubbed out for backend integration later)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className="pb-32">
      <section className="page-container mt-24 md:mt-32 mb-20">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-10">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#111111] mb-6">
              Start a project
            </h1>
            <p className="text-lg md:text-xl text-[#686868] max-w-2xl leading-relaxed">
              We&apos;re currently accepting new projects. Fill out the form below and we&apos;ll get back to you within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container">
        <div className="border-t border-[#DCDCDC] pt-12">
          <div className="swiss-grid">
            <div className="col-span-4 md:col-span-3 lg:col-span-4 mb-12 md:mb-0">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#686868] mb-4">
                Contact Details
              </h2>
              <div className="text-sm text-[#111111] font-medium mb-1">Email</div>
              <a href="mailto:hello@webanox.com" className="text-[#686868] hover:text-[#111111] transition-colors mb-6 block">
                hello@webanox.com
              </a>
            </div>

            <div className="col-span-4 md:col-span-5 lg:col-span-6">
              {submitted ? (
                <div className="bg-[#EAEAEA] p-8 text-center border border-[#DCDCDC]">
                  <h3 className="text-2xl font-medium text-[#111111] mb-2">Thank you</h3>
                  <p className="text-[#686868]">We&apos;ve received your inquiry and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-[#686868]">Name</label>
                      <Input id="name" required placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-[#686868]">Email</label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-widest text-[#686868]">Company / Theatre</label>
                    <Input id="company" required placeholder="Example Cinemas" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="needs" className="text-xs font-semibold uppercase tracking-widest text-[#686868]">What do you need?</label>
                    <Input id="needs" required placeholder="e.g. Website redesign, custom software" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="text-xs font-semibold uppercase tracking-widest text-[#686868]">Project Description</label>
                    <Textarea id="description" required placeholder="Tell us a bit about your goals and current challenges..." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-widest text-[#686868]">Budget Range (Optional)</label>
                      <Input id="budget" placeholder="e.g. $10k - $25k" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="timeline" className="text-xs font-semibold uppercase tracking-widest text-[#686868]">Timeline (Optional)</label>
                      <Input id="timeline" placeholder="e.g. Q3 2024" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
