<template lang="pug">
  div#app
    b-navbar(toggleable='lg' type='dark' style='background: #20B2AA;')
      b-container
        b-navbar-brand(to='/')
          img(src='./assets/logo-01.png' height="40")
        b-navbar-toggle(target='nav-collapse')
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav.ml-auto(style="color: #fff; ")
            b-nav-item(v-if="user.id.length === 0" to='/login') 登入
            b-nav-item(v-if="user.id.length === 0" to='/reg') 註冊
            b-nav-item(v-if="user.id.length > 0" to='/album') 我的相簿
            b-nav-item(v-if="user.id.length > 0" @click="logout") 登出
    router-view
</template>

<script>
export default {
  name: 'App',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logout () {
      this.axios.delete(process.env.VUE_APP_API + '/users/logout')
        .then(res => {
          // 如果登出成功
          if (res.data.success) {
            // sweetalert2
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '登出成功'
            })

            // 清除 vuex
            this.$store.commit('logout')

            // 導回首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            // sweetalert2
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: res.data.message
            })
          }
        })
        .catch(error => {
          // 如果回來的狀態碼不是 200，直接 alert 錯誤訊息
          // sweetalert2
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message
          })
        })
    },
    heartbeat () {
      this.axios.get(process.env.VUE_APP_API + '/users/heartbeat')
        .then(res => {
          // 如果 vuex 是登入中
          if (this.user.id.length > 0) {
            // 但是後端沒登入
            if (!res.data) {
              // sweetalert2
              this.$swal({
                icon: 'error',
                title: '錯誤',
                text: '登入時效已過'
              })
              // 登出
              this.$store.commit('logout')
              // 導回首頁
              if (this.$route.path !== '/') {
                this.$router.push('/')
              }
            }
          }
        })
        .catch(() => {
          // sweetalert2
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '發生錯誤'
          })
          // 登出
          this.$store.commit('logout')
          // 導回首頁
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  },
  mounted () {
    // 每五秒跑一次登入狀況
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 5000)
  }
}
</script>
