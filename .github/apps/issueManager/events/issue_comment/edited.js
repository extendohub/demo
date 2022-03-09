export default async ({ events }) => {
  // ... Notify interested parties of a comment change
  console.log(`${events.payload.sender.login} changed comment: ${events.payload.comment.id} on issue: ${events.payload.issue.number}. You might want to review.`)
}
