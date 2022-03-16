import { kv } from '@extendohub/storage'

export default async ({ event, context }) => {
  const { payload } = event
  const issue = payload.issue.number
  const comment = payload.comment.id

  console.info(`Processing issue_comment "${context.config.params.action}" action on issue #${issue}`)
  const old = await kv.get('latest') || {}
  const oldTitle = await kv.get('title') || ''
  console.info(`The old latest is ${old.comment} on issue #${old.issue} with title "${oldTitle}"`)

  const value = { issue, comment }
  await kv.set('latest', value)
  await kv.set('title', payload.issue.title)
  console.info(`The new latest is ${comment} on issue #${issue} with title "${payload.issue.title}"`)
}
