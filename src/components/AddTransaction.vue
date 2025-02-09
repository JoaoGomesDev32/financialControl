<template>
  <h3>Add new transaction</h3>
  <VForm id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <VTextField type="text" id="text"
      v-model="text" 
      placeholder="Enter text..." 
      />
    </div>
    <div class="form-control">
      <label for="amount"
      >Amount <br />
      (negative - expense, positive - income)</label
      >
      <VTextField
      type="text"
      id="amount"
      v-model="amount"
      placeholder="Enter amount..."
      />
    </div>
    <button class="btn">Add transaction</button>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('');
const amount = ref(0);

const emit = defineEmits(['transactionSubmitted']);

const toast = useToast();

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Both fields must be filled');
    return;
  }
  
  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  };
  
  emit('transactionSubmitted', transactionData);
  
  
  text.value = '';
  amount.value = 0;
};
</script>