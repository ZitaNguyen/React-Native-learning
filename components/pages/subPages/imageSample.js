import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { WebView } from 'react-native-webview'

export default class ImageSample extends Component {
  static navigationOptions = { 
    title: 'Image Sample', 
    headerStyle: {
      backgroundColor: '#53A2D8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  render() {
    const htmlContent = require('../../docHTML/imageSample.html')
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