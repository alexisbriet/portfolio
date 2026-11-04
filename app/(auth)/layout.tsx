export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-slate-100">
            <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="relative w-full max-w-md">
                {children}
            </div>
        </main>
    );
}