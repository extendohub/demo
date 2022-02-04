export default async ({ events, helpers, log }) => {
  const cachedValue = await helpers.cache.get('currentId')
  log.info(`The cached comment is: ${cachedValue}`)
  await helpers.cache.set('currentId', events.payload.comment.id, 2)
  const newValue = await helpers.cache.get('currentId')
  log.info(`The new comment is: ${newValue}`)
  await delay(2500)
  const delayedValue = await helpers.cache.get('currentId')
  log.info(`The delayed comment is: ${delayedValue}`)
}

function delay(time) {
  return Promise(resolve => setTimeout(() => resolve(), time))
} 