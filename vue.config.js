module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' //當你要跑 npm run build 時，他會跑下面那行資料夾路徑，如果不是，他就會跑再下一行
      ? '/AheadShop/' //資料夾路徑、儲存庫名稱
      : '/'
}
