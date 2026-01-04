import Link from "next/link";
import { menuData } from "./menuData";

export default function ConditionsMenu() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg">
      <div className="px-8 py-6">
        <div className="grid grid-cols-2 gap-8 min-w-[400px]">
          {/* Skin */}
          <div>
            <h3 className="mb-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">
              Skin
            </h3>
            <ul className="space-y-2">
              {menuData.skin_conditions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-sm text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hair */}
          <div>
            <h3 className="mb-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">
              Hair
            </h3>
            <ul className="space-y-2">
              {menuData.hair_conditions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-sm text-gray-700 hover:text-pink-600 transition-colors"
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