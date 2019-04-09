<template>
  <div class="register">
    <div class="register__header">Cash App</div>

    <div class="register__container">
      <div class="tables">
        <div
          class="tables__numbers"
          v-for="(table, index) in Tables"
          :key="index"
          @click="getTable(table)"
          :class="tableHelperClass(table)"
        >{{ table.number }}</div>
      </div>

      <orders
        :table-info="tableInfo"
      ></orders>
    </div>

  </div>
</template>

<script>
import Tables from '../mock/tables.json';
import Orders from './Orders';

export default {
  name: 'Tables',

  components: {
    Orders,
  },

  data: () => ({
    Tables,
    tableInfo: undefined,
  }),

  methods: {
    getTable(table) {
      this.tableInfo = table;
    },

    tableHelperClass(table) {
      return {
        'is-table-active': this.tableInfo === table,
      };
    },
  },
};
</script>

<style lang="scss">
.register {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__header {
    padding: 10px;
    background-color: #d3d3d3;
    font-size: 20px;
  }

  &__container {
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #dfdcdc;
  }
}

.tables {
  max-width: 450px;
  padding: 5px 0px 5px 20px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;

  &__numbers {
    width: 100px;
    height: 50px;
    padding: 5px;
    margin: 5px 20px 30px 5px;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 25px;
    text-align: center;
    line-height: 48px;

    &:hover {
      cursor: pointer;
      background-color: #bcd2ee;
    }

    &.is-table-active {
      background-color: #bcd2ee;
    }
  }
}
</style>
