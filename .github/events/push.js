({ log }) => {
  log.info('this is a really good push handler')
  return new Date().toISOString()
}
