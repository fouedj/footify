import React, { useEffect } from 'react'
import Home from './src/pages/Home'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './src/apollo'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(()=>{
  
      SplashScreen.hide()

   
  })
  return (

    //{<ApolloProvider client={client}>}
      <Home/>
 //{   </ApolloProvider>}
  
  )
}
export default App
