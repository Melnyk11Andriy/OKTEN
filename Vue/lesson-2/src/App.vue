<template>
  <div id="app">
    <h1>input value: {{ inputValue }}</h1>
    <input type="text" v-model.trim="inputValue" @keypress.enter="createNewTodo" />
    <button @click="createNewTodo">create todo</button>

    <!--    <div v-for="error of errors" :key="error">{{error}}</div>-->

    <ul v-if="todos.length">
      <li v-for="todo of todos" :key="todo.id">{{todo.id}} * {{todo.title}} * {{todo.completed}}</li>
    </ul>
    <h3 v-else-if="loading">LOADING</h3>
    <h3 v-else>NO DATA</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inputValue: '',
      todos: [],
      loading: false
    }
  },
  methods: {
    createNewTodo() {
      if (!this.inputValue) return;

      const newTodo = {
        id: Math.random(),
        title: this.inputValue,
        completed: false
      }
      this.todos.unshift(newTodo);
      this.inputValue = '';
    },
    async fetchTodos() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');

        this.todos = await res.json();
        this.loading = false;
      } catch (err) {
        console.log(err);
      }
    }
  },
  watch: {
    inputValue() {
      console.log(`${typeof this.inputValue} ${this.inputValue} from WATCHER`);
    }
  },
  // lifecycle
  // beforeCreate() {
  //   console.log('before create',this.testMethod, this.inputValue);
  // },
  created() {
    this.fetchTodos();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
