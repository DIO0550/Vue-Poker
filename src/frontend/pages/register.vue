<template>
  <div class="container">
    <input class="login-field" type="text" placeholder="ログインID" />
    <input
      v-model="password"
      class="password-field"
      type="password"
      placeholder="パスワード"
    />
    <input
      v-model="reEnteredPassword"
      class="password-field"
      type="password"
      placeholder="パスワード再入力"
    />
    <div v-if="!isSameTwoPassword">パスワードが違います。</div>
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
<style lang="sass" scoped></style>
