import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'
import { Styles } from '../commun/Styles'
import {scale} from 'react-native-size-matters'


 function LogoHome() {
    return (
        <View>
               
        <Image 
        style={styles.img}
        source={require('../Images/LogoHome.png')}/>

        </View>
    )
}
const styles =StyleSheet.create({
    container:{
      ...Styles.flexCenter

    },
    img:{
       width:scale(300),
       height:scale(200),
       resizeMode:'contain'
       
       

    }
})
export default LogoHome