({ inputs, api, log }) => {
  const issue = inputs.payload.issue.number
  const comment = inputs.payload.comment.id
  api.keyValue.set('latest', { issue, comment })
  log.info(`Commented ${comment} on issue ${issue} is the latest`)
}
