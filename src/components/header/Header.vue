<template>
    <nav class="nav">
        <a href="" class="logo">
            <img src="../../assets/img/logo.png" alt="" class="logo__img">
            vue weather
        </a>
        <div class="search">
            <img src="../../assets/img/city.svg" alt="" class="search__icon">
            <input @keydown.enter="setWeather" v-model="query" type="text" class="search__input" placeholder="Выбрать город">
        </div>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                query: ''
            }
        },
        methods: {
            setWeather(){
                this.$store.dispatch('setWeather', this.query)
            }
        }
    }
</script>

<style lang="scss">

</style>