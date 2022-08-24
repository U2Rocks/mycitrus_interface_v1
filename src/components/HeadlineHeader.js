import { View, Text, StyleSheet } from 'react-native'

const HeadlineHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Latest Headlines</Text>
    </View>
  )
}

export default HeadlineHeader

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 10,
  }
})