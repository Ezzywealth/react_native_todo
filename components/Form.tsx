import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

type Props = {
	handleAddTodo: (text: string) => void;
	text: string;
	setText: (text: string) => void;
};
const FormElement = ({ handleAddTodo, text, setText }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>Create a new Todo</Text>
			<TextInput placeholder='enter your todo' value={text} onChangeText={(val) => setText(val)} style={styles.input} />
			<Button title='Add Todo' onPress={() => handleAddTodo(text)} />
		</View>
	);
};

export default FormElement;

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	input: {
		marginBottom: 10,
		width: 300,
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderWidth: 1,
		borderColor: '#ddd',
	},
	label: {
		fontSize: 30,
		marginVertical: 10,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	button: {
		padding: 30,
	},
});
