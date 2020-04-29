<template>
  <div>
    <div class="hand-magnification-block">
      ロイヤルストレートフラッシュ ファイブカード ストレートフラッシュ
      フォーカード フルハウス フラッシュ ストレート スリーカード ツーペア
      ワンペア
    </div>
    <card
      v-for="card in handCards"
      :key="card.number + card.mark"
      :card-mark="card.mark"
      :card-number="card.number"
    ></card>
    <div class="game-info-block">
      <div>
        MONEY
      </div>
      <div>
        BET
      </div>
    </div>
    <button @click="gameStart">START</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../components/card.vue'
const DPokerLib = require('dpoker-lib')
export default Vue.extend({
  components: { Card },
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
</style>
