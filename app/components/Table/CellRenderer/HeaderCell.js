/**
 * IMPORTS
 */
import React from 'react';
import {Cell} from 'fixed-data-table';


/**
 * HeaderCell
 *
 * Default cell that simply displays an text cell without any formating
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class HeaderCell extends React.Component {

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
   *
   * @returns {XML}
   */
  render() {
    const sortState = this.props.state.sort;
    let sortSymbol  = null;
    let hideButton  = null;

    // Sortable Handling
    if (this.props.sortable) {
      sortSymbol = <i className="fa fa-sort pull-right"></i>;

      if (sortState.column === this.props.columnKey) {
        if (sortState.direction === 'ASC') {
          sortSymbol = <i className="fa fa-sort-asc pull-right"></i>
        } else if (sortState.direction === 'DESC') {
          sortSymbol = <i className="fa fa-sort-desc pull-right"></i>
        }
      }
    }

    // Hideable Handling
    if (this.props.hideable) {
      hideButton = <button type="button" className="btn btn-xs btn-default" onClick={(evt) => {
        evt.stopPropagation();
        this.props.state.handler.hide(this.props.columnKey)
      }}><i className="fa fa-eye"></i></button>;
    }

    // Click Handler
    const clickHandler = ((evt) => {
      if (this.props.sortable) {
        this.props.state.handler.sort(this.props.columnKey)
      }
    }).bind(this);

    return <Cell onClick={clickHandler} {...this.props}>
      {this.props.title} {hideButton} {sortSymbol}
    </Cell>
  }
}

export default HeaderCell;