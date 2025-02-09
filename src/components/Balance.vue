<template>
    <VCard>
        <VCardTitle>
            <h4>Your Balance</h4>
        </VCardTitle>
        <VCardText>
            <h1 id="balance">€{{ total.toFixed(2) }}</h1>
        </VCardText>
    </VCard>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    total: {
        type: Number,
        required: true,
    }
});
</script>
