/**
 * IMPORTS
 */
import React from 'react';
import {Cell} from 'fixed-data-table';
import {getCellProperties} from '../helper';

/**
 * TextCell
 *
 * Default cell that simply displays an text cell without any formating
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class TextCell extends React.Component {

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    const {rowIndex, data, columnKey} = this.props;

    return (<Cell {...getCellProperties(this.props)}>{data[rowIndex][columnKey]}</Cell>);
  }
}

export default TextCell;