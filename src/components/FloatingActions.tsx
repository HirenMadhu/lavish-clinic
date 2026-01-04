import { Phone, MessageCircle, Instagram } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* Call */}
      <a
        href="tel:+919999999999"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:bg-primary-dark"
        aria-label="Call clinic"
      >
        <Phone size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
        aria-label="WhatsApp clinic"
      >
        <MessageCircle size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourclinic"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-lg transition hover:opacity-90"
        aria-label="Clinic Instagram"
      >
        <Instagram size={20} />
      </a>
    </div>
  );
}
