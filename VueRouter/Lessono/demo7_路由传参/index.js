const User = {
    props: ['id'],
    template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User, props: true },

        // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
        {
            path: '/user/:id',
            components: { default: User, sidebar: Sidebar },
            props: { default: true, sidebar: false }
        }
    ]
})
new Vue({
    el: '#app',
    router: router,
})