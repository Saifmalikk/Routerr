<template>
  <div style="border: 1px dotted red">
    <p>I am the child</p>
    <p style="color: blue;">{{ childMessage }}</p>
    <button @click="emitEvent">Send Event to Parent</button>
    <div style="border: 1px dotted green; width: 70%; margin: 2rem auto;">
      <slot></slot>
    </div>
    <br>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  childMessage: String,
});

const emit = defineEmits();

const emitEvent = () => {
  emit('childEvent', 'Data from Child to Parent');
};
</script>
