<template>
  <div class="left-part" v-if="tableInfo !== null || undefined">
    <div class="left-part__info">

      <div class="orders__header">
        {{ getTableNumber }}
        <div
          class="orders__header__btn"
          @click="backToTables()"
        >
          <span class="orders__header__btn__text">
            Voltar
            <i class="fas fa-reply orders__header__btn__icon"></i>
          </span>
        </div>
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
    getTableNumber() {
      return `Mesa ${this.tableInfo.number}`;
    },

    sumTotal() {
      let total = 0;
      this.tableInfo.orders.forEach((order) => {
        total += order.price;
      });

      return total;
    },
  },

  methods: {
    backToTables() {
      this.$emit('show-tables');
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
  max-width: 460px;
  overflow: hidden;

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
  overflow: auto;

  &__header {
    font-size: 20px;
    display: flex;
    justify-content: space-between;

    &__btn {
      border: 1px solid gray;
      border-radius: 2px;
      background-color: #d3d3d3;
      cursor: pointer;

      &__icon {
        // color: blue;
      }

      &__text {
        font-size: 18px;
        padding: 3px;
      }
    }
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
