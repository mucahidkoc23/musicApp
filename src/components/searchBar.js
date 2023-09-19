import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={props.OnSearch} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 6,
    borderRadius: 5,
    backgroundColor: '#eceff1',
  },
});

export default SearchBar;
