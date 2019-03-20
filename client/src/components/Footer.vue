<template>
  <div><br/>
    <footer>
      <b-container class="bv-example-row">
        <b-card-footer>
      	  <div class="footer">
          <b-row>
          <b-col>
          <b-card-text>
          <h4>About</h4>
      		<p class="about">
      				We are born helpless. We can’t walk, can’t talk, can’t feed ourselves, can’t even do our own damn taxes.As children, the way we’re wired to learn is by watching and mimicking others. First we learn to do physical skills like walk and talk.
      		</p>
          </b-card-text>
          </b-col>
          <b-col>
      		 <ul>            
            <b-card-text>
      			<li>Our Blog</li>
      			<li>About sports articles.com</li>
      			<li>Sports and Culturals</li>
            </b-card-text>
      		  </ul>
          </b-col>
          <b-col>
      		  <ul class="social">
            <b-card-text>
      			<li>
              <router-link to="">
                <img src="http://10.90.90.59/jquery/assets/images/twitter.png">
              </router-link>
            </li>
      			<li>
              <router-link to="">
                <img src="http://10.90.90.59/jquery/assets/images/facebook.png">
              </router-link>
            </li>
      			<li>
              <router-link to="">
              <img src="http://10.90.90.59/jquery/assets/images/youtube.png">
              </router-link>
            </li>
      			<li>
              <router-link to="">
                <img src="http://10.90.90.59/jquery/assets/images/instagram.png">
              </router-link>
            </li>
             </b-card-text>
      		  </ul>
          </b-col>
          </b-row>
          <b-card-text class="rights">
              © 2019 Sports Article Blog.com. All rights reserved.
          </b-card-text>
          </div>
        </b-card-footer>
      </b-container>
    </footer>
  </div>
</template>
<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer ul{
    display:inline-block;
    list-style-type: none;
    align-items:baseline;
    font-size: 14px;
  }

.footer li img{
    width:40px;
    display: inline-flex;
    float:right;
  }
footer{
    width:100%;
    background-color:cadetblue;
  }
.social{
  overflow:auto;
  padding-right: 60px;
}
.social li{
  float:left;
}
.rights{
  text-align: center;
}
.about{
  font-size: 14px;
}

</style>