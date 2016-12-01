import React from 'react';

/**
 * Breadcrumb
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class Breadcrumb extends React.Component {

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
   * @returns {XML}
   */
  render() {
    return (
      <ol className="breadcrumb">
        {React.Children.toArray(this.props.children)}
      </ol>
    );
  }
}

export default Breadcrumb;