(function () {
    const key='key=0c7ebab2461621aeb2c34b3a82e4c702';
    const header='http://api.tianapi.com/txapi';
    var vm = new Vue({
        el: '#app',
        data: {
        },
        methods: {
        },
        components: {
            hxpweather: {
                template: '#hxp-weather',
                data: function () {
                    return {
                        weather_date: null,/*日期*/
                        weather_week: null,/*星期*/
                        weather_weather: null,/*天气*/
                        weather_weatherimg: ('img/'),/*天气图标*/
                        weather_real: null,/*实时温度*/
                        weather_highest: null,/*最高温*/
                        weather_lowest: null,/*最低温*/
                        weather_air_level: null,/*空气质量*/
                    }
                },
                methods: {
                },
                mounted() {
                    let city = 'city=郑州';
                    let word = 'tianqi';
                    const url = `${header}/${word}/?${key}&${city}`;
                    axios
                        .get(url)
                        .then(res => {
                            const data = res.data.newslist[0];
                            this.weather_date = data.date;
                            this.weather_week = data.week;
                            this.weather_weather = data.weather;
                            this.weather_weatherimg += data.weatherimg;
                            // 获取实时天气在卡片上展示本地icon
                            this.weather_real = data.real;
                            this.weather_highest = data.highest;
                            this.weather_lowest = data.lowest;
                            this.weather_air_level = data.air_level;
                            console.log('实时天气数据获取渲染正常');
                        })
                },
            }
        }
    })
})()