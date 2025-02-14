import { ReactNode } from "react";
import "../styles.css";

interface ContentWrapperProps {
    children: ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
    return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
