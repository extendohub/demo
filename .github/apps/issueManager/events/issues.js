import { octokit } from '@extendohub/services'

export default async ({ event }) => {
  const { issue, actor, payload } = event
  console.log(`Detected issue ${payload.action} on issue ${issue.number} by ${actor}`)
  const { data } = await octokit.rateLimit.get()
  console.dir(`The remaining rate limit is ${data.rate.remaining}`) 
}
