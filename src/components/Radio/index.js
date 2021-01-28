import React, { Component } from "react";
import "./Radio.css";

class Radio extends Component {
  // Hvis knappen endres, send melding om dette til parent.
  handleChange = () => {
    this.props.handleChange(this.props.value);
  };

  render() {
    return (
      <label className="container">
        {this.props.text}
        <input
          type="radio"
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.handleChange}
        />
        <span className="checkmark" />
      </label>
    );
  }
}

export default Radio;
