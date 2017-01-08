/**
 * IMPORTS
 */
import React from 'react';
import {Cell} from 'fixed-data-table';
import {getCellProperties} from '../helper';

/**
 * ActionCell
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class ActionCell extends React.Component {
  render() {
    const {data, rowIndex, handler, buttons, ...props} = this.props;

    const bindedButtons = Object.keys(buttons).map((v) => {
      const TYPE                     = buttons[v]['type'];
      buttons[v]['props']['onClick'] = ((data, rowIndex, actionType, handler) => {
        handler(data, rowIndex, actionType)
      }).bind(null, data, rowIndex, v, handler);
      return <TYPE {...buttons[v]['props']} />;
    });

    return (<Cell {...getCellProperties(this.props)}>
      {React.Children.toArray(Object.values(bindedButtons))}
    </Cell>);
  }
}

export default ActionCell;