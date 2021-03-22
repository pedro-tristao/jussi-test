import React from 'react';
import {Product} from './OurSolutions-styles'
import {ImgProduct} from './OurSolutions-styles'
import {NameProduct} from './OurSolutions-styles'
import {DescriptionProduct} from './OurSolutions-styles'
import {FeatureProduct} from './OurSolutions-styles'
import {CtaProduct} from './OurSolutions-styles'

function ProductSolutions(props) {
    return (
        <Product>
            <ImgProduct>
                <a href={props.linkImg}>
                    <img src={props.img} alt={props.altImg}/>
                </a>
            </ImgProduct>
            <NameProduct>
                <p>{props.productName}</p>
            </NameProduct>
            <DescriptionProduct>
                <p>{props.productDescription}</p>
            </DescriptionProduct>
            <FeatureProduct>
                <li>{props.productFeature1}</li>
                <li>{props.productFeature2}</li>
                <li>{props.productFeature3}</li>
            </FeatureProduct>
            <CtaProduct>
                <p>{props.productCta}</p>
            </CtaProduct>
        </Product>
    );
}
export default ProductSolutions;
