import React, { Component } from "react"
import { View, Text } from "react-native"
import { SearchBar } from "react-native-elements"
import { FlatList, TouchableHighlight } from "react-native-gesture-handler"
import { WebView } from 'react-native-webview'

import MyHeader from "../../header"

const sourceData = {
  docSample: require('../../docHTML/docSample.html'),
  tableSample: require('../../docHTML/tableSample.html'),
  imageSample: require('../../docHTML/imageSample.html')
}

const data = [
                { key: "1", content : sourceData.docSample },
                { key: "2", content : sourceData.tableSample },
                { key: "3", content : sourceData.imageSample },
              ]


export default class SearchPage extends Component {
  state = {
    search: '',
    searchResult: []
  }

  // searchFilterFunction = text => {
  //   const searchResult = data.filter( item => {
  //     return item.content.textContent.includes(text)
  //   })
  //   this.setState({search: text, searchResult: searchResult})
  // }

  updateSearch = search => {
    this.setState({search})
  }

  onEnd = () => {
    alert(this.state.search)
  }

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         backgroundColor: "#CED0CE"
  //       }}
  //     />
  //   )
  // }

  // renderItem = ({ item }) => (
  //   <TouchableHighlight
  //   // onPress={}
  //   >
  //     <View>
  //       {/* <WebView 
  //         source={item.content}
  //         style={{height: 750}}
  //       /> */}
  //       {/* {this.state.searchResult} */}
  //     </View>
  //   </TouchableHighlight>
  // )

  render() {
    return (
      <View>
        <MyHeader />
        <SearchBar
          placeholder="Taper Ici..."
          // onChangeText={this.searchFilterFunction}
          onChangeText={this.updateSearch}
          value={this.state.search}
          onEndEditing={this.onEnd}
          lightTheme
          round
        />
        {/* <FlatList
          data={data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        /> */}
        {/* <Text>{this.state.searchResult}</Text> */}
      </View>
    )
  }
}
