import homeIcon from "../assets/images/navIcons/home.svg";
import clothesIcon from "../assets/images/navIcons/hanger.svg";
import categoriesIcon from "../assets/images/navIcons/category.svg";

const navLinks = [
  { name: "Головна", icon: homeIcon, to: "/" },
  { name: "Одяг", icon: clothesIcon, to: "/products" },
  { name: "Категорії", icon: categoriesIcon, to: "/categories" },
];

export default navLinks;
