<template>
  <div class="hello">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to ="/"><b-navbar-brand class="app_name">Sports Article Blog</b-navbar-brand></router-link>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <router-link to="/"><b-button size="l" class="home" type="submit">Home</b-button></router-link>
           <router-link to="/create_article"><b-button size="l" class="create_article" type="submit">Create Article</b-button></router-link>
          <!-- <b-nav-form class="nav_search">
          <b-form-input size="l" class="mr-sm-2" type="text" placeholder="Search" />
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_search{
	margin-right: 100px;
}
.app_name{
	margin-left: 100px;
}
.home{
	margin-right: 20px;
}
.create_article{
	margin-right: 140px;
}

</style>