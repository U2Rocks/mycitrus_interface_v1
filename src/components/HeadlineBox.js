import { View, Text, StyleSheet } from 'react-native'
import design from '../constants/global'

const HeadlineBox = ({ atitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{atitle}</Text>
    </View>
  )
}

export default HeadlineBox

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: design.COLOR_DARK_BLUE,
    borderRadius: 15,
    padding: 20,
    marginVertical: 5,
  },
  text: {
    fontSize: 25,
    color: design.COLOR_WHITE,
  }
})