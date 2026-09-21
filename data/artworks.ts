export type Artwork = {
  id: string;
  title: string;
  category: "Mythology" | "Portraits" | "Skulls" | "Pencil Studies" | "Misc" | "Canvas"; // can add more categories as needed
  image: string; // placeholder for now
  size: "small" | "medium" | "large"; // controls grid span
};

export const artworks: Artwork[] = [
  { id: "1", title: "Krishna & Radha", category: "Mythology", image: "/placeholders/art-1.jpeg", size: "large" },
  { id: "2", title: "Untitled Portrait", category: "Portraits", image: "/placeholders/art-2.jpeg", size: "medium" },
  { id: "3", title: "Yin-Yang Cat", category: "Misc", image: "/placeholders/art-3.jpeg", size: "small" },
  { id: "4", title: "Skull Study I", category: "Skulls", image: "/placeholders/art-4.jpeg", size: "medium" },
  { id: "5", title: "Pencil Sketch I", category: "Pencil Studies", image: "/placeholders/art-5.jpeg", size: "small" },
  { id: "6", title: "Hanumanji Ganeshji Canvas", category: "Canvas", image: "/placeholders/art-6.jpeg", size: "small" },
  { id: "7", title: "Mythology Maa Kaali", category: "Mythology", image: "/placeholders/art-7.jpeg", size: "small" },
  { id: "8", title: "Ganeshji", category: "Mythology", image: "/placeholders/art-8.jpeg", size: "small" },
  { id: "9", title: "Snake sketch", category: "Misc", image: "/placeholders/art-9.jpeg", size: "small" },
  { id: "10", title: "Kanhaji", category: "Mythology", image: "/placeholders/art-10.jpeg", size: "small" },
  // ...add more; jab real images aayengi, bas ye array replace hoga (ya API call)
];