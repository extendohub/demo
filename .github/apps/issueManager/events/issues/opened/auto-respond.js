export default async ({ events }) => {
  return events.issues.comment({ body: 'Hey, **thanks** for opening this great issue.' })
}
