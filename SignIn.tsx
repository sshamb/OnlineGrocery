import { Text, Button, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
export const SignIn = (props) => {
  return (
    <View>
      <Image source={require('../images/abd.png')}
        style={{
          width: 500,
          height: 300,
          top: 10,
          right: 50,


        }} />
      <Text style={{ fontSize: 26, top: 20, left: 25, }}>Get your groceries</Text>
      <Text style={{ fontSize: 26, top: 20, left: 25 }}>with nectar</Text>
      <View style={{ top: 30, borderWidth: 1, padding: 10, backgroundColor: 'white', borderColor: 'transparent', marginRight: 50, marginLeft: 50, alignItems: 'center' }}>
        <Image source={require('../images/countryflag.png')}
          style={{
            width: 33,
            height: 23,
            top: 5,
            left: -150,

          }} />
        <Text style={{ width: 42, height: 29, fontSize: 15, left: -100, top: -15 }}>+880</Text>

      </View>
      <Text style={{ fontSize: 15, top: 50, left: 100, fontFamily: 'Gilroy' }}>Or connect with social media</Text>
      <View style={{ marginTop: 20, width: 364, padding: 5, left: 30.5, }}>
        <TouchableOpacity
          onPress={() => { props.navigation.navigate("Number") }}>

          <View style={{
            top: 60,
            borderWidth: 8,
            padding: 10,
            borderRadius: 19,
            backgroundColor: '#5383EC',
            borderColor: '#5383EC',
            marginRight: 10,
            marginLeft: 25,
          }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: 'white', alignItems: 'center' }}>Continue with Google</Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style={{ marginTop: 20, width: 364, padding: 5, left: 30.5, }}>
        <TouchableOpacity>
          <View style={{
            top: 60,
            borderWidth: 8,
            padding: 10,
            borderRadius: 19,
            backgroundColor: '#5383EC',
            borderColor: '#5383EC',
            marginRight: 10,
            marginLeft: 25,
          }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: 'white', alignItems: 'center' }}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};
export default SignIn;