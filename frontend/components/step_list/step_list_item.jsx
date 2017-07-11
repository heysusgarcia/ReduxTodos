import React from 'react';
import merge from 'lodash/merge';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleStep = this.toggleStep.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeStep(this.props.step);
  }

  toggleStep(e) {
    e.preventDefault();
    const done = { done: !this.props.step.done };
    const step = merge({}, this.props.step, done);
    this.props.updateStep( step );
  }

  render() {
    const step = this.props.step;
    return (
      <li className="step-item">
        <p className="step-title"> { step.title } </p>
        <p className="step-body"> { step.body } </p>

        <div>
          <button
           className={ step.done ? "done" : "undone" }
           onClick={this.toggleStep}>
           { step.done? "Undo" : "Done" }
          </button>

          <button
           className="delete-button"
           onClick={this.handleDelete}>
           Delete
           </button>
        </div>
      </li>
    )
  }
};

export default StepListItem;
