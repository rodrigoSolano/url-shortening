import React from "react";
import { Button } from "../index";
import {
  BannerHome as BannerHomeContainer,
  ImageContainer,
  Image,
  Info,
  Slogan,
  P,
} from "./BannerHome.elements";

const BannerHome = () => {
  return (
    <BannerHomeContainer>
      <ImageContainer>
        <Image src={"/images/illustration-working.svg"} />
      </ImageContainer>
      <Info>
        <Slogan>More than just shorter links</Slogan>
        <P>
          Build your brand's recognition and get detailed insights on how your
          links are perfotming
        </P>
        <Button rounded>Get Started</Button>
      </Info>
    </BannerHomeContainer>
  );
};

export default BannerHome;
