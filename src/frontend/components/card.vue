<template>
  <div class="card">
    <div class="top-mark" :class="cardColor">
      {{ cardMarkText }}
    </div>
    <div class="top-number">
      {{ cardNumberText }}
    </div>
    <div class="bottom-mark" :class="cardColor">
      {{ cardMarkText }}
    </div>
    <div class="bottom-number">
      {{ cardNumberText }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const DPokerLib = require('dpoker-lib')
export default Vue.extend({
  props: {
    cardMark: {
      type: String,
      default: DPokerLib.card.CARD_MARK.CLUB,
      required: true
    },
    cardNumber: {
      type: Number,
      default: 1,
      required: true
    }
  },
  computed: {
    /**
     * カードの色
     */
    cardColor() {
      if (
        this.cardMark === DPokerLib.card.CARD_MARK.SPADE ||
        this.cardMark === DPokerLib.card.CARD_MARK.CLUB
      ) {
        return 'card-black'
      }

      return 'card-red'
    },
    /**
     * マークの文字列
     */
    cardMarkText() {
      if (this.cardMark === DPokerLib.card.CARD_MARK.SPADE) {
        return '♠'
      }

      if (this.cardMark === DPokerLib.card.CARD_MARK.HEART) {
        return '♥'
      }

      if (this.cardMark === DPokerLib.card.CARD_MARK.DIAMOND) {
        return '♦'
      }

      if (this.cardMark === DPokerLib.card.CARD_MARK.CLUB) {
        return '♣'
      }

      return 'JOKER'
    },
    /**
     * カードの数字テキスト
     */
    cardNumberText() {
      // Joker
      if (this.cardNumber === 0) {
        return ''
      }

      // エース
      if (this.cardNumber === 1) {
        return 'A'
      }

      if (this.cardNumber === 11) {
        return 'J'
      }

      if (this.cardNumber === 12) {
        return 'Q'
      }

      if (this.cardNumber === 13) {
        return 'K'
      }

      return String(this.cardNumber)
    }
  }
})
</script>
<style lang="sass" scoped>
.card
    height: 400px
    width: 200px
    border-radius: 10px
    border: 2px solid
    position: relative

.card-black
    color: black

.card-red
    color: red

.top-mark
    font-size: 50px
    position: absolute

.bottom-mark
    font-size: 50px
    position: absolute
    bottom: 0px
    right: 0px
    transform: rotate(180deg)

.top-number
  font-size: 40px
  position: absolute
  top: 40px
  left: 5px

.bottom-number
    font-size: 40px
    position: absolute
    bottom: 40px
    right: 5px
    transform: rotate(180deg)
</style>
