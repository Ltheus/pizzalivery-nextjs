"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { convertToCurrency } from "../../helpers/ConvertToCurrency";
import OrderContext from "../contexts/OrderContext";
import styled from "./flavours.module.css";

import { Title } from "@/components/title/Title";
import { Button } from "@/components/button/Button";

export default function Flavours() {
  const router = useRouter();
  const { pizzaSize, pizzaFlavour, setPizzaFlavour } = useContext(OrderContext);
  const [flavourId, setflavourId] = useState("");
  const [flavoursOptions, setFlavoursOptions] = useState([]);

  const getPizzaFlavoursOptions = async () => {
    try {
      const response = await fetch("http://localhost:8000/pizza/flavours");
      const options = await response.json();
      setFlavoursOptions(options);
    } catch (error) {
      alert(`Deu ruim:  ${error}`);
    } finally {
    }
  };

  const getPizzaFlavour = (id: string) => {
    return flavoursOptions.filter((flavour) => flavour.id === id);
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setflavourId(event.target.id);
  };

  const handleBack = () => {
    router.push("/sizes");
  };

  const handleNext = () => {
    const selectedFlavour = getPizzaFlavour(flavourId);
    setPizzaFlavour(selectedFlavour);
    router.push("/summary");
  };

  useEffect(() => {
    if (!pizzaFlavour) return;

    setflavourId(pizzaFlavour[0]?.id);
  }, [pizzaFlavour]);

  useEffect(() => {
    getPizzaFlavoursOptions();
  }, []);

  return (
    <>
      <Title tabIndex={0}> Agora escolha o sabor da sua pizza</Title>
      <section className={styled.flavourContentWrapper}>
        {flavoursOptions.map(({ id, image, name, description, price }) => (
          <div
            className={
              id === flavourId ? styled.selectedFlavourCard : styled.flavourCard
            }
            key={id}
          >
            <img className={styled.flavourCardImage} src={image} alt={name} />
            <p className={styled.flavourCardTitle}>{name}</p>
            <p className={styled.flavourCardDescription}>{description}</p>
            {pizzaSize && pizzaSize[0] ? (
              <p className={styled.flavourCardPrice}>
                {convertToCurrency(price[pizzaSize[0]?.slices])}
              </p>
            ) : (router.push('/sizes'))}
            <Button id={id} onClick={handleClick}>
              Selecionar
            </Button>
          </div>
        ))}
      </section>
      <div className={styled.flavourActionWrapper}>
        <Button onClick={handleBack}>Voltar</Button>
        <Button onClick={handleNext}>Escolha o sabor</Button>
      </div>
    </>
  );
}
