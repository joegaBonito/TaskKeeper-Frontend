import React from 'react';
import { connect } from 'react-redux';

export class TaskView extends React.PureComponent {
    render() {
        
    }
}

function mapStateToProps(state) {
    return {
        task: state.task
    }
}

export default connect(mapStateToProps)(TaskView);