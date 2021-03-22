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
                <a href='https://www.facebook.com/agencia.jussi' target='__blank'>
                    <img src={facebook} alt='Facebook'/>
                </a>
                <a href='https://www.instagram.com/jussi/' target='__blank'>
                    <img src={instagram} alt='Instagram'/>
                </a>
                <a href='https://www.linkedin.com/feed/' target='__blank'>
                    <img src={linkedin} alt='LinkedIn'/>
                </a>
            </SocialMedia>
        </FooterWrap>
    );
}

export default Footer;
