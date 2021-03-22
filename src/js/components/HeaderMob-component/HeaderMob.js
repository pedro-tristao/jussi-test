import React from 'react';
import logo from '../../../img/logo.svg';
import {Header} from './HeaderMob-styles'
import {LogoNav} from './HeaderMob-styles'
import {SearchLogin} from './HeaderMob-styles'
import SlideMenu from './../HeaderMob-component/SlideMenu'

function HeaderMob() {
  return (
    <Header>
        <SlideMenu  outerContainerId={"root"} width = {'100% '}  />
        <LogoNav>
            <a href="https://jussi.com.br/">
                <img src={logo} alt="jussi-logo" />
            </a>
        </LogoNav>
        <SearchLogin>
            <a href="">
                <i></i>
            </a>
        </SearchLogin>
    </Header>
  );
}
export default HeaderMob;
