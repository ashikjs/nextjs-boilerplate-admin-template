export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>Login</li>
                </ul>
            </nav>

            {children}
        </section>
    )
}