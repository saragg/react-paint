import React from "react";

export default class LineWeightSelector extends React.Component {
  constructor(props){
    super(props)

    this.changeLineWeight = this.changeLineWeight.bind(this)
    this.state = {
      isActive: this.props.currentLineWeight == this.props.lineWeight
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentLineWeight !== this.props.currentLineWeight) {
      this.setState({ isActive: newProps.currentLineWeight == newProps.lineWeight });
    }
  }

  changeLineWeight(){
    this.props.changeCurrentLineWeight(this.props.lineWeight);
  }

  render() {

    var LineWeightBoxStyle = {
      backgroundColor: "#000",
      border: "1px solid #333",
      height: this.props.lineWeight + "px",
      width: "200px",
      marginBottom: "8px",
      cursor: "pointer",
      borderRadius: "25px",
      opacity: this.state.isActive ? 1 : 0.3,
    };

    return (
      <div style={LineWeightBoxStyle} onClick={this.changeLineWeight}>
      </div>
    );
  }
}