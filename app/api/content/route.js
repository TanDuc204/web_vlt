import content from '@/app/content.json'

export async function GET() {
  return Response.json(content)
}
