async ({ events, helpers, log }) => {
  const { payload } = events
  const issue = payload.issue.number
  const comment = payload.comment.id

  const old = await helpers.keyValue.get('latest')
  const oldTitle = await helpers.keyValue.get('title')   
  log.info(`The old latest is ${old} on issue ${issue} with title ${oldTitle}`)

  const value = { issue, comment }
  await helpers.keyValue.set('latest', value)
  await helpers.keyValue.set('title', payload.issue.title)
  log.info(`Comment ${comment} on issue ${issue} is the new latest`)
}
