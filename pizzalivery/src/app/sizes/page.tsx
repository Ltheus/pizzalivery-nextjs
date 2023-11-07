"use client"

import { Button } from "@/components/button/Button";
import styled from "./sizes.module.css"
import { Title } from "@/components/title/Title"
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../contexts/OrderContext";

export default function Sizes() {
  
  const router = useRouter()
  const { pizzaSize, setPizzaSize } = useContext(OrderContext);

  const sizeOptions = [
      {
        id: "10",
        flavours: 1,
        size: 35,
        slices: 8,
        text: "Grande",
      },
      {
        id: "11",
        flavours: 2,
        size: 35,
        slices: 8,
        text: "Grande",
      },
      {
        id: "20",
        flavours: 1,
        size: 28,
        slices: 4,
        text: "Média",
      },
      {
        id: "21",
        flavours: 2,
        size: 28,
        slices: 4,
        text: "Média",
      },
      {
        id: "30",
        flavours: 1,
        size: 18,
        slices: 1,
        text: "Broto",
      },
      {
        id: "31",
        flavours: 2,
        size: 18,
        slices: 1,
        text: "Broto",
      },
    ];
    
    const [sizeId, setSizeId] = useState("")

    const getPizzaSize = (id: string) => {
      return sizeOptions.filter((option) => option.id === id);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSizeId(event.target.value);
    };
    
    const handleBack = () => {
      router.push('/')
    };

    const handleNext = () => {
      const selectedSize = getPizzaSize(sizeId);
      setPizzaSize(selectedSize);
      router.push('/flavours')
    };

    useEffect(() => {
      if (!pizzaSize) return;

      setSizeId(pizzaSize[0].id);
    }, []);

    return (
      <>
        <Title tabIndex={0}> Escolha o tamanho da sua pizza </Title>
        <section className={styled.sizeContentWrapper}>
          {sizeOptions.map(({ id, size, slices, flavours, text }) => (
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
        <div className={styled.sizeActionWrapper}> 
          <Button onClick={handleBack}>Voltar</Button>
          <Button onClick={handleNext}>Escolha o sabor</Button>
        </div>
      </>
    );
}