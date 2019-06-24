import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { WebView } from 'react-native-webview'

export default class TableSample extends Component {
  static navigationOptions = { 
    title: 'Table Sample', 
    headerStyle: {
      backgroundColor: '#53A2D8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    const htmlContent = require('../../docHTML/tableSample.html')
    return (
      <ScrollView>
        <WebView
          source={htmlContent}
          style={{height: 750}}
        />
      </ScrollView>
    )
  }
}