import React from "react";
import bg from "../assets/ecom.jpg";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  
  height: 92vh;
  
background: url("${bg}");
background-size: cover;
display: flex;
justify-content: center;
background-position: center;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 25px;
  text-shadow: 2px 2px black;
  margin-top: 100px;
  padding: 20px;
`;
export default function Aboutus() {
  return (
    <Background>
      <Paragraph>
        This project allows you to choose from several items and add them to the
        cart
      </Paragraph>
    </Background>
  );
}
