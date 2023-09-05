<template>
  <div class="container" v-if="getFullWeather">
    <Header/>
    <Main/>
  </div>
  <div class="loading" v-else>
    <img src="./assets/img/loading.gif" alt="" class="loading__img">
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import Main from './components/Main.vue';
import { mapActions, mapGetters } from "vuex";
  export default {
    components: {
      Header,
      Main
    },
    methods: {
      ...mapActions(['setWeather'])
    },
    computed: {
            ...mapGetters(['getFullWeather'])
        },
    created(){
      setTimeout(() => {
        this.setWeather('Tashkent')
      }, 1000);
        
    }
  }
</script>

<style lang="scss">

</style>