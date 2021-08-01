import React from "react";
import {useHistory} from "react-router-dom";


const MenuButton = ({ size, path,  children }) => {

    const history = useHistory();
    return (
        <a className="btn green" href="#" style={{ width: size }} onClick={() => history.push(path)}> 
            {children}
        </a>
    );
}

export default MenuButton