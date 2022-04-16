import emitter from '@/libs/emitter'

export default function (res, title = '更新') {
  if (res.data.success) {
    emitter.emit('get-message', {
      state: 'success',
      title: `${title}成功`
    })
  } else {
    const message =
      typeof res.data.message === 'string'
        ? [res.data.message]
        : res.data.message
    emitter.emit('get-message', {
      state: 'danger',
      title: `${title}失敗`,
      content: message.join('、')
    })
  }
}
