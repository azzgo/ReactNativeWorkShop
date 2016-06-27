import React from 'react'
import { Navigator, StyleSheet } from 'react-native'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

const styles = StyleSheet.create({
  scene: {
    paddingTop: 64
  }
})

export default () => (
  <Navigator
    initialRoute={{ page: 'Home' }}
    navigationBar={<NavBar />}
    sceneStyle={styles.scene}
    renderScene={(route, navigator) => {
      switch (route.page) {
        case 'profile':
          return <ProfilePage navigator={navigator} />
        default:
          return <HomePage navigator={navigator} />
      }
    }}
  />
)
