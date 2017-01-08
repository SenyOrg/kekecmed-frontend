/**
 * IMPORTS
 */
import React from 'react';

/**
 * Result Indicator
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class ResultIndicator extends React.Component {

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
    if (this.props.filterText == '') {
      return null;
    }

    const {filterCount, filterText} = this.props;

    const classNames = ['badge'];

    if (filterCount > 0) {
      classNames.push('label-success')
    } else {
      classNames.push('label-danger')
    }

    return (
      <span className={classNames.join(' ')}>
          <a className="btn btn-xs btn-default" onClick={this.props.onResetFilter}><i className="fa fa-times"></i> Remove Filter</a> &nbsp;&nbsp;
        |&nbsp;&nbsp;
        {filterCount} results found
        </span>
    );
  }
}

export default ResultIndicator;