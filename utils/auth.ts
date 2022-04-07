import { IncomingMessage, ServerResponse } from "http"

export type Unauthorized = { unauthorized: true }

export function isAuthenticated(req: IncomingMessage, allowedCredentials?: string) {
  if (!allowedCredentials) throw new Error("`allowedCredentials` was not provided")
  const base64credentials = req.headers.authorization?.split(" ")[1] ?? ""
  const credentials = Buffer.from(base64credentials, "base64").toString()
  return credentials === allowedCredentials
}

export function authenticate(res: ServerResponse, realm: string): Unauthorized {
  res.setHeader("WWW-Authenticate", `Basic realm="${realm}"`)
  res.statusCode = 401
  res.end("Unauthorized")
  return { unauthorized: true }
}