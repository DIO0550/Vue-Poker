<template>
  <div class="container">
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
    <input v-model="reEnteredPassword" class="password-field" type="password" />
    <div v-if="!isSameTwoPassword" class="password-error-message">
      パスワードが違います。
    </div>
    <button>登録</button>
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
  }
})
</script>
<style lang="sass" scoped>
.password-error-message
  color: red

label, input
  display: block
</style>
