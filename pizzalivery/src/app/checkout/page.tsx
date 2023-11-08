"use client";

import { useRouter } from "next/navigation";

import styled from "./checkout.module.css";
import { convertToCurrency } from "@/helpers/ConvertToCurrency";
import { Button } from "@/components/button/Button";
import { Title } from "@/components/title/Title";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../contexts/OrderContext";

export default function Checkout() {
  const handleClick = () => {
    alert("Pedido feito");
  };

  const router = useRouter();
  const { pizzaOrder } = useContext(OrderContext);

  const paymentOptions = [
    { id: "20", value: 1, text: "Cartão de crédito" },
    { id: "21", value: 2, text: "Cartão de débito" },
    { id: "22", value: 3, text: "Vale refeição" },
    { id: "23", value: 4, text: "PIX" },
  ];

  const [paymentType, setPaymentType] = useState("");

  const handleChange = (event) => {
    setPaymentType(event.target.value);
    // setIsDisabled(false)
  };

  const getPaymentOptiontype = (paymentType: number) => {
    if (!paymentType) return;

    const filteredValue = paymentOptions.filter(
      (payment) => payment.value === paymentType
    );

    return filteredValue[0].text;
  };

  useEffect(() => {
    if (pizzaOrder === undefined) {
      return router.push("/sizes");
    }
  }, []);

  return (
    <>
      <Title tabIndex={0}> Pagamento </Title>
      <section className={styled.checkoutItem}>
        <h2>Items</h2>
        <div className={styled.checkoutItemFlex}>
          <p>
            {pizzaOrder?.item.name}/{pizzaOrder?.item.size}
          </p>
          <p>{convertToCurrency(pizzaOrder?.item.value)}</p>
        </div>
      </section>
      <section className={styled.checkoutItem}>
        <h2>Forma de pagamento</h2>
        <div className={styled.checkoutItemFlex}>
          <div className={styled.paymentMethodGroup}>
            <label htmlFor="payments"> Selecione a forma de pagamento </label>
            <select
              name="payments"
              id="payments"
              defaultValue={""}
              onChange={handleChange}
            >
              <option disabled value="">
                Selecione
              </option>
              {paymentOptions.map(({ id, value, text }) => (
                <option key={id} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </div>
          <p>{getPaymentOptiontype(Number(paymentType))}</p>
        </div>
      </section>
      <section className={styled.checkoutItem}>
        <div className={styled.checkoutItemFlex}>
          <h2>Total do pedido</h2>
          <p>{convertToCurrency(pizzaOrder?.total)}</p>
        </div>
      </section>
      <div className={styled.checkoutAction}>
        <Button onClick={handleClick} disabled={!Boolean(paymentType)}>
          Fazer pedido
        </Button>
      </div>
    </>
  );
}
