
import { View, Text, Image, TextInput, ImageBackground, Button, TouchableOpacity, } from "react-native";
import React, { useState } from 'react'


const Verification = (props) => {
  const [otp, setotp] = useState("")

  return (
    <View>
      <Text style={{ fontWeight: 400, fontSize: 24, top: 50, fontFamily: 'Gilroy', left: 20 }}>Enter your 4-digit code</Text>
      <Text style={{
        top: 70, left: 20
      }}>Mobile Number</Text>

      <TextInput style={{ borderWidth: 1, fontSize: 16, width: 80, padding: 5, top: 80, left: 70, borderRadius: 5, margin: 40 }}
        keyboardType="numeric"
        maxLength={4}
        placeholder="- - - -"
        value={otp}
        textAlign="center"
        onChangeText={setotp}
      />
      <TouchableOpacity
        onPress={() => { props.navigation.navigate("Signup") }}
        style={{
          marginTop: 290,
          borderWidth: 3,
          backgroundColor: "#53B175",
          borderColor: "#53B175",
          padding: 29,
          position: "absolute",
          marginLeft: 340,

          borderRadius: 25,
        }}>

      </TouchableOpacity>
    </View>
  )
};

export default Verification;