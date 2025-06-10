import { View, Text, Image, TextInput, ImageBackground, Button, TouchableOpacity, } from "react-native";
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [isVisible, setisVisible] = useState(true);
    const [userCrendetials, setuserCrendetials] = useState({
        email: "",
        password: "",
    });
    const { email, password } = userCrendetials;
    console.log(email);
    const nav = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar />
            <ScrollView style={{ flex: 1, paddingTop: 30 }}>
                <Image style={{ alignSelf: "center", height: 50, width: 50 }}
                    source={require("../images/carrot.png")}
                />

                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Text style={{ color: "black", fontSize: 24, fontWeight: "500" }}>

                        Login
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "400", color: "grey", marginTop: 10 }}>
                        Enter your emails and password
                    </Text>

                    {/* <TextInput
                        maxLength={9}
                        keyboardType="name-phone-pad"
                        style={{
                            borderColor: "#E3E3E3",
                            borderBottomWidth: 2,
                            fontSize: 16,
                            marginTop: 15,
                        }}
                    /> */}
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "grey", marginTop: 30 }}>
                        Email
                    </Text>
                    <TextInput
                        value={email}
                        onChangeText={(val) => {
                            setuserCrendetials({ ...userCrendetials, email: val });
                        }}
                        keyboardType="email-address"
                        style={{
                            borderColor: "#E3E3E3",
                            borderBottomWidth: 2,
                            fontSize: 16,
                            marginTop: 15,

                        }} />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "500",
                        color: "grey"
                    }}>
                        Password
                    </Text>
                    <View style={{
                        borderColor: "#E3E3E3",
                        borderBottomWidth: 2,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <TextInput
                            value={password}
                            onChangeText={(val) => {
                                setuserCrendetials({ ...userCrendetials, password: val });
                            }}
                            secureTextEntry={isVisible}
                            maxLength={6}
                            keyboardType="ascii-capable"
                            style={{
                                fontSize: 17,
                                marginTop: 15,
                                flex: 0.9,
                            }}
                        />
                        {/* // <Ionicons
                            // onpress={() =>{
                            //     setisVisible(!isVisible);
                            // }}
                            // name={isVisible==true?"eye-off-outline" :"eye-outline"}
                            // size={24}
                            // color="black"
                            // /> */}
                        </View>
                            <Text numberOfLines={2}
                            style={{
                                fontSize: 14,
                                fontWeight: "400",
                                color: "#181725",
                                marginTop: 15,
                                letterSpacing: 0.7,
                                lineHeight: 25,
                                width: 280,
                                opacity: 0.6,
                                left: 263



                            }}>
                            Forget Password?</Text>
                        <TouchableOpacity style={{
                            alignItems: "center",
                            top: 60,
                            borderWidth: 3,
                            borderRadius: 19,
                            padding: 15,
                            backgroundColor: "#53B175"
                        }}
                            onPress={() => {
                                nav.navigate("HomeScreen");
                            }}>
                            <Text style={{
                                fontSize: 19,
                                color: "white",
                                fontWeight: "500"
                            }}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 80,
                            gap: 5,
                        }}>
                            <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    nav.navigate("Signup");
                                }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: "black",
                                    fontWeight: "600",
                                }}>
                                    SignUp
                                </Text>
                            </TouchableOpacity>
                        </View>
                        </View>
            </ScrollView>
        </SafeAreaView>
)
}
export default Login;