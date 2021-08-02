import React from "react";


const MenuButton = ({ size, path,  children, onClick }) => {

    return (
        <a className="btn green" href="#" style={{ width: size }} onClick={onClick}> 
            {children}
        </a>
    );
}

export default MenuButton