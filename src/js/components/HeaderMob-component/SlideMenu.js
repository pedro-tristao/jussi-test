import React from "react";
import { elastic as Menu } from "react-burger-menu";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
        <div className="menu-item-search">
            <input className="menu-item-input" type="text" placeholder="Buscar"/>
            <span className="input-search"></span>
        </div>

        <a className="menu-item" href="">
            Nossas soluções
        </a>
        <a className="menu-item" href="">
            Conheça a Jüssi
        </a>
        <a className="menu-item" href="">
            Login
        </a>
    </Menu>
  );
};
