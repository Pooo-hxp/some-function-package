const Menu = {
    template: `
    <div>
       <router-link to='/'>Home </router-link>
       <router-link to='/Products'> Products</router-link>
       <router-link to='/About'>About </router-link>
    </div>
    `
}
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
        { path: '/', components: {
            default:Home,
            menu:Menu,
        }},
        { path: '/about', components: {
            default:About,
            menu:Menu,
        }},
        { path: '/products', components: {
            default:Products,
            menu:Menu,
        }},
    ]
})
new Vue({
    el: '#app',
    router: router,
})