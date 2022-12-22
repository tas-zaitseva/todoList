import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			done: false,
		}
	},
	props: {
		text:  null,
		index: null,
	},
	methods: {
		setCheckState(): void {
			this.done = this.$refs.checkbox.checked;
		},
		removeTodo(): void {
			this.$emit('remove-todo', this.index)
		}
	},
})