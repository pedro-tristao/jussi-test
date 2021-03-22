import React from 'react';
import {Product} from './MainBanner-styles';
import {ImgLink} from './MainBanner-styles';
import {BtnLink} from './MainBanner-styles';

function ProductComponent(props) {
  return (
    <Product>
        <ImgLink href={props.linkImg}>
            <img src={props.img} alt={props.alt} />
        </ImgLink>
        <BtnLink href={props.linkBtn}>
            <p>{props.txtBtn}</p>
        </BtnLink>
    </Product>
  );
}

export default ProductComponent;
