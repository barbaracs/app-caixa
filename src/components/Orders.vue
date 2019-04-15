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
            <i class="fas fa-reply"></i>
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

    <total
      class="left-part__total"
      :table-info="tableInfo"
    ></total>
  </div>
</template>

<script>
import Total from './Total';

export default {
  name: 'Orders',

  components: {
    Total,
  },

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
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
  align-self: center;

  &__info {
    overflow-y: hidden;
    position: relative;
  }

  &__total {
    // position: absolute;
    padding-top: 100px;
    // padding-right: 30px;
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

      &__text {
        font-size: 18px;
        padding: 5px 10px 5px 5px;
      }

      &:hover {
        background-color: #cac6c6;
      }
    }
  }

  &__sub-header {
    padding-top: 20px;
    display: flex;
    width: 100%;
    border-bottom: 1px solid gray;
  }

  &__tags {
    padding-top: 10px;
    display: flex;

    &__quantity {
      min-width: 30px;
      text-align: center;
    }

    &__food {
      min-width: 150px;
      padding-left: 50px;
      flex-grow: 1; //check this
    }

    &__price {
      min-width: 100px;
      text-align: center;
    }
  }
}
</style>
