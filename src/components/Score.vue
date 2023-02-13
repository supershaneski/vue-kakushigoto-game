<script setup>
import { computed } from 'vue'

import PersonIcon from './PersonIcon.vue'
import RobotIcon from './RobotIcon.vue'

const props = defineProps({
  score: {
    Type: Number,
    default: 1000,
  },
  iconType: {
    Type: String,
    default: 'human'
  },
  iconPosition: {
    Type: String,
    default: 'left'
  }
})

const displayScore = computed(() => String(props.score).padStart(5, 0))

</script>

<template>
  <div class="score">
    <div v-if="props.iconPosition === 'left'" class="score-icon">
      <PersonIcon v-if="props.iconType === 'human'" size="100%" />
      <RobotIcon v-else size="100%" />
    </div>
    <div class="score-text">{{ displayScore }}</div>
    <div v-if="props.iconPosition === 'right'" class="score-icon">
      <PersonIcon v-if="props.iconType === 'human'" size="100%" />
      <RobotIcon v-else size="100%" />
    </div>
  </div>
</template>

<style scoped>
.score {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.score-icon {
  position: relative;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  overflow: hidden;
}
.score-text {
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.1s ease-in;
}
</style>


