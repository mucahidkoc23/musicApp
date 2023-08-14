import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch, FlatList, Button} from 'react-native';

//---------------1.Uygulama-Counter--------------------
// const CounterApp = () => {
//   const [counter, setCounter] = useState(0);
//   function Up() {
//     setCounter(counter + 1);
//   }
//   function Down() {
//     setCounter(counter - 1);
//   }
//   return (
//     <View>
//       <Text style={{fontSize: 30, textAlign: 'center'}}>
//         Counter: {counter}
//       </Text>
//       <TouchableOpacity
//         // eslint-disable-next-line react-native/no-inline-styles
//         style={{
//           backgroundColor: 'red',
//           width: 300,
//           height: 40,
//           alignItems: 'center',
//           marginLeft: 65,
//           marginTop: 10,
//         }}
//         onPress={Up}>
//         <Text style={{color: 'white', marginTop: 10}}>Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         // eslint-disable-next-line react-native/no-inline-styles
//         style={{
//           backgroundColor: 'green',
//           width: 300,
//           height: 40,
//           alignItems: 'center',
//           marginLeft: 65,
//           marginTop: 10,
//         }}
//         onPress={Down}>
//         <Text style={{color: 'white', marginTop: 10}}>Down</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// export default CounterApp;

//---------------2.Uygulama-Favorite--------------------

// const Favorites = () => {
//   const data = [
//     {id: 0, name: 'cafe.exe', isFavorite: true},
//     {id: 1, name: 'KafeKafe', isFavorite: false},
//     {id: 2, name: 'Bugs', isFavorite: false},
//     {id: 3, name: 'Rock`n Code', isFavorite: true},
//     {id: 4, name: 'do(drink)', isFavorite: false},
//     {id: 5, name: 'esc', isFavorite: false},
//   ];
//   const [cafeList, setCafeList] = useState(data);
//   const [isSelected, setİsSelected] = useState(false);

//   function onFavariteVhange(selectedUpdate) {
//     setİsSelected(selectedUpdate);
//     selectedUpdate
//       ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
//       : setCafeList(data);
//   }
//   return (
//     <View>
//       <View>
//         <View style={{marginBottom: 20}}>
//           <Text style={{fontSize: 15}}>Show only favaroites</Text>
//           <Switch
//             value={isSelected}
//             onValueChange={onFavariteVhange}
//             style={{alignSelf: 'flex-start'}}
//           />
//         </View>
//         <FlatList
//           data={cafeList}
//           renderItem={({item}) => (
//             <Text style={{fontSize: 25}}>{item.name}</Text>
//           )}
//         />
//       </View>
//     </View>
//   );
// };
// export default Favorites;
//--------------------------3-MusicApp---------------------------------------

