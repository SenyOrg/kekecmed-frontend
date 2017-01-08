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
import PaddedContent from '../../../components/Layout/PaddedContent';
import UserWidget from './partials/UserWidget';
import Informationpanel from '../../../components/Panels/InformationPanel';

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

    return (
      <PaddedContent>
      <div className="row">
        <div className="col-md-12">
          <UserWidget userData={this.props.data}/>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <Informationpanel title="General Information" data={[{
                title: 'First name',
                value: this.props.data.firstName
              }, {
                title: 'Last name',
                value: this.props.data.lastName
              }, {
                title: 'Birth Date',
                value: this.props.data.birthDate
              }, {
                title: 'Gender',
                value: this.props.data.gender == 'm' ? <i className="fa fa-male"></i> : <i className="fa fa-female"></i>
              },]}/>
            </div>
            <div className="col-md-12">
              <Informationpanel title="Insurance" data={[{
                title: 'Insurance',
                value: "BKK Niederrhein"
              }, {
                title: 'Insurance UUID',
                value: this.props.data.insuranceUUID
              },]}/>
            </div>
            <div className="col-md-12">
              <Tasks data={this.props.tasks.toJS()}/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <Informationpanel title="Contact Information"
                                data={[{
                                  title: 'Phone',
                                  value: this.props.data.phone
                                }, {
                                  title: 'Mobile',
                                  value: this.props.data.mobile
                                }, {
                                  title: 'E-Mail',
                                  value: this.props.data.email
                                },]}
              />
            </div>
            <div className="col-md-12">
              <Informationpanel title="Address Information">
                <address style={{padding: 15}}>
                  {this.props.data.street} {this.props.data.no}<br/>
                  {this.props.data.zipCode} {this.props.data.city}
                </address>
              </Informationpanel>
            </div>
            <div className="col-md-12">
              <Note data={this.props.notes.toJS()} user={this.props.user} onCreate={this.onCreateHandler.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
      </PaddedContent>
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
