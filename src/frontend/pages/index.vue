<template>
  <div class="container">
    <div class="login-block">
      <h1 class="title">Vue-Poker</h1>
      <div>ログインID</div>
      <div>パスワード</div>
      <button>ログイン</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="sass" scoped>
.container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  height: 500px

.title
  color: white

.login-block
  margin-top: 30px
  width: 760px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  border: solid 5px black
  box-shadow: 10px 5px 5px rgba(200, 200, 200, 1.0);
</style>

<style lang="sass">
body
    background-color: rgb(144, 238, 144)
</style>
