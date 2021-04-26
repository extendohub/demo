async ({ context }) => {
  return context.issue.createComment({ body: 'Hey, **thanks** for opening this great issue.' })
}
