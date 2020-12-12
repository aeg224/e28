import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pageNum: 0,
    },
    mutations: {
        setPageNum(state, payload){
            state.pageNum = payload;
        },

    },
    plugins: [createPersistedState()]

})