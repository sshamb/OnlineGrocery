// import React from 'react';
// import { View, Text } from 'react-native';
// import { SafeAreaView } from 'react-native'
// import { responsiveHeight } from 'react-native-responsive-dimensions';

// const CartScreen = () => {
//     return (
//         <SafeAreaView
//         style={{
//             flex:1,
//             paddingHorizontal:15,
//             backgroundColor:"white",
//             gap:20,
//         }}>
//             <Text style={{textAlign:"center",fontSize:24,fontWeight:"500"}}>
//                 My Cart
//             </Text>
        

//   {/* <View style={{height:responsiveHeight(25),backgroundColor:'red'}}>
//     <Text>Shop Screen</Text>
//   </View> */}
//   </SafeAreaView>
//     )
// };

// export default CartScreen;

// src/screens/CartScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet,Button } from 'react-native';
 import Ionicons  from 'react-native-vector-icons/Ionicons';
 import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
   const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Bell Pepper Red', image: require('../images/apple.png'), quantity: 1, price: 4.99, weight: '1kg' },
    { id: '2', name: 'Egg Chicken Red', image: require('../images/banana.png.png'), quantity: 1, price: 1.99, weight: '4pcs' },
    { id: '3', name: 'Organic Bananas', image: require('../images/pineapple.png'), quantity: 1, price: 3.00, weight: '12kg' },
    { id: '4', name: 'Ginger', image: require('../images/orange.png'), quantity: 1, price: 2.99, weight: '250gm' },
  ]);

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemWeight}>{item.weight}, Price</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
            <Ionicons name="remove-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
            <Ionicons name="add-circle-outline" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
        <TouchableOpacity onPress={() => removeItem(item.id)}>
          <Ionicons name="close-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Favourites"
          onPress={() => navigation.navigate('Favourite')}
          color="#4CAF50"
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  image: { width: 60, height: 60, resizeMode: 'contain', marginRight: 8 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemWeight: { fontSize: 12, color: 'gray' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  quantity: { marginHorizontal: 8, fontSize: 16 },
  priceContainer: { alignItems: 'flex-end' },
  price: { fontSize: 16, fontWeight: 'bold' },
  separator: { height: 1, backgroundColor: '#eee', marginVertical: 8 },
  buttonContainer: { marginTop: 16, backgroundColor: '#fff' },
});

export default CartScreen;
