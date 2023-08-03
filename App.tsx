import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, Touchable, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import FormElement from './components/Form';
import TodoItem from './components/TodoItem';
import { Todo } from './typings';

const data = [
	{
		id: 1,
		todo: 'Buy Milk',
	},
	{
		id: 2,
		todo: 'Buy Bread',
	},
	{
		id: 3,
		todo: 'Buy Eggs',
	},
	{
		id: 4,
		todo: 'Buy a phone',
	},
	{
		id: 5,
		todo: 'Buy a car',
	},
];
// const data = [
// 	{
// 		name: 'shaikh',
// 		age: 25,
// 		id: 1,
// 	},
// 	{
// 		name: 'ezzy',
// 		age: 29,
// 		id: 2,
// 	},
// 	{
// 		name: 'ezzywealth',
// 		age: 35,
// 		id: 3,
// 	},
// 	{
// 		name: 'Desmond',
// 		age: 20,
// 		id: 4,
// 	},
// 	{
// 		name: 'Gabriel',
// 		age: 22,
// 		id: 5,
// 	},
// 	{
// 		name: 'Stanley',
// 		age: 29,
// 		id: 6,
// 	},
// 	{
// 		name: 'Tony',
// 		age: 37,
// 		id: 7,
// 	},
// 	{
// 		name: 'shaikh',
// 		age: 25,
// 		id: 8,
// 	},
// 	{
// 		name: 'ezzy',
// 		age: 29,
// 		id: 9,
// 	},
// 	{
// 		name: 'ezzywealth',
// 		age: 35,
// 		id: 10,
// 	},
// 	{
// 		name: 'Desmond',
// 		age: 20,
// 		id: 11,
// 	},
// 	{
// 		name: 'Gabriel',
// 		age: 22,
// 		id: 12,
// 	},
// 	{
// 		name: 'Stanley',
// 		age: 29,
// 		id: 13,
// 	},
// 	{
// 		name: 'Tony',
// 		age: 37,
// 		id: 14,
// 	},
// ];
export default function App() {
	const [name, setName] = useState('shaikh');
	const [age, setAge] = useState('25');
	// const [people, setPeople] = useState(data);
	const [todos, setTodos] = useState(data);
	const [text, setText] = useState('');

	const handlePress = (id: number) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const handleAddTodo = (text: string) => {
		if (text.length < 3) {
			Alert.alert('OOPS!', 'Todo must be at least 3 characters long', [{ text: 'Understood', onPress: () => console.log('alert closed') }]);
			return;
		}
		const data: Todo = {
			id: todos.length + 1,
			todo: text,
		};
		setTodos((prev) => [...prev, data]);
		setText('');
	};

	// useEffect(() => {
	// 	setTodos(data);
	// });
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				{/* <ScrollView>
				{data.map((item) => (
          <Text key={item.id} style={styles.list}>
						<Text>{item.name}</Text>
						<Text>{item.age}</Text>
					</Text>
				))}
			</ScrollView> */}
				<Header />
				<FormElement handleAddTodo={handleAddTodo} text={text} setText={setText} />
				<View style={styles.view}>
					<FlatList data={todos} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <TodoItem item={item} handlePress={handlePress} />} />
				</View>
				{/* <FlatList
				data={people}
				numColumns={2}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => handlePress(item.id)}>
          <Text key={item.id} style={styles.list}>
          {item.name} - {item.age}
          </Text>
					</TouchableOpacity>
          )}
        /> */}
				{/* <Text>
				My name is {name} and i am {age} yes old
        </Text>
        <Text>Enter your name:</Text>
        <TextInput style={styles.input} placeholder='e.g Ezzywealth' multiline onChangeText={(val) => setName(val)} />
        <Text>Enter your age:</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='e.g 25' onChangeText={(val) => setAge(val)} />
        <Button title='update name' onPress={() => setName('Ezzy')} />
			<StatusBar style='auto' /> */}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'scroll',
		width: '100%',
	},
	input: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 6,
		width: 300,
		margin: 10,
	},
	list: {
		backgroundColor: 'lime',
		color: '#fff',
		display: 'flex',
		padding: 10,
		marginVertical: 10,
		width: 150,
		margin: 10,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 20,
	},
	view: {
		flex: 1,
		paddingBottom: 50,
	},
});
