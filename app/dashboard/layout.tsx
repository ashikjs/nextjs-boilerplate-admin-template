import Header from "@/components/layout/header";

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {

    return (
        <>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Header/>
            <main className='py-4 px-4'>
                {children}
            </main>
        </>
    )
}
