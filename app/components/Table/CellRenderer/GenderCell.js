/**
 * IMPORTS
 */
import React from 'react';
import {Cell} from 'fixed-data-table';

/**
 * GenderCell
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class GenderCell extends React.Component {

  /**
   * Render
   * @returns {XML}
   */
  render() {
    const icon = (this.props.data[this.props.rowIndex][this.props.columnKey] === 'm') ? <i className="fa fa-male"></i> :
      <i className="fa fa-female"></i>;

    return (<Cell {...this.props}>{icon}</Cell>);
  }
}

export default GenderCell;