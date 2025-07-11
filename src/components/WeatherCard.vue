<template>
    <div class="days-tab text-center">
        <h3> Daily Weather</h3>
        <div v-if="loading" class="loading">Loading...</div>

        <div class="forecast-container">
            <div v-for="day in forecast" :key="day.date" class="forecast-item">
                <div class="py-3">
                    <img :src="day.iconUrl" alt="" width="70">
                </div>
                <div class="py-3">
                    <span>{{ getDayName(day.date) }}</span>
                </div>
                <div class="py-3" style="font-weight: bold; font-size: larger;">{{ day.temperature }}&deg;C</div>
            </div>
        </div>

       <!-- <ul v-for="day in forecast" :key="day.date" class="forecast-list p-0">
            <li class="li_active py-3">
                <div class="py-3">
                    <img :src="day.iconUrl" alt="">
                </div>
                <div class="py-3">{{ getDayName(day.date) }}</div>
                <div class="py-3">{{ day.temperature }}&deg;C</div>
            </li>
        </ul>-->
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'DailyWeather',
    props: {
        city: String
    },
    data() {
        return {
            forecast: [],
            loading: true,
            iconUrl: null
        }
    },
    mounted() {
        this.fetchWeatherData()
    },
    methods: {
        async fetchWeatherData() {
            const apikey = '19bb4e815b33fd3c5b8492e4d1c6a3d1'
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&appid=${apikey}`

            await axios.get(apiUrl).then(Response => {
                const forecastData = Response.data.list
                const filteredData = forecastData.map(item => {
                    return {
                        date: moment(item.dt_txt.split(' ')[0]),
                        temperature: Math.round(item.main.temp),
                        description: item.weather[0].description,
                        iconUrl: `https://api.openweathermap.org/img/w/${item.weather[0].icon}.png`
                    }
                }).reduce((acc, item) => {
                    if(!acc.some(day => day.date.isSame(item.date, 'day'))){
                        acc.push(item)
                    }
                    return acc
                }, []).slice(0, 5)

                console.log(filteredData)
                this.forecast = filteredData
                this.loading = false
            }).catch(error => {
                console.error('Error fetching weather data: ', error)
                this.loading = false
            })
        },

        getDayName(date) {
            return date.format('ddd')
        }
    }
}
</script>

<style scoped>


.forecast-container {
    display: flex; 
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;                
    padding-inline:  15px;
    
    margin: 0 auto;     
    margin-left: 40px;
    padding-bottom: 40px;
    max-width: 100%;           
}


.forecast-item {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 18%;                 
    text-align: center;
    transition: transform 0.3s ease;
    background: none;
}

.forecast-item:hover {
    transform: scale(1.2);
    transition: transform 0.1s ease;
}

h3 {
    display: inline-block;
    font-size: 37px;
    font-weight: bold;
    background: linear-gradient(0.25turn, #3f87a6, #010308, #f69d3c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 27px;
    padding-top: 27px;
    line-height: 1;
}


.days-tab {
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narroe', Arial, sans-serif;
    margin-top: 5rem;
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;

    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}

.loading {
    color: #FFF;
}

ul {
    margin: 0;
}

li {
    display: inline-block;
    list-style: none;
    height: 100%;
    width: 21%;
    max-width: 21%;
    font-size: 2vw;
    line-height: 1.2;
}

span {
    display: block;
    margin-bottom: 5px;
    font: 100% sans-serif;
    height: 35px;
}


.li_active {
    background: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #222831;
    border-radius: 10px;
    margin: 0.5rem;
    color: #fff;
    font-weight: 600;
}

.li_active:hover {
    transform: scale(1.2);
    transition: transform 0.1s ease;
}

.li_active_temp {
    display: inline-block;
    background-color: #222831;
    color: #ffffff;
    transition: background-color 0.5s;
    border-radius: 10px;
}

.li_active_temp:hover {
    transform: scale(1.2);
    transition: transform 0.1s ease;
    background: #fff;
    border-radius: 10px;
    color: #191a1f;
}

</style>