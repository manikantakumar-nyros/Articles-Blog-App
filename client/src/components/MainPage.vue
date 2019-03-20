<template>
 <div>
  <br/>
  <div class="main_page">
    <b-container class="bv-example-row">
      <b-breadcrumb :items="items" v-if="show_breadcrumb"/>
      <b-row>
        <b-col>
           <ul class="categories_ul">
            <router-link to="/"><li :class="{ active_color: active_li === 'all' }">All</li></router-link>
            <router-link to="/category/cricket"><li :class="{ active_color: active_li === 'cricket' }">Cricket</li></router-link>
            <router-link to="/category/football"><li :class="{ active_color: active_li === 'football' }">Football</li></router-link>
            <router-link to="/category/hockey"><li :class="{ active_color: active_li === 'hockey' }">Hockey</li></router-link>
            <router-link to="/category/kabaddi"><li :class="{ active_color: active_li === 'kabaddi' }">Kabaddi</li></router-link>
            <router-link to="/category/badminton"><li :class="{ active_color: active_li === 'badminton' }">Badminton</li></router-link>
           </ul>
        </b-col>
        <b-col cols="9"><h4>{{active_li === '' ? 'Sports Article' : active_li}}</h4><br/>
        <div v-for="article in articles">
          <div>
          <b-card>
          <b-card :img-src="article.image" img-width="200px" img-height="150px" class="image" img-alt="Card image" img-right>
          <b-card-text class="font-weight-bold"><router-link :to="'/details/'+ article._id">{{article.title}}</router-link></b-card-text>
          <b-card-text class="description">{{article.description}}</b-card-text>
          <b-card-text class="font-italic">{{article.category}}</b-card-text>
          </b-card>
          </b-card>
          </div>         
        </div>
    </b-col>
      </b-row>
    </b-container>
 </div>
</div>
</template>

<script>
export default {
	  name: 'ArticleForm',
data(){
	return{
		article:{},
    show_breadcrumb:false,
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
  	this.$store.dispatch('GET_ARTICLES')
  },
methods:{
/*  uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                };

  }*/
},

 computed: {
    articles () {
      let category = this.$route.params.name
      let articles = this.$store.getters.ARTICLES;
      
/*      if (category ==='all'){
        return articles.filter((obj)=> {
          return obj.category === 'all';
        })
      }*/
      if (category === 'cricket') {
        this.show_breadcrumb = true;
        this.items[1].text = 'cricket';
        return articles.filter((obj)=> {
          return obj.category === 'cricket';
        })
      }
      if (category === 'football') {
        this.show_breadcrumb = true;
        this.items[1].text = "football"
        return articles.filter((obj)=> {
          return obj.category === 'football';
        })
      }
      if (category === 'hockey') {
        this.show_breadcrumb = true;
        this.items[1].text = "hockey"
        return articles.filter((obj)=> {
          return obj.category === 'hockey';
        })
      }
      if (category === 'kabaddi') {
        this.show_breadcrumb = true;
        this.items[1].text = "kabaddi"
        return articles.filter((obj)=> {
          return obj.category === 'kabaddi';
        })
      }
      if (category === 'badminton') {
        this.show_breadcrumb = true;
        this.items[1].text = "badminton"
        return articles.filter((obj)=> {
          return obj.category === 'badminton';
        })
      }
      if (category === undefined) {
        this.show_breadcrumb = false;
        return this.$store.getters.ARTICLES;
      }
    },
    active_li () {
      return this.$route.params.name;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red_color {
  border-color: red;
  box-shadow: 0px 0px 6px 0px red;
}
li{
  list-style-type:none;
}
.categories_ul li{
   text-align:center;
   padding-bottom: 10px;
   padding-top: 10px;
}
.active_color{
  font-weight:bold;
}
.active_color ::hover{
  background-color: #6c757d;
}
router-link{
  text-decoration: none !important;
}
.description{
  display:block;
  width: 500px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.items{
  display:none;
}
</style>