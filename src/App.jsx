import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from "./data";

export default function App() {
  const cards = data.map((card) => {
    return <Hero key={card.id} {...card} />;
  });
  return (
    <div>
      <Header />
      <section className="cards">{cards}</section>
    </div>
  );
}
