import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { WebView } from 'react-native-webview'

export default class DocSample extends Component {
  static navigationOptions = { 
    title: 'Doc Sample', 
    headerStyle: {
      backgroundColor: '#53A2D8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    const htmlContent = require('../../docHTML/docSample.html')
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