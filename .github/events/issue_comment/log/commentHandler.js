({ context, payload }) => {
  context.log(`handling comment for issue ${payload.issue.number}`)
}
