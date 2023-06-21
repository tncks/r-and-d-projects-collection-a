import { View, Button } from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Button
      title="View Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
    <Button
      title="Go to Brook's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Brook'})
      }
    />
    </View>
  );
};


export default HomeScreen;