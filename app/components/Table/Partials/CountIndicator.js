/**
 * IMPORTS
 */
import React from 'react';

/**
 * Count Indicator
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class CountIndicator extends React.Component {

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
    return (<span><span className="badge label-info">{this.props.filteredCount}</span> / <span
      className="badge badge-inverse">{this.props.totalCount}</span></span>);
  }
}

export default CountIndicator;