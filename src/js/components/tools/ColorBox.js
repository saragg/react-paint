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
      border: "1px solid #666",
      height: "25px",
      width: "25px",
      display: "inline-block",
      marginRight: "8px",
      marginBottom: "5px",
      cursor: "pointer",
      borderRadius: "50%",
      padding: "5px 5px",
    };

    var CheckStyle = {
      position: "absolute",
      color: this.props.bgcolor == "#000" ? "#FFF" : "#000",
    }

    return (
      <div style={ColorBoxStyle} onClick={this.changeColor}>
        { this.state.isActive ? <div class="fa fa-check" style={CheckStyle}></div>: null}
      </div>
    );
  }
}