<template>
  <div>
    <div class="total__header">
      TOTAL:
      <div class="total__amount"> {{ formatTotal }}</div>
    </div>

    <div
      class="total__payments-header"
      v-text="'Pagamento'"
    >
    </div>

    <div
      v-if="valuesPaid(tableInfo.number).length > 1"
      class="total__values-paid"
    >
      Pagamentos parciais:
      <div
        v-for="(value, index) in valuesPaid(tableInfo.number)"
        :key="index"
      >
        <span
          v-if="checkValue(value)"
        >{{ 'R$ ' + Number(value).toFixed(2) }}</span>
      </div>
    </div>

    <div class="total__total-left">
      <span>{{ 'Restante: R$ ' +  totalLeft(tableInfo.number).toFixed(2) }}</span>
    </div>

    <div class="total__btn">
      <div
          v-if="checkValue(totalLeft(tableInfo.number))"
          class="total__btn__payment"
          @click="openModal()"
      >Pagamento parcial</div>

      <div
        v-if="checkValue(totalLeft(tableInfo.number))"
        class="total__btn__payment"
        @click="payTotalValue()"
      >Pagamento total</div>
    </div>

    <modal
      :is-open="isModalOpen"
      :table-info="tableInfo"
      @close-modal="closeModal()"
    ></modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Modal from './Modal';

export default {
  name: 'Total',

  components: {
    Modal,
  },

  data: () => ({
    isModalOpen: false,
  }),

  props: {
    tableInfo: {
      type: Object,
      default: null,
    },
  },

  computed: {
    ...mapGetters([
      'valuesPaid',
      'totalLeft',
    ]),

    formatTotal() {
      return `R$ ${this.tableInfo.total.toFixed(2)}`;
    },
  },

  methods: {
    payTotalValue() {
      this.$store.commit({
        type: 'updateValuesPaid',
        table: this.tableInfo,
        valuePaid: this.totalLeft(this.tableInfo.number),
      });

      // eslint-disable-next-line no-alert
      window.alert('Pagamento total realizado');
    },

    checkValue(value) {
      return Number(value) > 0;
    },

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
  overflow-y: auto;

  &__header {
    display: flex;
    width: 100%;
    border-bottom: 1px solid gray;
  }

  &__amount {
    padding-left: 25px;
    padding-bottom: 20px;
  }

  &__payments-header {
    font-size: 20px;
    padding: 15px 0px 15px 0px;
  }

  &__total-left {
    padding: 15px 0px 20px 0px;
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
