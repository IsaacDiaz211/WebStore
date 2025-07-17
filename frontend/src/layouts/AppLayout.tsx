// src/layouts/AppLayout.tsx
import { ReactNode } from "react";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
        <div style={{ display: "flex", height: "100vh" }}>
            <SideMenu />
            <main style={{ flex: 1, padding: "1rem", overflowY: "auto" }}>
                {children}
            </main>
            <Footer />
        </div>
    </div>
  );
};

export default AppLayout;