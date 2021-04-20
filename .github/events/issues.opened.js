async ({ context }) => {
  const { issues, issue } = context
  const body = 'Hey, **thanks** for opening this great issue. The team will triage it and work with you to address the topic.'
  return issues.createComment(issue({ body }))
}
