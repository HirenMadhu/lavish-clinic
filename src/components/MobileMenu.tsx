"use client";

import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex h-16 items-center justify-between border-b border-border px-6">
        <span className="text-lg font-semibold text-foreground">
          Menu
        </span>
        <button
          onClick={onClose}
          className="text-sm text-muted hover:text-primary"
        >
          Close
        </button>
      </div>

      <nav className="px-6 py-8">
        <ul className="space-y-6 text-lg">
          <li>
            <Link href="/conditions" onClick={onClose}>
              Conditions
            </Link>
          </li>
          <li>
            <Link href="/treatments" onClick={onClose}>
              Treatments
            </Link>
          </li>
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
