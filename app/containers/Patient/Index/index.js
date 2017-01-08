/**
 * IMPORTS
 */
import React from 'react';
import Table from '../../../components/Table';
import TextCell from '../../../components/Table/CellRenderer/TextCell';
import HeaderCell from '../../../components/Table/CellRenderer/HeaderCell';
import AgeCell from '../../../components/Table/CellRenderer/AgeCell';
import GenderCell from '../../../components/Table/CellRenderer/GenderCell';
import ImageCell from '../../../components/Table/CellRenderer/ImageCell';
import ActionButton from '../../../components/Table/CellRenderer/ActionButton';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectPatientList, selectFetchedState, selectLoadingState} from './state/selectors';
import Dimensions from 'react-dimensions';
import {Cell, Column} from 'fixed-data-table';
import {push} from 'react-router-redux';

/**
 * Patient Index
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class PatientIndexPage extends React.Component {

  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Action Column Handler
   *
   * @param data
   * @param rowIndex
   * @param actionType
   */
  actionColumnHandler(data, rowIndex, actionType) {
    switch (actionType) {
      case 'open':
        this.props.openPatient(data[rowIndex]['id']);
        break;
      case 'delete':
        alert('Not implemented yet');
    }
  }

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    return (
      <div>
        <Table
          fetched={this.props.fetched}
          actionColumn={{
            handler: this.actionColumnHandler.bind(this),
            buttons: {
              open: {
                type: ActionButton,
                props: {
                  buttonClass: 'default',
                  iconClass: 'search'
                }
              },
              delete: {
                type: ActionButton,
                props: {
                  buttonClass: 'danger',
                  iconClass: 'trash',
                }
              },
            }
          }}

          selectable={true}
          resetable={true}
          refreshable={true}
          filterable={true}
          infoBar={true}
          data={this.props.data.toJS()}
          tableOptions={{
            rowHeight: 65,
            headerHeight: 50,
            width: this.props.containerWidth,
            height: 670
          }}

          columns={[{
            columnKey: 'gender',
            filterable: false,
            fixed: true,
            align: 'center',
            width: 30,
            header: {
              type: HeaderCell,
              props: {
                title: '',
                sortable: false,
              }
            },
            cell: {
              type: GenderCell,
              props: {}
            }
          }, {
            columnKey: 'image',
            filterable: false,
            fixed: true,
            align: 'center',
            width: 50,
            header: {
              type: HeaderCell,
              props: {
                title: '',
                sortable: false,

              }
            },
            cell: {
              type: ImageCell,
              props: {}
            }
          }, {
            columnKey: 'firstName',
            filterable: true,
            fixed: false,
            align: 'center',
            isResizable: true,
            width: 'auto',
            header: {
              type: HeaderCell,
              props: {
                title: 'First Name',
                sortable: true,
                hideable: true,
              }
            },
            cell: {
              type: TextCell,
              props: {}
            }
          }, {
            columnKey: 'lastName',
            filterable: true,
            fixed: false,
            align: 'center',
            isResizable: true,
            width: 'auto',
            header: {
              type: HeaderCell,
              props: {
                title: 'Last Name',
                sortable: true,
                hideable: true,
              }
            },
            cell: {
              type: TextCell,
              props: {}
            }
          }, {
            columnKey: 'birthDate',
            filterable: false,
            fixed: true,
            align: 'center',
            isResizable: false,
            width: 60,
            header: {
              type: HeaderCell,
              props: {
                title: 'Age',
                sortable: true,
              }
            },
            cell: {
              type: AgeCell,
              props: {}
            }
          }, {
            columnKey: 'email',
            filterable: true,
            fixed: false,
            align: 'center',
            isResizable: true,
            width: 'auto',
            header: {
              type: HeaderCell,
              props: {
                title: <span><i className="fa fa-envelope"></i> E-Mail</span>,
                sortable: true,
                hideable: true,
              }
            },
            cell: {
              type: TextCell,
              props: {}
            }
          }, {
            columnKey: 'mobile',
            filterable: true,
            fixed: false,
            align: 'center',
            isResizable: true,
            width: 'auto',
            header: {
              type: HeaderCell,
              props: {
                title: <span><i className="fa fa-mobile"></i> Mobile</span>,
                sortable: true,
                hideable: true,
              }
            },
            cell: {
              type: TextCell,
              props: {}
            }
          }, {
            columnKey: 'phone',
            filterable: true,
            fixed: false,
            align: 'center',
            isResizable: true,
            width: 'auto',
            header: {
              type: HeaderCell,
              props: {
                title: <span><i className="fa fa-phone"></i> Phone</span>,
                sortable: true,
                hideable: true
              }
            },
            cell: {
              type: TextCell,
              props: {}
            }
          },]}
        />
      </div>
    );
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
    openPatient: (id) => {
      dispatch(push('patient/' + id));
    },
  };
}

/**
 * Map state to props
 */
const mapStateToProps = createStructuredSelector({
  loading: selectLoadingState(),
  fetched: selectFetchedState(),
  data: selectPatientList()
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Dimensions()(PatientIndexPage));