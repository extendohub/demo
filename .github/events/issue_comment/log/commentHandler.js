async ({ inputs, api, log }) => {
  const old = await api.keyValue.get('latest')
  const oldTitle = api.keyValue.get('title')   
  log.info(`The old latest is ${comment} on issue ${issue} with title ${oldTitle`)

  const issue = inputs.payload.issue.number
  const comment = inputs.payload.comment.id
  const value = { issue, comment }
  await api.keyValue.set('latest', value)
  await api.keyValue.set('title', inputs.payload.issue.title)
  log.info(`Comment ${comment} on issue ${issue} is the latest`)
}
