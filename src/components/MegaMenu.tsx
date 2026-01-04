import Link from "next/link";
import { menuData } from "./menuData";

export default function MegaMenu() {
  return (
    <div className="absolute left-0 top-full w-screen bg-white shadow-lg border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 gap-12">
          {/* Conditions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Conditions
            </h3>
            <ul className="space-y-3">
              {menuData.conditions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-pink-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Treatments
            </h3>
            <ul className="space-y-3">
              {menuData.treatments.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-pink-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
