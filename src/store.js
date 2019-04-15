import Vue from 'vue';
import Vuex from 'vuex';
import Tables from './mock/tables.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Tables,
  },

  getters: {
    valuesPaid: state => tableNumber =>
      state.Tables.find(table => tableNumber === table.number).valuesPaid,

    selectedTableIndex: state => tableNumber =>
      state.Tables.findIndex(table => tableNumber === table.number),

    totalLeft: state => tableNumber => (
      Number(state.Tables.find(table => tableNumber === table.number).total) -
      Number(state.Tables.find(table => tableNumber === table.number).totalPaid)
    ),
  },

  mutations: {
    updateValuesPaid(state, payload) {
      const tableIndex = this.getters.selectedTableIndex(payload.table.number);

      state.Tables[tableIndex].valuesPaid.push(payload.valuePaid);

      const sum = Tables[tableIndex].totalPaid !== 0
        ? state.Tables[tableIndex].totalPaid + Number(payload.valuePaid)
        : Number(payload.valuePaid);

      state.Tables[tableIndex].totalPaid = sum;
    },
  },
});

