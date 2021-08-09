<template>
<div id="counter-wrapper">
  <h4>counter ✰✰✰ value is:{{ counter }}</h4>
  <!--:class="['bold', {green: counter > 0, blue: counter < 0}]"-->
  <button  @click="inc">increment</button>
  <button  @click="$emit('childDecBtn')">decrement</button>
</div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    counter: {
      type: String,
      required: true
    }
  },
  methods: {
    inc() {
      console.log(this.$emit);
      this.$emit('childIncBtn', 1, 2, 3);
    },
    // getClassName() {
    //   return this.counter > 0 ? 'green' : 'blue';
    // }
  }
}
</script>

<style scoped>
#counter-wrapper {
  color: darkorange;
  background-color: #2c3e50;
}

.bold {
  font-weight: bold;
}

.green {
  background: forestgreen;
}

.blue {
  background: dodgerblue;
}
</style>
