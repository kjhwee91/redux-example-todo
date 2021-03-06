let nextTodoId = 0;

export const addTodo = text => {
	console.log("add todo - actions ");
	return {
		type: "ADD_TODO",
		id: nextTodoId++,
		text,
	};
};

export const setVisibilityFilter = filter => ({
	type: "VISIBILITY_FILTER",
	filter,
});


export const toggleTodo = id => ({
	type: "TOGGLE_TODO",
	id,
});
