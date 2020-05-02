<template>
  <div class="hand-magnification-block">
    <div>
      <div class="hand">ロイヤルストレートフラッシュ ×1000</div>
      <div class="hand">ファイブカード ×100</div>
      <div class="hand">ストレートフラッシュ ×50</div>
      <div class="hand">フォーカード ×25</div>
      <div class="hand">フルハウス ×10</div>
    </div>
    <div>
      <div class="hand">フラッシュ ×8</div>
      <div class="hand">ストレート ×4</div>
      <div class="hand">スリーカード ×3</div>
      <div class="hand">ツーペア ×2</div>
      <div class="hand">ワンペア ×1</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="sass" scoped>
.hand-magnification-block
    border-radius: 10px
    border: inset 20px #336600
    background-color: #336666
    display: flex

.hand
  font-size: 20px
  text-align: center
  color: white
</style>
