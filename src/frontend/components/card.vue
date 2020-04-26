<template>
  <div class="card">
    {{ cardMark }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const DPokerLib = require('dpoker-lib')
export default Vue.extend({
  props: {
    cardMark: {
      type: String,
      default: '♠︎',
      required: true
    },
    cardNumber: {
      type: Number,
      default: 0,
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
</style>
