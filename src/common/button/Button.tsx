import React from "react";
// import { Button as Btn } from "react-bootstrap";
import "./Button.css";


export interface ButtonProps {
  title: string;
  bgColor: string;
}

export const Bttn = (props: ButtonProps) => {
  return (
    <>
      <button className="Button-features" style={{backgroundColor:props.bgColor}}>{props.title}</button>
    </>
  );
};
