// src/layouts/AppLayout.tsx
import { ReactNode } from "react";
import SideMenu from "../components/SideMenu";
import FooterFluent from "../components/FooterFluent";

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
        </div>
        <FooterFluent />
    </div>
  );
};

export default AppLayout;