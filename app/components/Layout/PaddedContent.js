/**
 * IMPORTS
 */
import React from 'react';

/**
 * Padded Content
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class PaddedContent extends React.Component {

  render() {
    return (
      <div style={{
        marginLeft: 15,
        marginRight: 15
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default PaddedContent;