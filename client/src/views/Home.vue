<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <MainPage msg="Main Page"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    MainPage,
  }
}
</script>
