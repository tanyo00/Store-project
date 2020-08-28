import React from "react";
import styled from "styled-components";
import { GrFacebook, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #141414;
`;

const SocialMedia = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <a href="$">
          <GrFacebook
            style={{ fontSize: "30px", color: "whitesmoke", margin: "20px" }}
          />
        </a>
        <a href="$">
          <GrInstagram
            style={{ fontSize: "30px", color: "whitesmoke", margin: "20px" }}
          />
        </a>
        <a href="$">
          <GrLinkedinOption
            style={{ fontSize: "30px", color: "whitesmoke", margin: "20px" }}
          />
        </a>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaPhone
            style={{ fontSize: "30px", color: "whitesmoke", margin: "10px" }}
          />
          <p style={{ color: "whitesmoke", margin: "10px" }}>##########</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MdEmail
            style={{ fontSize: "30px", color: "whitesmoke", margin: "10px" }}
          />
          <p style={{ color: "whitesmoke", margin: "10px" }}>#####@abv.bg</p>
        </div>
      </SocialMedia>
    </FooterContainer>
  );
}
