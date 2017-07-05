import { uniqueId } from '../../utils/idGenerator';
import React from 'React';

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
    const { title, body } = this.state;

    const todo = { id, title, body, done: false };
    this.props.receiveTodo(todo);
  }

  render() {
    const { title, body } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Title" value={title} onChange={this.setTitle} />
        </label>
        <br />
        <label>
          <input type="text" placeholder="Body" value={body} onChange={this.setBody} />
        </label>
        <br/>
        <button className="create-button">Create Todo</button>
      </form>
    )
  }
};

export default TodoForm;
