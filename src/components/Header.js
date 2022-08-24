import { View, Text, StyleSheet } from 'react-native'
import design from '../constants/global'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MYCITRUS</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: design.COLOR_ORANGE,
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        letterSpacing: 3,
        fontWeight: 'bold',
        color: design.COLOR_WHITE,
    }
})