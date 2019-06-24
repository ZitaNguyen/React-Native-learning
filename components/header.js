import React, {Component} from 'react'

import {    Image,
            Text,
            View,
            StyleSheet 
        } from 'react-native'

import { Header } from 'react-native-elements'

class MyCustomLeftComponent extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.txt}>Bon usage des Pansements</Text>
            </View>
        )
    }
}

class MyCustomRightComponent extends Component {
    render() {
        return(
            <Image 
                source={require('../assets/images/aphp.png')}
                style={{resizeMode:'contain', width:150, }}
            />
        )
    }
}

export default class MyHeader extends Component {
    render() {
        return(
            <Header
                leftComponent   ={<MyCustomLeftComponent />}
                rightComponent  ={<MyCustomRightComponent />}
                containerStyle  ={{
                    backgroundColor: 'black',
                    opacity: 0.8,
                    height: 110
                }}
            />
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 120,
        marginTop: 20
    },
    txt: {
        color: '#53A2D8',
        paddingLeft: 5,
        fontSize: 13,
    }
})