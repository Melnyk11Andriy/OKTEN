<template>
    <div>
        <h2>single Post with id: {{ $route.params.id }}</h2>
        <div v-if="post">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <span v-if="post.author">Author is:{{ post.author.name }} ( {{ post.author.username }} )</span>
            <span v-else>Author is unknown</span>
        </div>
        <button @click="$router.back()">go back</button>
    </div>
</template>

<script>
    export default {
        name: "Post",
        created() {
            // console.log(this.$route);
            this.fetchPost();
        },
        data() {
            return {
                post: null
            }
        },
        watch: {
            '$route.params.id'() {
                this.fetchPost()
            }
        },
        methods: {
            async fetchPostAuthor(userId) {
                let author;
                try {
                    author = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
                    console.log(author);
                } catch (err) {
                    author = {
                        name: 'No Name',
                        username: 'No Nickname'
                    };
                }
                return author;
            },
            async fetchPost() {
                try {
                    const {params: {id}} = this.$route;
                    if (!id) return;
                    const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
                    const author = await this.fetchPostAuthor(id);
                    this.post = {...post, author};
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
</script>

<style scoped>

</style>
