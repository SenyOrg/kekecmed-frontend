/**
 * IMPORT
 */
import React from 'react';
import {Cell} from 'fixed-data-table';
import {getCellProperties} from '../helper';

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
      return (<Cell {...getCellProperties(this.props)} className="bg-navy-active"><i className="fa fa-check-square"></i></Cell>)
    }

    return <Cell {...getCellProperties(this.props)}></Cell>;
  }
}

export default SelectionCell;