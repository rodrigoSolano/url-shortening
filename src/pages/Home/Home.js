import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { BannerHome, Button, ListLinks, ShortenForm } from "../../components";
import styled from "styled-components";
import colors from "../../constants/colors";

const Background = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 95%);
`;

const Boost = styled.div`
  width: 100%;
  height: auto;
  min-height: 300px;
  background-image: url("/images/bg-boost-mobile.svg");
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h3 {
    color: ${colors.white};
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: auto;
  background-color: ${colors.veryDarkViolet};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  h3 {
    text-align: center;
    color: ${colors.white};
    font-size: 1.5rem;
    padding-top: 1.5rem;
    a {
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: ${colors.hover};
      }
      &:visited {
        color: ${colors.white};
      }
    }
  }
  div {
    h5 {
      font-size: 1rem;
      color: ${colors.white};
      padding: 0.5rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    a {
      text-decoration: none;
      color: ${colors.grayishViolet};
      font-size: 0.9rem;
      transition: all 0.5s;
      &:hover {
        color: ${colors.hover};
        cursor: pointer;
      }
    }
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 30% 1fr 1fr 1fr 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5rem;
    h3 {
      padding: 0;
      text-align: left;
      font-size: 2rem;
    }
    div {
      padding: 0;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.5rem;
      h5 {
        padding: 0;
      }
    }
    ul {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;

const Statistics = styled(Container)`
  width: 100%;
  height: auto;
  background-color: hsl(0, 0%, 95%);
  padding-top: 5rem;
  h3 {
    color: ${colors.veryDarkBlue};
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  h6 {
    color: ${colors.gray};
    text-align: center;
    font-size: 1rem;
    margin-bottom: 4rem;
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 2rem;
    }
    h6 {
      font-size: 1.5rem;
    }
  }
`;

const Cards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 5rem;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;
const Card = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  padding: 0 2rem 2rem 2rem;
  div {
    width: 64px;
    height: 64px;
    background-color: ${colors.secondary};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    transform: translateY(-50%);
  }
  img {
    width: 32px;
    height: 32px;
  }
  h3 {
    font-size: 1.2rem;
    color: ${colors.veryDarkBlue};
  }
  p {
    color: ${colors.gray};
    font-size: 1rem;
    text-align: center;
  }
  position: relative;
  &:after {
    content: "";
    width: 10px;
    height: 5rem;
    background-color: ${colors.primary};
    position: absolute;
    bottom: -5rem;
    left: calc(50% - 5px);
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    &:after {
      content: "";
      width: 2rem;
      height: 8px;
      background-color: ${colors.primary};
      position: absolute;
      top: calc(50% - 4px);
      left: 100%;
    }
    &:nth-child(2) {
      margin-top: 4rem;
    }
    &:last-child {
      margin-top: 8rem;
    }
  }
`;

const Home = () => {
  return (
    <>
      <BannerHome />
      <Background>
        <ShortenForm />
        <ListLinks />
      </Background>

      <Statistics>
        <h3>Advanced Statistics</h3>
        <h6>
          Track how your links are performing across the web with our advanced
          statiscs dashboard
        </h6>
        <Cards>
          <Card>
            <div>
              <img src="/images/icon-brand-recognition.svg" alt="Statistics" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </Card>
          <Card>
            <div>
              <img src="/images/icon-detailed-records.svg" alt="Statistics" />
            </div>
            <h3>Detail Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </Card>
          <Card>
            <div>
              <img src="/images/icon-fully-customizable.svg" alt="Statistics" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </Card>
        </Cards>
      </Statistics>

      <Boost>
        <h3>Boost your links today</h3>
        <Button rounded>Get started</Button>
      </Boost>
      <Footer>
        <h3>
          <a href="/">Shortly</a>
        </h3>
        <div>
          <h5>Features</h5>
          <ul>
            <a href="!#">Link Sortening</a>
            <a href="!#">Branden anks</a>
            <a href="!#">Analytics</a>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <a href="!#">Blog</a>
            <a href="!#">Developers</a>
            <a href="!#">Support</a>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <a href="!#">About </a>
            <a href="!#">Out Team </a>
            <a href="!#">Careers</a>
            <a href="!#">Contact</a>
          </ul>
        </div>
        <section>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/images/icon-facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="/images/icon-twitter.svg" alt="" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="/images/icon-instagram.svg" alt="" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
            <img src="/images/icon-pinterest.svg" alt="" />
          </a>
        </section>
      </Footer>
    </>
  );
};

export default Home;
