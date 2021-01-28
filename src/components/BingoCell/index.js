import React, { Component } from "react";
import "./BingoCell.css";

class BingoCell extends Component {
  handleClick = () => {
    this.props.handleCellChange(this.props.id);
  };

  render() {
    return (
      <div
        className={this.props.clicked ? "cell cell-selected" : "cell"}
        onClick={this.handleClick}
      >
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default BingoCell;
