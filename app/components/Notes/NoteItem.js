/**
 * IMPORTS
 */
import React from 'react';

/**
 * NoteItem
 *
 * @memo an mich: Kemal seni andik annenle
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box-comment">
        <img className="img-circle img-sm" src={this.props.data.author.image} alt="User Image"/>

        <div className="comment-text">
                      <span className="username">
                        {this.props.data.author.firstName} {this.props.data.author.lastName}
                        <span className="text-muted pull-right">{this.props.data.createdAt}</span>
                      </span>
          {this.props.data.body}
        </div>
      </div>
    );
  }
}

export default NoteItem;