async ({ context, inputs }) => {
  const { repo, issues, issue } = context
  const body = inputs.body || await repo.getContent({ path: '.github/events/ISSUE_REPLY_TEMPLATE.md' })
  return issues.createComment(issue({ body }))
}
