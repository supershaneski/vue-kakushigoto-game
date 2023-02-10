<script setup>
import { ref, reactive, computed, defineProps } from 'vue';

const flipped = ref(false)
const show = ref(true)

function handleClick() {
  if(!show.value) return;
  emit('click', props.text)
}

function flip(){
  flipped.value = true
}

function flip2(flag){
  flipped.value = flag
}

function showHide(flag) {
  show.value = flag;
  if(show.value) {
    flipped.value = false;
  }
}

const props = defineProps({
  text: {
    Type: String,
    default: String(4),
  }
})

const emit = defineEmits(["click"])

</script>

<template>
  <div class="card-container" @click="flip">
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
  </div>
</template>

<style scoped>

.card-container {
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*width: 53px;
    height: 75px;*/
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
</style>


