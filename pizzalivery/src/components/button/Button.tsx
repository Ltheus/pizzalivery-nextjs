"use client"

import styled from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.ReactEventHandler;
  id?: string
}

export const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  return (
    <button className={styled.button} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
