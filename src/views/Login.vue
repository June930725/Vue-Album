<template lang="pug">
  #reg
    b-container.mt-4
      b-row(class="justify-content-center")
        b-col(cols="8" lg="6")
          b-form(@submit.prevent="onSubmit" @reset="onReset")
            b-form-group#input-group-1(
              label="帳號"
              label-for="input-1"
              :state="accountState"
              description="帳號長度為 4 ~ 20 個字"
              invalid-feedback="帳號格式不符"
            )
              b-form-input#input-1(
                v-model="account"
                type="text"
                required
                placeholder="請輸入帳號"
                :state="accountState"
              )
            b-form-group#input-group-2(
              label="密碼"
              label-for="input-2"
              :state="passwordState"
              description="密碼長度為 4 ~ 20 個字"
              invalid-feedback="密碼格式不符"
            )
              b-form-input#input-2(
                v-model="password"
                type="password"
                required
                placeholder="請輸入密碼"
                :state="passwordState"
              )
            div.text-center
              b-btn.mx-1(variant="success" type="submit") 登入
              b-btn.mx-1(variant="danger" type="reset") 重置
</template>

<script>
export default {
  name: 'Reg',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    // 判斷帳號長度
    accountState () {
      if (this.account.length === 0) {
        return null
      } else if (this.account.length >= 4 && this.account.length <= 20) {
        return true
      } else {
        return false
      }
    },
    // 判斷密碼長度
    passwordState () {
      if (this.password.length === 0) {
        return null
      } else if (this.password.length >= 4 && this.password.length <= 20) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onSubmit () {
      // 如果帳號密碼驗證通過
      if (this.accountState && this.passwordState) {
        this.axios.post(process.env.VUE_APP_API + '/users/login', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$store.commit('login', res.data.result)
              // 按了 sweetalert2 後
              this.$swal({
                icon: 'success',
                title: '登入成功'
              })
              // 對話框關掉後才跳到相簿頁
                .then(() => {
                  this.$router.push('/album')
                })
            } else {
              // sweetalert2
              this.$swal({
                icon: 'error',
                title: '發生錯誤',
                text: res.data.message
              })
            }
          })
          .catch(err => {
            this.$swal({
              // sweetalert2
              icon: 'error',
              title: '母丟哦',
              text: err.response.data.message
            })
          })
      }
    },
    onReset () {
      this.account = ''
      this.password = ''
    }
  }
}
</script>
