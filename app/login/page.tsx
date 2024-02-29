'use client'

import { useRouter } from 'next/navigation'
import {login} from "@/lib/services/auth";

export default function Login() {
  const router = useRouter();
  console.log(router)
  const submitLoginForm = () => {
    login('admin', '1234')
      .then(data => {
        console.log('Login successful:', data)
        router.push('/dashboard')
      })
      .catch(error => console.error('Login failed:', error));
  }

  return (
    <div>
      <h3>Title for login page</h3>

      <button onClick={ () => submitLoginForm()}>Login now</button>
    </div>
  )
}
