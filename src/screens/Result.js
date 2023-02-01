import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result</Text>
      <View style={styles.ImageContainer}>
        <Image source={require('./Result.png')} style={styles.Image} />
      </View>
      <View>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>
            HOME
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#3B9AE1',
    height: '100%'
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    // backgroundColor:'#F0EABE',
    padding: 14
  },
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  Image: {
    width: 300,
    height: 300
  },
  button: {
    backgroundColor: '#F0EABE',
    width: '100%',
    borderRadius: 12,
    padding: 12
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  }
})