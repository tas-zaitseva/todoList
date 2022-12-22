<script src="./todoItem.ts" lang="ts"></script>

<template>
	<li :class="['todos__item todo', {'todo_done': done}]" :key="index" ref="list">
		<div :class="['todo__number']">{{index + 1}}</div>
		<div :class="['todo__text']">{{ text }}</div>
		<input class="todo__checkbox" type="checkbox" name="" @change="setCheckState" ref="checkbox">
		<button class="todo__remove" @click="removeTodo">Удалить</button>
	</li>
</template>

<style>

.todo {
	width: 100%;
	display: flex;
	column-gap: 20px;
}

.todo__checkbox {
	margin-left: auto;
}

.todo_done {
	text-decoration: line-through;
}

</style>