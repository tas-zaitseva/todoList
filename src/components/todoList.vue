<script src="./todoList.ts" lang="ts"/>

<template>
	<section class="todos">
		<h1 class="todos__title">todo List</h1>
		<div class="todos__count">Число todos : {{ todosNumber }}</div>
		<div class="todos__add">
			<input
				class="todos__input"
				type="text"
				placeholder="Введите название todo"
				v-model="value"
				ref="input"
				@keyup.enter="addTodo(value)">
			<button class="todos__add-btn" @click="addTodo(value)">Добавить todo</button>
		</div>
		<ul class="todos__list">
			<todoItem v-for="(todo, index) in todos" :text="todo.text" :index="index" @remove-todo="removeTodo"></todoItem>
		</ul>
	</section>
</template>

<style>
.todos__title {
	margin-bottom: 15px;
}

.todos__count {
	margin-bottom: 30px;
}

.todos__list {
	width: 60%;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
}

.todos__add {
	display: flex;
	column-gap: 15px;
	width: 60%;
	margin-bottom: 20px;
	align-items: center;
}

.todos__add-btn {
	padding: 10px 10px;
}

.todos__input {
	flex-grow: 1;
	padding: 10px 10px;
}


</style>