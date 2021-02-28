const Home = {
    template: `
    <div>
       <h2> Home</h2>
    </div>
    `
}
const UserDetail = {
    template: `
    <div>
        <h3> this is UserDetail {{$route.params.id}} </h3>
        <router-link to='profile'>Profile</router-link>
        <router-link to='post'>Post</router-link>
        <router-view></router-view>
    </div>
    `
}
const UserProfile = {
    template: `
    <div>
        <h4> This is UserProfile </h4>
        <router-view></router-view>
    </div>
    `
}
const UserPosts = {
    template: `
    <div>
         <h4> This is UserPosts </h4>
        <router-view></router-view>
    </div>
    `
}
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            // children: [
            //     {
            //         path: ':id',
            //         component: UserDetail,
            //         //-配置子路由
            //         children: [
            //             {
            //                 path: 'profile',
            //                 component: UserProfile,
            //             },
            //             {
            //                 path: 'post',
            //                 component: UserPosts,
            //             },
            //         ]
            //     }
            // ]
        },

    ]
})
new Vue({
    el: '#app',
    router: router,
})