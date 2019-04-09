<template>
  <div class="left-part" v-if="tableInfo !== null || undefined">
    <div class="left-part__info">
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

    <div class="left-part__total">
      <div class="total__header">
        TOTAL (R$)
        <div> {{ sumTotal.toFixed(2) }}
        </div>
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

  computed: {
    sumTotal() {
      let total = 0;
      this.tableInfo.orders.forEach((order) => {
        total += order.price;
      });

      return total;
    },
  },
};
</script>

<style lang="scss">
.left-part {
  position: relative;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;

  &__info {
    overflow-y: hidden;
    position: relative;
    flex-grow: 1;
  }

  &__total {
    position: absolute;
    padding:0 0 200px 20px;
    bottom: 0;
    right: 0;
    left: 0;
  }
}

.orders {
  width: 800px;

  &__table {
    font-size: 20px;
  }

  &__sub-header {
    width: 425px;
    padding-top: 10px;
    display: flex;
    border-bottom: 1px solid gray;
  }

  &__tags {
    padding-top: 10px;
    display: flex;
    width: 425px;

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

.total {
  &__header {
    display: flex;
  }
}
</style>
