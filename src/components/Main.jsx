import React from "react";
import styled from "styled-components";
import items from "../items";
import Card from "./Card";

const ContainerMain = styled.div`
  width: 90%;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export default function Main(props) {
  return (
    <>
      <ContainerMain>
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              brand={item.brand}
              type={item.type}
              price={item.price}
              pic={item.image}
              size={item.sizes}
              new={item.new}
            />
          );
        })}
      </ContainerMain>
    </>
  );
}
