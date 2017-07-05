import { uniqueId } from '../../utils/idGenerator';
import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      body: ""
    };

    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setTitle(e) {
    e.preventDefault();
    this.setState({title: e.target.value})
  }

  setBody(e) {
    e.preventDefault();
    this.setState({body: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = uniqueId();
    const { title, body } = this.state;
    this.props.receiveStep({
      id,
      title,
      body,
      done: false,
      todo_id: this.props.todo_id
    });
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Title" value={title} onChange={this.setTitle} />
        </label>
        <br/>
        <label>
          <input type="text" placeholder="Body" value={body} onChange={this.setBody} />
        </label>

        <br/>
        <button className="button create-button">Create Step</button>
      </form>
    )
  }
};

export default StepForm;
