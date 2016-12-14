/**
 * IMPORTS
 */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/**
 * Dashboard Page
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class DashboardPage extends React.Component {

  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render the component
   *
   * @returns {XML}
   */
  render() {
    return (
      <div>
        <h1>This is our Dashboard...</h1>
      </div>
    );
  }
}

export default DashboardPage;

//export function mapDispatchToProps(dispatch) {
//  return {
//
//  };
//}
//
//const mapStateToProps = createStructuredSelector({
//
//});
//
//// Wrap the component to inject dispatch and state into it
//export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);