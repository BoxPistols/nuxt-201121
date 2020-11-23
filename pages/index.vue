<template>
  <section class="container">
    <div>
      <h1 class="title">Hello World</h1>
    </div>
  </section>
</template>

<script>
export default {
  // 非同期 async await / マウント
  async mounted() {
    console.log(
      JSON.stringify(
        // JSONのテキスト化
        await this.$axios.$get( // this.plugin-xxx.$get
          // 非同期 get axios API
          'https://qiita.com/api/v2/items?query=tag:nuxt.js',
        ),
        true, // bool
        '', // 初期値
      ),
    )
  },
  components: {},
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
