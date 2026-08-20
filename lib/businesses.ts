export type Business = {
  slug: string;
  name: string;
  activity: string;
  eyebrow: string;
  summary: string;
  description: string;
  location: string;
  image: string;
  accent: "green" | "gold" | "platinum";
  externalUrl?: string;
  services: string[];
};

export const businesses: Business[] = [
  {
    slug: "flamingo-french-fries",
    name: "Flamingo French Fries",
    activity: "Hospitality & Food",
    eyebrow: "Food for everyday moments",
    summary:
      "A growing food and hospitality brand serving students and communities in Minna.",
    description:
      "Flamingo French Fries brings accessible food service closer to the people who need it. Its outlets and digital marketplace support convenient ordering around the FUT Minna community and beyond.",
    location: "Minna, Niger State",
    image: "/images/businesses/flamingo-logo.png",
    accent: "gold",
    externalUrl: "https://flamingo.com.ng",
    services: ["Prepared food", "Campus delivery", "Food marketplace"],
  },
  {
    slug: "flamingo-enterprise",
    name: "Flamingo Enterprise",
    activity: "Commerce & Merchandise",
    eyebrow: "Useful products, closer to home",
    summary:
      "A consumer commerce operation for household items and premium merchandise.",
    description:
      "Flamingo Enterprise extends ELENOI's customer-facing reach through practical retail and merchandise. The business is built around convenience, trusted products and responsive local service.",
    location: "Minna, Niger State",
    image: "/images/businesses/flamingo-logo.png",
    accent: "gold",
    externalUrl: "https://flamingo.com.ng",
    services: ["Household retail", "Premium merchandise", "Local fulfilment"],
  },
  {
    slug: "flourish-real-estate",
    name: "Flourish Real Estate",
    activity: "Real Estate",
    eyebrow: "Places where life can flourish",
    summary:
      "Property services connecting owners, renters and buyers with trusted opportunities.",
    description:
      "Flourish Real Estate develops and connects property opportunities across residential and commercial markets. Its work supports clearer listings, verified properties and easier portfolio management for landlords.",
    location: "Nigeria",
    image: "/images/businesses/flourish-real-estate.jpg",
    accent: "green",
    externalUrl: "https://flamingo.com.ng/real-estates",
    services: [
      "Residential property",
      "Commercial property",
      "Landlord services",
    ],
  },
  {
    slug: "renewable-energy",
    name: "ELENOI Renewable Energy",
    activity: "Power Generation",
    eyebrow: "Energy for lasting progress",
    summary:
      "Renewable power initiatives designed to improve resilience and productive capacity.",
    description:
      "ELENOI's renewable energy activity advances practical power generation solutions for homes, businesses and communities. It reflects the group's commitment to infrastructure that enables durable economic growth.",
    location: "Nigeria",
    image: "/images/businesses/renewable-energy.jpg",
    accent: "green",
    services: [
      "Renewable generation",
      "Energy solutions",
      "Project partnerships",
    ],
  },
  {
    slug: "flamingo-tech-research-hub",
    name: "Flamingo Tech & Research Hub",
    activity: "Technology & Research",
    eyebrow: "Ideas built for real use",
    summary:
      "A platform for applied research, digital solutions and home-grown innovation.",
    description:
      "The hub connects research with execution, developing technology and practical knowledge for ELENOI businesses and the communities they serve. It supports experimentation, skills and locally relevant solutions.",
    location: "Minna, Niger State",
    image: "/images/businesses/flamingo-logo.png",
    accent: "platinum",
    services: ["Applied research", "Digital products", "Technology training"],
  },
  {
    slug: "oije-farms",
    name: "Oije Farms Nig. Ltd",
    activity: "Agriculture",
    eyebrow: "Growing value from the ground up",
    summary:
      "An agricultural business focused on productive farming and stronger local food systems.",
    description:
      "Oije Farms contributes to the agricultural value chain through disciplined production and a long-term view of food security. The business connects land, people and better practices to create sustainable value.",
    location: "Nigeria",
    image: "/images/businesses/oije-farms.jpg",
    accent: "green",
    services: ["Crop production", "Agricultural development", "Food systems"],
  },
  {
    slug: "ancient-scroll-publishers",
    name: "Ancient Scroll Publishers Nig. Ltd",
    activity: "Publishing",
    eyebrow: "Knowledge made enduring",
    summary:
      "A publishing company devoted to useful ideas, learning and transformational thought.",
    description:
      "Ancient Scroll Publishers develops and distributes writing that strengthens minds, leadership and society. It advances ELENOI's belief in constant learning and constant teaching.",
    location: "Nigeria",
    image: "/images/businesses/ancient-scroll-publishers.jpg",
    accent: "gold",
    services: [
      "Book publishing",
      "Editorial development",
      "Knowledge distribution",
    ],
  },
];

export function getBusiness(slug: string) {
  return businesses.find((business) => business.slug === slug);
}
