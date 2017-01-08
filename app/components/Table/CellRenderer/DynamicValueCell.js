/**
 * IMPORTS
 */
import React from 'react';
import {Cell} from 'fixed-data-table';


/**
 * Dynamic Value Cell
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class DynamicValueCell extends React.Component {
  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    const {valueHandler, columnKey, rowIndex, data, ...props} = this.props;

    return <Cell {...props}>{valueHandler(data, rowIndex, columnKey)}</Cell>
  }
}

export default DynamicValueCell;