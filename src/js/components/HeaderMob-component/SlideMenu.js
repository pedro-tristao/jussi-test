import React from "react";
import { elastic as Menu } from "react-burger-menu";
import {Link} from 'react-scroll';

function FixMenuClick() {
    return (
      document.querySelector('.bm-overlay').click()
    );
}

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
        <div className="menu-item-search">
            <input className="menu-item-input" type="text" placeholder="Buscar"/>
            <span className="input-search"></span>
        </div>
        <Link onClick={FixMenuClick} to="solutions" spy={true} smooth={true}>
            <a className="menu-item" href="">
                Nossas soluções
            </a>
        </Link>
        <Link onClick={FixMenuClick} to="weAre" spy={true} smooth={true}>
            <a className="menu-item" href="">
                Conheça a Jüssi
            </a>
        </Link>
        <a className="menu-item" href="">
            Login
        </a>
    </Menu>
  );
};
