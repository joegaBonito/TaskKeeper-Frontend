import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { getTasks } from 'actions/index';
import Task from 'models/Task';

function TableBody(props) {
  const tasks = props.tasks;
  const tdItems = tasks.map((task,i)=>{
      return([
        <th key="i+id" scope="row">{task.id}</th>,
        <td key="i+title">{task.title}</td>,
        <td key="i+owner">{task.owner}</td>,
        <td key="i+date_created">{task.date_created}</td>,
        <td key="i+date_modified">{task.date_modified}</td>,
        ]
      );
    }
  );
  const trItems = tdItems.map((tdItem,i)=>{
      return <tr key={i}>{tdItem}</tr>
  });
  return (
    <tbody>
      {trItems}
    </tbody>
  );
}


export class Taskkeeper extends React.PureComponent {

  componentWillMount() {
      this.props.dispatch(getTasks());

  }

  render() {
    // const task1 = new Task(1,'title1','05/13/2018','Joe Jung','06/13/2018');
    // const task2 = new Task(2,'title2','05/13/2018','Hailey Seo','06/13/2018');
    const tasks = this.props.task.tasks;
    return (
      <div key="taskkeeper" className="app__taskkeeper app__route">
        <div className="app__container">
          <div className="app__taskkeeper__header">
            <h1>Task Keeper!</h1>
            <Table className="app__taskkeeper__table" bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Owner</th>
                  <th>Date Created</th>
                  <th>Date Modified</th>
                </tr>
              </thead>
              <TableBody tasks={tasks} />
            </Table>
            <Button className="app__taskkeeper__createButton" color="primary">Create</Button>
        </div>
      </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { task: state.task};
}

export default connect(mapStateToProps)(Taskkeeper);
