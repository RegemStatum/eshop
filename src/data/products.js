import clothesImg1 from "../assets/images/clothes/clothes1.jpg";
import clothesImg2 from "../assets/images/clothes/clothes2.jpg";
import clothesImg3 from "../assets/images/clothes/clothes3.jpg";
import clothesImg4 from "../assets/images/clothes/clothes4.jpg";
import clothesImg5 from "../assets/images/clothes/clothes5.jpg";
import clothesImg6 from "../assets/images/clothes/clothes6.jpg";
import clothesImg7 from "../assets/images/clothes/clothes7.jpg";
import clothesImg8 from "../assets/images/clothes/clothes8.jpg";
import clothesImg9 from "../assets/images/clothes/clothes9.jpg";
import clothesImg10 from "../assets/images/clothes/clothes10.jpg";
import clothesImg11 from "../assets/images/clothes/clothes11.jpg";
import clothesImg12 from "../assets/images/clothes/clothes12.jpg";
import clothesImg13 from "../assets/images/clothes/clothes13.jpg";

const mockProducts = [
  {
    id: 1,
    name: "Кофтинка супер",
    description:
      "Ця кофтинка просто супер. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red", "black"],
    sizes: ["s", "l", "m", "xl"],
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
    colors: ["black", "green", "brown"],
    sizes: ["l", "xl"],
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
    colors: ["green", "black", "white"],
    sizes: ["s", "m", "l", "xl"],
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
    colors: ["red", "black"],
    sizes: ["s"],
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
    colors: ["black", "white"],
    sizes: ["l", "xl"],
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
    colors: ["red", "blue"],
    sizes: ["s", "l", "xl"],
    photo: clothesImg6,
    type: "Светри",
    featured: true,
    price: 300,
  },
  {
    id: 7,
    name: "Різнокольоровий светр",
    description:
      "Різнокольоровий светр. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red", "black", "white", "blue"],
    sizes: ["s", "m", "l"],
    photo: clothesImg7,
    type: "Светри",
    featured: false,
    price: 1700,
  },
  {
    id: 8,
    name: "Синя футболка",
    description:
      "Синя футболка. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["blue"],
    sizes: ["xl"],
    photo: clothesImg8,
    type: "Футболки",
    featured: false,
    price: 500,
  },
  {
    id: 9,
    name: "Приємна кофтинка",
    description:
      "Приємна кофтинка. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["white", "red", "pink"],
    sizes: ["xs", "s", "m"],
    photo: clothesImg9,
    type: "Кофтинки",
    featured: false,
    price: 700,
  },
  {
    id: 10,
    name: "В’язана кофтинка",
    description:
      "В’язана кофтинка. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["green", "red", "pink"],
    sizes: ["xs", "s", "m", "l"],
    photo: clothesImg10,
    type: "Кофтинки",
    featured: false,
    price: 1000,
  },
  {
    id: 11,
    name: "Рожева футболка",
    description:
      "Рожева футболка. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["pink"],
    sizes: ["xs", "s", "m", "l"],
    photo: clothesImg11,
    type: "Футболки",
    featured: false,
    price: 300,
  },
  {
    id: 12,
    name: "Оранжевий светр",
    description:
      "Оранжевий светр. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["red"],
    sizes: ["m", "l"],
    photo: clothesImg12,
    type: "Светри",
    featured: false,
    price: 1700,
  },
  {
    id: 13,
    name: "Біла футболка",
    description:
      "Біла футболка. Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом.",
    colors: ["white", "black"],
    sizes: ["s", "m", "l"],
    photo: clothesImg13,
    type: "Футболки",
    featured: false,
    price: 700,
  },
];

export default mockProducts;
