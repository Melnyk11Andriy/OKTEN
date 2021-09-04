<template>
    <div>
        <h2>Posts:</h2>
        <ul :style="{ maxHeight: '200px', overflow: 'auto' }">
            <li v-for="{ id, title } of  posts" :key="id">
                <router-link :to="`/posts/${id}`">{{ title }}</router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";

    export default {
        name: "Posts",
        // data() {
        //     return {
        //         posts: []
        //     }
        // },
        created: function () {
            this.fetchPosts();
        },
        computed: mapState('posts',['posts']),
        methods: mapActions('posts', ['fetchPosts'])
        // methods: {
        //     async fetchPosts() {
        //         try {
        //             this.posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        //         } catch (err) {
        //             console.log(err);
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    ul {
        background-color: grey;
    }

    li {
        list-style: none;
    }
</style>
