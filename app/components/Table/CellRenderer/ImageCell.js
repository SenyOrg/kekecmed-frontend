/**
 * IMPORTS
 */
import React from 'react';
import {Cell} from 'fixed-data-table';
import {getCellProperties} from '../helper'

/**
 * ImageCell
 *
 * Cell renderer for displaying avatar images in table
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class ImageCell extends React.Component {
  render() {
    const {rowIndex, data, columnKey} = this.props;

    return (<Cell {...getCellProperties(this.props)}
                  style={{backgroundImage: `url(${data[rowIndex][columnKey]}) 32 32`}}></Cell>);
  }
}

export default ImageCell;