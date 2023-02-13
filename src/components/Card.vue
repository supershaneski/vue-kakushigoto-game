<script setup>
import { ref, toRefs } from 'vue';

const props = defineProps({
  text: {
    Type: String,
    default: String(4),
  },
  disabled: {
    Type: Boolean,
    default: false,
  },
  flipped: {
    Type: Boolean,
    default: false,
  }
})

const emit = defineEmits(["click"])

const show = ref(true)
const { flipped } = toRefs(props)

function handleClick() {
  if(!show.value) return
  if(props.disabled) return
  emit('click')
}

/*
<div class="card" :class="{ flipped: flipped }">
      <transition name="rotate-hide">
        <div v-if="show" class="cell">
          <div class="front">
            <span class="card-text">{{ props.text }}</span>
          </div>
          <div class="back"></div>
        </div>
      </transition>
    </div>
*/
</script>

<template>
  <div class="card-container">
    <div class="card2">
      <div class="card-text-layer">
        <span class="card-text">{{ props.text }}</span>
      </div>
      <div v-if="!flipped" class="card-cover-layer" @click="handleClick"></div>
    </div>
  </div>
</template>

<style scoped>
.card2 {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.card-text-layer {
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4556;
  border-radius: 6px;
}
.card-cover-layer {
  background-color: #704214;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid #4556;
  box-sizing: border-box;
  z-index: 2;
}
.card-container {
    background-color: transparent;
    /*display: flex;
    justify-content: space-around;
    align-items: center;*/
    position: relative;
    width: 100px;
    height: 142px;
    border: 1px solid transparent;
    cursor: pointer;
}
.card {
    position: relative;
    width: 100px;
    height: 142px;
    transform: scale(1.0, 1.0) rotate(0deg);
    transition: .5s;
    transform-style: preserve-3d;
}
.front, .back {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #4556;
  border-radius: 6px;
  box-sizing: border-box;
}
.cell {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}
.front {
  background-color: #f5f5f5;
  z-index: 2;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
}
.back {
  background-color: #704214;
  z-index: 1;
  transform: rotateY(0deg);
}
.card-text {
  font-size: 3rem;
  color: #455;
}
.flipped {
    transform: rotateY(180deg);
}
.rotate-hide-enter-active, .rotate-hide-leave-active {
  transition: all .3s;
}
.rotate-hide-enter, .rotate-hide-leave-to {
  transform: scale(0, 0) rotate(360deg);
}


@media (max-width: 400px) {
  .card-container {
    width: 80px;
    height: 113px;
  }
}
</style>


