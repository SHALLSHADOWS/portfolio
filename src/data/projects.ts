export type ProjectMedia = {
  cover: string;
  gallery?: string[];
  figmaUrl?: string;
};

export type HighlightProject = {
  slug: string;
  translationKey: string;
  stack: string[];
  href?: string;
  repo?: string;
  media?: ProjectMedia;
};

export const HIGHLIGHT_PROJECTS: HighlightProject[] = [
  {
    slug: "house-dispatch-pro",
    translationKey: "projects.items.houseDispatchPro",
    stack: ["React", "ASP.NET Core", "Azure", "Firebase"]
  },
  {
    slug: "id-verification-suite",
    translationKey: "projects.items.idVerificationSuite",
    stack: ["FastAPI", "TensorFlow", "React", "Supabase"]
  },
  {
    slug: "booking-flights-training",
    translationKey: "projects.items.bookingFlightsTraining",
    stack: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
    media: {
      cover: "img/Fly/iPhone 14 & 15 Pro Max - 1.png",
      gallery: [
        "img/Fly/iPhone 14 & 15 Pro Max - 1.png",
        "img/Fly/iPhone 14 & 15 Pro Max - 2.png",
        "img/Fly/iPhone 14 & 15 Pro Max - 3.png",
        "img/Fly/iPhone 14 & 15 Pro Max - 4.png",
        "img/Fly/iPhone 14 & 15 Pro Max - 5.png",
        "img/Fly/iPhone 14 & 15 Pro Max - 12.png"
      ],
      figmaUrl:
        "https://www.figma.com/design/jQ6xphYCg6VDUN1117rhRt/Book-a-Fly-Training%C2%A0?node-id=8-1035&t=zP72Qjsn62rV7rqa-0"
    }
  },
  {
    slug: "ecommerce-app-design",
    translationKey: "projects.items.ecommerceAppDesign",
    stack: ["Design system", "Figma", "Mobile UX", "User Research"],
    media: {
      cover: "img/E-Commerce App Design (Community)/Main page.png",
      gallery: [
        "img/E-Commerce App Design (Community)/Main page.png",
        "img/E-Commerce App Design (Community)/Catalog 1.png",
        "img/E-Commerce App Design (Community)/Product Card.png",
        "img/E-Commerce App Design (Community)/My Bag.png",
        "img/E-Commerce App Design (Community)/Login page.png",
        "img/E-Commerce App Design (Community)/Favorites/Lists.png"
      ],
      figmaUrl:
        "https://www.figma.com/design/GfDYHBVF5xgVtZddrq3DtX/E-Commerce-App-Design--Community-?node-id=0-1&t=aEZ2cJvJH83JXBYw-1"
    }
  }
];


