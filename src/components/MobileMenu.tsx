"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { menuData } from "./menuData";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="flex h-16 items-center justify-between border-b border-border px-6">
        <span className="text-lg font-semibold text-primary">Menu</span>
        <button
          onClick={onClose}
          className="text-sm text-muted hover:text-primary"
        >
          Close
        </button>
      </div>

      <nav className="px-6 py-8">
        <ul className="space-y-6 text-primary">
          {/* Conditions - expandable */}
          <li>
            <div className="flex items-center justify-between">
              <Link href="/conditions" onClick={onClose}>
                Conditions
              </Link>
              <button
                onClick={() => setConditionsOpen(!conditionsOpen)}
                className="p-2 -mr-2 text-muted hover:text-primary"
                aria-label="Toggle conditions submenu"
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    conditionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {conditionsOpen && (
              <div className="mt-4 ml-4 space-y-6 border-l border-border pl-4">
                {/* Skin Conditions */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                    Skin
                  </h3>
                  <ul className="space-y-3">
                    {menuData.skin_conditions.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="text-sm text-muted hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hair Conditions */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                    Hair
                  </h3>
                  <ul className="space-y-3">
                    {menuData.hair_conditions.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="text-sm text-muted hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Treatments - expandable */}
          <li>
            <div className="flex items-center justify-between">
              <Link href="/treatments" onClick={onClose}>
                Treatments
              </Link>
              <button
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="p-2 -mr-2 text-muted hover:text-primary"
                aria-label="Toggle treatments submenu"
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    treatmentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {treatmentsOpen && (
              <div className="mt-4 ml-4 space-y-6 border-l border-border pl-4">
                {/* Skin Treatments */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                    Skin
                  </h3>
                  <ul className="space-y-3">
                    {menuData.skin_treatments.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="text-sm text-muted hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hair Treatments */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                    Hair
                  </h3>
                  <ul className="space-y-3">
                    {menuData.hair_treatments.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="text-sm text-muted hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Regular links */}
          <li>
            <Link href="/results" onClick={onClose}>
              Results
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={onClose}>
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={onClose}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}