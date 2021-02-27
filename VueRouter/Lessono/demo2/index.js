const User={
    computed:{
        title(){
            return 'ID'
        }
    },
    //- 对路由变化监听，watch或者beforeRouteUpdate（导航守卫）都可以
    beforeRouteUpdate (to, from, next) {
        console.log('to-->',to);
        console.log('from-->',from);
        next()// 使用导航守卫必须使用next，否则不发生变化
      },
    watch:{
        '$route'(to,from){
            console.log('to-->',to);
            console.log('from-->',from);
        }
    },
    template:'<div>User--{{title}}--{{$route.params.id}}</div>'
}
const router =new VueRouter({
    routes:[
        //-配置路由路径及其内容, 动态路径参数 以冒号开头
        {path:'/user/:id',component:User}
    ]
})
new Vue({
    el:'#app',
    router:router,
})