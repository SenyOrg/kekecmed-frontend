/**
 * IMPORT
 */
import React from 'react';
import {Cell} from 'fixed-data-table';

/**
 * SelectionCell
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class SelectionCell extends React.Component {

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    if (this.props.selection[this.props.data[this.props.rowIndex]['id']]) {
      return (<Cell className="bg-navy-active" {...this.props}><i className="fa fa-check-square"></i></Cell>)
    }

    return <Cell {...this.props}></Cell>;
  }
}

export default SelectionCell;