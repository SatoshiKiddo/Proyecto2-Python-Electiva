import React from "react";


const MenuButton = ({ size, path,  children, onClick, id }) => {

    return (
        <a className="btn green" id={id} href="#" style={{ width: size }} onClick={onClick}> 
            {children}
        </a>
    );
}

export default MenuButton