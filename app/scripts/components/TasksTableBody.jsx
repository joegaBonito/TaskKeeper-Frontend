import React from 'react';
import { Table } from 'reactstrap';

export default class TasksTableBody extends React.PureComponent {
    constructor(props) {
        super(props);
        const {tasks} = this.props;
    }

    taskView = (task) => {
      this.props.history.push(`/taskkeeping-get-${task}`);
    }
    
    tdItems = this.props.tasks.map((task,i)=>{
        return([
          <th key="i+id" scope="row">{task.id}</th>,
          <td key="i+title" onClick={taskView(task)}>{task.title}</td>,
          <td key="i+owner">{task.owner}</td>,
          <td key="i+date_created">{task.date_created}</td>,
          <td key="i+date_modified">{task.date_modified}</td>,
          ]
        );
      }
    );
    trItems = this.tdItems.map((tdItem,i)=>{
        return <tr key={i}>{tdItem}</tr>
    });
    render(){
    return (
      <tbody>
        {this.trItems}
      </tbody>
    );
  }
}