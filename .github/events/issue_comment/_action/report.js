async ({ events, helpers, log }) => {
  const { keyValue } = helpers
  const { payload } = events
  const issue = payload.issue.number
  const comment = payload.comment.id

  const old = await keyValue.get('latest') || {}
  const oldTitle = await keyValue.get('title') || {}
  log.info(`The old latest is ${old.comment} on issue ${old.issue} with title "${oldTitle}"`)

  const value = { issue, comment }
  await keyValue.set('latest', value)
  await keyValue.set('title', payload.issue.title)
  log.info(`Comment ${comment} on issue ${issue} is the new latest`)
}
