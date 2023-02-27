import React from "react";
import Styles from "./styles.module.css";

import Luxury from "../../assets/icon-luxury.svg";
import Sedans from "../../assets/icon-sedans.svg";
import Suvs from "../../assets/icon-suvs.svg";

const ICONS_BY_TYPE = {
  luxury: Luxury,
  sedans: Sedans,
  suvs: Suvs,
};

function PreviewCard({ type, children }) {
  const appliedClass = `${Styles.card} ${Styles[type]}`;
  return (
    <div className={appliedClass}>
      <img src={ICONS_BY_TYPE[type]} alt="Icon luxury car" height="50px"></img>
      {children}
      <button>Learn more</button>
    </div>
  );
}

export default PreviewCard;
