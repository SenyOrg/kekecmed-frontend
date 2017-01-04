/**
 * IMPORTS
 */
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchPatient, createNote} from './state/actions';
import {selectPatient, selectFetchedState, selectPatientNotes, selectPatientTasks} from './state/selectors';
import {selectUser} from '../../App/selectors';
import Note from '../../../components/Notes';
import Tasks from '../../../components/Tasks';

/**
 * Patient View
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class PatientViewPage extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * On component mount
   */
  componentDidMount() {
    // Load patient data
    this.props.load(this.props.routeParams.id);
  }

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    var ageDifMs = Date.now() - new Date(this.props.data.birthDate).getTime();
    var ageDate  = new Date(ageDifMs);
    const age    = Math.abs(ageDate.getUTCFullYear() - 1970);

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="box box-widget widget-user">
            {/*<!-- Add the bg color to the header using any of the bg-* classes -->*/}
            <div className="widget-user-header bg-aqua-active">
              <h3 className="widget-user-username">{this.props.data.firstName} {this.props.data.lastName}</h3>
            </div>
            <div className="widget-user-image">
              <img className="img-circle" src={this.props.data.image} alt="User Avatar"/>
            </div>
            <div className="box-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">
                      {this.props.data.gender == 'f' ? <i className="fa fa-venus"></i> :
                        <i className="fa fa-mars"></i>}
                    </h5>
                    <span className="description-text">GENDER</span>
                  </div>
                  {/*<!-- /.description-block -->*/}
                </div>
                {/*<!-- /.col -->*/}
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    {/* @todo - This creates an error - WHY?? */}
                    <h5 className="description-header">{age}</h5>
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
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <div className="box box-default">
                <div className="box-header with-border">
                  <h3 className="box-title">General Information</h3>

                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                      className="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="box-body no-padding">
                  <table className="table">
                    <tbody>
                    <tr>
                      <td>Firstname</td>
                      <td>{this.props.data.firstName}</td>
                    </tr>
                    <tr>
                      <td>Lastname</td>
                      <td>{this.props.data.lastName}</td>
                    </tr>
                    <tr>
                      <td>Birthdate</td>
                      <td>{this.props.data.birthDate}</td>
                    </tr>

                    <tr>
                      <td>Gender</td>
                      <td>{this.props.data.gender == 'f' ? <i className="fa fa-venus"></i> :
                        <i className="fa fa-mars"></i>}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="box box-default">
                <div className="box-header with-border">
                  <h3 className="box-title">Insurance Information</h3>

                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                      className="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="box-body no-padding">
                  <table className="table">
                    <tbody>
                    <tr>
                      <td>Insurance</td>
                      <td>BKK Niederrhein</td>
                    </tr>
                    <tr>
                      <td>Insurance No</td>
                      <td>{this.props.data.insuranceUUID}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Tasks data={this.props.tasks.toJS()}/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <div className="box box-default">
                <div className="box-header with-border">
                  <h3 className="box-title">Contact Information</h3>

                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                      className="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="box-body no-padding">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Phone</td>
                        <td>{this.props.data.phone}</td>
                      </tr>
                      <tr>
                        <td>Mobile</td>
                        <td>{this.props.data.mobile}</td>
                      </tr>
                      <tr>
                        <td>E-Mail</td>
                        <td>{this.props.data.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="box box-default">
                <div className="box-header with-border">
                  <h3 className="box-title">Address Information</h3>

                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                      className="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="box-body">
                  <address>
                    {/*<strong>Twitter, Inc.</strong><br>*/}
                    {this.props.data.street} {this.props.data.no}<br/>
                    {this.props.data.zipCode} {this.props.data.city}
                  </address>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Note data={this.props.notes.toJS()} user={this.props.user} onCreate={this.onCreateHandler.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * CreateHandler used to create new notes
   *
   * @param noteText
   */
  onCreateHandler(noteText) {
    this.props.createNote(this.props.data.id, noteText);
  }
}

/**
 * Map dispatch to props
 *
 * @param dispatch
 * @returns {{refresh: (function(*): *)}}
 */
export function mapDispatchToProps(dispatch) {
  return {
    load: (id) => {
      dispatch(fetchPatient(id));
    },
    createNote: (authorId, noteText) => {
      dispatch(createNote(authorId, noteText));
    }
  };
}

/**
 * Map state to props
 */
const mapStateToProps = createStructuredSelector({
  data: selectPatient(),
  fetched: selectFetchedState(),
  notes: selectPatientNotes(),
  user: selectUser(),
  tasks: selectPatientTasks()
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(PatientViewPage);
