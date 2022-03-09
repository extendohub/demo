export default async ({ event }) => {
  // ... Notify interested parties of a comment change
  console.log(`${event.payload.sender.login} changed comment: ${event.payload.comment.id} on issue: ${event.payload.issue.number}. You might want to review.`)
}
