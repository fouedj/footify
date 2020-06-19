import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert
 
 } from 'react-native';

import {useForm} from '../util/hooks';
import Axios from 'axios';
import {useNetInfo} from "@react-native-community/netinfo";
import { Actions } from 'react-native-router-flux';
import COLORS from '../commun/color';
import { Styles } from '../commun/Styles';

function FormRegister({type}) {
const[errors,setErrors]=useState(null)
const netInfo = useNetInfo();

function onSubmit(){
  if(!!!netInfo.isConnected){
Alert.alert("Erreur de connexion","Veuillez activer votre Wifi ou bien reseau cellulaire ")
  }

  setErrors(null)
  Axios.post('http://192.168.1.17:5000/auth/register',values).then((response)=>{
    const{success}=response.data
    if(!!!success){
      const{errors}=response.data
      setErrors(errors)
      return null;
    }
    const{userAdded,token}=response.data;
    Actions.HomeScreenNavigation();
    console.log("user Added:",userAdded,"Token:",token)
 })
}
    const {onChange,values} = useForm({
    
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <View style={styles.container}>
   
      <TextInput
        style={styles.inputBox}
        placeholder="Nom"
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="white"
        selectionColor="#fff"
        onChangeText={(text) => onChange(text, 'lastName')}
        value={values.lastName}
        editable={true}
      />
      {errors?.lastName && <Text style={styles.inputErrors}>{errors.lastName}</Text>}
         <TextInput
        style={styles.inputBox}
        placeholder="Prénom"
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="white"
        selectionColor="#fff"
        onChangeText={(text) => onChange(text, 'firstName')}
        value={values.firstName}
      />
       {errors?.firstName && <Text style={styles.inputErrors}>{errors.firstName}</Text>}
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="white"
        selectionColor="#fff"
        onChangeText={(text) => onChange(text, 'email')}
        value={values.email}
        keyboardType={'email-address'}
      />
       {errors?.email && <Text style={styles.inputErrors}>{errors.email}</Text>}
      
      <TextInput
        style={styles.inputBox}
        placeholder="Poste"
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="white"
        selectionColor="#fff"
        onChangeText={(text) => onChange(text, 'post')}
        value={values.post}
        keyboardType={'default'}
      />
        {errors?.post && <Text style={styles.inputErrors}>{errors.post}</Text>}
      <TextInput
        style={styles.inputBox}
        placeholder="Telephone"
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="white"
        selectionColor="#fff"
        onChangeText={(text) => onChange(text, 'phoneNumber')}
        value={values.phoneNumber}
        keyboardType={'phone-pad'}
      />
        {errors?.phoneNumber && <Text style={styles.inputErrors}>{errors.phoneNumber}</Text>}
        <TextInput
        style={styles.inputBox}
        placeholder="Mot de passe"
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="white"
        selectionColor="#fff"
        onChangeText={(text) => onChange(text, 'password')}
        value={values.password}
        secureTextEntry={true}
      />
        {errors?.password && <Text style={styles.inputErrors}>{errors.password}</Text>}
      <TextInput
        style={styles.inputBox}
        placeholder="Confirmer mot de passe"
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholderTextColor="white"
        selectionColor="#fff"
        onChangeText={(text) => onChange(text, 'confirmPassword')}
        value={values.confirmPassword}
        secureTextEntry={true}
      />
        {errors?.confirmPassword && <Text style={styles.inputErrors}>{errors.confirmPassword}</Text>}
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}> {type} </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  ...Styles.flexCenter,
    marginBottom: 100,
  },
  inputBox: {
    width: 300,
    backgroundColor: COLORS.backgroudColorTextInput,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    fontSize: 15,
    color: COLORS.white,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.backgroudColorTextInput,
    borderRadius: 25,
    width: 230,
    marginVertical: 8,
    paddingVertical: 8,
    backgroundColor: COLORS.buttonColor,
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
}
});
/*const REGISTER_USER = gql`
  mutation register(
    $firstName: String
    $lastName: String
    $age: String
    $phoneNumber: String
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        firstName: $firstName
        lastName: $lastName
        age: $age
        phoneNumber: $phoneNumber
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;*/
export default FormRegister;
