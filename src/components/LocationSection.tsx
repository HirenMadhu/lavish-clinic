import { Phone, MessageCircle, Instagram } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Address & Contact */}
          <div>
            <h2 className="text-3xl font-semibold text-foreground">
              Visit Lavish Aesthetique Clinic
            </h2>

            <p className="mt-6 text-muted">
              Ahmedabad, Gujarat
            </p>

            <p className="mt-2 text-muted">
              Mon – Sat: 10:00 AM – 7:00 PM
            </p>

            <p className="mt-4 text-muted">
              Phone:&nbsp;
              <a
                href="tel:+919999999999"
                className="font-medium text-foreground hover:text-primary"
              >
                +91 99999 99999
              </a>
            </p>

            {/* Contact buttons */}
            <div className="mt-8 flex gap-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition"
              >
                <Phone size={16} />
                Call
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 transition"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <a
                href="https://instagram.com/yourclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary transition"
              >
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="h-[350px] w-full overflow-hidden rounded-lg border border-border">
            <iframe
              title="Lavish Aesthetique Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1464401597527!2d72.51179837578339!3d23.018394779176734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b84826d208f%3A0xb7e0be0ec645f72e!2sCrimson%20Complex!5e0!3m2!1sen!2sus!4v1767757129435!5m2!1sen!2sus"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
