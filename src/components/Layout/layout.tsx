import { type LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header style={{ padding: 16, borderBottom: '1px solid #eee' }}>
        <h2>Italika Store</h2>
      </header>

      <main style={{ padding: 24 }}>{children}</main>

      <footer style={{ padding: 16, borderTop: '1px solid #eee' }}>
        <small>Demo AEM Frontend</small>
      </footer>
    </>
  );
};

export default Layout;
