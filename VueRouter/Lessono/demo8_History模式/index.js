
const Home = {
    template: `
    <div>
       <h2> Home</h2>
    </div>
    `
}
const Products = {
    template: `
    <div>
       <h2> Products</h2>
    </div>
    `
}
const About = {
    template: `
    <div>
       <h2> About</h2>
    </div>
    `
}
const router = new VueRouter({
    routes: [
        { path: '/', component: Home,  },
        { path: '/Products', component: Products},
        { path: '/About', component: About},
    ]
})
new Vue({
    el: '#app',
    router: router,
})