<template>
  <div>
    <div class="total__header">
      TOTAL:
      <div class="total__amount"> {{ sumTotal }}</div>
    </div>

    <div class="total__btn">
      <div
          class="total__btn__payment"
          @click="openModal()"
      >Realizar pagamento individual</div>

      <div
        class="total__btn__payment"
      >Realizar pagamento total</div>
    </div>

    <modal
      :is-open="isModalOpen"
      :total-value="totalValue"
      @close-modal="closeModal()"
    ></modal>
  </div>
</template>

<script>
import Modal from './Modal';

export default {
  name: 'Total',

  components: {
    Modal,
  },

  data: () => ({
    isModalOpen: false,
    totalValue: 0,
  }),

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
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.totalValue = total;

      total = total.toFixed(2);

      return `R$ ${total}`;
    },
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="scss">
.total {
  // display: flex;

  &__header {
    display: flex;
  }

  &__amount {
    padding-left: 25px;
    padding-bottom: 20px;
  }

  &__btn {
    display: flex;
    align-items: center;
    flex-direction: column;

    &__payment {
      cursor: pointer;
      align-self: center;
      text-align: center;
      line-height: 20px;
      border: 1px solid gray;
      border-radius: 2px;
      background-color: #d3d3d3;
      width: 250px;
      height: 20px;
      padding: 5px;

      &:hover {
        background-color: #bcd2ee;
      }
    }

    div + div {
      margin-top: 15px;
    }
  }
}
</style>
