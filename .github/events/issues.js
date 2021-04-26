async ({ context, payload }) => {
  const { github, issue, actor } = context
  console.log(`Detected issue ${payload.action} on issue ${issue.number} by ${actor}`)
  const rateLimit = await github.rateLimit.get()
  console.dir(`The remaining rate limit is ${rateLimit.rate.remaining}`) 
}
