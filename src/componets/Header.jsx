import React from "react";
import "./Header.css";
import react_img from "../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Core", "Supporting"];

export function dynamicResponce(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[dynamicResponce(2)];
  return (
    <header>
      <img src={react_img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
