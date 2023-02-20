<script setup>
import { computed, watch, ref, toRefs } from 'vue'

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

const flagAdd = ref(false)
const flagSub = ref(false)

const { score } = toRefs(props)

watch(score, (value, prev) => {

  //console.log("watch", score.value, value, prev)

  if(prev > value) {
    flagAdd.value = false
    flagSub.value = true
  } else if(prev < value) {
    flagAdd.value = true
    flagSub.value = false
  }

  if(flagAdd.value || flagSub.value) {

    setTimeout(() => {
      flagAdd.value = false
      flagSub.value = false
    }, 400)

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
    <div class="score-text" :class="{plus: flagAdd, minus: flagSub}">{{ displayScore }}</div>
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
  font-family: monospace;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.1s ease-in;
}
.plus {
  color: #67AEFF;
  animation: addAnim 0.3s ease-in forwards;
}
.minus {
  color: #ff6767;
  animation: subAnim 0.3s ease-in forwards;
}

@keyframes addAnim {
  0% { color: #67AEFF; }
  100% { color: var(--color-text); }
}

@keyframes subAnim {
  0% { color: #ff6767; }
  100% { color: var(--color-text); }
}
</style>


