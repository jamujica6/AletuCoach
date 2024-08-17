export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

// anotherHandler.ts
import insertRowInGoogleSheet from './suscribe';


export async function POST(request: Request) {
  try {
    const text = await request.text()
    const json = JSON.parse(text)
    await insertRowInGoogleSheet(json.email);
    // Process the webhook payload
  } catch (error:any) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }
 
  return new Response('Success!', {
    status: 200,
  })
}
