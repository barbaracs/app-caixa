import Vue from 'vue';
import Vuex from 'vuex';
import Tables from './mock/tables.json';

Vue.use(Vuex);

export default {
  state: {
    Tables,
  },
};
