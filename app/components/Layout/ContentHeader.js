import React from 'react';

/**
 * ContentHeader
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class ContentHeader extends React.Component {

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
      <h1>
        {this.props.header}
        <small>{this.props.smallHeader}</small>
      </h1>
    );
  }
}

export default ContentHeader;