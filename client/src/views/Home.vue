<template>
  <div class="home">
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
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'home',
  components: {
    MainPage,
  }
}
</script>
