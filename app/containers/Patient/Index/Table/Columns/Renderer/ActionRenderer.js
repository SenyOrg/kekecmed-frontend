import React from 'react';

/**
 * Action Renderer
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class ActionRenderer extends React.Component {

  /**
   * Render component
   */
  render() {
    return (<div>
      <a onClick={(e) => this.props.context.props.onOpenPatient(this.props.value)} className="label label-primary"><i className="fa fa-pencil"></i> Edit</a>&nbsp;
      <a onClick={(e) => this.props.context.props.onDelete(this.props.value)} className="label label-danger"><i className="fa fa-times"></i> Delete</a>
    </div>);
  }
}

export default ActionRenderer;