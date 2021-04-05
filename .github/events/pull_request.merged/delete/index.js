async ({ context, inputs, target, resource }) => {
  const head = target.head
  if (head.repo.id !== target.base.repo.id) {
    context.log.info(`Closing PR from fork. Keeping ${head.label}`)
    return
  }

  const branchName = head.ref
  if ((inputs.exclude || []).some((rule) => new RegExp(`^${rule.split('*').join('.*')}$`).test(branchName))) 
    return context.log.info(`Branch ${branchName} excluded. Keeping ${head.label}`)

  const owner = resource.owner.login
  const repo = resource.name
  const ref = `heads/${branchName}`
  const isMerged = target.merged
  if (!isMerged && config.delete_closed_pr === false) 
    return context.log.info(`PR was closed but not merged. Keeping ${owner}/${repo}/${ref}`)

  try {
    await context.github.git.deleteRef({ owner, repo, ref })
    context.log.info(`Successfully deleted ${owner}/${repo}/${ref} which was ${isMerged ? 'merged' : 'closed'}`)
  } catch (e) {
    context.log.warn(e, `Failed to delete ${owner}/${repo}/${ref}`)
    throw e
  }
}