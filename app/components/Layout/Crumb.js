import React from 'react';

/**
 * Crumb
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class Crumb extends React.Component {
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
   * @return {XML}
   */
  render() {
    var iconClass = 'fa fa-' + this.props.icon;
    var activeClass = this.props.active ? 'active' : '';

    return (
        <li className={activeClass}>
          <a href="#">
            {/* ICON */}
            { (this.props.icon) && <i className={iconClass}></i> }

            {/* Title */}
            {this.props.title}
          </a>
        </li>
    );
  }
}

export default Crumb;