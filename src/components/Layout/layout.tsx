import { type LayoutProps } from "./types";
import Header from "../Header";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main style={{ padding: 24 }}>{children}</main>
            <footer style={{ padding: 16, borderTop: '1px solid #eee' }}>
                <small>Demo AEM Frontend</small>
            </footer>
        </>
    );
};

export default Layout;
