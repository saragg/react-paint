import React from "react";

export default class UndoRedo extends React.Component {
  constructor(props){
    super(props)
    this.handleUndoClick = this.handleUndoClick.bind(this)
    this.handleRedoClick = this.handleRedoClick.bind(this)

    this.state = {
      undoDisabled: this.props.undoDisabled,
      redoDisabled: this.props.redoDisabled
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.undoDisabled !== this.props.undoDisabled) {
      this.setState({ undoDisabled: newProps.undoDisabled});
    }
    if (newProps.redoDisabled !== this.props.redoDisabled) {
      this.setState({ redoDisabled: newProps.redoDisabled});
    }
  }

  handleUndoClick () {
    this.props.undo();
  }

  handleRedoClick () {
    this.props.redo();
  }

  render() {

    return (
      <div class="btn-group" role="group">
        <button onClick={this.handleUndoClick}
                class="btn btn-default"
                disabled={this.state.undoDisabled}>
          <div class="fa fa-undo"></div> Undo
        </button>
        <button onClick={this.handleRedoClick}
                class="btn btn-default"
                disabled={this.state.redoDisabled}>
          <div class="fa fa-repeat"></div> Redo
        </button>
      </div>
    );
  }
}