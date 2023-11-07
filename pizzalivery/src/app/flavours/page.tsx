"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { convertToCurrency } from "../../helpers/ConvertToCurrency";
import OrderContext from "../contexts/OrderContext";
import styled from "./flavours.module.css";

import { Title } from "@/components/title/Title";
import { Button } from "@/components/button/Button";

import Mussarela from "../../assets/pizzaFlavours/mucarela.png"
import ChickenWithCheese from "../../assets/pizzaFlavours/frango-catupiry.png" 
import Margherita from "../../assets/pizzaFlavours/margherita.png" 
import Lusa from "../../assets/pizzaFlavours/portuguesa.png"

export default function Flavours() {
  const { pizzaSize, pizzaFlavour, setPizzaFlavour } = useContext(OrderContext);
  const [flavourId, setflavourId] = useState("");
  const router = useRouter()

  const flavoursOptions = [
    {
      id: "10",
      image: Mussarela,
      name: "Mussarela",
      description:
        "Mussarela especial fresca, finalizada com orégano e azeitonas portuguesas.",
      price: {
        8: 71,
        4: 35.5,
        1: 18,
      },
    },
    {
      id: "11",
      image: ChickenWithCheese,
      name: "Frango com catupiry",
      description:
        "Peito de frango cozido, desfiado e refogado em azeite de oliva e temperos naturais, anéis de cebola sobre base de mussarela especial, bacon em cubos e Catupiry® gratinado. É finalizada com orégano.",
      price: {
        8: 95,
        4: 47.5,
        1: 24,
      },
    },
    {
      id: "12",
      image: Margherita,
      name: "Margherita",
      description:
        "Mussarela especial, mussarela de búfala rasgada, fatias de tomate finalizada com folhas de manjericão orgânico e um fio de azeite aromatizado.",
      price: {
        8: 90,
        4: 45,
        1: 22.5,
      },
    },
    {
      id: "13",
      image: Lusa,
      name: "Portuguesa",
      description:
        "Clássica pizza, leva presunto magro, cebola, palmito e ervilha sobre base de mussarela fresca. Finalizada com cobertura de ovos, orégano e azeitonas portuguesas. ",
      price: {
        8: 93,
        4: 46.5,
        1: 23.5,
      },
    },
  ];

  const getPizzaFlavour = (id: string) => {
    return flavoursOptions.filter((flavour) => flavour.id === id);
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setflavourId(event.target.id);
  };

  const handleBack = () => {
    router.push('/sizes')
  };

  const handleNext = () => {
    const selectedFlavour = getPizzaFlavour(flavourId);
    setPizzaFlavour(selectedFlavour);
    router.push("/summary");
  };

  useEffect(() => {
    if (!pizzaFlavour) return;

    setflavourId(pizzaFlavour[0].id);
  }, []);

  return (
    <>
      <Title tabIndex={0}>Agora escolha o sabor da sua pizza</Title>
      <section className={styled.flavourContentWrapper}>
        {flavoursOptions.map(({ id, image, name, description, price }) => (
          <div
            className={styled.flavourCard}
            key={id}
            // selected={id === flavourId ? true : false}
          >
            <img
              className={styled.flavourCardImage}
              src={image.toString()}
              alt={name}
            />
            <p className={styled.flavourCardTitle}>{name}</p>
            <p className={styled.flavourCardDescription}>{description}</p>
            <p className={styled.flavourCardPrice}>
              {convertToCurrency(price[pizzaSize.slices])}
            </p>
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
