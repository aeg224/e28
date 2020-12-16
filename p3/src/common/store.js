import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { axios } from '@/app.js';

Vue.use(Vuex)


/* The Vuex instance is very similar to the one demonstrated in class. It uses the vuex persisted state
* plugin to stores the state of MasterParkList. Also, it keeps track of the user status for validation. 
*/
export default new Vuex.Store({
    state: {
        pageNum: 0,
        user: null,
    },
    mutations: {
        setPageNum(state, payload) {
            state.pageNum = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },

    },
    actions: {

        // uses authUser function demonstrated in class notes and gitHub.
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },

    },

    plugins: [createPersistedState()]

})