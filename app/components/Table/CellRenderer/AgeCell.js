/**
 * IMPORTS
 */
import React from 'react';
import {Cell} from 'fixed-data-table';
import {age}  from '../../../utils/date';
import {getCellProperties} from '../helper';

/**
 * AgeCell
 *
 * Default cell that simply displays an text cell without any formating
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class AgeCell extends React.Component {
  render() {
    const {rowIndex, data, columnKey} = this.props;

    return (<Cell {...getCellProperties(this.props)}>{age(data[rowIndex][columnKey])}</Cell>);
  }
}

export default AgeCell;