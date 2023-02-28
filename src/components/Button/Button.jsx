import React from "react";
import Styles from "./styles.module.css";

function Button({ type, children }) {
  return <button className={Styles[type]}>{children}</button>;
}

export default Button;
