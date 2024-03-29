import React from "react";
import ColorBox from "../components/tools/ColorBox";
import LineWeightSelector from "../components/tools/LineWeightSelector";
import UndoRedo from "../components/tools/UndoRedo";

export default class ToolBar extends React.Component {
  constructor(props){
    super(props)
    this.colors = ['#FFF', '#000', '#F00',
                    '#0F0', '#00F', '#FFFF00',
                    '#FF00FF', '#00FFFF', '#8B4513',
                    '#FFA500', '#FFAEB9', '#eee',
                    '#666', '#CD2626', '#228B22',
                    '#87CEFF', '#BF3EFF']
    this.lineWeights = ['5', '10', '15', '20']
  }

  render() {

    const ToolBarStyle = {
      row: {
        padding: "10px",
      }
    }

    const Colors = this.colors.map((color, i) => <ColorBox key={i} bgcolor={color} changeCurrentColor={this.props.changeCurrentColor} currentColor={this.props.currentColor} /> );
    const LineWeights = this.lineWeights.map((lineWeight, i) => <LineWeightSelector key={i} lineWeight={lineWeight} changeCurrentLineWeight={this.props.changeCurrentLineWeight} currentLineWeight={this.props.currentLineWeight} /> );

    return (
      <div style={ToolBarStyle}>
        <div class="text-center h3">Tools</div>
        <div class="row" style={ToolBarStyle.row}>
          <div class="col-md-12">
            <UndoRedo undo={this.props.undo}
                      redo={this.props.redo}
                      undoDisabled={this.props.undoDisabled}
                      redoDisabled={this.props.redoDisabled}
            />
          </div>
        </div>
        <div class="row" style={ToolBarStyle.row}>
          <div class="col-md-12">
            <p><strong>Pick a color:</strong></p>
            {Colors}
          </div>
        </div>
        <div class="row" style={ToolBarStyle.row}>
          <div class="col-md-12">
            <p><strong>Pick a line height:</strong></p>
            {LineWeights}
          </div>
        </div>
      </div>
    );
  }
}
