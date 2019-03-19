import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const BASE_URL = "http://10.90.90.55:5054"

export default new Vuex.Store({
  state: {
  	articles:[]
  },
  getters:{
  	ARTICLES: state =>{
  		return state.articles;
  	}
  },
  mutations: {
  	SET_ARTICLES : (state,articles) => {
      state.articles = articles
    },
    SET_ARTICLE : (state,article) => {
      state.articles.unshift(article)
    },
  },
  actions: {
    GET_ARTICLES : async (context,articles) => {
      let uri = BASE_URL+'/get_articles/';
      await axios.get(uri).then((res) => {
        context.commit('SET_ARTICLES',res.data.data)
      });
    }, 
    SAVE_ARTICLE : async (context,article) => {
      let uri = BASE_URL+'/save_article/';
      return await axios.post(uri, article).then((res) => {
        // console.log(res.data.data)
        context.commit('SET_ARTICLE',res.data.data)
        return res.data
      });
    },
    GET_ARTICLE : async (context,article) =>{
      let uri = BASE_URL+'/get_article/';
      return await axios.post(uri, article).then((res) =>{
        return res.data
      });
    },
  }
})
