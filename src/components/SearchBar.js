import { View, Text, TextInput, StyleSheet } from 'react-native'
import design from '../constants/global'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🔍  Find An Article...</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: design.COLOR_WHITE,
    marginHorizontal: 25,
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
  },
})