import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import HeadlineZone from '../src/components/HeadlineZone'
import StoryRow from '../src/components/StoryRow'
import SearchBar from '../src/components/SearchBar'
import design from '../src/constants/global'

// main screen where user interacts in application
// later on might have links to other pages

// to do: implement scrolling for latest headlines -> find better font for text

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <StoryRow />
      <HeadlineZone />
      <Footer />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: design.COLOR_LIGHT_ORANGE,
    flex: 1,
  }
})