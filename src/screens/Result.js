import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Result = ({ navigation, route }) => {
  const {score} = route.params;
  const resultBanner= score>10?"https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" :"https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result</Text>
      <View style={styles.ImageContainer}>
        <Image source={{uri: resultBanner}} style={styles.Image}
          resizeMode="contain" />
      </View>
      <View>
      <Text style={styles.text}>Score: {score}</Text>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>
            Go to Home
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
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    //  backgroundColor:'#F0EABE',
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