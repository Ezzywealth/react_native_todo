import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Todo } from '../typings';
import AntDesign from '@expo/vector-icons/AntDesign';

type Prop = {
	item: Todo;
	handlePress: (id: number) => void;
};
const TodoItem = ({ item, handlePress }: Prop) => {
	return (
		<TouchableOpacity>
			<View style={styles.view}>
				<Text key={item.id} style={styles.list}>
					{item.todo}
				</Text>
				<TouchableOpacity onPress={() => handlePress(item.id)}>
					<AntDesign name='delete' size={18} color='coral' />
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};

export default TodoItem;

const styles = StyleSheet.create({
	list: {
		margin: 10,
		alignItems: 'center',
		fontSize: 20,
	},
	view: {
		backgroundColor: 'transparent',
		borderStyle: 'dotted',
		borderColor: 'coral',
		borderWidth: 2,
		padding: 10,
		marginVertical: 10,
		width: 300,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
