async ({ events }) => {
  return events.issues.createComment({ body: 'Hey, **thanks** for opening this great issue.' })
}
