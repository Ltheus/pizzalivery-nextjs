"use client";

import { Button } from "@/components/button/Button";
import styled from "./sizes.module.css";
import { Title } from "@/components/title/Title";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../contexts/OrderContext";

export default function Sizes() {
  const router = useRouter();
  const { pizzaSize, setPizzaSize } = useContext(OrderContext);
  const [sizeId, setSizeId] = useState("");
  const [pizzaSizeOptions, setPizzaSizeOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPizzaSizeOptions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/pizza/sizes");
      const options = await response.json();
      setPizzaSizeOptions(options);
    } catch (error) {
      alert(`Não foi possível acessar a API - ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getPizzaSize = (id: string) => {
    return pizzaSizeOptions.filter((option) => option.id === id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSizeId(event.target.value);
  };

  const handleBack = () => {
    router.push("/");
  };

  const handleNext = () => {
    const selectedSize = getPizzaSize(sizeId);
    setPizzaSize(selectedSize);
    router.push("/flavours");
  };

  useEffect(() => {
    if (!pizzaSize) return;

    setSizeId(pizzaSize[0].id);
  }, []);

  useEffect(() => {
    getPizzaSizeOptions();
  }, []);

  return (
    <>
      <Title tabIndex={0}> Escolha o tamanho da sua pizza </Title>
      {isLoading ? (
        <section className={styled.sizeContentWrapper}>
          <Title>Carregando</Title>
        </section>
      ) : (
        <section className={styled.sizeContentWrapper}>
          {pizzaSizeOptions.map(({ id, size, slices, flavours, text }) => (
            <div className={styled.radioCard} key={id}>
              <input
                type="radio"
                id={id}
                name="sizes"
                onChange={handleChange}
                value={id}
                checked={sizeId === id}
              />
              <label htmlFor={id}>
                {text} - {flavours} sabores
                <span>
                  Pizza com {slices} pedaços e {size}cm
                </span>
              </label>
            </div>
          ))}
        </section>
      )}
      <div className={styled.sizeActionWrapper}>
        <Button onClick={handleBack}>Voltar</Button>
        <Button onClick={handleNext}>Escolha o sabor</Button>
      </div>
    </>
  );
}
