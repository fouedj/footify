import React from 'react'
import { View,StyleSheet } from 'react-native'
import Routes from '../Routes'
import { StatusBar } from 'react-native'
import COLORS from '../commun/color'

const Home = () => {

    return (
<View style={styles.container}>
        <StatusBar backgroundColor={COLORS.colorButtonHomeSignIn} barStyle="light-content"/>
      <Routes/>
      </View> 
    )
  }
  const styles=StyleSheet.create({
    container:{
        flex:1,
      
      
    }
  })

export default Home
