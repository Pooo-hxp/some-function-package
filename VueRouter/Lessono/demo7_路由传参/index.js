const User = {
    props: ['id'],
    //--为了与$route解耦，不使用这种方式获取参数
    // template: '<div>User {{ $route.params.id }}</div>'
    template: '<div>User {{ id }}</div>'
};
const SideBar = {
    props: ['id'],
    template: '<div>sidebar {{ id }}</div>'
};
const router = new VueRouter({
    routes: [
        // props 被设置为 true，route.params 将会被设置为组件属性
        { path: '/user/:id', component: User, props: true },//---布尔模式
        { path: '/user2/:id', component: User,  props: { id: 222 } },//--对象模式
        { path: '/user3/:id', component: User, props: (route) => ({ id: '333' }) },//--函数模式
        {
        // 对于包含命名视图的路由，必须分别为每个命名视图添加 `props` 选项：
            path: '/SideBar/:id',
            components: { default: User, sidebar: SideBar },
            props: { default: true, sidebar: {
                title:'this  is sidebar'
            } }
        }
    ]
})
new Vue({
    el: '#app',
    router: router,
})