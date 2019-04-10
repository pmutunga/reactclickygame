import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import pictures from "./pictures.json";

// By extending the React.Component class, App inherits functionality from it
class App extends Component {
  // Setting the initial state of the App component
  state = {
    pictures,
    clickedArray: [],
    score: 0,
    topscore: 0,
    // clicked: false,
    message: "Click an image to begin!"
  };


  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState({
      pictures: a
    });
  };

  //handle Top Score
  handleTopScore = currentTopScore => {
    console.log(currentTopScore);
    if(currentTopScore>this.state.topscore){
      this.setState({topscore: currentTopScore});
    }
  }

  //handleClick
  handleClick = id => {
    // Filter this.state.pictures to get the id of the clicked picture
    // console.log(id);
   
    //check if already clicked
    if (this.state.clickedArray.includes(id)) {
      //handle lost round

      // console.log("this was clicked twice");
      this.handleReset();
    } else {
      // this.state.clickedArray.push(id); NOT GOOD!
      //make a copy of state using slice

      const newArray = this.state.clickedArray.slice();
      newArray.push(id);
      this.setState({ clickedArray: newArray });
      this.handleIncrement();
    }
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 },() => {
      this.handleTopScore(this.state.score);
    });
    // this.setState({ topscore: this.state.topscore + 1 });
    this.shuffle(this.state.pictures);
    ;
  };

  // handleReset resets this.state.score to 0
  handleReset = () => {
    // We always use the setState method to update a component's state
    // this.setState({ score: 0 });
    // this.setState({pictures:this.shuffleCards});
    this.startGame();
  };

  startGame = () => {
    this.setState({pictures: pictures});
    this.setState({clickedArray: []});
    this.setState({score: 0});
    this.setState({message: "Click an image to play again!"});
    this.setState({reset: "false"});
  }

  // Map over this.state.pictures and render a pictureCard component for each picture object
  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topscore={this.state.topscore}
        />
        <Footer />
        <Hero />
        <Container>
          {this.state.pictures.map(picture => (
            <PictureCard
              id={picture.id}
              key={picture.id}
              image={picture.image}
              handleClick={this.handleClick}
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default App;
