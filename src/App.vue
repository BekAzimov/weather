<template>
  <div class="container" v-if="getFullWeather">
    <Header/>
    <Main/>
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
      this.setWeather('Tashkent')
    }
  }
</script>

<style lang="scss">

</style>