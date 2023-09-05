<template>
    <div class="day">
    <h3 class="day__title">
        {{ index == 0  ? 'сегодня' : index == 1 ? 'завтра' : getWeekDay }}</h3>
    <p class="day__date">{{ getDay }} {{ getMonth }}</p>
    <p class="day__temp">{{Math.round(day.temp.day)}}°</p>
    <img src="@/assets/img/sun.svg" v-if="icon == 1" alt="" class="day__icon">
    <img src="@/assets/img/cloudy.svg" v-else-if="icon == 2" alt="" class="day__icon">
    <img src="@/assets/img/small-rain.svg" v-else-if="icon == 3" alt="" class="day__icon">
    <img src="@/assets/img/mainly-cloudy.svg" v-else-if="icon == 4" alt="" class="day__icon">
    <img src="@/assets/img/rain.svg" v-else-if="icon == 9" alt="" class="day__icon">
    <img src="@/assets/img/small-rain-sun.svg" v-else-if="icon == 10" alt="" class="day__icon">
    <img src="@/assets/img/storm.svg" v-else-if="icon == 11" alt="" class="day__icon">
    <img src="@/assets/img/snow.svg" v-else-if="icon == 13" alt="" class="day__icon">
    <img src="@/assets/img/mist.svg" v-else-if="icon == 50" alt="" class="day__icon">
    <p class="day__night">{{Math.round(day.temp.night)}}°</p>
    <p class="day__desc">{{day.weather[0].description}}</p>
    </div>
</template>

<script>
import unix from '../../timestamp'
    export default {
        props: {
            day: Object,
            index: Number
        },
        computed: {
            getWeekDay(){
                return unix(this.day.dt, 'weekday')
            },
            getDay(){
                return unix(this.day.dt, 'day')
            },
            getMonth(){
                return unix(this.day.dt, 'month')
            },
            icon(){
                let icon = this.day.weather[0].icon
                return parseInt (icon);
            },
        }
    }
</script>

<style lang="scss">

</style>