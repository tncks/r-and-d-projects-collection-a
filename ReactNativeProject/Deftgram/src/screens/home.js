import React from 'react';
import { View } from 'react-native';
// import Users from '../components/Users';
import Boards from '../components/Boards';
const HomeScreen = props => {
    return (
        <View style={{flex: 1}}>
            <Boards />
            <View style={{padding: 30}}></View>
            {/* <Users navigation={props.navigation} /> */}
        </View>
    );
};
// HomeScreen.navigationOptions = {
//     title: '.'
// };
export default HomeScreen;