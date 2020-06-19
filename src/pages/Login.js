import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FormLogin from '../components/FormLogin'
import { Actions } from 'react-native-router-flux'
import COLORS from '../commun/color'
import LogoSignIn from '../components/LogoSignIn'
import { Styles } from '../commun/Styles'


const Login = () => {
    const goToRegister=()=>{
        Actions.register()
    }
    return (
        <View style={styles.container}>
            <LogoSignIn/>
            <FormLogin type="CONNEXION"/>
            <View style={styles.signupTextCont}>
         <Text style={styles.signupText}> Vous n'avez pas un compte? </Text>  
        <TouchableOpacity onPress={goToRegister}>
        <Text style={styles.signupButton}>S'inscrire</Text>
        </TouchableOpacity>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
    
     ...Styles.flexCenter
    },
    signupTextCont:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'flex-end' ,
        flexDirection:'row'
    },
    signupText:{
        color:COLORS.colorTextEmail,
        fontSize:16
    },
    signupButton:{
        color:COLORS.colorTextSignUp,
        fontSize:16,
        fontWeight:'500'
    }
})

export default Login
