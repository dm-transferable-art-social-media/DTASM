import React from "react";
import { Button, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default function LoginPage({ navigation }) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <h1>Login</h1>

            <TextInput placeholder="Username" />
            <TextInput placeholder="Password" />
            <Button
                title="Log in"
                onPress={() => navigation.navigate('Home')}
            />

            <form>

            </form>

            <Text>Forgot password?</Text>
        </View>
    );
}
