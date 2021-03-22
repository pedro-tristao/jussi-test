import React from 'react';
import wppCompany from '../../../img/wppcompany.svg';
import facebook from '../../../img/facebook.svg';
import instagram from '../../../img/instagram.svg';
import linkedin from '../../../img/linkedin.svg';
import {FooterWrap} from './Footer-styles';
import {WppComp} from './Footer-styles';
import {SocialMedia} from './Footer-styles';

function Footer() {
    return (
        <FooterWrap>
            <WppComp>
                <img src={wppCompany} alt=''/>
            </WppComp>
            <SocialMedia>
                <a href='' target='__blank'>
                    <img src={facebook} alt=''/>
                </a>
                <a href='' target='__blank'>
                    <img src={instagram} alt=''/>
                </a>
                <a href='' target='__blank'>
                    <img src={linkedin} alt=''/>
                </a>
            </SocialMedia>
        </FooterWrap>
    );
}

export default Footer;
