import React from 'react';
import logo from '../../../img/logo.svg';
import {Header} from '../Header-component/Header-styles'
import {LogoNav} from '../Header-component/Header-styles'
import {SearchLogin} from '../Header-component/Header-styles'

function HeaderDesk() {
  return (
    <Header>
        <LogoNav>
            <a href="https://jussi.com.br/">
                <img src={logo} alt="jussi-logo" />
            </a>
            <a href="">
                <p>Nossas soluções</p>
            </a>
            <a href="">
                <p>Conheça a Jüssi</p>
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
