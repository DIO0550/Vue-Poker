<template>
  <div class="container">
    <h1 class="title">Vue-Poker</h1>
    <div class="login-block">
      <input class="login-field" type="text" placeholder="ログインID" />
      <input class="password-field" type="password" placeholder="パスワード" />
      <button class="login-button">ログイン</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="sass" scoped>
$input-width: 300px
$input-height: 40px

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

.login-field
  margin-top: 10px
  border: 1px solid black
  width: $input-width
  height: $input-height
  font-size: 25px

.login-field:focus
  border: 3px solid blue
  width: $input-width
  height: $input-height

.password-field
  margin-top: 10px
  border: 1px solid black
  width: $input-width
  height: $input-height
  font-size: 25px

.password-field:focus
  border: 3px solid blue
  width: $input-width
  height: $input-height

.login-button
  width: $input-width
  height: $input-height
  margin-top: 10px
  margin-bottom: 10px
  background-color: aqua
  font-size: 25px
</style>

<style lang="sass">
body
    background-color: rgb(144, 238, 144)
</style>
