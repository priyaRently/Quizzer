import React from 'react'
// import Home from './src/screens/Home'
// import Question from './src/screens/Question'
// import Result from './src/screens/Result'

import AppNavigator from './src/navigation/appNavigator'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}

export default App