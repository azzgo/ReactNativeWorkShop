import React from 'react'
import { TextInput } from 'react-native'

const styles = {
  filter: {
    paddingHorizontal: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
}

class FilterPanel extends React.Component {
  constructor() {
    super()
    this.state = { filter: '' }
  }

  render() {
    return (
      <TextInput
        style={styles.filter}
        onChangeText={(text) => this.setState({ filter: text })}
        onEndEditing={(event) => this.props.action(event.nativeEvent.text)}
      />
    )
  }
}

FilterPanel.propTypes = {
  action: React.PropTypes.func.isRequired
}

export default FilterPanel
