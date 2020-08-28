import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Ball = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #1873cc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-top: 70vh;
  margin-left: 89%;
  @media (max-width: 720px) {
    margin-left: 85%;
  }
  @media (max-width: 550px) {
    margin-left: 80%;
  }
  @media (max-width: 465px) {
    margin-top: 60vh;
    margin-left: 70%;
  }
  @media (max-width: 359px) {
    margin-left: 68%;
  }
  @media (max-width: 325px) {
    margin-left: 65%;
  }
`;

export default function BackTop() {
  return (
    <Ball>
      <AiOutlineArrowUp
        style={{
          fontSize: "30px",
          color: "whitesmoke",
          cursor: "pointer",
          margin: "10px auto",
        }}
        onClick={() => {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}
      />
    </Ball>
  );
}
