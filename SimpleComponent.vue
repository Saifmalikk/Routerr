<template>
  <div>
    <p v-for="(item, index) in items" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    };
  },
};
</script>
