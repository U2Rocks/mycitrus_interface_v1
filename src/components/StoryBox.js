import { View, Text, StyleSheet } from 'react-native'
import design from '../constants/global'

const StoryBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a really long string of text that breaks styling</Text>
    </View>
  )
}

export default StoryBox

const styles = StyleSheet.create({
  container: {
    height: design.BOX_HEIGHT,
    width: design.BOX_WIDTH,
    backgroundColor: design.COLOR_SEAWEED,
    padding: 10,
    marginRight: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 15,
    color: design.COLOR_WHITE,
  }
})