"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    name: "Aditi P.",
    text:
      "The doctor explained everything very clearly and suggested only what was necessary. The treatment felt ethical and professional.",
    rating: 5,
  },
  {
    name: "Rahul S.",
    text:
      "I saw visible improvement in my skin within a few weeks. The clinic atmosphere is calm and very hygienic.",
    rating: 5,
  },
  {
    name: "Neha M.",
    text:
      "Very satisfied with the consultation. No pressure, no upselling — just honest advice.",
    rating: 5,
  },
  {
    name: "Aman K.",
    text:
      "The staff and doctor were extremely polite. Results were natural, exactly what I wanted.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-primary">
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold text-white">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-white">
            Genuine experiences shared by patients who have visited Lavish
            Aesthetique Clinic.
          </p>
        </div>

        {/* Reviews slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="h-full rounded-lg border border-border bg-white p-6">
                <Stars count={review.rating} />

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  “{review.text}”
                </p>

                <p className="mt-6 text-sm font-medium text-foreground">
                  — {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
