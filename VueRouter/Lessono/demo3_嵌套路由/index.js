const User = {
    template: `
    <div>
       <h2> User</h2>
       <div>
        <router-link to='/user/0609'>User0609</router-link>
        <router-link to='/user/0204'>User0204</router-link>
        </div>
        <router-view></router-view>
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
            path: '*',
            component: User,
            children: [
                {
                    path: ':id',
                    component: UserDetail,
                    //-配置子路由
                    children: [
                        {
                            path: 'profile',
                            component: UserProfile,
                        },
                        {
                            path: 'post',
                            component: UserPosts,
                        },
                    ]
                }
            ]
        },

    ]
})
new Vue({
    el: '#app',
    router: router,
})