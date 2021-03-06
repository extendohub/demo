async ({ events, inputs, helpers, log }) => {
  const { pullRequest } = events
  const head = pullRequest.head
  if (head.repo.id !== pullRequest.base.repo.id) 
    return log.info(`Closing PR from fork. Keeping ${head.label}`)
  const branchName = head.ref
  if ((inputs.exclude || []).some((rule) => new RegExp(`^${rule.split('*').join('.*')}$`).test(branchName))) 
    return log.info(`Branch ${branchName} excluded. Keeping ${head.label}`)

  const { owner, repo } = pullRequest.repo
  const ref = `heads/${branchName}`
  const isMerged = pullRequest.merged
  if (!isMerged && config.delete_closed_pr === false) 
    return log.info(`PR was closed but not merged. Keeping ${owner}/${repo}/${ref}`)

  try {
    await helpers.octokit.git.deleteRef({ owner, repo, ref })
    log.info(`Successfully deleted ${owner}/${repo}/${ref} which was ${isMerged ? 'merged' : 'closed'}`)
  } catch (e) {
    log.warn(e, `Failed to delete ${owner}/${repo}/${ref}`)
    throw e
  }
}