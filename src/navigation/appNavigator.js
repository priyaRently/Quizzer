import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Question from '../screens/Question'
import Result from '../screens/Result'

const Stack = createNativeStackNavigator();

export default function appNavigator() {
  return (
        <Stack.Navigator >
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Question' component={Question} options={{headerShown:false}}/>
            <Stack.Screen name='Result' component={Result} options={{headerShown:false}}/>
        </Stack.Navigator>
  )
}