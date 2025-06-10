// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../screens/redux/cartSlice';

// import { RootStackParamList } from '../screens/redux/types';
// const ProductDetailsScreen = ({ route }) => {
//   const dispatch = useDispatch();
//   const [quantity, setQuantity] = useState(1);

//   const product = route?.params?.product || {
//     id: 2,
//     name: 'Naturel Red Apple',
//     price: 4.99,
//     image: require('../images/apple.png'),
//     weight: '1kg',
//     description:
//       'Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.',
//   };

//   const handleAddToCart = () => {
//     dispatch(addToCart({ ...product, quantity }));
//   };

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
//       {/* Product Image */}
//       <View style={{ alignItems: 'center', padding: 20 }}>
//         <Image
//           source={product.image}
//           style={{ width: 200, height: 200, resizeMode: 'contain' }}
//         />
//       </View>

//       {/* Product Info */}
//       <View style={{ paddingHorizontal: 20 }}>
//         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{product.name}</Text>
//         <Text style={{ color: 'gray', marginTop: 5 }}>{product.weight}, Price</Text>

//         {/* Quantity Selector */}
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             marginVertical: 20,
//           }}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <TouchableOpacity
//               onPress={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
//               style={{
//                 width: 30,
//                 height: 30,
//                 borderRadius: 15,
//                 borderWidth: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Text style={{ fontSize: 18 }}>-</Text>
//             </TouchableOpacity>

//             <Text style={{ marginHorizontal: 15, fontSize: 18 }}>{quantity}</Text>

//             <TouchableOpacity
//               onPress={() => setQuantity(prev => prev + 1)}
//               style={{
//                 width: 30,
//                 height: 30,
//                 borderRadius: 15,
//                 borderWidth: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Text style={{ fontSize: 18 }}>+</Text>
//             </TouchableOpacity>
//           </View>

//           <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${product.price}</Text>
//         </View>

//         {/* Product Details */}
//         <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Product Detail</Text>
//         <Text style={{ marginTop: 5, color: 'gray', lineHeight: 22 }}>
//           {product.description}
//         </Text>

//         {/* Add to Cart Button */}
//         <TouchableOpacity
//           onPress={handleAddToCart}
//           style={{
//             backgroundColor: '#53B175',
//             padding: 15,
//             borderRadius: 10,
//             alignItems: 'center',
//             marginVertical: 30,
//           }}>
//           <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
//             Add To Cart
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default ProductDetailsScreen;


import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../screens/redux/cartSlice';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../screens/redux/types';
import { useNavigation } from '@react-navigation/native';


// Define the type for the route prop specifically for ProductDetails screen
type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

type Props = {
  route: ProductDetailRouteProp;
};

const ProductDetail: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);
   const [isExpanded, setIsExpanded] = useState(false);


  // Now TS knows route.params.product type
  const fallbackProduct = {
  id: 2,
  name: 'Naturel Red Apple',
  price: 4.99,
  image: require('../images/apple.png'),
  weight: '1kg',
  description: 'No description available.', // <-- ENSURE THIS IS PRESENT
};

const product = route?.params?.product ?? fallbackProduct;


  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigation.navigate('Cart');
  };

  const descriptionToShow = product.description
    ? (product.description
    ? isExpanded
    : product.description.slice(0, 100) + (product.description.length > 100 ? '...' : ''))
    : 'Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.';

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Product Image */}
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image
          source={product.image}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      </View>

      {/* Product Info */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{product.name}</Text>
        <Text style={{ color: 'gray', marginTop: 5 }}>{product.weight}, Price</Text>

        {/* Quantity Selector */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 18 }}>-</Text>
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 15, fontSize: 18 }}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => setQuantity(prev => prev + 1)}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 18 }}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${product.price}</Text>
        </View>

        {/* Product Details */}

        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Product Detail</Text>
        <Text style={{ marginTop: 5, color: 'gray', lineHeight: 28 }}>
          {descriptionToShow}
        </Text>
        
        {product.description && product.description.length > 100 && (
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={{ color: '#53B175', marginTop: 5, fontWeight: 'bold' }}>
              {isExpanded ? 'Show less' : 'Read more'}
            </Text>
          </TouchableOpacity>
        )}






        {/* Add to Cart Button */}
        <TouchableOpacity
          onPress={handleAddToCart}
          style={{
            backgroundColor: '#53B175',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
