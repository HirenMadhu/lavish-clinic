"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    title: "Doctor-Led Aesthetic Care",
    subtitle:
      "Personalized skin and hair treatments designed with medical expertise.",
    image: "/images/homepage/hero-1.jpg",
  },
  {
    title: "Ethical. Effective. Personalized.",
    subtitle:
      "Treatments focused on natural results and long-term skin health.",
    image: "/images/homepage/hero-2.jpg",
    
  },
  {
    title: "Advanced Skin & Hair Solutions",
    subtitle:
      "Evidence-based protocols using modern dermatological technologies.",
    image: "/images/homepage/hero-3.jpg",

  },
];

export default function HeroSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        className="h-[75vh] min-h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full items-center">
              {/* Background image placeholder */}
              <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="mt-6 text-lg text-white/90">
                    {slide.subtitle}
                  </p>

                  <div className="mt-10 flex gap-4">
                    <a
                      href="/conditions"
                      className="rounded-md bg-white px-6 py-3 text-sm font-medium text-primary hover:bg-gray-100 transition"
                    >
                      Explore Conditions
                    </a>
                    <a
                      href="/contact"
                      className="rounded-md border border-white/70 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                    >
                      Contact Clinic
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
