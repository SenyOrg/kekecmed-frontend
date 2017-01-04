/**
 * IMPORTS
 */
import React from 'react';
import TaskStatus from './TaskStatus';

/**
 * TaskItem
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class TaskItem extends React.Component {

  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render
   */
  render() {
    return (
      <li>
        <span className="text">{this.props.data.title}</span>
        <br/>
        <small className="label label-info"><i className="fa fa-clock-o"></i> Created: {this.props.data.createdAt}
        </small>
        <small className="label label-danger"><i className="fa fa-clock-o"></i> Deadline: {this.props.data.deadline}
        </small>
        <TaskStatus data={this.props.data.status}/>
        <div className="tools">
          <i className="fa fa-edit"></i>
          <i className="fa fa-trash-o"></i>
        </div>
      </li>
    );
  }
}

export default TaskItem;