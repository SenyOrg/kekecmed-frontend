/**
 * IMPORTS
 */
import React from 'react';
import {age} from '../../../../utils/date';

/**
 * UserWidget
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class UserWidget extends React.Component {
  render() {
    return (
      <div className="box box-widget widget-user">
        {/*<!-- Add the bg color to the header using any of the bg-* classes -->*/}
        <div className="widget-user-header bg-aqua-active">
          {/*<h3 className="widget-user-username">{this.props.userData.firstName} {this.props.userData.lastName}</h3>*/}
        </div>
        <div className="widget-user-image">
          <img className="img-circle" src={this.props.userData.image} alt="User Avatar"/>
        </div>
        <div className="box-footer">
          <div className="row">
            <div className="col-sm-4 border-right">
              <div className="description-block">
                <h5 className="description-header">
                  {this.props.userData.gender == 'f' ? <i className="fa fa-venus"></i> : <i className="fa fa-mars"></i>}
                </h5>
                <span className="description-text">GENDER</span>
              </div>
              {/*<!-- /.description-block -->*/}
            </div>
            {/*<!-- /.col -->*/}
            <div className="col-sm-4 border-right">
              <div className="description-block">
                {/* @todo - This creates an error - WHY?? */}
                <h5 className="description-header">{age(this.props.userData.birthDate)}</h5>
                <span className="description-text">AGE</span>
              </div>
              {/*<!-- /.description-block -->*/}
            </div>
            {/*<!-- /.col -->*/}
            <div className="col-sm-4">
              <div className="description-block">
                <h5 className="description-header">35</h5>
                <span className="description-text">PRODUCTS</span>
              </div>
              {/*<!-- /.description-block -->*/}
            </div>
            {/*<!-- /.col -->*/}
          </div>
          {/*<!-- /.row -->*/}
        </div>
      </div>
    );
  }
}

export default UserWidget;