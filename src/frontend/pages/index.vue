<template>
  <div class="container">
    <div class="login-block">
      <div class="title">Vue-Poker</div>
      <input class="login-field" type="text" placeholder="ログインID" />
      <input class="password-field" type="password" placeholder="パスワード" />
      <div class="button-block">
        <button class="login-button">ログイン</button>
        <button class="register-button" @click="pushRegisterPage">
          新規登録
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    /**
     * 登録ページに遷移する
     */
    pushRegisterPage() {
      this.$router.push('/register')
    }
  }
})
</script>
<style lang="sass" scoped>
$input-width: 300px
$input-height: 40px
$button-margin: 10px

.container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  height: 500px

.title
  color: white
  font-size: 40px

.login-block
  margin-top: 30px
  height: 1000px
  width: 500px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  border: solid 10px rgba(0, 100, 0, 1.0)
  box-shadow: 10px 20px 20px rgba(100, 100, 100, 1.0);
  background-color: green

.login-field
  margin-top: 20px
  border: 1px solid black
  width: $input-width
  height: $input-height
  font-size: 25px
  box-sizing: border-box

.login-field:focus
  border: 3px solid blue
  box-sizing: border-box

.password-field
  margin-top: 20px
  border: 1px solid black
  width: $input-width
  height: $input-height
  font-size: 25px
  box-sizing: border-box

.password-field:focus
  border: 3px solid blue
  box-sizing: border-box

.login-button
  background-color: rgb(0, 191, 255)
  border-radius: 10px
  color: white
  width: calc(calc(#{$input-width} - #{$button-margin}) / 2.0)
  height: $input-height
  margin-top: 20px;
  display: flexbox
  margin-left: 20px
  margin-bottom: 20px

.register-button
  margin-left: $button-margin
  width: calc(calc(#{$input-width} - #{$button-margin}) / 2.0)
  height: $input-height
  border-radius: 10px
  margin-right: 20px
  margin-bottom: 20px
</style>

<style lang="sass">
body
    background-color: rgb(144, 238, 144)
</style>
