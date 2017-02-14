import React from "react";
import { findDOMNode } from 'react-dom'

var _ = require('lodash')

export default class Canvas extends React.Component {

  constructor(props) {
    super(props);

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.respondCanvas = this.respondCanvas.bind(this)

    this.paint = false

    this.points = new Array();
    this.undos = new Array();

    // this.ctx = null

    // this.state.color = this.props.state.currentColor
  }

  componentDidMount() {
    this.canvas = findDOMNode(this);
    this.ctx = this.canvas.getContext("2d");

    //Run function when browser resizes
    window.addEventListener("resize", this.respondCanvas)

    //Initial call
    this.respondCanvas();
  }

  respondCanvas(){
      let container = document.getElementById("canvas-container")

      this.ctx.canvas.width = container.offsetWidth - 30;
      this.ctx.canvas.heigth = container.offsetHeight;

      this.redraw()
  }

  redraw(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // Clears the canvas
    
    this.ctx.lineJoin = "round";
    for(var i=0; i < this.points.length; i++) {    
      this.ctx.beginPath();
      if(this.points[i].dragging && i){
        this.ctx.moveTo(this.points[i-1].clickX, this.points[i-1].clickY);
      }
      else{
        this.ctx.moveTo(this.points[i].clickX-1, this.points[i].clickY);
      }
      this.ctx.lineTo(this.points[i].clickX, this.points[i].clickY);
      this.ctx.closePath();

      this.ctx.strokeStyle = this.points[i].color;
      this.ctx.lineWidth = this.points[i].lineWeight;
      this.ctx.stroke();
    }
  }


  addClick(x, y, dragging) {
    this.points.push({
      clickX: x,
      clickY: y,
      dragging: dragging,
      color: this.props.currentColor,
      lineWeight: this.props.currentLineWeight
    })
  }

  onMouseDown(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
      
    this.paint = true;
    this.addClick(e.clientX - left, e.clientY - top, false);
    this.redraw();

    this.props.toggleUndo(true)

    // Reset array of undone drawings
    this.undos = []
    this.props.toggleRedo(false)
  }

  onMouseMove(e) {
    if(this.paint){
      const {top, left} = this.canvas.getBoundingClientRect();
      this.addClick(e.clientX - left, e.clientY - top, true);
      this.redraw();
    }
  }

  onMouseOut(e) {
    this.paint = false;
  }

  onMouseUp(e) {
    this.paint = false;
  }

  undo(){
    let lastCheckpoint = _.findLastIndex(this.points, {'dragging': false});
    let undonePoints = this.points.splice(lastCheckpoint)
    this.undos.push(undonePoints)

    this.props.toggleRedo(true)

    if(this.points.length == 0){
      this.props.toggleUndo(false)
    }

    this.redraw();
  }

  redo(){
    let toRedrawPoints = this.undos.pop()
    this.points = this.points.concat(toRedrawPoints)

    this.props.toggleUndo(true)

    if(this.undos.length == 0){
      this.props.toggleRedo(false)
    }

    this.redraw();
  }


  render() {

    const CanvasStyle = {
      backgroundColor: "#fff",
      border: " 1px solid #eee",
      position: "relative",
      cursor: "crosshair"
    };

    return (
      <canvas
        style={ CanvasStyle }
        width="650"
        height="450"
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseOut={this.onMouseUp}
        onMouseUp={this.onMouseUp}>
      </canvas>
    );
  }
}
