import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import music_data from './src/music-data.json';
import SongCard from './src/components/songCard';
import SearchBar from './src/components/searchBar';

const MusicApp = () => {
  const [list, setList] = useState(music_data);
  const songData = ({item}) => <SongCard song={item} />;
  const renderSeparator = () => <View style={styles.separator} />; //tek view içinde
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <View style={styles.container}>
      <SearchBar OnSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={songData}
        ItemSeparatorComponent={renderSeparator} //ayırmak için
      />
    </View>
  );
};
export default MusicApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
