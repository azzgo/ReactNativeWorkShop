import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'


const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F50057',
    height: 64,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2
  },
  navBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

function NavBar() {
  return (
    <View style={[styles.navBar, styles.shadow]}>
      <Text style={styles.navBarTitle}>ThoughtWorkers</Text>
    </View>
  )
}

export default NavBar
