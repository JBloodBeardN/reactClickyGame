import React from "react";
import GameCard from "./GameCard";

// By extending the React.Component class, Counter inherits functionality from it
class ClickGame extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    topScore: 0,
    currentScore: 0,
    images: ["https://via.placeholder.com/200x200?text=firstImage", "https://via.placeholder.com/200x200?text=secondImage","https://via.placeholder.com/200x200?text=thirdImage","https://via.placeholder.com/200x200?text=fourthImage",],
    selectedImages:[]
  };

  setTopScore = (cb) => {
      if(this.state.currentScore >= this.state.topScore){
     this.setState({ topScore: this.state.currentScore });
      }
      cb();
  };

  iterateCurrentScore = (cb) => {
     this.setState({ currentScore: this.state.currentScore + 1 });
     cb();
  };

  resetCurrentScoreAndEmptySelectedImagesArray = (cb) => {
     this.setState({ currentScore: 0});
     this.setState({selectedImages: []});
     cb();
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
      console.log(event.target);
      console.log(this.state.selectedImages);
      if(this.state.selectedImages.indexOf(event.target.src)){
        this.iterateCurrentScore(this.setTopScore(this.setRandomOrder()));      
      }else{
        this.resetCurrentScoreAndEmptySelectedImagesArray(this.setRandomOrder());
        
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
    <h1>This is a title on ClickGame</h1>
      <div className="row">
        {this.state.images.map(elem => {
            return (<GameCard compareSelection={this.compareSelection} href={elem}></GameCard>);}
        )}
      </div></div>
    );
  }
}

export default ClickGame;