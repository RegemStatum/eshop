import clothesImg1 from "../assets/images/clothes/clothes1.jpg";
import clothesImg2 from "../assets/images/clothes/clothes2.jpg";
import clothesImg3 from "../assets/images/clothes/clothes3.jpg";
import clothesImg4 from "../assets/images/clothes/clothes4.jpg";
import clothesImg5 from "../assets/images/clothes/clothes5.jpg";
import clothesImg6 from "../assets/images/clothes/clothes6.jpg";

const mockProducts = [
  {
    id: 1,
    name: "Кофтинка супер",
    description:
      "Ця кофтинка просто супер. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red", "black", "white"],
    sizes: ["s", "l", "xl"],
    type: "Кофтинки",
    photo: clothesImg1,
    featured: true,
    price: 750,
  },
  {
    id: 2,
    name: "Куртка стильна",
    description:
      "Ця куртка оранжева. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red", "black", "green"],
    sizes: ["s", "l", "xl"],
    type: "Куртки",
    photo: clothesImg2,
    featured: false,
    price: 1400,
  },
  {
    id: 3,
    name: "Класний светр",
    description:
      "Цей светр класний. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red", "black", "white"],
    sizes: ["s", "l", "xl"],
    photo: clothesImg3,
    type: "Светри",
    featured: true,
    price: 450,
  },
  {
    id: 4,
    name: "Теплий светр",
    description:
      "Цей светр теплий. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red", "black", "white"],
    sizes: ["s", "l", "xl"],
    photo: clothesImg4,
    type: "Светри",
    featured: false,
    price: 500,
  },
  {
    id: 5,
    name: "Футболка дорожня",
    description:
      "Ця футболка з класною картинкою. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red", "black", "white"],
    sizes: ["s", "l", "xl"],
    photo: clothesImg5,
    type: "Футболки",
    featured: false,
    price: 2000,
  },
  {
    id: 6,
    name: "Елегантний светр",
    description:
      "Елегантний светр. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red", "black", "white"],
    sizes: ["s", "l", "xl"],
    photo: clothesImg6,
    type: "Светри",
    featured: true,
    price: 300,
  },
];

export default mockProducts;
