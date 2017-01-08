/**
 * IMPORTS
 */
import React from 'react';

/**
 * Selection Indicator
 */
class SelectionIndicator extends React.Component {

  /**
   * Constructor
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
    return <span className="badge badge-warning">{Object.keys(this.props.selection).length} rows selected</span>;
  }
}

export default SelectionIndicator;