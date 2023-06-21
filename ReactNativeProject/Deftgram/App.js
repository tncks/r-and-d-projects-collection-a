import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment/min/moment-with-locales';
import {NavigationContainer} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Caroro from './Caroro';
import {styles} from './style';
import MainApp from './src/Main';

function Dashboard() {
    return (
        <View
            style={{
            backgroundColor: '#ffffff',
            width: '100%',
            height: '100%',
            flexDirection: 'column'
        }}>
            <MainApp/>
        </View>
    );
}

function Classes() {
    return (
        <View style={{
            flex: 1
        }}>
            <WebView
                source={{
                uri: 'https://www.campuspick.com/'
            }}
                style={styles.campusPickContainer}/>
        </View>
    );
}

function Meal() {
    return (
        <View
            style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Caroro/>
        </View>
    );
}

const Tab = createBottomTabNavigator();
function MyTabs(props) {
    return (
        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
            tabBarActiveTintColor: '#e91e63'
        }}>
            <Tab.Screen
                name="Deftgram"
                component={Dashboard}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size}/>)
            }}/>
            <Tab.Screen
                name="Classes"
                component={Classes}
                options={{
                tabBarLabel: 'Classes',
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="book" color={color} size={size}/>)
            }}/>
            <Tab.Screen
                name="Meal"
                component={Meal}
                options={{
                tabBarLabel: 'Meal',
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="food" color={color} size={size}/>)
            }}/>
        </Tab.Navigator>
    );
}

const App = (props) => {

    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );

};

App.propTypes = {
    selected: PropTypes.any,
    startWeekday: PropTypes.number,
    titleFormat: PropTypes.string,
    weekdayFormat: PropTypes.string,
    locale: PropTypes.string,
    events: PropTypes.array,
    renderEvent: PropTypes.func,
    renderFirstEvent: PropTypes.func,
    renderLastEvent: PropTypes.func,
    renderDay: PropTypes.func,
    renderFirstDay: PropTypes.func,
    renderLastDay: PropTypes.func,
    onDayPress: PropTypes.func,
    themeColor: PropTypes.string,
    style: PropTypes.any,
    titleStyle: PropTypes.any,
    dayLabelStyle: PropTypes.any
};

App.defaultProps = {
    selected: moment(),
    startWeekday: 7,
    titleFormat: undefined,
    weekdayFormat: 'ddd',
    locale: 'ko',
    events: [],
    renderEvent: undefined,
    renderFirstEvent: undefined,
    renderLastEvent: undefined,
    renderDay: undefined,
    renderFirstDay: undefined,
    renderLastDay: undefined,
    onDayPress: undefined,
    themeColor: '#46c3ad',
    style: {},
    titleStyle: {},
    dayLabelStyle: {}
};

export default App;