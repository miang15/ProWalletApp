import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import MainStack from './App/navigation/Index'
import { store } from './App/Redux/Store'
import ForgotPin from './App/Screens/Wallet/ForgotPin'

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>    
  
    
  )
}
export default App
const styles = StyleSheet.create({
})
