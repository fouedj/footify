import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import LogoHome from '../components/LogoHome'
import { Styles } from '../commun/Styles'
import COLORS from '../commun/color'
import { scale } from 'react-native-size-matters'
import { Actions } from 'react-native-router-flux'

 function HomeScreen() {
     function goSignIn(){
       Actions.login()
     }
     function goSignUp(){
Actions.register()
     }
    return (
        <View style={styles.container}>
        
            <LogoHome/>
           
            
            <Text style={styles.homeText}>FOOTIFY</Text>       
           <Text style={styles.paragraph}numberOfLines={3} ellipsizeMode='middle'>Footify est une application Mobile qui permet de planifier des matchs tout en construisant des equipes d'une maniére organisée</Text>
          
           <TouchableOpacity style={styles.buttonSignUp} onPress={goSignUp}>
              <Text style={styles.TextButtonSignUp}>INSCRIPTION</Text> 
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonSignIn} onPress={goSignIn}>
              <Text style={styles.TextButtonSignIn}>CONNEXION</Text> 
           </TouchableOpacity>
           
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
      ...Styles.flexCenter,
      marginTop:25

    },
    homeText:{
        fontSize:25,
        fontWeight:'bold',
        color:COLORS.black,
        flexDirection:'row',
        paddingVertical:25,
        marginVertical:25
    },
    paragraph:{
        flexDirection:'row',
        marginHorizontal:scale(19),
        fontSize:16,
        textAlign:"justify"
     
    },
    buttonSignUp:{
        backgroundColor:COLORS.colorButtonHomeSignUp,
        marginTop:40,
        width:scale(300),
        borderRadius:25,
        height:scale(40),
        alignContent:"center",
        justifyContent:"center",
    },
    buttonSignIn:{
        backgroundColor:COLORS.colorButtonHomeSignIn,
        marginTop:20,
        width:scale(300),
        borderRadius:25,
        height:scale(40),
        alignContent:"center",
        justifyContent:"center",
    },
    TextButtonSignIn:{
        color:COLORS.white,
        textAlign:"center",
       
        fontWeight:"500",
        fontSize:17,
       
      

    },
    TextButtonSignUp:{
        color:COLORS.white,
        textAlign:"center",
            fontSize:17,
        fontWeight:"500",
       
        


    }

    
})
export default HomeScreen;