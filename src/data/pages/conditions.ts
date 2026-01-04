export type ConditionPage = {
    slug: string;
    title: string;
    intro: string;
    sections: {
      heading: string;
      content: string;
    }[];
  };
  
  export const conditions: ConditionPage[] = [
    {
      slug: "acne",
      title: "Acne Treatment",
      intro:
        "Acne is a common skin condition that requires a personalized, medical approach for long-term control.",
      sections: [
        {
          heading: "What causes acne?",
          content:
            "Acne can be caused by excess oil production, clogged pores, bacteria, and hormonal changes.",
        },
        {
          heading: "Our approach",
          content:
            "We assess skin type, acne severity, and lifestyle factors to design a targeted treatment plan.",
        },
      ],
    },
    {
      slug: "pigmentation",
      title: "Pigmentation Treatment",
      intro:
        "Pigmentation issues such as melasma and tanning require careful diagnosis and consistent treatment.",
      sections: [
        {
          heading: "Common types of pigmentation",
          content:
            "Melasma, post-inflammatory pigmentation, sun-induced tanning, and freckles.",
        },
        {
          heading: "Treatment strategy",
          content:
            "A combination of topical therapy, procedures, and sun protection is used.",
        },
      ],
    },
  ];
  