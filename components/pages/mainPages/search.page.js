import React, { Component } from 'react'
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements'

import MyHeader from '../../header'

export default class SearchScreen extends Component {
  state = {
      search: '',
      // searchResults: []
  }


  updateSearch = search => {
    this.setState({ search })
   
  }

  onEnd = () => {
    alert(this.state.search)
  }

  render() {
    return (
      <View>
        <MyHeader />
        <SearchBar
          placeholder="Taper Ici..."
          onChangeText={this.updateSearch}
          value={this.state.search}
          onEndEditing={this.onEnd}
          lightTheme
          round
        />
        
      </View>
    )
  }
}

