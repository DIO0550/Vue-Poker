<template>
  <div>
    <handMagnificationInfo />
    <div class="card-block">
      <card
        v-for="card in handCards"
        :key="card.number + card.mark"
        :card-mark="card.mark"
        :card-number="card.number"
      ></card>
    </div>
    <div class="game-info-block">
      <div>
        MONEY
      </div>
      <div>
        BET
      </div>
    </div>
    <button class="start-button" @click="gameStart">START</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../components/card.vue'
import HandMagnificationInfo from '../components/HandMagnificationInfo.vue'
const DPokerLib = require('dpoker-lib')
export default Vue.extend({
  components: { Card, HandMagnificationInfo },
  data() {
    return {
      handCards: [],
      cardDeck: null
    }
  },
  methods: {
    /**
     * ゲーム開始
     */
    gameStart() {
      this.cardDeck = new DPokerLib.deck.Deck()
      this.handCards = []
      for (let i = 0; i < 5; i++) {
        const card = this.cardDeck.drawOne()
        this.handCards.push(card)
      }
    }
  }
})
</script>

<style lang="sass" scoped>
.hand-magnification-block
  border: 1px solid red

.start-button
  width: 200px
  height: 50px
  border-radius: 10px
  box-shadow: 10px 5px 5px red;
  font-size: 20px

.card-block
  display: flex
  width: 2000px
</style>
