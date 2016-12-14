/**
 * IMPORTS
 */
import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { saveTableState, fetchPatients, deletePatients } from '../state/actions';
import { selectTable, selectPatientList, selectFetchedState } from '../state/selectors';

import ColumnDefinitions from './Columns/Definitions';

/**
 * Patient Table
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class Table extends React.Component {

  api = null;
  columnApi = null;

  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.onSelection = this.onSelection.bind(this);
    this.onUnselection = this.onUnselection.bind(this);
    this.onQuickFilterChanged = this.onQuickFilterChanged.bind(this);

    this.state = {
      quickFilter: this.props.tableState.quickFilter,
      totalRows: 0,
      displayedRows: 0
    }
  }

  /**
   * On component did update
   */
  componentDidUpdate() {
    this.api.setQuickFilter(this.state.quickFilter);
    this.api.setFilterModel(this.props.tableState.filterModel);
    this.api.setSortModel(this.props.tableState.sortModel);
    this.api.sizeColumnsToFit();
  }

  /**
   * On component will unmount
   *
   * This will save the table states
   * into the store to be able to restore it
   */
  componentWillUnmount() {
    // Save table state into the store
    this.props.saveTableState({
      quickFilter: this.state.quickFilter,
      filterModel: this.api.getFilterModel(),
      selection: this.api.getSelectedRows(),
      sortModel: this.api.getSortModel(),
    });
  }

  /**
   * Render
   */
  render() {
    const data = (this.props.fetched) ? this.props.data : null;

    if (this.props.fetched) {
      return (
        <div className={'box'}>
          <div className={'box-header'}>
            <h3 className="box-title"></h3>
            <button className="btn btn-default" onClick={this.onSelection}><i className="glyphicon glyphicon-check"></i>
              Select
            </button>
            &nbsp;
            <button className="btn btn-default" onClick={this.onUnselection}><i
              className="glyphicon glyphicon-unchecked"></i> Unselect
            </button>
            &nbsp;
            <button className="btn btn-primary"><i className="fa fa-plus"></i> Create</button>
            &nbsp;
            <button className="btn btn-danger"
                    onClick={(e) => this.props.onSelectionDelete(this.api.getSelectedRows())}><i
              className="fa fa-trash"></i> Delete
            </button>
            &nbsp;
            <button className="btn btn-default" onClick={this.props.onRefresh}><i className="fa fa-refresh"></i> Refresh
            </button>
            &nbsp;
            <button className="btn btn-warning" onClick={this.onReset.bind(this)}><i className="fa fa-flash"></i> Reset
            </button>
            &nbsp;
            <div className="box-tools">
              <div className="input-group input-group-sm" style={{width: 150}}>
                <input type="text" onChange={this.onQuickFilterChanged} value={this.state.quickFilter}
                       className="form-control pull-right"/>

                <div className="input-group-btn">
                  <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className={'box-body', 'no-padding'}>
            <div style={{height: 400}} className="ag-kekecmed">
              <AgGridReact
                context={this}
                onGridReady={this.onGridReady.bind(this)}
                rowData={this.props.data}
                columnDefs={new ColumnDefinitions().getColumnDefinitions()}
                rowSelection="multiple"
                enableColResize="true"
                enableSorting="true"
                enableFilter="true"
                rowHeight="32"
                debug={true}
                quickFilterText={this.state.quickFilter}
                onAfterFilterChanged={function() {

                }}
              />
            </div>
          </div>
          <div className={'box-footer'}>
            {/*{this.state.displayedRows}*/}
          </div>
        </div>
      )
    }

    return null;
  }

  /**
   * Select all
   */
  onSelection() {
    this.api.selectAll();
  }

  /**
   * Unselect all
   */
  onUnselection() {
    this.api.deselectAll();
  }

  /**
   * Callback: Grid Ready
   *
   * @param params
   */
  onGridReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.api.setQuickFilter(this.props.tableState.quickFilter);
    this.api.setFilterModel(this.props.tableState.filterModel);
    this.api.setSortModel(this.props.tableState.sortModel);

    // @todo Set selected rows here
  }

  /**
   * On quickfilter changed
   *
   * @param e
   */
  onQuickFilterChanged(e) {
    this.setState({
      quickFilter: e.target.value
    });
  }

  /**
   * On Reset
   */
  onReset() {
    this.setState({
      quickFilter: ''
    });
    this.api.setFilterModel({});
    this.api.setSortModel({});
  }
}

/**
 * Map dispatch to props
 *
 * @param dispatch
 * @returns {{refresh: (function(*): *)}}
 */
export function mapDispatchToProps(dispatch) {
  return {
    /**
     * Save table state
     *
     * @param state
     */
    saveTableState: (state) => dispatch(saveTableState(state)),

    /**
     * Delete selected patients
     *
     * @param selectedRows
     */
    onSelectionDelete: (selectedRows) => {
      dispatch(deletePatients(selectedRows.map((v) => v.id)));
    },

    /**
     * Refresh Data
     */
    onRefresh: () => {
      dispatch(fetchPatients());
    },

    /**
     * Delete one single patient
     *
     * @param id
     */
    onDelete: (id) => dispatch(deletePatients([id])),

    /**
     * Open Patient
     *
     * @param id
     */
    onOpenPatient: (id) => {
      dispatch(push('/patient/'+id))
    }
  };
}

/**
 * Map state to props
 */
const mapStateToProps = createStructuredSelector({
  tableState: selectTable(),
  data: selectPatientList(),
  fetched: selectFetchedState()
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Table);


