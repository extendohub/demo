async ({ inputs, api, log }) => {
  const issue = inputs.payload.issue.number
  const comment = inputs.payload.comment.id
  const value = { issue, comment }
  await api.keyValue.set('latest', value)
  await api.keyValue.set('title', inputs.payload.issue.title)
  log.info(`Comment ${comment} on issue ${issue} is the latest`)
}
