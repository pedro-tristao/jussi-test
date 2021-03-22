import React from 'react';
import logo from '../../../img/logo.svg';
import {Header} from './HeaderDesk-styles'
import {LogoNav} from './HeaderDesk-styles'
import {SearchLogin} from './HeaderDesk-styles'
import {Link} from 'react-scroll'

function HeaderDesk() {
  return (
    <Header>
        <LogoNav>
            <a href="https://jussi.com.br/">
                <img src={logo} alt="jussi-logo" />
            </a>
            <a href="">
                <p><Link  to="solutions" spy={true} smooth={true}>Nossas soluções</Link></p>
            </a>
            <a href="">
                <p><Link  to="weAre" spy={true} smooth={true}>Conheça a Jüssi</Link></p>
            </a>
        </LogoNav>
        <SearchLogin>
            <input type="text" placeholder="Buscar"/>
            <span></span>
            <a href="">
                <p>Login</p>
            </a>
            <a href="">
                <i></i>
            </a>
        </SearchLogin>
    </Header>
  );
}
export default HeaderDesk;
