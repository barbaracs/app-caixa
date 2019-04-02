<template>
  <div class="tables">
    <div class="tables__header">Mesas</div>

    <div class="tables-content">
      <div
        class="tables-content__numbers"
        v-for="(table, index) in Tables"
        :key="index"
      >{{ table.number }}</div>
    </div>

  </div>
</template>

<script>
import Tables from '../mock/tables.json';

export default {
  name: 'Tables',

  data: () => ({
    Tables,
  }),
};
</script>

<style lang="scss">
.tables {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #dfdcdc;

  &__header {
    padding: 10px;
    background-color: #d3d3d3;
    font-size: 20px;
  }
}

.tables-content {
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
  }
}
</style>
