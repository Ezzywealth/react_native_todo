export type Todo = {
	id: number;
	todo: string;
};

export type FormElementProps = {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
