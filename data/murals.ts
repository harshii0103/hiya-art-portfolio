export type Mural = {
  id: string;
  title: string;
  year: string;
  location: string;
  client: string;
  format: string;
  medium: string;
  description: string;
  image: string;
};

export const murals: Mural[] = [
  {
    id: "1",
    title: "Colgate India Mural",
    year: "2025",
    location: "New Delhi",
    client: "Colgate India (@colgatein)",
    format: "Large-Scale Wall Mural",
    medium: "Acrylic on Wall",
    description:
      'A large-scale institutional mural for Colgate India — "Bright Smiles, Bright Futures." Created as part of a team under the Chhaya collective, the mural champions oral health awareness through vibrant, people-centric imagery across a multi-panel wall.',
    image: "/placeholders/mural-1.jpeg",
  },
  {
    id: "2",
    title: "Yamuna Ghat Mural",
    year: "2025",
    location: "Yamuna Ghat, Delhi",
    client: "Umeed Foundation (@umeed.foundationn)",
    format: "Large-Scale Wall Mural",
    medium: "Acrylic on Wall",
    description:
      "A community mural created in collaboration with Umeed Foundation at Yamuna Ghat — featuring bovine motifs and a hanging temple bell rendered in warm reds and oranges, painted alongside fellow artists as part of a community outreach initiative.",
    image: "/placeholders/mural-2.jpeg",
  },
];