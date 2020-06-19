import React from 'react'
import { View,  StyleSheet, Image } from 'react-native'
import { Styles } from '../commun/Styles'
import { scale } from 'react-native-size-matters'

function LogoSignIn(){
return(
    <View style={styles.container}>
    
     <Image 
        style={styles.img}
        source={require('../Images/logo.png')}/>
    
     
      <Image 
        style={styles.title}
       source={require('../Images/bienvenue.png')}/>
      
    </View>
)

}
const styles =StyleSheet.create({
    container:{
      ...Styles.flexCenter,
     
      

    },
   img: {
       width:scale(190),
    height:scale(190),
    resizeMode:'contain',
   
       }

    ,
    title:{
        width:scale(200),
        height:scale(40),
        resizeMode:'contain',
        paddingTop:15,
     
     },
     test:{
         backgroundColor:'red'
     }
})
export default LogoSignIn