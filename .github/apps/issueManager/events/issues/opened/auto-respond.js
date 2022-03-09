export default async ({ event }) => {
  return event.issues.comment({ body: 'Hey, **thanks** for opening this great issue.' })
}
