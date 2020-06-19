import React,{useState} from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text,Alert } from 'react-native'
import Axios from 'axios'
import { useForm } from '../util/hooks'
import { Actions } from 'react-native-router-flux'
import {useNetInfo} from "@react-native-community/netinfo";
import COLORS from '../commun/color'
import { Styles } from '../commun/Styles'
import { scale } from 'react-native-size-matters'

function FormLogin({type}){
    const[errors,setErrors]=useState(null)
    const[message,setMessage]=useState(null)
    const netInfo=useNetInfo()
      const{onChange,_,values}=useForm({
        email:'',
        password:''
    })
    function handleLogin(){
        if(!!!netInfo.isConnected){
            Alert.alert("Erreur de connexion","Veuillez activer votre Wifi ou bien reseau cellulaire ")
                }
      setErrors(null)
        Axios.post('http://192.168.1.17:5000/auth/login',values).then((resp)=>{
        const {success}=resp.data;
        //console.log(resp.data)
            if(!!!success){
            const {errors} =resp.data;
            //console.log(message)
            setErrors(errors)
           return null;

            }
        const {user,message}=resp.data;
        setMessage(message);
        console.log("user :",user);
        Actions.HomeScreenNavigation()


        }).catch((err)=>{console.log(err.errors.userName)})

        
    }
return(
    <View style={styles.container}>
         <View style={styles.textEmail}>
         <Text style={{color:COLORS.colorTextEmail,fontSize:17}}> Email </Text>
        
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholderTextColor="white"
        selectionColor="#fff"
        onChangeText={(text)=>onChange(text,"email")}
        keyboardType="email-address"
        value={values.email}
        keyboardType={'email-address'}
        /> 
        </View>
       {errors?.email&& <Text style={styles.inputErrors}>{errors.email} </Text> }

       <View style={styles.textEmail}>
         <Text style={{color:COLORS.colorTextEmail,fontSize:17,marginTop:15}}> Mot de passe </Text>     
         <TextInput style={styles.inputBox} 
       
        secureTextEntry={true}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholderTextColor="white"
        onChangeText={(text)=>onChange(text,"password")}
        value={values.password}
        />
        </View>
        {errors?.password&& <Text style={styles.inputErrors}>{errors.password} </Text> }
               <TouchableOpacity style={styles.button}onPress={handleLogin}>
            <Text style={styles.buttonText}> {type} </Text>
        </TouchableOpacity>
        {message && <Text style={styles.buttonText}>{message} </Text>}
    </View>
)

}
const styles =StyleSheet.create({
    container:{
        ...Styles.flexCenter,
        

    },
   inputBox:{
 
    borderBottomWidth:0.4,
    borderColor:"#ccc",
    
    
       width:300,
       paddingHorizontal:16,
       paddingVertical:10,
       fontSize:16,
       color:COLORS.black,
       marginVertical:5

   },
   buttonText:{
       fontSize:16,
       fontWeight:'500',
       color:COLORS.white,
       textAlign:'center',
       fontWeight:"bold",
   },
   button:{
   
    borderRadius:25,
    width:scale( 300),
    height:scale(40),
    backgroundColor:COLORS.colorButtonHomeSignIn,
    alignContent:"center",
    justifyContent:"center",
    marginTop:35
   },
   inputErrors:{
       borderWidth:1,
       color:COLORS.colorBorderError,
       borderColor:COLORS.colorBorderError,
       borderRadius:9,
              backgroundColor:COLORS.backgroudColorError,
       width:290,
       paddingHorizontal:10,
       paddingVertical:5,
       fontWeight:"bold"
   },
   textEmail:{
   justifyContent:"flex-start",
   flexDirection:"column",
   
}
    
})
export default FormLogin