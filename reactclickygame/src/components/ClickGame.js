import React from "react";
import GameCard from "./GameCard";

// By extending the React.Component class, Counter inherits functionality from it
class ClickGame extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    topScore: 0,
    currentScore: 0,
    images: ["https://via.placeholder.com/200x200?text=firstImage #1", "https://via.placeholder.com/200x200?text=secondImage #2","https://via.placeholder.com/200x200?text=thirdImage #3","https://via.placeholder.com/200x200?text=fourthImage #4",],
    selectedImages:[]
  };

  setTopScore = () => {
      if(this.state.currentScore >= this.state.topScore){
     this.setState({ topScore: this.state.currentScore });
      }
  };

  iterateCurrentScore = () => {
     this.setState({ currentScore: this.state.currentScore + 1 });
  };

  resetCurrentScoreAndEmptySelectedImagesArray = () => {
     this.setState({ currentScore: 0});
     this.setState({selectedImages: []});
  };

  setRandomOrder = () => {
      const randomizeArray = this.state.images.map(elem => {
        return {"index": Math.random(),
    "image": elem};
      })

      const newImages = randomizeArray.sort(function(a, b){
            return a.index-b.index
        });
        newImages.map(elem => elem.images);
    this.setState({ images: newImages });
  };

  compareSelection = (event) => {
      if(this.selectedFriends.indexOf(event.target.href)){
        this.iterateCurrentScore();
        this.setTopScore();
        this.setRandomOrder();
      }else{
        this.resetCurrentScoreAndEmptySelectedImagesArray();
        this.setRandomOrder();
      }
  }

  componentDidMount = () => {
      console.log('componentDidMount');
    // We always use the setState method to update a component's state
    // this.setState({ count: this.state.count - 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
    <div className="container">
      <div className="row">
        {this.state.images.map(elem => {return (<GameCard href={elem}></GameCard>);}
        )}
      </div></div>
    );
  }
}

export default ClickGame;