// import React from 'react';
// import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View style={{
//       flex: 1,
//       backgroundColor: '#fff',
//       padding: 16,
//     }}>
//       <View style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center', marginBottom: 16,
//       }}></View>
//       <Text style={{
//         fontSize: 20,
//         fontWeight: 'bold',
//       }}>Dhaka, Banassre</Text>
//       <TextInput style={{
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 8,
//         padding: 10,
//         width: '70%',
//       }}
//         placeholder="Search Store" />
//       <Text>Home Screen</Text>
//       <View style={{
//         alignItems: 'center',
//         marginBottom: 16,
//       }}>
//         <Image
//           style={{
//             width: '100%',
//             height: 150,
//             borderRadius: 10,
//           }}
//           source={require('../images/banner.png')} // Replace with your image URL
//         />
//         <Text style={{
//           fontSize: 24,
//           fontWeight: 'bold',
//           marginVertical: 8,
//         }}>Fresh Vegetables</Text>
//         <Text style={{ color: 'gray', }}>Get Up To 40% OFF</Text>
//       </View>
//       <Text style={{
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 10,
//       }}>Exclusive Offer</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         <View style={{
//           backgroundColor: '#f9f9f9',
//           borderRadius: 10,
//           padding: 10,
//           marginRight: 10,
//           alignItems: 'center',
//           width: 100,
//         }}>
//           <Image
//             style={{}}
//             source={require('../images/banner.png')}
//           />
//           <Text>Organic Bananas</Text>
//           <Text>7pcs, Price</Text>
//           <Text>$4.99</Text>
//           <TouchableOpacity style={{
//             backgroundColor: '#4CAF50',
//             borderRadius: 20,
//             padding: 5,
//             marginTop: 10,
//           }}>
//             <Text style={{
//               color: '#fff',
//               fontSize: 20,
//             }}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//       <Text style={{
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 10,
//       }}>Best Selling</Text>
//       <Text style={{
//         textAlign: 'right',
//         color: '#007BFF',
//       }}>See all</Text>

//     </View>


//   )
// }
// export default HomeScreen;
// import React from 'react';
// import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../screens/redux/cartSlice';
// // import { Ionicons } from "react-native-ionicons"

// const HomeScreen = () => {
//   const dispatch = useDispatch();

//   const products = [
//     { id: 1, name: 'Organic Bananas', price: 4.99, image: require('../images/banana.png.png') },
//     { id: 2, name: 'Red Apple', price: 4.99, image: require('../images/apple.png') },
//     { id:3, name:'Orange',price:7.45,image:require('../images/orange.png')}
//   ];

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
    
//       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
//         {/* <Ionicons name="location-outline" size={20} color="black" /> */}
//         <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Dhaka, Banassre</Text>
//       </View>

//       <View style={{ marginTop: 15, backgroundColor: '#f3f3f3', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
//         {/* <Ionicons name="search-outline" size={20} color="gray" /> */}
//         <TextInput placeholder="Search Store" style={{ flex: 1, marginLeft: 10 }} />
//       </View>

//       {/* Promo Banner */}
//       <View style={{ marginTop: 20, backgroundColor: '#DFF0D8', padding: 15, borderRadius: 10 }}>
//         <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fresh Vegetables</Text>
//         <Text style={{ color: 'green' }}>Get Up to 40% OFF</Text>
//       </View>

//       {/* Exclusive Offer Section */}
//       <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Exclusive Offer</Text>
//         <Text style={{ color: 'green' }}>See all</Text>
//       </View>

//       {/* Products */}
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
//         {products.map(item => (
//           <View key={item.id} style={{ width: '48%', backgroundColor: 'white', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
//             <Image source={item.image} style={{ width: '100%', height: 80, resizeMode: 'contain' }} />
//             <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
//             <Text style={{ fontSize: 14, color: 'gray' }}>7pcs, Priceg</Text>
//             <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>${item.price}</Text>
//             <TouchableOpacity
//               onPress={() => dispatch(addToCart(item))}
//               style={{ marginTop: 10, backgroundColor: '#53B175', padding: 10, borderRadius: 10, alignItems: 'center' }}>
//               {/* <Ionicons name="add" size={20} color="white" /> */}
//             </TouchableOpacity>
//           </View>
//         ))}
//         <View style={{ marginTop: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best Selling</Text>
//         <Text style={{ color: 'green' }}>See all</Text>
//       </View>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
//         {products.map(item => (
//           <View key={item.id} style={{ width: '48%', backgroundColor: 'white', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
//             <Image source={item.image} style={{ width: '100%', height: 80, resizeMode: 'contain' }} />
//             <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
//             <Text style={{ fontSize: 14, color: 'gray' }}>7pcs, Priceg</Text>
//             <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>${item.price}</Text>
//             <TouchableOpacity
//               onPress={() => dispatch(addToCart(item))}
//               style={{ marginTop: 10, backgroundColor: '#53B175', padding: 10, borderRadius: 10, alignItems: 'center' }}>
//               </TouchableOpacity>
//       </View>
//         ))}
//         </View>
//     </ScrollView>
    
//   );
// };

// export default HomeScreen;
// import React from 'react';
// import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../screens/redux/cartSlice';
// import { useNavigation } from '@react-navigation/native'

import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../screens/redux/cartSlice';

import { useNavigation } from '@react-navigation/native';
import ProductDetail from '../screens/ProductDetail';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/redux/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;




const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation =useNavigation<HomeScreenNavigationProp>()

  const products = [
    { id: 1, name: 'Organic Bananas', price: 4.99, image: require('../images/banana.png.png') },
    { id: 2, name: 'Red Apple', price: 4.99, image: require('../images/apple.png') },
    { id: 3, name: 'Orange', price: 7.45, image: require('../images/orange.png') }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      {/* Location Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Dhaka, Banassre</Text>
      </View>

      {/* Search Bar */}
      <View style={{ marginTop: 15, backgroundColor: '#f3f3f3', borderRadius: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <TextInput placeholder="Search Store" style={{ flex: 1, marginLeft: 10 }} />
      </View>

      {/* Promo Banner */}
      <View style={{ marginTop: 20, backgroundColor: '#DFF0D8', padding: 15, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fresh Vegetables</Text>
        <Text style={{ color: 'green' }}>Get Up to 40% OFF</Text>
      </View>

      {/* Exclusive Offer Section */}
      <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Exclusive Offer</Text>
        <Text style={{ color: 'green' }}>See all</Text>
      </View>

      {/* Exclusive Offer Products */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        {products.map(item => (
          <View key={item.id} style={{ width: '48%', backgroundColor: 'white', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
            <Image source={item.image} style={{ width: '100%', height: 80, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>7pcs, Priceg</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>${item.price}</Text>
            <TouchableOpacity
              onPress={() => dispatch(addToCart(item))}
              style={{ marginTop: 10, backgroundColor: '#53B175', padding: 10, borderRadius: 10, alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Add</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Best Selling Section */}
      <View style={{ marginTop: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best Selling</Text>
        <Text style={{ color: 'green' }}>See all</Text>
      </View>

      {/* Best Selling Products */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        {products.map(item => (
          <View key={item.id} style={{ width: '48%', backgroundColor: 'white', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ddd' }}>
            <Image source={item.image} style={{ width: '100%', height: 80, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>7pcs, Priceg</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>${item.price}</Text>
            <TouchableOpacity
  onPress={() => navigation.navigate('ProductDetail', { product: item })}
  style={{ marginTop: 10, backgroundColor: '#53B175', padding: 10, borderRadius: 10, alignItems: 'center' }}>
  <Text style={{ color: 'white' }}>View</Text>
</TouchableOpacity>

          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
