import React from "react";

import ToolBar from "../components/ToolBar";
import Canvas from "../components/Canvas";

var _ = require('lodash')

export default class Paint extends React.Component {
  constructor() {
      super();

      this.state = {
        currentColor: "black",
        currentLineWeight: "5",
        undoDisabled: true,
        redoDisabled: true,
      };

      this.changeCurrentColor = this.changeCurrentColor.bind(this);
      this.changeCurrentLineWeight = this.changeCurrentLineWeight.bind(this);
      this.toggleUndo = this.toggleUndo.bind(this);
      this.toggleRedo = this.toggleRedo.bind(this);

      this.undo = this.undo.bind(this);
      this.redo = this.redo.bind(this);
  }

  changeCurrentColor(color) {
    this.setState({
      currentColor: color
    });
  }

  changeCurrentLineWeight(lineWeight) {
    this.setState({
      currentLineWeight: lineWeight
    });
  }

  toggleUndo(enabled) {
    this.setState({
      undoDisabled: !enabled
    });
  }

  toggleRedo(enabled) {
    this.setState({
      redoDisabled: !enabled
    });
  }

  undo() {
    this.refs.canvas.undo()
  }

  redo() {
    this.refs.canvas.redo()
  }

  render() {

    return (

      <div class="row">

        <div class="col-sm-12 col-md-4">

          <div id="accordion" role="tablist">
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Show/Hide Tools 
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                  <ToolBar changeCurrentColor={this.changeCurrentColor}
                        changeCurrentLineWeight={this.changeCurrentLineWeight}
                        undo={this.undo}
                        redo={this.redo}
                        currentColor={this.state.currentColor}
                        currentLineWeight={this.state.currentLineWeight}
                        undoDisabled={this.state.undoDisabled}
                        redoDisabled={this.state.redoDisabled}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="canvas-container"
             class="col-sm-12 col-md-8">
          <Canvas currentColor={this.state.currentColor}
                  currentLineWeight={this.state.currentLineWeight}
                  toggleUndo={this.toggleUndo}
                  toggleRedo={this.toggleRedo}
                  ref="canvas"/>
        </div>
      </div>
    );
  }
}
