export type FeaturedItem = {
    title: string;
    description: string;
    href: string;
  };
  
  export const featuredConditions: FeaturedItem[] = [
    {
      title: "Acne",
      description:
        "Personalized medical treatments to control active acne and prevent future breakouts.",
      href: "/conditions/acne",
    },
    {
      title: "Pigmentation",
      description:
        "Targeted therapies for melasma, tanning, and uneven skin tone.",
      href: "/conditions/pigmentation",
    },
    {
      title: "Hair Fall",
      description:
        "Doctor-led evaluation and evidence-based treatments for hair loss.",
      href: "/conditions/hair-fall",
    },
    {
      title: "Dark Spots",
      description:
        "Advanced solutions to reduce dark spots and restore even complexion.",
      href: "/conditions/dark-spots",
    },
  ];
  
  export const featuredTreatments: FeaturedItem[] = [
    {
      title: "Medifacial",
      description:
        "Medical-grade facials tailored to your skin’s unique needs.",
      href: "/treatments/medifacial",
    },
  ];
  