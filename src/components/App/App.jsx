import React from "react";
import PreviewCard from "../PreviewCard/PreviewCard";
import Styles from "./styles.module.css";
import "@fontsource/lexend-deca";
import "@fontsource/big-shoulders-display";

function app() {
  return (
    <main>
      <PreviewCard type="sedans" className={Styles.firstCard}>
        <h1>SEDANS</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
      </PreviewCard>
      <PreviewCard type="suvs">
        <h1>SUVS</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventues.
        </p>
      </PreviewCard>
      <PreviewCard type="luxury" className={Styles.lastCard}>
        <h1>LUXURY</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style
        </p>
      </PreviewCard>
    </main>
  );
}

export default app;
