import VueRouter from "vue-router";

import Foo from './components/Foo';
import Bar from './components/Bar';
import Posts from './components/Posts';
import Post from './components/Post';


const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/posts', component: Posts, children: [
            { path: ':id', component: Post }
        ] },
    // { path: '/posts/:id', component: Post },
]

 export const router = new VueRouter({ routes, mode: 'history' })
