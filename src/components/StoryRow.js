import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { article_list } from '../data/articleList'
import StoryBox from './StoryBox'
import design from '../constants/global'

const StoryRow = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <StoryBox />
        <StoryBox />
        <StoryBox />
        <StoryBox />
      </ScrollView>
    </View>
  )
}

export default StoryRow

const styles = StyleSheet.create({
  container: {
    backgroundColor: design.COLOR_DARK_ORANGE,
    width: '100%',
    padding: 10,
    marginVertical: 10,
  }
})