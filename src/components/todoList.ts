import { defineComponent } from 'vue';
import todoItem from './todoItem.vue';

export default defineComponent({
	components: {
		todoItem,
	},
	data() {
		return {
			todos: [
				{
					text: 'Купить колбасу',
				},
				{
					text: 'Постричь собаку',
				},
				{
					text: 'Убрать квартиру',
				},
			],
			value: '',
		}
	},
	methods: {
		addTodo(value: string) {
			if (value) {
				this.todos.unshift({text: value})
				this.value = '';
			}
		},
		removeTodo(index: number) {
			this.todos.splice(index, 1);
		}
	},
	computed: {
		todosNumber(): number {
			return this.todos.length;
		}
	},
})