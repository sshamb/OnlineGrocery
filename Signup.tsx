import { View, Text, Image, TextInput, ImageBackground, Button, TouchableOpacity, } from "react-native";
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Ionicons from "react-native-vector-icons/Ionicons";

const Signup = () => {
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
                <Image style={{ alignSelf: "center",height:50,width:50}}
                    source={require("../images/carrot.png")}
                />

                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Text style={{ color: "black", fontSize: 24, fontWeight: "500" }}>

                        Sign Up
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "400", color: "grey", marginTop: 10 }}>
                        Enter your credentials to continue
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "grey", marginTop: 40 }}>
                        Username
                    </Text>
                    <TextInput
                        maxLength={9}
                        keyboardType="name-phone-pad"
                        style={{
                            borderColor: "#E3E3E3",
                            borderBottomWidth: 2,
                            fontSize: 16,
                            marginTop: 15,
                        }}
                    />
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
                        {/* <TouchableOpacity
                        onPress={() => setisVisible(!isVisible)}>
                            <Ionicons
                        name={isVisible ?"eye-off-outline" :"eye-outline"}
                        size={24}
                        color="black"
                        />
                    </TouchableOpacity> */}
                    </View>
                    <Text numberOfLines={2}
                        style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: "black",
                            marginTop: 15,
                            letterSpacing:0.7,
                            lineHeight: 25,
                            width: 280,
                            opacity: 0.6,



                        }}>
                        By continuing you agree to our Terms of Service and Privacy Policy.
                    </Text>
                    <TouchableOpacity style={{
                        alignItems:"center",
                        top:60,
                        borderWidth:3,
                        borderRadius:19,
                        padding:15,
                        backgroundColor:"#53B175"
                    }}
                        onPress={() => {
                            nav.navigate("HomeScreen");
                        }}>
                        <Text style={{
                            fontSize: 19,
                            color: "white",
                            fontWeight: "500"
                        }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 80,
                        gap: 5,
                    }}>
                        <Text style={{ fontSize: 16 }}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => {nav.navigate("Login");
                            }}>
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                fontWeight: "600",
                            }}>
                                Login Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;