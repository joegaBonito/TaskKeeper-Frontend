import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { createTask } from 'actions/index';

export class TaskCreateForm extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      owner:'',
      date_created:'',
      date_modified:'',
      status:'',
      description:''
    }
  }

  handleChange = (e) => {
    this.setState({
       title:e.target.title,
       owner:e.target.owner,
       date_created:e.target.date_created,
       date_modified:e.target.date_modified,
       status:e.target.status,
       description:e.target.description,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      'title':event.target[0].value,
      'owner': event.target[1].value,
      'date_created': event.target[2].value,
      'date_modified': event.target[3].value,
      'status': event.target[4].value,
      'description': event.target[5].value
    }
    this.props.dispatch(createTask(data));
  }

  render() {
      return (
        <div key="taskcreateform" className="app__taskcreateform app__route">
          <div className="app__container">
        <Form className="app__taskcreateform__form" onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Title"  onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="owner">Owner</Label>
            <Input type="text" name="owner" id="owner" placeholder="Owner"  onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="date_created">Date Created</Label>
            <Input type="text" name="date_created" id="date_created" placeholder="Date Created" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="date_modified">Date Modified</Label>
            <Input type="text" name="date_modified" id="date_modified" placeholder="Date Modified" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input type="text" name="status" id="status" placeholder="Status" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" placeholder="Description" onChange={this.handleChange} />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
        </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return { task : state.task};
}

export default connect(mapStateToProps)(TaskCreateForm);
