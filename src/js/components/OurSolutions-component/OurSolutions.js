import React from 'react';
import {Solutions} from './OurSolutions-styles'
import {TittleSolutions} from './OurSolutions-styles'
import {WrapSolutions} from './OurSolutions-styles'
import ProductSolutions from './ProductSolution'
import product1 from '../../../img/product-1.png'
import product2 from '../../../img/product-2.png'
import product3 from '../../../img/product-3.png'
import product4 from '../../../img/product-4.png'

function OurSolutions() {
    return (
        <Solutions>
            <TittleSolutions>
                <h2>Nossas Soluções</h2>
            </TittleSolutions>
            <WrapSolutions>
                <ProductSolutions linkImg='#' img={product1} altImg='Solução 1' productName='Nome do Produto #1' productDescription='Descrição do Produto #1' productFeature1='Feature 1' productFeature2='Feature 2' productFeature3='Feature 3' productCta='Ver solução'/>
                <ProductSolutions linkImg='#' img={product2} altImg='Solução 2' productName='Nome do Produto #2' productDescription='Descrição do Produto #2' productFeature1='Feature 1' productFeature2='Feature 2' productFeature3='Feature 3' productCta='Ver solução'/>
                <ProductSolutions linkImg='#' img={product3} altImg='Solução 3' productName='Nome do Produto #3' productDescription='Descrição do Produto #3' productFeature1='Feature 1' productFeature2='Feature 2' productFeature3='Feature 3' productCta='Ver solução'/>
                <ProductSolutions linkImg='#' img={product4} altImg='Solução 4' productName='Nome do Produto #4' productDescription='Descrição do Produto #4' productFeature1='Feature 1' productFeature2='Feature 2' productFeature3='Feature 3' productCta='Ver solução'/>
            </WrapSolutions>
        </Solutions>
    );
}
export default OurSolutions;
