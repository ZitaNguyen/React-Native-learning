import React, {Component} from 'react'
import {
    ScrollView,
    View,
    TouchableOpacity, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

import MyHeader from '../../header'

export default class HomePage extends Component {
    state = {
        sommaire: [
            {'name': 'Doc Sample', 'id': 1},
            {'name': 'Table Sample', 'id': 2},
            {'name': 'Image Sample', 'id': 3},
        ]
    }

    static navigationOptions = { headerBackTitle: 'Accueil', header: null }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <MyHeader />
                <ScrollView>
                    {
                        this.state.sommaire.map((item) => (
                            <TouchableOpacity key={item.id} style={styles.subpage}>
                                <Text style={styles.txt}
                                    onPress={() => this.props.navigation.navigate(item.name)}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subpage: {
        width: Dimensions.get('window').width,
        height: 70,
        justifyContent: 'center',
        backgroundColor: '#ebf2f9',
        borderWidth: StyleSheet.hairlineWidth
    },
    txt: {
        fontSize: 22,
        paddingLeft: 10,
        
    }
})