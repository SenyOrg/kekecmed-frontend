/**
 * IMPORTS
 */
import React from 'react';
import InformationPanel from '../Panels/InformationPanel';
import NoteItem from './NoteItem';

class Note extends React.Component {
  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      noteText: ''
    }
  }

  /**
   * OnSubmit: To create a new note
   *
   * @param evt
   */
  onSubmit(evt) {
    evt.preventDefault();

    // Reset noteText and trigger create procedure
    this.setState({noteText: ''});
    this.props.onCreate(this.state.noteText);
  }

  /**
   * Syncronize note text
   *
   * @param event
   */
  updateNoteText(event) {
    this.setState({noteText: event.target.value})
  }

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    const items = this.props.data ? this.props.data.map((v) => <NoteItem data={v} key={v.id}/>) : null;

    return (
      <InformationPanel title="Notes">
        <div className="box-footer box-comments">
          {items}
        </div>
        <div className="box-footer">
          <img className="img-responsive img-circle img-sm" src={this.props.user.get('image')} alt="Alt Text"/>
          <div className="img-push">
            <form onSubmit={this.onSubmit.bind(this)}>
              <input type="text" className="form-control input-sm" placeholder="Press enter to create a new Note"
                     value={this.state.noteText} onChange={this.updateNoteText.bind(this)}/>
            </form>
          </div>
        </div>
      </InformationPanel>
    );
  }
}

export default Note