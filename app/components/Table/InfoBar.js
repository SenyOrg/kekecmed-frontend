/**
 * IMPORTS
 */
import React from 'react';
import ResultIndicator from './Partials/ResultIndicator';
import SelectionIndicator from './Partials/SelectionIndicator';
import CountIndicator from './Partials/CountIndicator';
import HiddenColumnControl from './Partials/HiddenColumnControl';

/**
 * Table: InfoBar
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class InfoBar extends React.Component {

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
    const {tableState, tableProps, tableInstance} = this.props;

    return (<div className="box-footer">
        <ResultIndicator onResetFilter={tableInstance.onResetFilter}
                         filterCount={tableInstance.data.length}
                         filterText={tableState.filter}
        />
        <div className="pull-right">
          <HiddenColumnControl hiddenColumns={tableState.hiddenColumns} onColumnHide={tableInstance.onColumnHide}/>
          <a className="btn btn-sm btn-default" onClick={tableInstance.onReset}><i className="fa fa-times-circle"></i>
            Reset</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <a className="btn btn-sm btn-success"><i className="fa fa-refresh"></i> Refresh</a>&nbsp;&nbsp;|&nbsp;&nbsp;
          <SelectionIndicator selection={tableState.selected}/>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <CountIndicator filteredCount={tableInstance.data.length} totalCount={tableProps.data.length}/>
        </div>
      </div>
    );
  }
}

export default InfoBar;