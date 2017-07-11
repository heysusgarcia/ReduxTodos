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
    const { title, body } = this.state;
    debugger;
    const step = {
      title,
      body,
      done: false,
      todo_id: this.props.todoId
    }
    this.props.createStep( this.props.todoId, {step} )
    .then(
      () => this.setState({ title: "", body: "" })
    );
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={this.setTitle} />
        <input type="text" placeholder="Body" value={body} onChange={this.setBody} />
        <button className="create-button">Create Step</button>
      </form>
    )
  }
};

export default StepForm;
