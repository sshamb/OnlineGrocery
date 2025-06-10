import { View, Text, Image, TextInput, ImageBackground, Button, TouchableOpacity, } from "react-native";
import React, { useState } from 'react'


const Number = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("")

  return (
    <View>
      <Text style={{ fontWeight: 400, fontSize: 24, top: 50, fontFamily: 'Gilroy', left: 20 }}>Enter your mobile number</Text>
      <Text style={{
        top: 70, left: 20
      }}>Mobile Number</Text>
      

        <TextInput style={{ borderWidth: 1, fontSize: 16, padding: 6, top: 80, left: 20, borderRadius: 5,marginRight: 40}}
          keyboardType="numeric"
          maxLength={10}
          placeholder="+880"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
    
      <TouchableOpacity
        onPress={() => { props.navigation.navigate("Verification") }}>
        <View style={{
          marginTop: 220, borderWidth: 3,
          backgroundColor: "#53B175",
          borderColor: "#53B175",
          padding: 35,
          marginRight: 700,
          position:'absolute',
          borderRadius: 25,
        }}>
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default Number;

