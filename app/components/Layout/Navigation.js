import React from 'react';
import {Link} from 'react-router';

/**
 * Navigation
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class Navigation extends React.Component {

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
    const iconClass = 'fa fa-' + this.props.icon;
    const activeClass = this.props.active ? 'active' : '';

    return (
      <li className={activeClass}>
        <Link to={this.props.link}>
          <i className={iconClass}></i>
          <span>{this.props.title}</span>
        </Link>
      </li>
    );
  }
}

export default Navigation;