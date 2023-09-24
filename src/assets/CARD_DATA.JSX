import Kurt from "./MTVUnplugged.png";
import MartyMcFly from "./marty.jpeg";
import JagStang from "./jagstang.jpeg";
import telecaster from "./telecaster.jpeg";
import jimmypage from "./jimmypage.jpeg";

const CARD_DATA = [
  {
    question: "Start!",
    answer: "Use the forward/backward buttons to navigate the flashcards",
  },
  {
    question: "What year was the first mass-produced electric guitar made?",
    answer: "In 1950, by Fender",
    difficulty: "medium",
  },
  {
    question:
      "What is the main difference in sound between single-coil pickups, and humbuckers?",
    answer:
      "Single coils have a brighter, crisper tone, whereas humbuckers have a darker, thicker sound.",
    difficulty: "easy",
  },
  {
    question:
      "Which was the first Fender model sold to the public: Stratocaster or Telecaster?",
    answer: "The Telecaster",
    difficulty: "medium",
    img: telecaster,
  },
  {
    question:
      "Thanks to Led Zeppelin, what brand/model of guitar became the symbol of rock music?",
    answer: "The Gibson Les Paul",
    difficulty: "easy",
    img: jimmypage,
  },
  {
    question:
      "Which pickup on the Fender Stratocaster is slanted? The Neck, Middle, or Bridge pickup?",
    answer: "The Bridge Pickup",
    difficulty: "easy",
  },
  {
    question:
      "What is the most obvious difference between a guitar and a bass?",
    answer:
      "A guitar typically has six strings, whereas a bass typically has four.",
    difficulty: "easy",
  },
  {
    question:
      "The blueprint concept of the Fender JagStang was submitted to Fender by which famous 90's musician?",
    answer: "Kurt Cobain, of Nirvana",
    difficulty: "medium",
    img: JagStang,
  },
  {
    question:
      "What model of guitar did Marty McFly use when playing Johnny B. Goode in Back to the Future?",
    answer: "Gibson ES-345",
    difficulty: "hard",
    img: MartyMcFly,
  },
  {
    question:
      "Who is widely considered the most influential guitarist of all time?",
    answer:
      "Jimi Hendrix, who influenced both the development and popularization of the guitar thanks to him constantly pushing the boundaries of the noises a guitar could make.",
    difficulty: "medium",
  },
  {
    question: "What is currently the most expensive guitar in the world?",
    answer:
      "Kurt Cobains MTV Unplugged guitar sold for $6,010,000 at auction in June 2020",
    difficulty: "hard",
    img: Kurt,
  },
];

export default CARD_DATA;
