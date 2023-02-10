<script setup>
import { ref } from 'vue'

import Score from './components/Score.vue'
import Title from './components/Title.vue'
import Card from './components/Card.vue'

const count = ref(0)

function OnClickCard() {
  //
}

</script>

<template>
  <div class="container">
    <div class="main">
      <div class="layer layer-text">
        <div class="top-panel">
          <Score :score="1995" />
          <Title text="かく4510" />
          <Score :score="2005" />
        </div>
      </div>
      <div class="layer layer-card">
        <div class="card-panel">
          <Card text="4" @click="OnClickCard" />
          <Card text="5" @click="OnClickCard" />
          <Card text="10" @click="OnClickCard" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;
}
.main {
  position: relative;
  height: 100%;
}
.layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.layer-text {
  z-index: 1;
}
.top-panel {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.layer-card {
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-panel {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
}
</style>
