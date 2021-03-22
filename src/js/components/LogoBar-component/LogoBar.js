import React from 'react';
import logoBrastemp from '../../../img/logo-brastemp.png';
import logoCompraCerta from '../../../img/logo-compra-certa.png';
import logoConsul from '../../../img/logo-consul.png';
import logoTheBar from '../../../img/logo-thebar.png';
import {BarLogos} from '../LogoBar-component/LogoBar-styles'
import {Wrapper} from '../LogoBar-component/LogoBar-styles'
import {TextLogos} from '../LogoBar-component/LogoBar-styles'
import {ImgLogos} from '../LogoBar-component/LogoBar-styles'


function LogoBar() {
    return (
        <BarLogos>
            <Wrapper>
                <TextLogos>
                    <p>Nossas principais lojas VTEX</p>
                </TextLogos>
                <ImgLogos>
                    <a href="https://www.brastemp.com.br/">
                        <img src={logoBrastemp} alt="Brastemp" />
                    </a>
                    <a href="https://www.compracerta.com.br/">
                        <img src={logoCompraCerta} alt="Compra Certa" />
                    </a>
                </ImgLogos>
                <ImgLogos>
                    <a href="https://loja.consul.com.br/">
                        <img src={logoConsul} alt="Consul" />
                    </a>
                    <a href="https://br.thebar.com/">
                        <img src={logoTheBar} alt="The Bar" />
                    </a>
                </ImgLogos>
            </Wrapper>
        </BarLogos>
    );
}
export default LogoBar;
