/**
 * IMPORTS
 */
import React from 'react';
import {Table as FixedTable, Column, Cell} from 'fixed-data-table';
import ActionCell from './CellRenderer/ActionCell';
import SelectionCell from './CellRenderer/SelectionCell';
import SelectionHeaderCell from './CellRenderer/SelectionHeaderCell';
import TopBar from './TopBar';
import InfoBar from './InfoBar';

/**
 * Main Table Component
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class Table extends React.Component {
  initialState = null;

  actionColumnWidth    = 50;
  selectionColumnWidth = 30;

  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    // Setup initial state
    this.state = {
      filter: '',
      sort: {
        column: null,
        direction: null
      },
      selected: {},
      columnWidths: {},
      handler: {},
      filterable: [],
      handler: {
        sort: this.onSort.bind(this),
        hide: this.onColumnHide.bind(this)
      },
      hiddenColumns: [],
      autoWidthColumns: []
    };

    // Bind Handlers
    this.onSort             = this.onSort.bind(this);
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
    this.onColumnResizeEnd  = this.onColumnResizeEnd.bind(this);
    this.onFilterChanged    = this.onFilterChanged.bind(this);
    this.onRowClick         = this.onRowClick.bind(this);
    this.onSelectAll        = this.onSelectAll.bind(this);
    this.onUnselectAll      = this.onUnselectAll.bind(this);
    this.onReset            = this.onReset.bind(this);
    this.onColumnHide       = this.onColumnHide.bind(this);
    this.onResetFilter      = this.onReset.bind(this);

    // Setup filterable columns
    this.props.columns.forEach((v) => {
      if (v.filterable) {
        this.state.filterable.push(v.columnKey);
      }

      if (v.width == 'auto') {
        this.state.autoWidthColumns.push(v.columnKey);
      }
    });

    this.setInitialState(this.state);
  }

  setInitialState(initialState) {
    this.initialState = initialState;
  }

  /**
   * SelectAll Handler
   */
  onSelectAll() {
    const selection = {};
    this.data.forEach((v) => selection[v.id] = true);
    this.setState({selected: selection});
  }

  /**
   * UnselectAll Handler
   */
  onUnselectAll() {
    this.setState({selected: {}});
  }

  /**
   * Sort Handler
   *
   * @param args
   */
  onSort(columnKey) {
    const {column, direction} = this.state.sort;

    if (column === columnKey) {
      switch (direction) {
        case 'ASC':
          return this.setState({
            sort: {
              column: columnKey,
              direction: 'DESC'
            }
          });
        case 'DESC':
          return this.setState({sort: {}});
        default:
          return this.setState({
            sort: {
              column: columnKey,
              direction: 'ASC'
            }
          })
      }
    } else {
      return this.setState({
        sort: {
          column: columnKey,
          direction: 'ASC'
        }
      })
    }
  }

  /**
   * Get initial State
   *
   * @returns {{filter: string, sort: {column: null, direction: null}, selected: {}, columnWidths: {}, handler: {},
   *     filterable: Array}}
   */
  getState() {
    return this.initialState;
  }

  /**
   * Reset table
   */
  onReset() {
    this.setState({...this.getState()});
  }

  /**
   * Filter Handler
   *
   * @param filterText
   */
  onFilterChanged(evt) {
    this.setState({filter: evt.target.value});
  }

  /**
   * Column Resize Handler
   *
   * @param newColumnWidth
   * @param columnKey
   * @returns {boolean}
   */
  onColumnResizeEnd(newColumnWidth, columnKey) {
    this.setState(({columnWidths}) => ({
      columnWidths: {
        ...columnWidths,
        [columnKey]: newColumnWidth,
      }
    }));
  }

  /**
   * Changed Selection Handler
   */
  onSelectionChanged(evt, index) {
    const id  = this.data[index]['id'];
    const cpy = Object.assign({}, this.state.selected);

    if (cpy[id]) {
      delete cpy[id];
    } else {
      cpy[id] = true
    }

    this.setState({selected: cpy});
  }

  /**
   * Row Click Handler
   *
   * @param evt
   * @param index
   */
  onRowClick(evt, index) {
    // Selectable
    if (this.props.selectable) {
      this.onSelectionChanged(evt, index);
    }
  }

  /**
   * Hide Column Handler
   *
   * @param columnKey
   */
  onColumnHide(columnKey) {
    if (columnKey instanceof Array) {
      this.setState({
        hiddenColumns: columnKey
      });
    } else {
      this.setState({
        hiddenColumns: [...this.state.hiddenColumns, columnKey]
      });
    }
  }

  /**
   * Reset Filter
   */
  onResetFilter() {
    this.setState({filterText: ''});
  }

  /**
   * Get filtered data
   *
   * @param data
   * @param filterable
   * @param filter
   * @returns {*}
   */
  getData(data, filterable, filter) {
    filter = filter.toLowerCase();
    return data.filter((v) => {
      for (var i = 0; i < filterable.length; i++) {
        if (v[filterable[i]].toLowerCase().indexOf(filter) !== -1) {
          return true;
        }
      }

      return false;
    });
  }

  /**
   * Render
   */
  render() {
    let {
          actionColumn, selectable, filterable, tableOptions
        } = this.props;

    let columns          = [...this.props.columns];
    let usedWidth        = 0;
    let autoWidthColumns = [];
    let tableData        = [];

    // Group columns for width calculation
    columns.forEach((v) => {
      if (this.state.hiddenColumns.indexOf(v.columnKey) == -1) {
        if (this.state.autoWidthColumns.indexOf(v.columnKey) == -1) {
          usedWidth += v.width;
        } else {
          autoWidthColumns.push(v.columnKey);
        }
      }
    });

    if (this.props.actionColumn) {
      usedWidth += this.actionColumnWidth;
    }

    if (this.props.selectable) {
      usedWidth += this.selectionColumnWidth;
    }

    /**
     * Create a copy of data
     *
     * This is necessary for sorting purpose
     *
     * @type {*[]}
     */
    this.data = [...this.props.data];


    // Filter data
    if (filterable && this.state.filterable.length > 0 && this.state.filter) {
      this.data = this.getData(this.data, this.state.filterable, this.state.filter)
    }

    if (this.data.length > 0) {
      // Sort data
      if (this.state.sort.column) {
        this.data = this.data.sort((a, b) => {
          return a[this.state.sort.column].localeCompare(b[this.state.sort.column]);
        });

        if (this.state.sort.direction == 'DESC') {
          this.data = this.data.reverse();
        }
      }

      // Selectable
      if (selectable) {
        const columnInstance = <Column
          header={<SelectionHeaderCell dataLength={this.data.length} selection={this.state.selected}
                                       unselectHandler={this.onUnselectAll} selectHandler={this.onSelectAll}/>}
          columnKey=""
          cell={<SelectionCell data={this.data} selection={this.state.selected}/>}
          width={this.selectionColumnWidth}
          fixed={true}
        />;

        columns = [columnInstance, ...columns];
      }

      const averageColumnWidth = (this.props.tableOptions.width - usedWidth) / autoWidthColumns.length;

      // Create action column
      if (actionColumn) {
        const actionCellInstance = <ActionCell {...actionColumn} data={this.data}/>
        const columnInstance     = <Column
          header={<Cell></Cell>}
          cell={actionCellInstance}
          columnKey=""
          width={this.actionColumnWidth}
          fixed={true}
          align="center"/>

        columns = [columnInstance, ...columns];
      }

      // Create columns
      columns = columns.map((v, i) => {
        if (this.state.hiddenColumns.indexOf(v.columnKey) != -1) {
          return;
        }
        if (v.type) {
          return v;
        }

        v.header = <v.header.type {...v.header.props} state={this.state}/>
        v.cell   = <v.cell.type {...v.cell.props} data={this.data}/>

        if (this.state.columnWidths[v.columnKey]) {
          v.width = this.state.columnWidths[v.columnKey];
        } else if (v.width == 'auto') {
          v.width = averageColumnWidth;
        } else {
          if (autoWidthColumns.indexOf(v.columnKey) != -1) {
            v.width = averageColumnWidth;
          }
        }

        return <Column {...v}  />
      });

      tableData = this.data;
    } else {
      const columnInstance = <Column
        header={<Cell></Cell>}
        cell={<Cell>
          <div className="alert alert-info">
            <i className="icon fa fa-info"></i> No Data available for filter <i><b>{this.state.filter}</b></i>
          </div>
        </Cell>}
        width={tableOptions.width}
        fixed={true}
        align="center"
      />
      columns              = [columnInstance];

      tableData = ['NORESULT'];
    }

    return (
      <div className="box">
        <TopBar tableInstance={this} tableProps={this.props} tableState={this.state}/>
        <div className="box-body table-responsive no-padding">
          <div>
            <FixedTable
              {...tableOptions}
              rowsCount={tableData.length}
              onColumnResizeEndCallback={this.onColumnResizeEnd.bind(this)}
              onRowClick={this.onRowClick.bind(this)}
              isColumnResizing={false}
            >
              {columns}
            </FixedTable>
          </div>
        </div>
        <InfoBar tableInstance={this} tableProps={this.props} tableState={this.state}/>
      </div>
    );
  }
}

export default Table;