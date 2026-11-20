"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const usesInnerPageContact =
    pathname === "/contact" || pathname === "/gift-card-balance";

  const phone = usesInnerPageContact
    ? "+1 (615) 457-9792"
    : "+1 (623) 210-4956";
  const emailLabel = usesInnerPageContact
    ? "sdOlivia-Bennett1005@gmail.com"
    : "olivia.bennett.us3@gmail.com";
  const emailHref = "mailto:sdOlivia-Bennett1005@gmail.com";
  const brandIconClass = `w-8 h-8 rounded-full bg-[#ea7a24] flex items-center justify-center text-white font-serif text-sm${
    usesInnerPageContact ? " font-bold italic" : ""
  }`;
  const quickLinkClass = `hover:underline${usesInnerPageContact ? "" : " transition"}`;

  return (
    <footer className="bg-[#527d58] text-stone-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/20 pb-12">
        {/* Column 1: Brand & Bio */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className={brandIconClass}>🍃</div>
            <span className="font-serif text-2xl tracking-wide text-white">
              Massage Therapy by Olivia-Bennett
            </span>
          </Link>
          <p className="text-sm text-stone-200 leading-relaxed font-light">
            Your sanctuary of wellness, peace, and harmony. Experience the art
            of relaxation with Olivia-Bennett, your expert massage therapist.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-stone-200 font-light">
            <li>
              <Link href="/" className={quickLinkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className={quickLinkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Services</h4>
          {usesInnerPageContact ? (
            <ul className="space-y-3 text-sm text-stone-200 font-light">
              <li>Swedish Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Hot Stone Massage</li>
              <li>Sports Massage</li>
              <li>Aromatherapy Massage</li>
              <li>Nuru Massage</li>
            </ul>
          ) : (
            <ul className="space-y-3 text-sm text-stone-200 font-light">
              <li>
                <Link href="#services" className="hover:underline transition">
                  Swedish Massage
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline transition">
                  Deep Tissue Massage
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline transition">
                  Hot Stone Massage
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline transition">
                  Sports Massage
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline transition">
                  Aromatherapy Massage
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline transition">
                  Nuru Massage
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Contact Us</h4>
          <ul className="space-y-3 text-sm text-stone-200 font-light">
            <li>Available for both Incall & Outcall</li>
            <li>{phone}</li>
            <li>
              <a href={emailHref} className="hover:underline">
                {emailLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Payment Badges */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-200 font-light">
        <p>© 2026 Massage Therapy by Olivia-Bennett. All rights reserved.</p>

        <div className="flex flex-wrap justify-center items-center gap-3">
          <span className="mr-2 text-white">We Accept:</span>

          {/* Chime Badge */}
          <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-sm h-10 min-w-[50px]">
            <span className="text-[#00d68f] font-black tracking-tight text-xl">
              C
            </span>
          </div>

          {/* Bitcoin Badge */}
          <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-sm h-10 min-w-[50px]">
            <span className="text-[#f7931a] font-bold text-xl">₿</span>
          </div>

          {/* Gift Card Badge */}
          <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-sm h-10">
            <div className="bg-stone-900 text-white rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              Gift Card
            </div>
          </div>

          {/* Zelle Badge */}
          <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-sm h-10">
            <span className="text-[#7414ca] font-extrabold text-lg tracking-tighter">
              zelle
            </span>
          </div>

          {/* Cash App Badge */}
          <div className="bg-white rounded-xl px-4 py-2 flex items-center justify-center shadow-sm h-10 min-w-[50px]">
            <span className="text-[#00d632] font-bold text-xl">$</span>
          </div>

          {/* Cash / Regular Clients Only Badge */}
          <div className="bg-black text-white rounded-xl px-4 py-1.5 flex flex-col items-center justify-center h-10 text-center leading-tight">
            <span className="text-xs font-semibold">Cash</span>
            <span className="text-[9px] text-stone-300">
              Regular Clients Only
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
