import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

import data from './module/data.js';

Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        data
    },
    plugins:[Logger()]
})
