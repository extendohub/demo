async ({ context, inputs, target, resource }) => {
  const head = target.head
  if (head.repo.id !== target.base.repo.id) 
    return context.info(`Closing PR from fork. Keeping ${head.label}`)
  const branchName = head.ref
  if ((inputs.exclude || []).some((rule) => new RegExp(`^${rule.split('*').join('.*')}$`).test(branchName))) 
    return context.info(`Branch ${branchName} excluded. Keeping ${head.label}`)

  const owner = resource.owner.login
  const repo = resource.name
  const ref = `heads/${branchName}`
  const isMerged = target.merged
  if (!isMerged && config.delete_closed_pr === false) 
    return context.info(`PR was closed but not merged. Keeping ${owner}/${repo}/${ref}`)

  try {
    await context.github.git.deleteRef({ owner, repo, ref })
    context.info(`Successfully deleted ${owner}/${repo}/${ref} which was ${isMerged ? 'merged' : 'closed'}`)
  } catch (e) {
    context.warn(e, `Failed to delete ${owner}/${repo}/${ref}`)
    throw e
  }
}