/**
 * IMPORTS
 */
import React from 'react';
import TaskItem from './TaskItem'

/**
 * Tasks
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class Tasks extends React.Component {

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
      <div className="box box-default">
        <div className="box-header ui-sortable-handle">
          <i className="ion ion-clipboard"></i>

          <h3 className="box-title">Tasks</h3>

          <div className="box-tools">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
            </button>
          </div>
        </div>
        {/*<!-- /.box-header -->*/}
        <div className="box-body">
          <ul className="todo-list">
            {this.props.data && this.props.data.length > 0 ? this.props.data.map((v) => <TaskItem data={v}
                                                                                                  key={v.id}/>) :
              <li>No data available</li>}
          </ul>
        </div>
        {/*<!-- /.box-body -->*/}
        <div className="box-footer clearfix no-border">
          <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus"></i> Add item</button>
        </div>
        {!this.props.data && <div className="overlay"><i className="fa fa-refresh fa-spin"></i></div>}
      </div>
    );
  }
}

export default Tasks;