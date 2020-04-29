<template>
  <div class="container">
    <div class="form-block">
      <label class="username-label">
        ユーザ名
      </label>
      <input class="user-name-field" type="text" />
      <label>
        パスワード
      </label>
      <input v-model="password" class="password-field" type="password" />
      <label>
        パスワード再入力
      </label>
      <input
        v-model="reEnteredPassword"
        class="password-field"
        type="password"
      />
      <div v-if="!isSameTwoPassword" class="password-error-message">
        パスワードが違います。
      </div>
      <div class="button-block">
        <button class="register-button">登録</button>
        <button class="back-button" @click="pushTop">戻る</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      password: '',
      reEnteredPassword: ''
    }
  },
  computed: {
    /**
     * 入力したパスワードが同じかを返す
     */
    isSameTwoPassword(): boolean {
      return this.password === this.reEnteredPassword
    }
  },
  methods: {
    pushTop() {
      this.$router.push('/')
    }
  }
})
</script>
<style lang="sass" scoped>
$form-width: 300px
$form-button-margin: 10px

.username-label
  margin-top: 20px

.password-error-message
  color: red
  margin-left: 20px

label, input
  display: block
  margin-left: 20px
  margin-right: 20px

input
  height: 40px
  width: $form-width

.register-button
  background-color: rgb(0, 191, 255)
  border-radius: 10px
  color: white
  width: calc(calc(#{$form-width} - #{$form-button-margin}) / 2.0)
  height: 40px
  margin-top: 20px
  display: flexbox
  margin-left: 20px
  margin-bottom: 20px

.back-button
  margin-left: $form-button-margin
  width: calc(calc(#{$form-width} - #{$form-button-margin}) / 2.0)
  height: 40px
  border-radius: 10px
  margin-right: 20px
  margin-bottom: 20px

.form-block
  background-color: white
  border: 2px solid gray
  border-radius: 10px
  box-shadow: 20px 20px 10px #6699CC

.container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 500px
</style>
<style lang="sass">
body
    background-color: #00FFCC
</style>
