import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import ModalDropdown from 'react-native-modal-dropdown';

function onRenderRow (rowData) {
  const { placeName } = rowData;
  return (
    <TouchableHighlight>
      <Text>{placeName}</Text>
    </TouchableHighlight>
  );
}

function onRenderText (rowData) {
  const { placeName } = rowData;
  return placeName;
}

export default class DropDown extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        placeName: PropTypes.string,
        id: PropTypes.string,
      }),
    ).isRequired,
    onChange: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect (idx, value) {
    const { onChange } = this.props;
    const { id } = value;
    onChange(id);
  }

  render () {
    const { options } = this.props;
    return (
      <View>
        <ModalDropdown
          options={options}
          renderRow={onRenderRow}
          onSelect={this.onSelect}
          renderButtonText={onRenderText}
          defaultValue="Selecciona una zona"
        />
      </View>
    );
  }
}
