import React from "react";

function GameCard(props) {
    return (
        <div className="col-md-3 col-sm-4 col-xs-6">
        <image href={props.image}/>
        </div>
    )
}

export default GameCard;