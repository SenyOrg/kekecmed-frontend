import React from 'react';

/**
 * ActionButton
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class ActionButton extends React.Component {

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    const linkClassNames = ['btn', 'btn-xs', 'btn-' +
                                             (this.props.buttonClass ? this.props.buttonClass : 'default'), 'btn-block'];
    const iconClassNames = ['fa', 'fa-' + this.props.iconClass];

    return (
      <a
        className={linkClassNames.join(' ')}
        onClick={(evt) => {
          evt.stopPropagation();
          this.props.onClick()
        }}>
        <i className={iconClassNames.join(' ')}></i>
      </a>
    )
  }
}

export default ActionButton;