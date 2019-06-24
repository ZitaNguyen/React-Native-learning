import React from 'react'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'
import { Icon } from 'react-native-elements'
import HomePage from './pages/mainPages/home.page'
import InfoPage from './pages/mainPages/info.page'
import SearchPage from './pages/mainPages/search.page'

import DocSample from './pages/subPages/docSample'
import TableSample from './pages/subPages/tableSample';
import ImageSample from './pages/subPages/imageSample';
import PDFSample from './pages/subPages/pdfSample';

const HomeNavigator = createStackNavigator({
    Accueil: HomePage,
    'Doc Sample': DocSample,
    'Table Sample': TableSample,
    'Image Sample': ImageSample
})

const InfoNavigator = createStackNavigator({
    Info: InfoPage,
    'Doc Sample': DocSample,
    'PDF Sample': PDFSample
})

const AppNavigator = createBottomTabNavigator(
    {
        Accueil: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name='home' size={24} color={tintColor} type='font-awesome' />
            }
        },
        Info: {
            screen: InfoNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name='info' size={24} color={tintColor} type='font-awesome' />
            }
        },
        Search: {
            screen: SearchPage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name='search' size={24} color={tintColor} type='font-awesome' />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#53A2D8',
            inactiveTintColor: 'gray'
        }
    }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer