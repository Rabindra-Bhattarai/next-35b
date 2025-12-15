
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>My Logo
            {children}
            Footer @123
        </section>
    );
}