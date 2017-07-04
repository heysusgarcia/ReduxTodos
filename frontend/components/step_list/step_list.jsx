import React from 'react';
import StepListItem from './step_list_item';
import StepForm from './step_form';

class StepList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <StepListItem/>
        </ul>
        <StepForm />
      </div>
    )
  }
}

export default StepList;
