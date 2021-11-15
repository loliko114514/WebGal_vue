import Vuex from 'vuex'
import Vue from 'vue'
import  state  from './states'
import  getters  from './getters'
import  mutations  from './mutations';
import  actions  from './actions';

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    actions,
    mutations,
    state
})