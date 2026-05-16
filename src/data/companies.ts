export type Company = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  founded: string;
  website: string;
  email: string;
  phone: string;
  ceo: string;
  team: { name: string; role: string; reports?: string[] }[];
};

export const companies: Company[] = [
  {
    id: "uma-travels",
    name: "Uma Travels",
    tagline: "Exploring horizons, rooted in comfort.",
    description:
      "Premier travel and logistics solutions helping you navigate the world with ease and safety.",
    industry: "Travel & Tourism",
    founded: "2008",
    website: "https://example.com/uma",
    email: "travel@umshiv.com",
    phone: "+91 98765 00001",
    ceo: "Ajay",
    team: [
      { name: "Ajay", role: "CEO" },
      { name: "Vijay", role: "Operations Head" },
    ],
  },
  {
    id: "axiino-tech",
    name: "Axiino",
    tagline: "The digital heartbeat of UMSHIV.",
    description:
      "The main core company of the group, providing premium web development, mobile applications, and innovative AI solutions that drive digital excellence.",
    industry: "Web, App & AI Solutions",
    founded: "2023",
    website: "https://axiino.com",
    email: "Axiino237@gmail.com",
    phone: "+91 7397349160",
    ceo: "Aravindhan R",
    team: [
      { name: "Aravindhan R", role: "Founder & CEO" },
      { name: "Vijay", role: "Co Founder" },
      { name: "Sujitha", role: "CTO" },
      { name: "Saran", role: "AI & Software Solutions" },
    ],
  },
  {
    id: "arise-design",
    name: "Arise Design",
    tagline: "Designing the visual voice of your brand.",
    description:
      "A forward-thinking creative studio specialized in visual identity, branding, and high-impact graphic design solutions that elevate your brand's presence.",
    industry: "Graphic Design & Branding",
    founded: "2024",
    website: "https://example.com/arise",
    email: "studio@arisedesign.com",
    phone: "+91 98765 22222",
    ceo: "Vijay",
    team: [
      { name: "vijay", role: "CEO" },
      { name: "Ajay", role: "CTO" },
      { name: "Rohit", role: "CPO" },
    ],
  },
  {
    id: "weds-arts",
    name: "Weds Arts",
    tagline: "Crafting the stage for your forever.",
    description:
      "A premier wedding design house specializing in creating breathtaking, bespoke wedding stages and luxury decor that turns your celebration into a living masterpiece.",
    industry: "Wedding & Stage Design",
    founded: "2025",
    website: "https://example.com/weds",
    email: "hello@wedsarts.com",
    phone: "+91 98765 44444",
    ceo: "Predeep",
    team: [
      { name: "Predeep", role: "CEO" },
      { name: "vijay", role: "Creative Lead" },
      { name: "Saran", role: "Creative Lead" },
    ],
  },
  {
    id: "first-step",
    name: "The First Step Solution",
    tagline: "Stalling for excellence in every event.",
    description:
      "A premium event infrastructure partner specializing in designing and setting up professional stalls for exhibitions, corporate events, and trade fairs.",
    industry: "Event Infrastructure",
    founded: "2026",
    website: "https://example.com/firststep",
    email: "hello@thefirststep.com",
    phone: "+91 98765 11111",
    ceo: "Ajay",
    team: [
      { name: "Ajay", role: "CEO" },
    ],
  },
];
