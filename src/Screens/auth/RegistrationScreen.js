import React, {useState } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, Text, TouchableOpacity, 
    KeyboardAvoidingView, Platform, Keyboard,
} from "react-native";
import { StatusBar} from 'expo-status-bar';

const buttonImg = require('../../../assets/images/add.png');

export default function RegistrationScreen ({navigation}) {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
      if(!login || !email || !password) {
        alert("Enter all data!");
        return;
      }
      console.log(`Login: ${login}; email: ${email}, password: ${password}`);
      Keyboard.dismiss();
      setIsShowKeyboard(false);
      setLogin('');
      setEmail('');
      setPassword('');
      navigation.navigate("Home", {
        screen: 'PostsScreen'
       });
    };

    const showPassword = () => {
      if(password === ''){
        alert('Your password is empty!')
      }
        alert(`Your password is ${password}!`);
    };

    return (
      <View style={styles.wrapBg}>
      <ImageBackground source={require("../../../assets/bg-image.jpg")} style={styles.bgImg}>
     <KeyboardAvoidingView 
     behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.wrapKey}>
     <View style={styles.container} >
     <View style={styles.wrapper}>
     <TouchableOpacity style={styles.addBtn} activeOpacity={0.5}>
     <ImageBackground  source={buttonImg}
     style={styles.image}></ImageBackground>
     </TouchableOpacity>
     </View>
     <Text style={styles.title}>Registration</Text>
     <View >
     <TextInput style={styles.input}  placeholder="Login"
     inputMode='text' 
     onFocus={() => setIsShowKeyboard(true)}
     value={login}
     onChangeText={(value) => setLogin(value)}/>
     <TextInput style={styles.inputNext} placeholder="E-mail address" 
     onFocus={() => setIsShowKeyboard(true)}
     inputMode='email'
     value={email}
     onChangeText={(value) => setEmail(value)}/>
     <TextInput style={styles.inputNext} secureTextEntry={true} placeholder="Password" 
     onFocus={() => setIsShowKeyboard(true)}
     value={password}
     onChangeText={(value) => setPassword(value) }/>
     </View>

     <TouchableOpacity activeOpacity={0.5} style={styles.span} onPress={showPassword}>
        <Text style={styles.spanText}>Show</Text>
     </TouchableOpacity>
     

     <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={register}>
     <Text style={styles.text}>Register</Text>
     </TouchableOpacity>
    
    <TouchableOpacity activeOpacity={0.5} style={styles.linkOpacity} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Already have an account? Log in</Text>
    </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    </ImageBackground>
    <StatusBar style="auto"/>
    </View>
    )
};

const styles = StyleSheet.create({
    wrapBg: {
      flex: 1,
      alignItems: "center",
    },
    bgImg: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: "flex-end",
      width: "100%",
    },
    wrapper: {
      marginTop: -60,
      height: 120,
      width: 120, 
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },
    wrapKey: {
      justifyContent: "space-around",
    },
    container: {
       backgroundColor: "#FFFFFF",
       alignItems: "center",
       width: "100%",
       borderTopRightRadius: 25,
       borderTopLeftRadius: 25,
    },
    addBtn: {
      marginTop: '65%',
      left: '90%',
      height: 25,
      width: 25,
      pointerEvents: 'auto',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    input: {
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
    inputNext: {
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
    span: {
       top: -34,
       left: 130,
    },
    spanText: {
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
    text: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 18.75,
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
    linkOpacity: {
      marginTop: 16,
      marginBottom: 46,
    },
    linkText: {
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
    }
});