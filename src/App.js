import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Nav from"./components/Nav";
import Container from"./components/Container";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import pictures from "./pictures.json";

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures
  };

  removepicture = id => {
    // Filter this.state.pictures for pictures with an id not equal to the id being removed
    const pictures = this.state.pictures.filter(picture => picture.id !== id);
    // Set this.state.pictures equal to the new pictures array
    this.setState({ pictures });
  };

  // Map over this.state.pictures and render a pictureCard component for each picture object
  render() {
    return (
      <Wrapper>
      <Nav></Nav>
      <Hero></Hero>
        <Container>
        {this.state.pictures.map(picture => (
          <PictureCard
            removepicture={this.removepicture}
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
        ))}
        </Container>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
