import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>A list of my Todos!</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		backgroundColor: 'coral',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 80,
	},
	title: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
});
