import React from 'react';
import {MainBanner} from './MainBanner-styles';
import {TextBanner} from './MainBanner-styles';
import {MainProduct} from './MainBanner-styles';
import ProductComponent from './ProductComponent';
import geladeira from '../../../img/geladeira.png';
import batedeira from '../../../img/batedeira.png';
import blackLabel from '../../../img/black-label.png';


function BannerMain() {
    return (
        <MainBanner>
            <TextBanner>
                <h1>
                    Criamos <br/>
                    lojas que <br/>
                    vendem mais.
                </h1>
                <p>
                    A Jüssi é especialista na criação de lojas <br/>
                    usando a plataforma VTEX. Precisa criar sua <br/>
                    loja ou migrar de plataforma?
                </p>
                <a href=''>
                    <span>Veja nossas soluções</span>
                </a>
            </TextBanner>
            <MainProduct>
                <ProductComponent linkImg='#' img={geladeira} alt='Geladeira' linkBtn='#' txtBtn='Mais Detalhes'/>
                <ProductComponent linkImg='#' img={batedeira} alt='Batedeira' linkBtn='#' txtBtn='Comprar em 12x'/>
                <ProductComponent linkImg='#' img={blackLabel} alt='Black Label' linkBtn='#' txtBtn='Adicionar à Sacola'/>
            </MainProduct>
        </MainBanner>
    );
}

export default BannerMain;
