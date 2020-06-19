import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import FormRegister from '../components/FormRegister';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../commun/color';

function Register() {
	const goBack = () => {
		Actions.login();
	};
	return (
		<ScrollView style={styles.container}>
			<FormRegister type="Inscription" />
			<View style={styles.signupTextCont}>
				<Text style={styles.signupText}> Vous avez un compte? </Text>
				<TouchableOpacity onPress={goBack}>
					<Text style={styles.signupButton}>Connecter</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.backgroundColorContainer,
		flexGrow: 1
	},
	signupTextCont: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingVertical: 16,
		flexDirection: 'row'
	},
	signupText: {
		color: COLORS.signupText,
		fontSize: 16
	},
	signupButton: {
		color: COLORS.white,
		fontSize: 16,
		fontWeight: '500'
	}
});

export default Register;
