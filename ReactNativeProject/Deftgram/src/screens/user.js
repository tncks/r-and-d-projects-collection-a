import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
const UserScreen = props => {
    // const id = props.navigation.getParam('id');
    const [isLoading,
        setLoading] = useState(false);
    const [user,
        setUser] = useState([]);
    const [userAddress,
        setUserAddress] = useState([]);
    const [userCompany,
        setUserCompany] = useState([]);

    getUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users/2').then((response) => response.json()).then((json) => {
            setUser(json);
            console.log(json);
            // setUserAddress(json.address);
            setUserCompany(json.company);
        }).catch((error) => console.error(error)). finally(() => setLoading(false));
    }

    useEffect(() => {
        // console.log(id)
        setLoading(true);
        getUser();
        // getBoard();
    }, []);
    return (

        <View
            style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {isLoading
                ? console.log("LoadingData..")
                : (
                    <View>
                        {/* <Text style={{ alignItems: 'center', fontSize: 25 }}>{user.name}</Text>
                    <Text>Phone: {user.phone}</Text>
                    <Text>Website: {user.website}</Text>
                    <Text>Company: {userCompany.name} </Text>
                    <Text>Address: {userAddress.no} </Text> */}
                        {/*<Text>{userAddress.no}, {userAddress.no}  </Text>*/}
                    </View>
                )}
        </View>
    );
};
// UserScreen.navigationOptions = {     title: 'User Details' };
export default UserScreen;