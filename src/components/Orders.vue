<template>
  <div class="orders" v-if="tableInfo !== null">
    <div class="orders__table">
      {{ 'Mesa ' + tableInfo.number }}
    </div>

    <div class="orders__sub-header">
      <div class="orders__tags__quantity">Qtde</div>
      <div class="orders__tags__food">Pedido</div>
      <div class="orders__tags__price">Preço (R$)</div>
    </div>

    <div
      v-for="(order, index) in tableInfo.orders"
      :key="index"
    >
      <div class="orders__tags">
        <div class="orders__tags__quantity">{{ order.quantity }}</div>
        <div class="orders__tags__food">{{ order.food }}</div>
        <div class="orders__tags__price">{{ order.price.toFixed(2) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orders',

  props: {
    tableInfo: {
      type: Object,
      default: null,
    },
  },


};
</script>

<style lang="scss">
.orders {
  border-left: 1px solid gray;
  padding: 20px;
  width: 800px;

  &__table {
    font-size: 20px;
  }

  &__sub-header {
    padding-top: 10px;
    display: flex;
    border-bottom: 1px solid gray;
  }

  &__tags {
    padding-top: 10px;
    display: flex;

    &__quantity {
      width: 50px;
      text-align: center;
    }

    &__food {
      width: 200px;
      padding-left: 50px;
    }

    &__price {
      width: 100px;
      text-align: center;
    }
  }
}
</style>
