export type TreatmentPage = {
    slug: string;
    title: string;
    intro: string;
    sections: {
      heading: string;
      content: string;
    }[];
  };
  
  export const treatments: TreatmentPage[] = [
    {
      slug: "medifacial",
      title: "Medifacial",
      intro:
        "Medifacials are medical-grade facials designed to address specific skin concerns safely.",
      sections: [
        {
          heading: "What is a medifacial?",
          content:
            "A medifacial combines cleansing, exfoliation, hydration, and targeted actives under medical supervision.",
        },
        {
          heading: "Who is it for?",
          content:
            "Suitable for dull skin, acne-prone skin, pigmentation, and maintenance care.",
        },
      ],
    },
  ];
  