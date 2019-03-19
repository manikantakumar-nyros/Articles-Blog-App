<template>
<div>
	<br/>
	<b-container class="bv-example-row">
   <b-breadcrumb :items="items" />
  <div class="details">
     <h3 class="text-center">{{article.category}}</h3>
          <div>
          <b-card>
          <b-card :img-src="article.image" img-width="200px" img-height="300px" class="image" img-alt="Card image" img-top>
          <b-card-text class="font-weight-bold">{{article.title}}</b-card-text>
          <b-card-text class="description">{{article.description}}</b-card-text>
          </b-card>
          </b-card>
          </div>
      <router-link to="/">Back to Home</router-link>
  </div>
</b-container>
</div>
</template>
<script>
export default {
name: 'details',
data () {
 return {
     article: {},
     items: [
      {
       text: 'Home',
       to: '/'
       },
       {
       text: '',
       active:true
       }
       ]
	}
},
  mounted () {
		let data = { id: this.$route.params.id}
	  	this.$store.dispatch('GET_ARTICLE', data).then((res)=> {
	  		if (res.status === "success") {
	  			this.article = res.data
	  			this.items[1].text = res.data.title
		  		}
	  	})
	},
methods:{
	}
}
</script>
<style scoped>
.details{
  margin-left:150px;
  margin-right: 150px;
}

</style>
