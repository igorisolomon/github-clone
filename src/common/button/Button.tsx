import React from "react";
// import { Button as Btn } from "react-bootstrap";
import "./Button.css";


export interface ButtonProps {
  title: string;
}

export const Bttn = (props: ButtonProps) => {
  return (
    <>
      <button className="Button-features">{props.title}</button>
    </>
  );
};
