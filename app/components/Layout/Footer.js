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
          <b>Version</b> 2.3.8
        </div>
        <strong>Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
        reserved.
      </footer>
    );
  }
}

export default Footer;