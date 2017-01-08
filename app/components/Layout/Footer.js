import React from 'react';

/**
 * Footer
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class Footer extends React.Component {

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
   * @return {XML}
   */
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 1.0.0
        </div>
        <strong>Copyright &copy; 2017 <a href="http://">KekecMed</a>.</strong> All rights
        reserved.
      </footer>
    );
  }
}

export default Footer;