import styled from "./logo.module.css";
import Image from "next/image";
import pizzaliveryLogo from "../../assets/pizzalivery-logo.png"

export const Logo = () => {
  return (
    <div className={styled.logoDiv}>
      <Image
        src={pizzaliveryLogo}
        alt="Logo Pizzalivery"
        className={styled.logoIcon}
        width= {32}
        height= {32}
      />
      <span className={styled.logoText}> Pizzalivery </span>
    </div>
  );
};
