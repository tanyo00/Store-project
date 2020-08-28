import React from "react";
import Item from "./Item";
import styled from "styled-components";

export const Header = styled.h1`
  width: 100%;
  font-size: 55px;
  text-align: center;
  margin-top: 20px;
  color: whitesmoke;
  background: dodgerblue;
  padding: 10px;
`;
const Paragraph = styled.p`
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-top: 70px;
  border-bottom: 2px solid dodgerblue;
`;
const ContainerItemsCart = styled.div`
  width: 90%;
  height: 100%;
  margin: 50px auto;
`;
export default function Cart() {
  let items = JSON.parse(localStorage.getItem("dataItems"));
  let [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    console.log(items);
    if (items != null) {
      items.map((item) => {
        setTotal((total += parseInt(item.price)));
      });
    }
  }, []);
  return (
    <>
      <Header>Cart </Header>
      <Paragraph>Total: {total.toFixed(2)}</Paragraph>
      <ContainerItemsCart>
        {items != null ? (
          items.map((item, index) => {
            return (
              <Item
                key={index}
                image={item.image}
                brand={item.brand}
                type={item.type}
                price={item.price}
                size={item.size}
              />
            );
          })
        ) : (
          <h3>No items in the cart!</h3>
        )}
      </ContainerItemsCart>
    </>
  );
}
