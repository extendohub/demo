import { octokit } from '@extendohub/runtime'

export default async ({ events }) => {
  const { issue, actor, payload } = events
  console.log(`Detected issue ${payload.action} on issue ${issue.number} by ${actor}`)
  const { data } = await octokit.rateLimit.get()
  console.dir(`The remaining rate limit is ${data.rate.remaining}`) 
}
