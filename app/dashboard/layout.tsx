'use client'

import {useRouter} from "next/navigation";

export default function DashboardLayout({children}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const userLogout = () => {
    router.push('/login')
  }

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>
            <button type='button' onClick={() => userLogout()}>Logout</button>
          </li>
        </ul>
      </nav>

      {children}
    </section>
  )
}
