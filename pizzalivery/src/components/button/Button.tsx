"use client"

import styled from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className={styled.button} {...rest}>
      {children}
    </button>
  );
};
