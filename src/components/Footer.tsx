import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Clinic Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Lavish Aesthetique Clinic
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A doctor-led aesthetic clinic in Ahmedabad, offering ethical,
              personalized skin and hair treatments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/conditions" className="hover:text-primary">
                  Conditions
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-primary">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-primary">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Contact
            </h4>
            <p className="mt-4 text-sm text-muted">
              Ahmedabad, Gujarat
            </p>
            <p className="mt-2 text-sm text-muted">
              Mon – Sat: 10:00 AM – 7:00 PM
            </p>
            <p className="mt-2 text-sm text-muted">
                Phone:{" "}
                <a
                    href="tel:+919999999999"
                    className="font-medium text-foreground hover:text-primary"
                >
                    +91 99999 99999
                </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} Lavish Aesthetique Clinic. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
