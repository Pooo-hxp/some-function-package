const Home = {
    template: `
    <div>
        User {{$route.params.userId}}
       <router-link to='a'>jump A</router-link>
       <router-link to='b'>jump B</router-link>
       <router-link to='c'>jump C</router-link>
       <router-link to='d'>jump D</router-link>
       <router-link to='alias'>jump alias</router-link>
    </div>
    `
}
const CompB = {
    template: `
    <div>
        This is CompB 
    </div>
    `
}
const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { name :'/b',path: '/b', component: CompB ,alias:'/alias'},//别名alias，路由去b或者alias都是CompB组件
        { path: '/a', redirect: '/b' },//重定向，a 默认跳转到 b
        { path: '/c', redirect: { name: '/b' } },//也可以是一个命名的路由：
        {
            path: '/d', redirect: () => {
                return '/b'
            }
        }
    ]
})
new Vue({
    el: '#app',
    router: router,
})