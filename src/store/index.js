import { createStore } from 'vuex';
import  toyStore  from './toy.store.js';
import userStore from './user.store.js'

const store = createStore({
    strict: true,
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        toyStore,
        userStore
    },
});

export default store;
