import React from "react";
import Styles from "./styles.module.css";

import Luxury from "../../assets/icon-luxury.svg";
import Sedans from "../../assets/icon-sedans.svg";
import Suvs from "../../assets/icon-suvs.svg";

import Button from "../Button";

const ICONS_BY_TYPE = {
  luxury: Luxury,
  sedans: Sedans,
  suvs: Suvs,
};

function PreviewCard({ type, className, children }) {
  const appliedClass = `${Styles.card} ${Styles[type]} ${className}`;
  console.log(appliedClass);
  return (
    <div className={appliedClass}>
      <img src={ICONS_BY_TYPE[type]} alt="Icon luxury car" height="50px"></img>
      {children}
      <Button type={type}>Learn more</Button>
    </div>
  );
}

export default PreviewCard;
