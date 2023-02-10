<script setup>
import { ref, reactive, computed, defineProps } from 'vue';

const props = defineProps({
  score: {
    Type: Number,
    default: 1000,
  }
})

const displayScore = computed(() => String(props.score).padStart(5, 0))

</script>

<template>
  <div class="score">
    <span class="score-text">{{ displayScore }}</span>
  </div>
</template>

<style scoped>
.score {
  position: relative;
  display: inline-block;
}
.score-text {
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.1s ease-in;
}
</style>


