/**
 * IMPORTS
 */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectPatientList, selectFetchedState, selectLoadingState } from './state/selectors';
import Table from './Table';

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
   * Render
   *
   * @returns {*|boolean}
   */
  render() {
    return (
      <div>
        <Table/>
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
export default connect(mapStateToProps, mapDispatchToProps)(PatientIndexPage);
