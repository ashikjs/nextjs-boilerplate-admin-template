import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies"

export function isAuthenticated(cookies: RequestCookies) {
  const isLoggedIn = cookies?.get('authToken')

  return !!isLoggedIn
}
