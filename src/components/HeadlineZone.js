import { View, Text, StyleSheet, FlatList} from 'react-native'
import HeadlineHeader from '../components/HeadlineHeader'
import HeadlineBox from '../components/HeadlineBox'
import { article_list } from '../data/articleList'

const HeadlineZone = () => {

  const keyExtraction = (article, index) => article.id 
  const renderHeadline = ({item}) => <HeadlineBox atitle={item.title} />

  return (
    <View style={styles.container}>
      <HeadlineHeader />
        <View style={styles.listview}>
          <FlatList 
          data={article_list}
          keyExtractor={keyExtraction}
          renderItem={renderHeadline}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          style={styles.liststyle}
          />
        </View>
    </View>
  )
}

export default HeadlineZone

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  liststyle: {
    width: '100%',
  },
  listview: {
    justifyContent: 'center',
    padding: 5,
    height: '62%',
  }
})