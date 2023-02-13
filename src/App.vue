<script setup>
import { ref, onMounted } from 'vue'

import Score from './components/Score.vue'
import Title from './components/Title.vue'
import Card from './components/Card.vue'

import { shuffle } from './lib/utils'

const disabled = ref(false)
const playerScore = ref(1000)
const robotScore = ref(1000)
const cards = ref([4, 5, 10])
const displayCards = ref([
  { faceValue: 4, flag: false },
  { faceValue: 5, flag: false },
  { faceValue: 10, flag: false },
])

function OnClickCard(n, v) {

  disabled.value = true

  displayCards.value = displayCards.value.map((card, index) => {
    return {
      ...card,
      flag: index === n ? true : card.flag
    }
  })

  if(v === 10) {

    playerScore.value += 5
    robotScore.value -= 5

    if(robotScore.value < 0) robotScore.value = 0

    resetCards()

  } else if(v === 4) {

    playerScore.value -= 5
    robotScore.value += 5

    if(playerScore.value < 0) playerScore.value = 0

    resetCards()
    
  } else {

    robotTurn()

  }
  
}

function robotTurn() {

  setTimeout(() => {

    const chance = Math.round(6 * Math.random())
    const botcard = chance > 3 ? 10 : 4

    displayCards.value = displayCards.value.map((card, index) => {
      return {
        ...card,
        flag: card.faceValue === botcard ? true : card.flag
      }
    })

    if(botcard === 4) {

      playerScore.value += 5
      robotScore.value -= 5

      if(robotScore.value < 0) robotScore.value = 0

    } else {

      playerScore.value -= 5
      robotScore.value += 5

      if(playerScore.value < 0) playerScore.value = 0

    }

    resetCards()

  }, 100)

}

function resetCards() {

  setTimeout(() => {

    displayCards.value = displayCards.value.map((card) => {
      return {
        ...card,
        flag: false,
      }
    })

    
    doShuffle()

  }, 200)

}

function doShuffle() {

  setTimeout(() => {

    shuffleCards()

    disabled.value = false

  }, 100)

}

function shuffleCards() {
  
  cards.value = shuffle(cards.value)

  displayCards.value = cards.value.map((card) => {
    return {
      faceValue: card,
      flag: false,
    }
  })

}

onMounted(() => {
  
  shuffleCards()

})

</script>

<template>
  <div class="container">
    <div class="main">
      <div class="layer layer-text">
        <div class="banner">
          <Title />
        </div>
        <div class="top-panel">
          <div class="score"><Score :score="playerScore" /></div>
          <div class="score"><Score icon-position="right" iconType="robot" :score="robotScore" /></div>
        </div>
      </div>
      <div class="layer layer-card">
        <div class="card-panel">
          <Card 
          v-for="(card, index) in displayCards" 
          :key="card.faceValue" 
          :text="card.faceValue" 
          :flipped="card.flag"
          :disabled="disabled"
          @click="OnClickCard(index, parseInt(card.faceValue))"
          />
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
.banner {
  display: flex;
  justify-content: center;
}
.top-panel {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
}
.score {
  position: relative;
  width: 115px;
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

@media (max-width: 400px) {
  .card-panel {
    width: 85%;
  }
}
</style>
