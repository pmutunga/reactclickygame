import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Nav from"./components/Nav";
import Container from"./components/Container";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import pictures from "./pictures.json";

class App extends Component {
  // Setting this.state.cards to the pictures json array
  state = {
    pictures,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "Click an image to begin!",
    shakeit: "false"
  };
  
  clickPicture = id => {
    // Arrange the pictures in a random manner
    const shuffledArray = this.shuffleArray(pictures);
    this.setState({pictures: shuffledArray});
    // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "You guessed incorrectly! Click an image to play again!", shakeit: "true"});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "You guessed correctly",
        shakeit: "false"
      });
    }
    // set topscore = score if score>topscore.
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    // shake the wrapper if shakeit is set to true
  }
  shuffleArray = (picturesArray) => {
      for (let i = picturesArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
      }
      return picturesArray;
  }



  // Map over this.state.pictures and render a pictureCard component for each picture object
  render() {
    return (
      <Wrapper>
      
      <Nav>{this.state.message}{this.state.score}{this.state.topScore} </Nav>
      <Footer></Footer>
      <Hero></Hero>
        <Container>
        {this.pictures}=
        {this.state.pictures.map(picture => (
          <PictureCard
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
        ))}
        </Container>
   
      </Wrapper>
    );
  }
}

export default App;
