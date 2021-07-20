export default async ({ context, payload }) => {
  const { github, issue, actor } = context
  console.log(`Detected issue ${payload.action} on issue ${issue.number} by ${actor}`)
  const { data } = await github.rateLimit.get()
  console.dir(`The remaining rate limit is ${data.rate.remaining}`) 
}
