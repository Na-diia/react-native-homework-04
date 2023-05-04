import React, {useState} from "react";
import { View, 
        StyleSheet, 
        KeyboardAvoidingView, 
        Platform,  
        TextInput, 
        TouchableOpacity, 
        Text, 
        Keyboard,
        ImageBackground,
} from "react-native";
import { StatusBar} from 'expo-status-bar';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const visiblePassword = () => {
        if(password === '') {
            alert("Enter your password!")
        }
        alert(`Your password is ${password}!`);
    };

    const logIn = () => {
       if(!email || !password) {
        alert('Enter all data, please!');
        return;
       }
       console.log(`Email: ${email}; password: ${password}.`);
       Keyboard.dismiss();
       setEmail('');
       setPassword('');
       navigation.navigate("Home", {
        screen: 'DefaultScreen'
       });
    };

    return (
     <View style={styles.bgWrap}>
     <ImageBackground source={require("../../../assets/bg-image.jpg")} style={styles.bgImage}>
     <KeyboardAvoidingView 
     behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.mainBox}>
      <View style={styles.container}>
     <Text style={styles.title}>Login</Text>

     <TextInput value={email} inputMode="email" 
     onChangeText={(value) => setEmail(value)} style={styles.email} placeholder="E-mail address"/>
     <TextInput value={password} secureTextEntry={true} style={styles.password} placeholder="Password"
     onChangeText={(value) => setPassword(value)}/>

     <TouchableOpacity style={styles.showPassword} activeOpacity={0.5} onPress={visiblePassword}>
     <Text style={styles.showPasswordText}>Show</Text>
     </TouchableOpacity>

     <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={logIn}>
       <Text style={styles.btnText}>Login</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.linkWrap} activeOpacity={0.5} onPress={() => navigation.navigate("Registration")}>
      <Text style={styles.linkText}>Don't have an account? Register</Text>
     </TouchableOpacity>

      </View>
     </KeyboardAvoidingView>
     </ImageBackground>
     <StatusBar style="auto"/>
     </View>
    )
}; 

const styles = StyleSheet.create({
    bgWrap: {
        flex: 1,
        alignItems: "center",
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "flex-end",
        width: "100%",
    },
    mainBox: {
        justifyContent: "space-around",
    },
    container: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    title: {
        color: "#212121",
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.01,
        fontWeight: "500",
        marginTop: 32,
        marginBottom: 32,
    },
    email: {
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        height: 50,
        width: 343,
        color: "#212121",
        padding: 16,
        fontSize: 16,
        lineHeight: 19,
    },
    password: {
        marginTop: 16,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        height: 50,
        width: 343,
        color: "#212121",
        padding: 16,
        fontSize: 16,
        lineHeight: 19,
    },
    showPassword: {
        top: -34,
        left: 130,
    },
    showPasswordText: {
       color: "#1B4371",
       fontSize: 16,
       lineHeight: 19,
    },
    btn: {
        backgroundColor: "#FF6C00",
        height: 50,
        width: 343,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center", 
    },
    btnText: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 18.75,
    },
    linkWrap: {
        marginTop: 16,
        marginBottom: 46,
    },
    linkText: {
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
    },
});

export default LoginScreen;

