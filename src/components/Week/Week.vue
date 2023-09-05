<template>
    <div class="week">
    <div class="week__nav">
        <button @click="show=true" class="week__btn " :class="{active: show==true}">На неделю</button>
        <button @click="show=false" class="week__btn" :class="{active: show==false}">Отменить</button>
    </div>
    <div class="week__content" v-show="show">
        <Day v-for="item, index in getDailyWeather" :key="index"
        :day="item"
        :index="index"
        />
    </div>
    </div>
</template>

<script>
import Day from "../Day/Day.vue";
import { mapActions, mapGetters } from "vuex";
    export default {
        data(){
            return {
                show: true
            }
        },
        components: {
            Day,
        },
        computed: {
            ...mapGetters(['getDailyWeather'])
        },
    }
</script>

<style lang="scss">

</style>