/**
 * IMPORTS
 */
import React from 'react';
import {Cell} from 'fixed-data-table';

/**
 * SelectionHeaderCell
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class SelectionHeaderCell extends React.Component {

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    const {
            selection, dataLength, selectHandler, unselectHandler
          } = this.props;

    const allSelected = dataLength == Object.keys(selection).length;

    let content = (<i className="fa fa-square"></i>);
    if (allSelected) {
      content = (<i className="fa fa-check-square"></i>)
    }

    const clickHandler = (allSelected) ? unselectHandler : selectHandler;

    return <Cell {...this.props} onClick={clickHandler}>{content}</Cell>;
  }
}

export default SelectionHeaderCell;