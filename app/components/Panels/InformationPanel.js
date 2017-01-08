/**
 * IMPORTS
 */
import React from 'react';

/**
 * InformationPanel
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class InformationPanel extends React.Component {

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    // Set content to children per default
    let content = this.props.children;

    // Check for data
    if (this.props.data) {
      content = (
        <table className="table">
          <tbody>
          {this.props.data.map((v) => {
            return (<tr>
              <td>{v.title}</td>
              <td>{v.value}</td>
            </tr>);
          })}
          </tbody>
        </table>
      );
    }

    return (
      <div className="box box-default">
        <div className="box-header with-border">
          <h3 className="box-title">{this.props.title}</h3>

          <div className="box-tools pull-right">

            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
              className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="box-body no-padding">
          {content}
        </div>
      </div>
    );
  }
}

export default InformationPanel;