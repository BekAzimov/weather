<template>
    <div class="current">
        <div class="current__info">
            <p class="current__deg">{{ Math.round(getFullWeather.current.temp) }}°</p>
            <p class="current__day">Сегодня</p>
            <p class="current__time">Время: {{new Date().getHours()}}:{{ new Date().getMinutes() }}</p>
            <p class="current__city">Город: {{ getFullWeather.name }}</p>
            <img src="@/assets/img/sun.svg" v-if="icon == 1" alt="" class="current__img">
            <img src="@/assets/img/cloudy.svg" v-else-if="icon == 2" alt="" class="current__img">
            <img src="@/assets/img/small-rain.svg" v-else-if="icon == 3" alt="" class="current__img">
            <img src="@/assets/img/mainly-cloudy.svg" v-else-if="icon == 4" alt="" class="current__img">
            <img src="@/assets/img/rain.svg" v-else-if="icon == 9" alt="" class="current__img">
            <img src="@/assets/img/small-rain-sun.svg" v-else-if="icon == 10" alt="" class="current__img">
            <img src="@/assets/img/storm.svg" v-else-if="icon == 11" alt="" class="current__img">
            <img src="@/assets/img/snow.svg" v-else-if="icon == 13" alt="" class="current__img">
            <img src="@/assets/img/mist.svg" v-else-if="icon == 50" alt="" class="current__img">
        </div>
        <div class="current__content">
            <div class="current__card">
                <div class="current__icon">
                    <img src="../../assets/img/temp.svg" alt="">
                </div>
                <p class="current__name">Температура</p>
                <p class="current__desc">{{Math.round(getFullWeather.current.temp)}}° - ощущается как {{Math.round(getFullWeather.current.feels_like)}}°</p>
            </div>
            <div class="current__card">
                <div class="current__icon">
                    <img src="../../assets/img/pressure.svg" alt="">
                </div>
                <p class="current__name">Давление</p>
                <p class="current__desc">{{getFullWeather.current.pressure}} мм ртутного столба</p>
            </div>
            <div class="current__card">
                <div class="current__icon">
                    <img src="../../assets/img/precipitation.svg" alt="">
                </div>
                <p class="current__name">Осадки</p>
                <p class="current__desc">{{getFullWeather.current.humidity}}%</p>
            </div>
            <div class="current__card">
                <div class="current__icon">
                    <img src="../../assets/img/wind.svg" alt="">
                </div>
                <p class="current__name">Ветер</p>
                <p class="current__desc">{{getFullWeather.current.wind_speed}} м/с {{windDeg}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters(['getFullWeather']),
            icon(){
                let icon = this.getFullWeather.current.weather[0].icon
                return parseInt (icon);
            },
            windDeg(){
                let deg = this.getFullWeather.current.wind_deg;
                if ( (deg >=0 && deg < 45) || (deg >315 && deg <=360) ) {
                    deg = 'северный'
                }
                else if(deg >= 45 && deg < 135){
                    deg = 'восточный'
                }
                else if(deg >= 135 && deg < 225){
                    deg = 'южный'
                }
                 else {
                    deg = 'западный'
                }
                return deg;
            }
        }
    }
</script>

<style lang="scss">

</style>