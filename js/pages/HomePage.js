/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, ListView } from 'react-native'
import { connect } from 'react-redux'

import UserCard from '../components/UserCard'
import FilterPanel from '../components/FilterPanel'

import { fetchUserListAction } from '../actions/userListAction'
import { userFilterAction } from '../actions/userFilterAction'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
})

class App extends Component {
  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentWillMount() {
    this.props.fetchAction()
  }

  render() {
    const { userlist, filter, filterAction, navigator } = this.props
    const filteredList = filter === '' ? userlist : userlist.filter(item => item.office === filter)
    const ds = this.dataSource.cloneWithRows(filteredList)

    return (
      <View style={styles.container}>
        <FilterPanel action={filterAction} />
        <ListView
          dataSource={ds}
          renderRow={(user) => <UserCard user={user} navigator={navigator} />} enableEmptySections
        />
      </View>
    )
  }
}

function select(state) {
  return {
    userlist: state.userList,
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAction: () => dispatch(fetchUserListAction()),
    filterAction: (filter) => dispatch(userFilterAction(filter))
  }
}

App.propTypes = {
  fetchAction: React.PropTypes.func.isRequired,
  filterAction: React.PropTypes.func.isRequired,
  userlist: React.PropTypes.array.isRequired,
  filter: React.PropTypes.string.isRequired,
  navigator: React.PropTypes.object
}

export default connect(select, mapDispatchToProps)(App)
