async ({ events }) => {
  return events.issue.createComment({ body: 'Hey, **thanks** for opening this great issue.' })
}
