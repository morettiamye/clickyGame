import React, { Component } from "react";
import cats from "./cats.json";
import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import Catcard from "./components/Catcard";
import Wrapper from "./components/Wrapper";

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        cats: cats,
        unselectedCats: cats
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectCat = name => {
        const findCat = this.state.unselectedCats.find(item => item.name === name);

        if(findCat === undefined) {
            
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                cats: cats,
                unselectedCats: cats
            });
        }
        else {

            const newCats = this.state.unselectedCats.filter(item => item.name !== name);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                cats: cats,
                unselectedCats: newCats
            });
        }

        this.shuffleArray(cats);
    };

    render() {
        return (
            <Wrapper>
                <Navbar
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Instructions />
                {
                    this.state.cats.map(cat => (
                        <Catcard
                            name={cat.name}
                            image={cat.image}
                            selectCat={this.selectCat} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;