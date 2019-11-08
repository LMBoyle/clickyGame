// Imports ===================================================================

import React, { Component } from 'react';
import './App.css';
import CharCard from "./components/CharCard/CharCard"
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";
import characters from "./characters.json"

// Vars ======================================================================

// Export ====================================================================

export default
// Functions =================================================================
  class App extends Component {
    state = {
      characters,
      id: "",
      isClicked: "",
    };

    // Shuffle the cards
    shuffle = () => {
      this.setState({
        characters: this.state.characters.sort(function(a,b){
          return 0.5 - Math.random()
        })
      })
    }

    // When clicked, set the character to clicked
    setClicked = id => {
      console.log("you clicked on the " + id + " character");
      let clickedChar = this.state.characters.find(char => char.id === id);
      console.log(clickedChar)

      clickedChar.isClicked = true
      
      this.setState({
        characters: this.state.characters
      })
      // if (!clickedChar.isClicked)
      
      this.shuffle()
      console.log(this.state.characters)
    }

    render() {
      return (
        <Wrapper>
          <Title> Characters List </Title>

          {this.state.characters.map(character => (
            <CharCard
              key={character.id}
              characters={character}
              onClick={() => this.setClicked(character.id)}
            />
          ))}
        </Wrapper>
      );
    }
  }