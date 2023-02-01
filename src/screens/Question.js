import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Question = ({ navigation }) => {
  const [question, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const getQuestion = async () => {
    const url = 'https://opentdb.com/api.php?amount=15&type=multiple'
    const response = await fetch(url);
    const data = await response.json();
    setQuestion(data.results);
  }
  useEffect(() => {
    getQuestion();
  }, [])
  return (
    <View style={styles.container}>

      <View style={styles.QuesContainer}>
        <Text style={styles.QuesText}>Q. This is a Question. This is a Question .This is a Question
          This is a Question. This is a Question.</Text>
      </View>

      <View style={styles.OptionContainer}>
        <TouchableOpacity style={styles.OptionButton}>
          <Text style={styles.OptionText}>A. Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionButton}>
          <Text style={styles.OptionText}>B. Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionButton}>
          <Text style={styles.OptionText}>C. Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OptionButton}>
          <Text style={styles.OptionText}>D. Option 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Bottom}>
        <TouchableOpacity style={styles.BottomButton}>
          <Text style={styles.BottomText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BottomButton}>
          <Text style={styles.BottomText}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BottomButton}
          onPress={() => navigation.navigate('Result')}>
          <Text style={styles.BottomText}>END</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Question

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 12,
    backgroundColor: '#F0EABE'
  },
  QuesContainer: {
    margin: 20,
    backgroundColor: 'white',
    padding: 12
  },
  QuesText: {
    fontSize: 22,
    color: '#434242'
  },
  OptionContainer: {
    margin: 20,
    flex: 1,
  },
  OptionButton: {
    padding: 8,
    backgroundColor: '#B99B6B',
    marginVertical: 8,
    borderRadius: 12
  },
  OptionText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 600,
    marginLeft: 10
  },
  Bottom: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 16
  },
  BottomButton: {
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#434242',
    padding: 12,
    paddingHorizontal: 16
  },
  BottomText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 900,
  }
})