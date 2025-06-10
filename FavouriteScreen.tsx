// import React from 'react';
// import { View, Text } from 'react-native';

// const FavouriteScreen = () => (
//   <View>
//     <Text>Shop Screen</Text>
//   </View>
// );

// export default FavouriteScreen;

import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
    // const navigation = useNavigation();

const favoriteItems = [
    
  {
    id: '1',
    name: 'Sprite Can',
    price: '$1.50',
    description: '325ml, Price',
    image: require('../images/sprite.png'), 
  },
  {
    id: '2',
    name: 'Diet Coke',
    price: '$1.99',
    description: '355ml, Price',
    image: require('../images/Coke.png'),
  },
  {
    id: '3',
    name: 'Apple & Grape Juice',
    price: '$15.50',
    description: '2L, Price',
    image: require('../images/tree-top.png'),
  },
  {
    id: '4',
    name: 'Coca Cola Can',
    price: '$4.99',
    description: '325ml, Price',
    image: require('../images/coca.png'),
  },
  {
    id: '5',
    name: 'Pepsi Can',
    price: '$4.99',
    description: '330ml, Price',
    image: require('../images/pepsi.png'),
  },
];

const FavouriteScreen = () => {
    const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourite</Text>
      <FlatList
        data={favoriteItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
       <Button
                        title="Go to AccountSecction"
                        onPress={() => navigation.navigate('Account')}
                        color="#4CAF50"
                      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    color: 'grey',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  buttonContainer: {
     marginTop: 16, 
     backgroundColor: '#fff' 
    },
});

export default FavouriteScreen;
