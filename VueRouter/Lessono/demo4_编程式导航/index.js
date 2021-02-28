const Home = {
    template: `
    <div>
       <h2> Home</h2>
    </div>
    `
}
const Category = {
    template: `
    <div>
        <h3> this is Category </h3>
    </div>
    `
}
const Shopcart = {
    template: `
    <div>
        <h4> This is Shopcart </h4>
    </div>
    `
}
const Setting = {
    template: `
    <div>
         <h4> This is Setting </h4>
    </div>
    `
}
const router = new VueRouter({
    routes: [
        {path: '/',component: Home},
        {path: '/category',component: Category},
        {path: '/shopcart',component: Shopcart},
        {path: '/setting',component: Setting},

    ]
})
new Vue({
    el: '#app',
    router: router,
})