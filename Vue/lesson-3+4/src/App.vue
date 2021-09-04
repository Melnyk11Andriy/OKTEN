<template>
    <div id="app">
<!--        <h1>Counter is: {{$store.state.count}}</h1>-->
        <h3>Counter is: <em>{{counter}}</em> ("...mapState")</h3>
        <h3>Counter2 is: {{counter2}} ("...mapState")</h3>
        <h3>Counter is: <em>{{counterFormatted}}</em> ("...mapGetters")</h3>
        <h3>Counter is: <em>{{countFromStore}}</em> ("countFromStore")</h3>

<!--        <button @click="$store.dispatch('inc')">increment</button>-->
<!--        <button @click="$store.dispatch('incCustom', 10)">inc custom</button>-->
        <button @click="inc">increment</button>
        <button @click="incCustom(10)">inc custom</button>
        <div class="links-wrapper">
            <router-link to="/">HOME</router-link>
            <router-link to="/foo">go to Foo</router-link>
            <router-link to="/bar">go to Bar</router-link>
            <router-link to="/posts">go to Posts</router-link>
            <router-link to="/posts/1">go to Post</router-link>
        </div>
        <div class="component-deploy">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex';

    export default {
        name: 'App',
        created() {
            console.log(this);
        },
        computed: {
            // something like { useSelector } in react
            ...mapState({
                counter: state => state.counter1.count,
                counter2: state => state.counter2.count
            }),
            ...mapGetters('counter1',['counterFormatted']),
            // previous way to avoid using { mapState, mapGetters } 👇
            countFromStore() {
                return this.$store.state.count
            }
        },
        methods: {
            ...mapActions('counter1', ['inc', 'incCustom'])
        }
    }
</script>

<style>
    em {
        color: #7c71c1;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .links-wrapper {
        margin: 1rem 0;
        display: flex;
        justify-content: space-around;
    }
</style>
