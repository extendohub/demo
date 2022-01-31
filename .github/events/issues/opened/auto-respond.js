async ({ events }) => {
  return events.issues.comment({ body: 'Hey, **thanks** x for opening this great issue.' })
}
