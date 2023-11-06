import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Pressable,
    Linking,
    TouchableOpacity,
} from 'react-native';

/*const OpenURLButton = ({ url }) => {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Text onPress={handlePress}></Text>;
};*/

export default function LoginPage({ navigation }) {
    const styles = useStyles();

    return (
        <View style={styles.root}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
                <Text style={styles.title}>DTASM</Text>
                <Text style={styles.subtitle}>DTASM</Text>

                <Pressable>
                    <View style={styles.form}>
                        <Text style={styles.label}>Username or Email</Text>

                        <TextInput
                            autoCapitalize="none"
                            autoCompleteType="email"
                            autoCorrect={false}
                            keyboardType="email-address"
                            returnKeyType="next"
                            style={styles.textInput}
                            textContentType="username"
                        />
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.form}>
                        <Text style={styles.label}>Password</Text>

                        <TextInput
                            autoCapitalize="none"
                            autoCompleteType="password"
                            autoCorrect={false}
                            returnKeyType="done"
                            secureTextEntry
                            style={styles.textInput}
                            textContentType="password"
                        />
                    </View>
                </Pressable>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonTitle}>Log in</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.forgotPasswordContainer}>
                    <Text>Don't have an account?</Text>
                    <OpenURLButton url="https://bsky.app/">Sign up with BlueSky</OpenURLButton>
                </View>

            </KeyboardAvoidingView>
        </View >
    );
}

function useStyles() {
    return StyleSheet.create({
        button: {
            alignItems: 'center',
            backgroundColor: 'rgb(93, 95, 222)',
            borderRadius: 8,
            height: 48,
            justifyContent: 'center',
        },
        buttonTitle: {
            color: '#606060',
            fontSize: 17,
            fontWeight: '600',
            lineHeight: 22,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingVertical: 32,
        },
        forgotPasswordContainer: {
            alignItems: 'flex-end',
        },
        form: {
            alignItems: 'center',
            backgroundColor: 'rgb(58, 58, 60)',
            borderRadius: 8,
            flexDirection: 'row',
            height: 48,
            paddingHorizontal: 16,
        },
        label: {
            color: 'rgba(235, 235, 245, 0.6)',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
            width: 80,
        },
        root: {
            backgroundColor: '#F5F5F5',
            flex: 1,
        },
        safeAreaView: {
            flex: 1,
        },
        subtitle: {
            color: 'rgba(235, 235, 245, 0.6)',
            fontSize: 17,
            fontWeight: '400',
            lineHeight: 22,
        },
        textButton: {
            color: '#606060',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
        },
        textInput: {
            color: '#606060',
            flex: 1,
        },
        title: {
            color: '#000000',
            fontSize: 28,
            fontWeight: '700',
            lineHeight: 34,
        },
    });
}
