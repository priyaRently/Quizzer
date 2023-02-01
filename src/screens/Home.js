import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        QUIZZER</Text>
      <View style={styles.bannerContainer}>
        <Image source={require('./QuizHome.png')}
          style={styles.banner} />
      </View>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Question')}>
        <Text style={styles.textButton}>START</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#21E1E1',
    height: '100%'
  },
  title: {
    marginTop: 10,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',

  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  banner: {
    height: 350,
    width: 350,
  },
  button: {
    backgroundColor: '#407BFF',
    width: '100%',
    borderRadius: 12,
    padding: 12
  },
  textButton: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }

})