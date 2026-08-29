import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#DCDCDC] bg-[#F7F7F5] py-12 md:py-20 mt-auto">
      <div className="page-container swiss-grid">
        {/* Brand Column */}
        <div className="col-span-4 md:col-span-3 lg:col-span-4 flex flex-col gap-6">
          <div className="font-bold text-xl tracking-tight text-[#111111]">
            Webanox
          </div>
          <p className="text-[#686868] text-sm max-w-xs leading-relaxed">
            Digital infrastructure and experiences for modern cinema.
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col gap-4 mt-8 md:mt-0">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#999999]">Company</h4>
          <Link href="/work" className="text-sm text-[#111111] hover:text-[#686868] transition-colors">Work</Link>
          <Link href="/services" className="text-sm text-[#111111] hover:text-[#686868] transition-colors">Services</Link>
          <Link href="/about" className="text-sm text-[#111111] hover:text-[#686868] transition-colors">About</Link>
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col gap-4 mt-8 md:mt-0">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#999999]">Connect</h4>
          <Link href="/contact" className="text-sm text-[#111111] hover:text-[#686868] transition-colors">Contact</Link>
          {/* Socials can be added here if available */}
        </div>

        {/* CTA Column */}
        <div className="col-span-4 md:col-span-8 lg:col-span-4 flex flex-col md:items-end mt-12 md:mt-16 lg:mt-0 gap-4">
          <div className="text-sm text-[#686868]">Ready to build?</div>
          <Link
            href="/contact"
            className="inline-block text-sm font-medium border border-[#111111] text-[#111111] px-6 py-3 rounded-full hover:bg-[#111111] hover:text-[#F7F7F5] transition-colors"
          >
            Start a project
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="col-span-4 md:col-span-8 lg:col-span-12 mt-16 pt-8 border-t border-[#DCDCDC] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#999999]">
          <div>&copy; {currentYear} Webanox. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#686868] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#686868] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
