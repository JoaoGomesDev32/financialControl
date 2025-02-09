<template>
  <div class="inc-exp-container">
    <VCardTitle>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+€{{ income }}</p>
    </VCardTitle>
    <VCardTitle>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-€{{ Math.abs(expenses) }}</p>
    </VCardTitle>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>