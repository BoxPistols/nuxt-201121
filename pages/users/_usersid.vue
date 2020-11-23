<template>
  <div>
    <p>pages/users/_usersid.vue</p>
    <p>{{ userId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /*
       * ユーザーID は ルーターのパラーメータのID
       * /users/xxx のxxxを表示に返す
       */
      userId: this.$route.params.usersid,
    }
  },
}
</script>
