<template>
  <div id="app">
    <img :alt="imageAlt" :src="imageSrc">
    <button @click="incCounter1">test {{ counter1 }}</button>

    <ul>
      <li v-for="(item, index) of items" :key="index" @click="onListItemClick(item)">
        {{ item }} = {{ index }}
        <button @click="itemRemove(item)">remove</button>
      </li>
    </ul>

        <h1 v-show="counter === 11">ELEVEN</h1>
<!--    <h1 v-if="counter === 0">HELLO</h1>-->
<!--    <h1 v-else-if="counter % 2">DR.</h1>-->
<!--    <h1 v-else>Evil</h1>-->

    <div>{{ title }}</div>

    <Counter :counter="counterVal" @childIncBtn="incHandler" @childDecBtn="decHandler" />
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Img from './assets/logo.png';

export default {
  name: 'App',
  components: {
    Counter: Counter
  },
  data() {
    return {
      counter: 0,
      counter1: 0,
      title: 'I am a heading',
      imageAlt: 'Vue logo',
      imageSrc: Img,
      items: [1, 2, 3, 4]
    }
  },
  methods: {
    onListItemClick(itemVal) {
      console.log(itemVal);
    },
    itemRemove(item) {
      // this.items.splice(index, 1);
      this.items = this.items.filter(el => el !== item);
    },
    incHandler(x, y, z) {
      console.log(x, y, z);
      this.counter++;
    },
    incCounter1() {
      this.counter1++;
    },
    decHandler() {
      this.counter--;
    }
  },
//  something like react useMemo
  computed: {
    counterVal() {
      console.log('recomputed string value');
      return `Counter value is ${this.counter}`
      .toUpperCase().replaceAll(' ', '*');
    }
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
<!--data() - something like a state in React -->
