import styled from 'styled-components';

export const MainBanner = styled.div `
    width: 100%;
    background: #03FFA5;
    padding: 80px 0;
    display: flex;
    height: 410px;
    @media(max-width: 1024px) {
        padding: 50px 0;
        display: block;
        height: fit-content;
    }
`;

export const TextBanner = styled.div `
    width: 50%;
    margin-left: 15%;
    @media(max-width: 1024px) {
        width: fit-content;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    h1 {
        font-size: 64px;
        text-transform: uppercase;
        font-weight: 500;
        margin: 0;
        padding: 0;
        line-height: 67px;
        &::before {
            content: '//';
            color: #ffffff;
            font-size: inherit;
            font-weight: 500;
            position: absolute;
            margin-left: -87px;
            @media(max-width: 1024px) {
                margin-left: -43px;
            }
        }
        @media(max-width: 1024px) {
            font-size: 42px;
            line-height: 41px;
            text-align: center;
        }
    }
    p {
        margin: 0;
        padding: 0;
        margin: 30px 0;
        @media(max-width: 1024px) {
            text-align: center;
        }
    }
    a {
        @media(max-width: 1024px) {
            margin: 0 auto;
            display: block;
            width: fit-content;
        }
        span {
            padding: 12px 24px;
            border: 1px solid #000000;
            border-radius: 6px;
            &:hover {
                background: #000000;
                color: #03FFA5;
                font-weight: bolder;
            }
        }
    }

`;

export const MainProduct = styled.div `
    width: 50%;
    display: flex;
    margin-left: 15%;
    @media(max-width: 1024px) {
        width: 100%;
        display: block;
        margin:0;
    }
`;

export const Product = styled.div `
    width: 209px;
    height: 271px;
    background: #ffffff;
    border: 1px solid #F2F2F2;
    box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    @media(max-width: 1024px) {
        position: relative;
    }
    &:nth-child(1) {
        margin-left: -132px;
        margin-top: 118px;
        @media(max-width: 1024px) {
            margin: 0 auto !important;
        }
    }
    &:nth-child(2) {
        margin-top: -38px;
        z-index: 2;
        @media(max-width: 1024px) {
            margin: 0 auto !important;
            z-index: 1;
        }
    }
    &:nth-child(3) {
        margin-top: 176px;
        margin-left: 130px;
        @media(max-width: 1024px) {
            margin: 0 auto !important;
        }
    }
`;

export const ImgLink = styled.a `
    img {
        margin: 0 auto;
        display: block;
        margin-top: 13px;
        min-height: 190px
    }
`;

export const BtnLink = styled.a `
    p {
        color: #EE0E7D;
        padding: 12px 24px;
        border-radius: 24px;
        border: 1px solid #EE0E7D;
        text-align: center;
        width: fit-content;
        margin: 0 auto;
        margin-top: 4px;
    }
`;
