import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'


const suffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Question = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [quesNo, setQuesNo] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuestion = async () => {
    setIsLoading(true);
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986'
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    setOptions(generateOption(data.results[0]));
    setIsLoading(false);
  }

  useEffect(() => {
    getQuestion();
  }, []);

  const handleNext = () => {
    setQuesNo(quesNo + 1);
    setOptions(generateOption(questions[quesNo + 1]));
  }

  const handleSubmit = () => {

  }

  const generateOption = (_question) => {
    const options = [_question.correct_answer, ..._question.incorrect_answers]
    suffleArray(options);
    return options;
  }

  const handleScore = (_option) => {
    if (_option === questions[quesNo].correct_answer) {
      setScore(score + 10);
    }
    if (quesNo !== 9) {
      setQuesNo(quesNo + 1);
      setOptions(generateOption(questions[quesNo + 1]));
    }
  }

  const showResult=()=>{
    navigation.navigate('Result',{
      score: score
    })
  }
  
  return (
    <View style={styles.container}>
      {isLoading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Text style={{ fontSize: 32, fontWeight: '700' }}>LOADING...</Text>
      </View> :
        questions && (
          <View style={styles.container}>
            <View style={styles.QuesContainer}>
              <Text style={styles.QuesText}>Q{quesNo + 1}. {decodeURIComponent(questions[quesNo].question)}</Text>
            </View>

            <View style={styles.OptionContainer}>
              <TouchableOpacity style={styles.OptionButton}
                onPress={() => handleScore(options[0])} >
                <Text style={styles.OptionText}>A. {decodeURIComponent(options[0])} </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.OptionButton}
                onPress={() => handleScore(options[1])} >
                <Text style={styles.OptionText}>B. {decodeURIComponent(options[1])}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.OptionButton}
                onPress={() => handleScore(options[2])} >
                <Text style={styles.OptionText}>C. {decodeURIComponent(options[2])}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.OptionButton}
                onPress={() => handleScore(options[3])} >
                <Text style={styles.OptionText}>D. {decodeURIComponent(options[3])}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Bottom}>
              <TouchableOpacity style={styles.BottomButton}>
                <Text style={styles.BottomText}>SKIP</Text>
              </TouchableOpacity>
              {
                quesNo !== 9 &&
                <TouchableOpacity style={styles.BottomButton}
                  onPress={handleNext}>
                  <Text style={styles.BottomText}>NEXT</Text>
                </TouchableOpacity>
              }
              {
                quesNo === 9 &&
                <TouchableOpacity style={styles.BottomButtonSubmit}
                  onPress={showResult}>
                  <Text style={styles.BottomText}>Submit</Text>
                </TouchableOpacity>
              }

              {/* <TouchableOpacity style={styles.BottomButton}
                onPress={() => navigation.navigate('Result')}>
                <Text style={styles.BottomText}>END</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        )
      }

    </View>
  )
}

export default Question

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 12,
    backgroundColor: '#FFC93C'
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
  BottomButtonSubmit: {
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#820000',
    padding: 12,
    paddingHorizontal: 16
  },
  BottomText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 900,
  }
})