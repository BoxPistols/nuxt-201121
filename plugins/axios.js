/*
 * インスタンス $axios
 * export <- Nuxt 全体へインジェクション
 */
export default function ({ $axios }) {
  $axios.onRequest((config) => {
    // $xxx.リクエスト(c)
    if (process.env.QIITA_TOKEN) {
      //  リクエストヘッダーに認証情報 追加
      config.headers.common['Authorization'] = process.env.QIITA_TOKEN
    }
    return config
  })
}

/* 公式
export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
*/
