import styled from "./logo.module.css";
import Image from "next/image";
import pizzaliveryLogo from "../../assets/pizzalivery-logo.png"
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }
  return (
    <div className={styled.logoDiv} onClick={handleClick}>
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
