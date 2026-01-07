"use client";

import Link from "next/link";
import { useState } from "react";
import TreatmentsMenu from "./TreatmentsMenu";
import ConditionsMenu from "./ConditionsMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold text-primary">
            Lavish Aesthetique Clinic
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary">
            <div
              className="relative"
              onMouseEnter={() => setTreatmentsOpen(true)}
              onMouseLeave={() => setTreatmentsOpen(false)}
            >
              <button className="hover:text-primary">
                <Link href="/treatments/" className="hover:text-primary">
                  Treatments
                </Link>
              </button>
              {treatmentsOpen && <TreatmentsMenu />}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setConditionsOpen(true)}
              onMouseLeave={() => setConditionsOpen(false)}
            >
              <button className="hover:text-primary">
                <Link href="/conditions/" className="hover:text-primary">
                  Conditions
                </Link>
              </button>
              {conditionsOpen && <ConditionsMenu />}
            </div>

            <Link href="/results" className="hover:text-primary">
              Results
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden text-sm text-foreground"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>
    <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

    </header>
  );
}