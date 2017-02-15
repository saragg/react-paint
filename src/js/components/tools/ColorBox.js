import React from "react";

export default class ColorBox extends React.Component {
  constructor(props){
    super(props)

    this.changeColor = this.changeColor.bind(this)
    this.state = {
      isActive: this.props.currentColor == this.props.bgcolor
    }
  }

  componentWillReceiveProps(newProps) {
    //highlight color if it is the currently selected
    if (newProps.currentColor !== this.props.currentColor) {
      this.setState({ isActive: newProps.currentColor == newProps.bgcolor });
    }
  }

  changeColor(){
    this.props.changeCurrentColor(this.props.bgcolor);
  }

  render() {

    var ColorBoxStyle = {
      backgroundColor: this.props.bgcolor,
      border: "1px solid #333",
      height: "20px",
      width: "20px",
      display: "inline-block",
      marginRight: "8px",
      opacity: this.state.isActive ? 1 : 0.3,
      cursor: "pointer"
    };

    return (
      <div style={ColorBoxStyle} onClick={this.changeColor}>
      </div>
    );
  }
}