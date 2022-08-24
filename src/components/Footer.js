import { View, Text, StyleSheet } from 'react-native'
import design from '../constants/global'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Last Updated: 8/22/2022</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: design.COLOR_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    padding: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})