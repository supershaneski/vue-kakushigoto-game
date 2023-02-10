<script setup>
import { ref, reactive, computed, defineProps } from 'vue';

const props = defineProps({
  text: {
    Type: String,
    default: "Untitled",
  }
})

</script>

<template>
  <div class="title">
    <h4 class="title-text">{{ props.text }}</h4>
  </div>
</template>

<style scoped>
.title {
  position: relative;
  display: inline-block;
}
.title-text {
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
</style>


