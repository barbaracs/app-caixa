<template>
  <div
    class="modal-backdrop"
    v-show="isOpen"
  >
    <div class="modal">
      <div class="modal-header">
          Pagamento
          <i
            type="button"
            class="fas fa-times btn-close"
            @click="close()"
          ></i>
      </div>

      <div class="modal-body">
          <span class="modal-body__text"> Valor: R$ </span>
          <input
            class="modal-body__input"
            type="number"
            step="0.5"
            min="0"
            v-model="valuePaid"
          >
      </div>

       <div class="modal-footer">
            <div
              class="modal-footer__btn-pay"
              @click="updateTotal()"
            >
              Pagar
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },

    tableInfo: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    valuePaid: 0,
  }),

  methods: {
    updateTotal() {
      this.$store.commit({
        type: 'updateValuesPaid',
        table: this.tableInfo,
        valuePaid: this.valuePaid,
      });

      this.close();
    },

    close() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: center;
  height: 25px;

  &__btn-pay {
    width: 80px;
    height: 100%;
    background-color: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    text-align: center;
    line-height: 25px;
  }
}

.modal-body {
  position: relative;
  padding: 25px 25px 25px 0px;

  &__text {
    padding: 0px 15px 0px 15px;
  }

  &__input {
    width: 80px;
    height: 20px;
    font-size: 16px;
  }
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>

