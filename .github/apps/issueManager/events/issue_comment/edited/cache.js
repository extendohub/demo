import { cache } from '@extendohub/runtime'

export default async ({ event }) => {
  const cachedValue = await cache.get('currentId')
  console.info(`The cached comment is: ${cachedValue}`)
  await cache.set('currentId', event.payload.comment.id, 2)
  const newValue = await cache.get('currentId')
  console.info(`The new comment is: ${newValue}`)
  await delay(2500)
  const delayedValue = await cache.get('currentId')
  console.info(`The delayed comment is: ${delayedValue}`)
}

function delay(time) {
  return new Promise(resolve => setTimeout(() => resolve(), time))
} 