export default async ({ event }) => {
  return event.issue.comment({ body: 'Hey, **thanks** for opening this great issue.' })
}
