import React, {useEffect, useState} from 'react';
import { Button, Text, View, FlatList, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomePage ({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home</Text>
    <Button title="Go to Your Profile" 
    onPress={()=>navigation.navigate('Profile')}/>
  </View>   
  )
}
function LoginPage ({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Login</Text>
    <Button title="Login" 
    onPress={()=>navigation.navigate('Home')}/>
  </View>   
  )
}
function ProfilePage (){
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', updateWidth);
    return () => {
      Dimensions.removeEventListener('change', updateWidth);
    };
  }, []); 
  
  const profileItems = [
    { key: '1', value: 'Item 1' },
    { key: '2', value: 'Item 2' },
    { key: '3', value: 'Item 3' },
    { key: '4', value: 'Item 4' },
    { key: '4', value: 'Item 4' }
  ];
  const RPW = (percent) => {
    return (percent/100) * screenWidth;
  }
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: screenWidth}}>
    <Text>Profile Page</Text>
    <FlatList
      data={profileItems}
      numColumns={3} // Number of columns in your grid
      renderItem={({ item }) => (
        <View
          style={{
            margin: 3,
            padding: 2,
            borderWidth: 1,
            borderColor: '#ddd',
            width: RPW(30),
            aspectRatio: 1
          }}
        >
          <Text>{item.value}</Text>
        </View>
      )}
    />
  </View>  
  )
}
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
</NavigationContainer>);
};
export default App;