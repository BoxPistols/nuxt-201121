export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.QIITA) {
      config.headers.common['Authorization'] = process.env.QIITA
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
