import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import doguinho from "./dog.png";
import gatinho from "./cat.png";
import dog1 from "./dog1.jpg";
import dog2 from "./dog2.jpg";
import dog3 from "./dog3.jpg";
import dog4 from "./dog4.jpg";
import cat1 from "./cat1.png";
import cat2 from "./cat2.jpg";
import cat3 from "./cat3.jpg";
import cat4 from "./cat4.jpg";
import background from "./background.jpg";
import dog from "./dog.png";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    border-style:none;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3.5vw;
  font-weight: bolder;
  color: #a19deb;
  margin-top: 2vh;
`;

//const greet = styled.greet`
//color: black;
//`;

const Figure = styled.div`
  margin-top: 3vw;
  width: 60%;
  height: 27vh;
  display: flex;
  justify-content: space-evenly;
`;

const EraseButton = styled.button`
  width: 6vw;
  height: 5vh;
  border-radius: 10%;
  cursor: pointer;
  margin-top: 10vh;
  font-size: 1.2vw;
  color: #fff;
  overflow: hidden;
  background: #3b193f;
  transition: 0.8s;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    transform: translateY(0) scale(1.2);
    letter-spacing: 0.1rem;
    background: #a19deb;
  }
`;

const Image = styled.img`
  height: 25vh;
  transition: 0.8s;
  &:hover {
    height: 27vh;
  }
`;

const GetBack = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 4vw;
  text-align: center;
  font-size: 3vw;
`;

const Nome = styled.li`
  font-size: 1.5vw;
`;

const ShowUp = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 35vh;
  width: 22vw;
`;

const Button = styled.button`
  border: solid 2.5px white;
  border-radius: 8%;
  cursor: pointer;
  width: 10vw;
  height: 2.2vw;
  background-color: rgb(255, 255, 255, 0);
  font-size: 1vw;
  color: white;
  &:hover {
    border: 2px solid;
    background-color: #3b193f;
    box-shadow: 0 0 20px 0 rgb(87, 207, 255);
  }
`;

const Img = styled.img`
  height: 25vh;
`;

export default class PetLove extends Component {
  state = {
    dogs: [
      {
        nome: "Doug",
        idade: "1 ano",
        img: dog1
      },
      {
        nome: "Charles",
        idade: "12 anos",
        img: dog2
      },
      {
        nome: "Max",
        idade: "2 anos",
        img: dog3
      },
      {
        nome: "Bolt",
        idade: "2 meses",
        img: dog4
      }
    ],
    cats: [
      {
        nome: "The Baron",
        idade: "5 anos",
        img: cat1
      },
      {
        nome: "Marie",
        idade: "2 meses",
        img: cat2
      },
      {
        nome: "Miyo",
        idade: "3 meses",
        img: cat3
      },
      {
        nome: "Jeane",
        idade: "5 anos",
        img: cat4
      }
    ],
    msg: null
  };

  dog = () => {
    let { cats, dogs, msg } = this.state;
    let { greet } = this;

    this.setState({
      msg: dogs.map((item) => (
        <ShowUp>
          <Img src={item.img} />
          <Nome>{item.nome}</Nome>
          <Button onClick={greet}>Adotar</Button>
        </ShowUp>
      ))
    });
  };

  cat = () => {
    let { cats, dogs, msg } = this.state;
    let { greet } = this;

    this.setState({
      msg: cats.map((item) => (
        <ShowUp>
          <Img src={item.img} />
          <Nome>{item.nome}</Nome>
          <Button onClick={greet}>Adotar</Button>
        </ShowUp>
      ))
    });
  };

  clear = () => {
    this.setState({
      msg: null
    });
  };

  greet = () => {
    this.setState({
      msg: "Obrigade por me resgatar! Somos família agora!"
    });
  };

  render() {
    let { msg } = this.state;
    let { dog, cat, clear } = this;
    return (
      <Container>
        <GlobalStyle />
        <H1>
          <p>Pet</p>Adoption
        </H1>
        <Figure>
          <Image src={doguinho} onClick={dog} />
          <Image src={gatinho} onClick={cat} />
          <EraseButton onClick={clear}>CLEAR</EraseButton>
        </Figure>
        <GetBack>{msg}</GetBack>
      </Container>
    );
  }
}
