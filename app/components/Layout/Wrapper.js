import React, { Children } from 'react';

/**
 * Wrapper
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class Wrapper extends React.Component {
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
      <div className="wrapper">
        {Children.toArray(this.props.children)}
      </div>
    );
  }
}

export default Wrapper;