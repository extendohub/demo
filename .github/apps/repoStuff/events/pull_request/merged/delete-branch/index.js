import { octokit } from '@extendohub/services'

export default async ({ event, inputs }) => {
  const { pullRequest } = event
  const head = pullRequest.head
  if (head.repo.id !== pullRequest.base.repo.id) 
    return console.info(`Closing PR from fork. Keeping ${head.label}`)
  const branchName = head.ref
  if ((inputs.exclude || []).some((rule) => new RegExp(`^${rule.split('*').join('.*')}$`).test(branchName))) 
    return console.info(`Branch ${branchName} excluded. Keeping ${head.label}`)

  const { owner, repo } = pullRequest.repo
  const ref = `heads/${branchName}`
  const isMerged = pullRequest.merged
  if (!isMerged && config.delete_closed_pr === false) 
    return console.info(`PR was closed but not merged. Keeping ${owner}/${repo}/${ref}`)

  try {
    await octokit.git.deleteRef({ owner, repo, ref })
    console.info(`Successfully deleted ${owner}/${repo}/${ref} which was ${isMerged ? 'merged' : 'closed'}`)
  } catch (e) {
    console.warn(e, `Failed to delete ${owner}/${repo}/${ref}`)
    throw e
  }
}