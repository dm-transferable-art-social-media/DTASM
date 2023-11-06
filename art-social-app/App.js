import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connectToBlueSkyServer } from "./BlueSkyConfig";

function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button
        title="Go to Your Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
function LoginPage({ navigation }) {
  const handleLogin = async () => {
    try {
      // Call the function to connect to the Blue Sky server
      await connectToBlueSkyServer();

      // Navigate to the Home page after a successful connection
      navigation.navigate("Home");
    } catch (error) {
      // Handle any errors here
      console.error("Error in LoginPage:", error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

function ProfilePage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Page</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
