import { uniqueId } from '../../util/idGenerator';
import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
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
    this.setState({title: e.target.value});
  }

  setBody(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = uniqueId();
    let { title, body } = this.state;
    const todo = { title, body, done: false };
    this.props.createTodo(todo).then(
      () => this.setState({ title: "", body: ""})
    );
  }

  render() {
    const { title, body } = this.state;

    const errors = this.props.errors.map((e, i) => (
      <li key={i}>{e}</li>
    )
  );
    return (
      <form
       onSubmit={this.handleSubmit}
       className="todo-form-view">
        <span className="errors-view">
          <ul>{ errors }</ul>
        </span>
        <input className="input" placeholder="Title" value={title} onChange={this.setTitle} />
        <input className="input" placeholder="Body" value={body} onChange={this.setBody} />
        <button className="create-button">Create Todo</button>
      </form>
    )
  }
};

export default TodoForm;
