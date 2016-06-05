import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backButton: {
    margin: 5,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'lightskyblue'
  }
})

class ProfilePage extends React.Component {
  render() {
    const { navigator } = this.props
    return (
      <View>
        <TouchableOpacity style={styles.backButton} onPress={() => navigator.pop()}>
          <Text>回退</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

ProfilePage.propTypes = {
  navigator: React.PropTypes.object
}

export default ProfilePage
