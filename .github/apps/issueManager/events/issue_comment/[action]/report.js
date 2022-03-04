async ({ events, context, helpers, log }) => {
  const { keyValue } = helpers
  const { payload } = events
  const issue = payload.issue.number
  const comment = payload.comment.id

  log.info(`Processing issue_comment "${context.config.params.action}" action on issue #${issue}` )
  const old = await keyValue.get('latest') || {}
  const oldTitle = await keyValue.get('title') || ''
  log.info(`The old latest is ${old.comment} on issue #${old.issue} with title "${oldTitle}"`)

  const value = { issue, comment }
  await keyValue.set('latest', value)
  await keyValue.set('title', payload.issue.title)
  log.info(`The new latest is ${comment} on issue #${issue} with title "${payload.issue.title}"`)
}
