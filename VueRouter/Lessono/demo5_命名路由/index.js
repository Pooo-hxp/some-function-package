const User={
    template:`
    <div>
        User {{$route.params.userId}}
    </div>
    `
}
const Home={
    template:`
    <div>
       <h3>This is  Home</h3> 
       <button @click='gotoUser'>User</button>
       <router-link :to="{name:'user',params:{userId:233}}">User</router-link>
    </div>
    `,
    methods:{
        gotoUser(){
            this.$router.push({
                name:'user',
                params:{userId:'0609'}
            })
        }
    }
}
const router=new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            name:'user',
            path:'/user/:userId',
            component:User
        }
    ]
})
new Vue({
    el:'#app',
    router:router,
})