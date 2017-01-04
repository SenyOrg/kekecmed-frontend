/**
 * IMPORTS
 */
import React from 'react';

/**
 * TaskStatus
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class TaskStatus extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Render
   */
  render() {
    const classNames = ['label'];

    switch (this.props.data.title) {
      case 'Offen':
        classNames.push('label-default');
        break;
      case 'Angenommen':
        classNames.push('label-primary');
        break;
      case 'In Bearbeitung':
        classNames.push('label-info');
        break;
      case 'Abgeschlossen':
        classNames.push('label-success');
    }

    return (<span className={classNames.join(' ')}>{this.props.data.title}</span>);

  }
}

export default TaskStatus;