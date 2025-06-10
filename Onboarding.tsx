import { View, Text, Image, ImageBackground, Button,TouchableOpacity, } from "react-native";
import React from 'react';
const Onboarding = (props) => {
  return (
    <View style={{
      width: 414,
      height: 896,
      left: 20,


    }}>
      <Image source={require('../images/abc.png')}
        style={{
          width: 420,
          height: 896.35,
          top: -0.35,
          position: 'absolute',
          //right:65,

        }} />


      <View style={{ width: 253, height: 86, top: 580, left: 80 }}>
        <Text style={{ fontWeight: 600, fontSize: 24, textAlign: 'center', color: '#FFFFFF', lineHeight: 29, }}>Welcome   </Text>
        <Text style={{ fontWeight: 600, fontSize: 24, textAlign: 'center', color: '#FFFFFF', lineHeight: 29, }}>to our Store </Text>

        <Text style={{ width: 295, height: 15, top: 10, fontSize: 16, lineHeight: 15, textAlign: 'center', color: '#FFFFFF' }}>Ger your groceries in as fast as one hour </Text>


        <View style={{ marginTop: 20, width: 280, padding: 5, left: 30.5, }}>
          <TouchableOpacity
            onPress={() => {props.navigation.navigate("SignIn") }}>


            <View style={{ borderWidth: 4, padding: 7, borderRadius: 15, backgroundColor: 'green', borderColor: 'green', marginRight: 10, marginLeft: -50, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 700, color: 'white', alignItems: 'center' }}>Get started</Text>


            </View>
          </TouchableOpacity>
        </View>
      </View>

//       {/* <Text style={{color:'black',marginTop:150,marginLeft:80,position:'absolute'}}>ANMOL</Text> */}
//     </View>

   )
};
export default Onboarding;