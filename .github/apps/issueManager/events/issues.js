export default async ({ events, helpers }) => {
  const { issue, actor, payload } = events
  console.log(`Detected issue ${payload.action} on issue ${issue.number} by ${actor}`)
  const { data } = await helpers.octokit.rateLimit.get()
  console.dir(`The remaining rate limit is ${data.rate.remaining}`) 
}
