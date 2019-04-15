<template>
  <div class="register">
    <div class="register__header">Sushi Cash</div>

    <div class="register__container" v-if="! tableSelected">
      <span class="register__title">Selecione a mesa</span>
      <div class="tables">
        <div
          class="tables__numbers"
          v-for="(table, index) in getMockedTables"
          :key="index"
          @click="getTable(table)"
        >{{ table.number }}</div>
      </div>
    </div>

      <orders
        v-if="tableSelected"
        :table-info="tableInfo"
        @show-tables="showTables()"
      ></orders>

  </div>
</template>

<script>
import Orders from './Orders';

export default {
  name: 'Tables',

  components: {
    Orders,
  },

  data: () => ({
    tableInfo: undefined,
    tableSelected: false,
  }),

  computed: {
    getMockedTables() {
      return this.$store.state.Tables;
    },
  },

  methods: {
    getTable(table) {
      this.tableInfo = table;
      this.tableSelected = true;
    },

    showTables() {
      this.tableSelected = false;
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
  background-color: #dfdcdc;
  user-select: none;

  &__header {
    padding: 10px;
    background-color: #d3d3d3;
    font-size: 20px;
  }

  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
  }

  &__title {
    align-self: center;
    font-size: 18px;
    padding: 10px 0px 10px 0px;
  }
}

.tables {
  max-width: 415px;
  padding: 5px 0px 5px 5px;
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
  }
}
</style>
