const Layout = {
    template: `
    <div>
       <h2> Index</h2>
       <router-link to='/home'>go Home</router-link>
       <router-link to='/category'>go Category</router-link>
       <router-link to='/shopcart'>go Shopcart</router-link>
       <router-link to='/setting/233'>go Setting</router-link>
       <router-view></router-view>
    </div>
    `
}
const Home = {
    template: `
    <div>
       <h2> Home</h2>
       <button @click='goToShopcart'>购物车</button>
       <button @click='goToSetting'>设置页</button>
       <button @click='goToCategory'>种类</button>
    </div>
    `,
    methods: {
        goToShopcart() {
            this.$router.push("Shopcart");
        },
        goToSetting() {
            const userId = '123'
            //--使用这种方法必须在路由中定义name，否则不生效
            this.$router.push({ name: 'setting', params: { id: userId } });
            //--如果提供了 path，params 会被忽略
            // this.$router.push( {path:`setting/${userId}`});

        },
        goToCategory() {
            this.$router.push({ path: 'Category' });

        }
    }
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
         <h6> The userID is {{$route.params.id}} </h6>
    </div>
    `
}
const router = new VueRouter({
    routes: [
        {
            path: '/', component: Layout,
            children: [
                { path: '/home', component: Home },
                { path: '/category', component: Category },
                { path: '/shopcart', component: Shopcart },
                { name:'setting', path: '/setting/:id', component: Setting },
            ]
        },
    ]
})
new Vue({
    el: '#app',
    router: router,
})