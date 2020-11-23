<template>
  <section class="container">
    <div>
      <h1 class="title">Hello Nuxt App</h1>
      <h3>タグ付きの投稿一覧</h3>
      <p>tag = {{ tag }}</p>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>{{ item.title }} / {{ item.user.id }}</h4>
          <div class="qt-cont">{{ item.body.slice(0, 130) }}.....</div>
          <p>
            <a :href="item.url">{{ item.url }}</a>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  async asyncData({ app }) {
    const tag = 'team'
    const items = await app.$axios.$get(
      `https://qiita.com/api/v2/items?query=tag:${tag}`,
    )
    return {
      items,
      tag,
    }
  },
  // 非同期 async await / マウント
  // async mounted() {
  //   console.log(
  //     JSON.stringify(
  //       // JSONのテキスト化
  //       await this.$axios.$get( // this.plugin-xxx.$get
  //         // 非同期 get axios API
  //         'https://qiita.com/api/v2/items?query=tag:nuxt.js',
  //       ),
  //       true, // bool
  //       '', // 初期値
  //     ),
  //   )
  components: {},
}
</script>

<style lang="scss">
$whitesmoke: whitesmoke;

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif; /* 1 */
}
a {
  color: dodgerblue;
}

ul {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 32%;
    list-style: none;
    line-height: 1.5;
    background-color: $whitesmoke;
    padding: 20px;
    margin: 8px;
    box-shadow: 0 4px 6px darken($whitesmoke, 10%);
    p > a {
      font-size: 14px;
      word-break: break-all;
    }
  }
}
.container {
  min-height: 100vh;
  width: auto;
  display: flex;
  justify-content: center;
  // align-items: center;
  > div {
    max-width: 70vw;
  }
}
.qt-cont {
  word-break: break-word;
  margin-top: 12px;
  font-size: 14px;
}
.title {
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
