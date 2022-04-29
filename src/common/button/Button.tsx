import React from "react";
import { Button as Btn } from "react-bootstrap";
import "./Button.css";


export interface ButtonProps {
  title: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <Btn className="Button-features">{props.title}</Btn>
    </>
  );
};
