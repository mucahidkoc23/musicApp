import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  year: {
    marginLeft: 10,
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 5,
  },
  soldout_title: {
    color: 'red',
  },
  content_container: {
    flexDirection: 'row',
  },
});
export default SongCard;
