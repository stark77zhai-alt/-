export interface Project {
  id: string;
  title: string;
  year: string;
  format: string;
  duration: string;
  location: string;
  role: string;
  type: string;
  thumbnail: string;
  stills: string[];
  synopsis: string;
}

export const projects: Project[] = [
  {
    id: "kavi",
    title: "KAVI",
    year: "2026",
    format: "",
    duration: "",
    location: "Los Angeles",
    role: "Director of Photography",
    type: "Short Film",
    thumbnail: "kavi-8.jpg",
    stills: [
      "kavi-8.jpg", "kavi-10.jpg", "kavi-9.jpg", "kavi-19.jpg",
      "kavi-1.jpg", "kavi-2.jpg", "kavi-3.jpg", "kavi-4.jpg",
      "kavi-5.jpg", "kavi-6.jpg", "kavi-7.jpg", "kavi-11.jpg",
      "kavi-12.jpg", "kavi-13.jpg", "kavi-14.jpg", "kavi-15.jpg",
      "kavi-16.jpg", "kavi-17.jpg", "kavi-18.jpg"
    ],
    synopsis: "In post-production."
  },
  {
    id: "letter-take-wind-away",
    title: "LETTER TAKE WIND AWAY",
    year: "2026",
    format: "",
    duration: "",
    location: "",
    role: "Director of Photography",
    type: "Short Film",
    thumbnail: "letter-take-wind-away.jpg",
    stills: [
      "letter-take-wind-away.jpg",
      "letter-13.jpg", "letter-14.jpg", "letter-15.jpg",
      "letter-16.jpg", "letter-17.jpg", "letter-18.jpg",
      "letter-4.jpg", "letter-5.jpg", "letter-6.jpg",
      "letter-7.jpg", "letter-8.jpg", "letter-9.jpg",
      "letter-10.jpg", "letter-11.jpg", "letter-12.jpg",
      "letter-19.jpg", "letter-20.jpg",
      "letter-1.jpg", "letter-2.jpg", "letter-3.jpg"
    ],
    synopsis: ""
  },
  {
    id: "under-grace",
    title: "UNDER GRACE",
    year: "2025",
    format: "",
    duration: "15 min",
    location: "Los Angeles",
    role: "Director of Photography",
    type: "Short Film",
    thumbnail: "under-grace-22.jpg",
    stills: [
      "under-grace-22.jpg", "under-grace-1.jpg", "under-grace-21.jpg", "under-grace-2.jpg", "under-grace-3.jpg",
      "under-grace-4.jpg", "under-grace-5.jpg", "under-grace-6.jpg",
      "under-grace-7.jpg", "under-grace-9.jpg",
      "under-grace-10.jpg", "under-grace-11.jpg", "under-grace-12.jpg",
      "under-grace-13.jpg", "under-grace-16.jpg", "under-grace-17.jpg", "under-grace-18.jpg",
      "under-grace-19.jpg", "under-grace-20.jpg"
    ],
    synopsis: ""
  },
  {
    id: "unspoken",
    title: "UNSPOKEN",
    year: "2025",
    format: "",
    duration: "13 min",
    location: "Los Angeles",
    role: "Director of Photography",
    type: "Short Film",
    thumbnail: "unspoken-4.jpg",
    stills: [
      "unspoken-1.jpg", "unspoken-2.jpg", "unspoken-3.jpg",
      "unspoken-4.jpg", "unspoken-5.jpg", "unspoken-6.jpg",
      "unspoken-7.jpg", "unspoken-9.jpg",
      "unspoken-10.jpg", "unspoken-11.jpg", "unspoken-12.jpg",
      "unspoken-13.jpg", "unspoken-14.jpg"
    ],
    synopsis: "A short film exploring silence and connection."
  },
  {
    id: "echo",
    title: "ECHO",
    year: "2024",
    format: "",
    duration: "15 min",
    location: "Los Angeles",
    role: "Director of Photography",
    type: "Short Film",
    thumbnail: "echo-13.png",
    stills: [
      "echo-1.png", "echo-2.png", "echo-3.png",
      "echo-4.png", "echo-5.png", "echo-6.png",
      "echo-7.png", "echo-8.png", "echo-9.png",
      "echo-10.png", "echo-11.png", "echo-12.png", "echo-13.png"
    ],
    synopsis: "A short film navigating memory and space."
  },
  {
    id: "small-world",
    title: "SMALL WORLD",
    year: "2024",
    format: "16mm",
    duration: "3 min",
    location: "Los Angeles",
    role: "Director of Photography",
    type: "Short Film",
    thumbnail: "small-world-1.png",
    stills: ["small-world-1.png", "small-world-2.png", "small-world-3.png", "small-world-4.png"],
    synopsis: "Shot on 16mm film."
  }
];
