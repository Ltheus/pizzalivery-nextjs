"use client"

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../contexts/OrderContext";

import styled from "./summary.module.css"
import { convertToCurrency } from "@/helpers/ConvertToCurrency";
import { Button } from "@/components/button/Button";
import { Title } from "@/components/title/Title";

export default function Summary() {
    const router = useRouter()

    const { pizzaSize, pizzaFlavour, setPizzaOrder } = useContext(OrderContext);
    const [summaryData, setSummaryData] = useState({});
    const [summaryAmount, setSummaryAmount] = useState(0);

    const handleBack = () => {
      router.push('/flavours')
    }

    const handleNext = () => {
      const payload = {
        item: {
          name: summaryData.name,
          image: summaryData.image,
          size: summaryData.text,
          slices: summaryData.slices,
          value: summaryData.price,
        },
        total: summaryAmount,
      };

      setPizzaOrder(payload);
      router.push('/checkout');
    };

    useEffect(() => {
    //   if (!pizzaFlavour) {
    //     return router.push('/sizes');
    //   }

      if (!pizzaSize) {
        return router.push("/");
      }

      setSummaryData({
        text: pizzaSize[0].text,
        slices: pizzaSize[0].slices,
        name: pizzaFlavour[0].name,
        price: pizzaFlavour[0].price[pizzaSize[0].slices],
        image: pizzaFlavour[0].image,
      });
    }, []);

    useEffect(() => {
      setSummaryAmount(summaryData.price);
    }, [summaryAmount]);

  return (
    <>
      <Title tabIndex={0}> Resumo do pedido </Title>
      <section className={styled.summaryContentWrapper}>
        <div className={styled.summaryDetails}>
          <img className={styled.summaryImage} src={summaryData.image} alt="" />
          <p className={styled.summaryTitle}>{summaryData.name}</p>
          <p className={styled.summaryDescription}>
            {summaryData.text} | {`(${summaryData.slices}) pedaços`}
          </p>
          <p className={styled.summaryPrice}>
            {convertToCurrency(summaryData.price)}
          </p>
          <div className={styled.summaryAmount}>
            <p className={styled.summaryPrice}>
              {convertToCurrency(summaryAmount)}
            </p>
          </div>
        </div>
      </section>
      <div className={styled.summaryActionWrapper}>
        <Button onClick={handleBack}> Voltar </Button>
        <Button onClick={handleNext}> Ir para o pagamento </Button>
      </div>
    </>
  );
}
