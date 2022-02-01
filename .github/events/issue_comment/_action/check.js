async ({ events }) => {
  // ... do some good checking here
  console.log(`Everything looks fine with comment: ${events.payload.comment.id} on issue: ${payload.issue.number}`)
}
