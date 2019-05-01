import React from "react";

function GameCard(props) {
    return (
        <div onClick={props.compareSelection} className="col-md-3 col-sm-4 col-xs-6">
        <img alt="placeholder" src={props.href} ></img>
        </div>
    )
}

export default GameCard;