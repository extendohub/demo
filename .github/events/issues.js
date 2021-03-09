({ context, payload }) => {
  const { cache } = context.storage
  const octokit = context.octokit
  const { action, issue } = payload
  cache.set(action, issue.updated_at)
  console.log(cache.get(action))
  const rateLimit = await octokit.rateLimit.get()
  console.dir(rateLimit) 
}
