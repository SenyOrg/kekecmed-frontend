import React from 'react';

/**
 * HiddenColumnControl
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class HiddenColumnControl extends React.Component {
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
    if (this.props.hiddenColumns.length == 0) {
      return null;
    }

    return (<span><button type="button"
                          className="btn btn-default btn-sm"
                          onClick={ () => {
                            this.props.onColumnHide([])
                          }}><i className="fa fa-eye"></i> Show hidden columns</button>
      &nbsp;&nbsp;|&nbsp;&nbsp;</span>);
  }
}

export default HiddenColumnControl;