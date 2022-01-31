async ({ events }) => {
  return events.issues.comment({ body: 'Hey, **thanks** y for opening this great issue.' })
}
