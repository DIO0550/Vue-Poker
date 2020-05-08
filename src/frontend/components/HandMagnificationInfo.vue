<template>
  <div class="hand-magnification-block">
    <div class="hand-manage-list">
      <table>
        <tbody>
          <tr>
            <td class="hand">ロイヤルストレートフラッシュ</td>
            <td class="hand">×1000</td>
          </tr>
          <tr>
            <td class="hand">ファイブカード</td>
            <td class="hand">×50</td>
          </tr>
          <tr>
            <td class="hand">ストレートフラッシュ</td>
            <td class="hand">×50</td>
          </tr>
          <tr>
            <td class="hand">フォーカード</td>
            <td class="hand">×25</td>
          </tr>
          <tr>
            <td class="hand">フルハウス</td>
            <td class="hand">×10</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="hand-manage-list">
      <table>
        <tbody>
          <tr>
            <td class="hand">フラッシュ</td>
            <td class="hand">×8</td>
          </tr>
          <tr>
            <td class="hand">ストレート</td>
            <td class="hand">×4</td>
          </tr>
          <tr>
            <td class="hand">スリーカード</td>
            <td class="hand">×3</td>
          </tr>
          <tr>
            <td class="hand">ツーペア</td>
            <td class="hand">×2</td>
          </tr>
          <tr>
            <td class="hand">ワンペア</td>
            <td class="hand">×1</td>
          </tr>
        </tbody>
      </table>
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
    width: auto

.hand
  font-size: 20px
  text-align: center
  color: white

.hand-manage-list
  width: 500px
  display: flex
</style>
