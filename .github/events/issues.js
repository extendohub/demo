async ({ context, payload }) => {
  const { cache } = context.storage
  const octokit = context.octokit
  const { action, issue } = payload
  cache.set(action, issue.updated_at)
  context.log(cache.get(action))
  const rateLimit = await octokit.rateLimit.get()
  context.dir(rateLimit) 
}
