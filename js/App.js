import React from 'react'
import { Navigator } from 'react-native'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'


export default () => (
  <Navigator
    initialRoute={{ page: 'Home' }}
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
