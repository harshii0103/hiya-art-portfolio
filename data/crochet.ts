export type CrochetItem = {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
};

export const crochetItems: CrochetItem[] = [
  { id: "1", title: "Bloom Bouquet", category: "Crochet Flowers", price: "₹350", image: "/placeholders/crochet-1.jpeg" },
  { id: "2", title: "Petal Set (5 pcs)", category: "Crochet Flowers", price: "₹200", image: "/placeholders/crochet-2.jpeg" },
  { id: "3", title: "Memory Keychain", category: "Custom Keychain", price: "₹150", image: "/placeholders/crochet-3.jpeg" },
  { id: "4", title: "Mini Bouquet", category: "Crochet Flowers", price: "₹250", image: "/placeholders/crochet-4.jpeg" },
];