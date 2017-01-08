/**
 * IMPORTS
 */
import React from 'react';

/**
 * Table: TopBar
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class TopBar extends React.Component {

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
    const {tableInstance, tableProps, tableState} = this.props;

    return (
      <div className="box-header">
        <button type="button" className="btn" onClick={tableInstance.onSelectAll}><i className="fa fa-check-square"></i>
          Select all
        </button>
        &nbsp;
        <button type="button" className="btn" onClick={tableInstance.onUnselectAll}><i
          className="fa fa-minus-square"></i> Unselect all
        </button>
        &nbsp;
        {tableState.selected.length > 0 ?
          <button type="button" className="btn"><i className="fa fa-minus-square"></i> Delete all</button> : null}
        <button type="button" className="btn"><i className="fa fa-trash"></i> Delete all</button>
        &nbsp;
        <button type="button" className="btn"><i className="fa fa-plus"></i> Create</button>

        <div className="box-tools">
          <div className="input-group input-group-sm" style={{width: '250px'}}>
            <input type="text" value={tableState.filter} onChange={tableInstance.onFilterChanged}
                   className="form-control pull-right" placeholder="Search"/>

            <div className="input-group-btn">
              <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;