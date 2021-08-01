import React from "react";
import "./Layout.css"

const Layout = ({ children }) => {
    return (
        <div className="body">
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout