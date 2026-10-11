import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, ShieldCheckIcon, AwardIcon } from "@/components/ui/icons";
import { PROGRAMMES } from "@/data/programmes";
import { DUBAI_LOCATIONS, ABU_DHABI_LOCATIONS } from "@/data/locations";
import { ACADEMY_PROFILE } from "@/data/contact";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 text-sm border-t border-slate-800">
      {/* Upper Footer: Authority & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
              <AwardIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">
                Dronacharya Mentorship
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mentored by National Swimming Coach of India & 4-time Olympic Coach Pradeep Kumar Sreedharan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">
                9 Temperature-Controlled Pools
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Olympic 50m, 25m, and warm training pools maintained at 28°C–30°C across Dubai & Abu Dhabi.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-1">
                Strict Safety & Lifeguards
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                100% CPR, AED & Lifeguard certified coaches on deck at all times. Dedicated female coaches available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-48 h-14">
              <Image
                src="/images/brand/ansa-logo.png"
                alt="Aqua Nation Sports Academy Logo"
                fill
                className="object-contain object-left brightness-125"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {ACADEMY_PROFILE.legalName} is the UAE&apos;s premier swimming academy providing scientific, Olympian-led swimming pathways from early water comfort to international competition.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{ACADEMY_PROFILE.operatingDays}</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Dubai International Academic City (DIAC) Award Recipient</span>
              </p>
            </div>
          </div>

          {/* Col 2: Programmes */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Swim Programmes
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PROGRAMMES.map((prog) => (
                <li key={prog.id}>
                  <Link
                    href={`/programmes/${prog.slug}`}
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dubai Venues */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Dubai Centres (7)
            </h4>
            <ul className="space-y-2 text-xs">
              {DUBAI_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-slate-400 hover:text-teal-300 transition-colors line-clamp-1"
                  >
                    {loc.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Abu Dhabi & Admissions Contacts */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Abu Dhabi Centres
            </h4>
            <ul className="space-y-2 text-xs mb-6">
              {ABU_DHABI_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {loc.displayName}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="tel:+971562444207"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-teal-400" />
                  +971 56 244 4207
                </a>
              </li>
              <li>
                <a
                  href="tel:+971505658191"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-teal-400" />
                  +971 50 565 8191
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ansadxb.com"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white"
                >
                  <MailIcon className="w-3.5 h-3.5 text-teal-400" />
                  info@ansadxb.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="bg-slate-950/90 border-t border-slate-900 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 {ACADEMY_PROFILE.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <Link href="/child-safeguarding" className="hover:text-white transition-colors">
              Child Safeguarding & Safety
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy (UAE PDPL)
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
