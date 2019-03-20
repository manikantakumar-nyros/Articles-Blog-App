<template>
<div>
  <br/>
  <div class="create_article">
    <b-breadcrumb :items="items" />
    <h4>Create Article</h4>
    <p class="text-info" v-if="msg !== ''">{{ msg }}
      <router-link to="/">Back to Home</router-link>
    </p>
    <b-form @submit.prevent="onSubmit" class="form"> 
		<label>Title:</label>
      <b-form-input placeholder="Title" type="text" v-model="title" :class="{ red_color: title_err }" /><br/>
      <label>Description:</label>
      <b-form-textarea placeholder="Please Enter Descrition"
       v-model="description" rows="3" max-rows="6" 
       :class="{ red_color: description_err }" /><br/>
      <label>Image:</label>
      <img src="previewImage" class="uploading-image" />
      <b-form-file accept="image/*" @change="uploadImage" 
      id="file-input" :class="{ red_color: image_err }"/><br/><br/>       
      <label>Category:</label>
      <b-form-select placeholder="Category" v-model="selected" :class="{ red_color: category_err }">
      <option value= null disabled>Select Category</option>
      <option value="cricket">Cricket</option>
      <option value="football">Foot Ball</option>
      <option value="hockey">Hockey</option>
      <option value="kabaddi">Kabaddi</option>
      <option value="badminton">Badminton</option>
      </b-form-select><br/><br/>
      <b-input-group-append>
    	<b-button variant="info" type="submit">Submit</b-button>
    	</b-input-group-append>
    </b-form>
   <br/>
  </div>
</div>
</template>
<script>
export default {
	  name: 'ArticleForm',
data(){
	return{
		article:{},
		title:"",
		title_err:false,
		description:"",
		description_err:false,
		selected:"article.category",
		category_err:false,
    previewImage:null,
    image_err:false,
    msg:'',
    items: [
    {
    text: 'Home',
    to: '/'
    },
    {
    text: "Create",
    active:true
    }
    ]
	}
},
methods:{
	onSubmit () {
      if(!this.title){
        this.title_err = true;
      } else {
        this.title_err = false;
      }
      
      if(!this.description){
      	this.description_err = true;
      } else {
      	this.description_err = false;
      }
      if(this.selected == null){
      	this.category_err = true;
      } else{
      	this.category_err = false;
      }
      if(this.previewImage == null){
        this.image_err = true;
      } else{
        this.image_err = false;
      }
      
      if (this.title && this.description && this.selected && this.previewImage) {
      	let data = { 
      		title: this.title, 
      		description: this.description, 
      		category: this.selected,
            image: this.previewImage, 
      	}
      	this.$store.dispatch('SAVE_ARTICLE', data).then((res)=> {
	  	   if (res.status === "success") {
        this.msg = res.message
	  		this.title=this.description=this.selected=this.image.value="";
	  			}
	  		});
      }
  },
  uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                };
  }
},
  
}
</script>
<style scoped>
.red_color {
  border-color: red;
  box-shadow: 0px 0px 6px 0px red;
}
button{
  border-radius: 7px;
  padding:5px;
  margin-left: 45%;
  margin-bottom: 20px;
}
img{
  display:none;
}
.form{
  background-color: #acad8d;
  padding-right:10px;
  padding-left: 10px;
  margin-right: 130px;
  border-radius:7px;
}
.create_article{
	margin-left: 150px;
	margin-right: 100px;
}
router-link{
  text-decoration: none !important;
}
</style>