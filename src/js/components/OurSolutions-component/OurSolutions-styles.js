import styled from 'styled-components';

export const Solutions = styled.div `
    width: fit-content;
    margin: 0 auto;
    @media(max-width: 1024px) {
        margin-top: 50px;
    }
`;
export const TittleSolutions = styled.div `
    h2 {
        font-size: 32px;
        line-height: 40px;
        text-transform: uppercase;
        font-weight: bold;
        &::before {
            content: '//';
            font-size: inherit;
            color: #03FFA5;
            margin-right: 5px;
        }
    }
    @media(max-width: 1024px) {
        h2 {
            font-size: 20px;
            line-height: 23px;
            margin-bottom: 60px;
        }
    }
`;
export const WrapSolutions = styled.div `
    display: flex;
    @media(max-width: 1024px) {
        display: block;
    }
`;
export const Product = styled.div `
    width: 241px;
    padding: 16px;
    border: 1px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 4px;
    background: #FFFFFF;
    margin-right: 16px;
    @media(max-width: 1024px) {
        margin: 0 auto;
        margin-bottom: 16px
    }
`;
export const ImgProduct = styled.div `

    @media(max-width: 1024px) {

    }
`;
export const NameProduct = styled.div `

    @media(max-width: 1024px) {

    }
`;
export const DescriptionProduct = styled.div `
    color: #EE0E7D;
    font-size: 12px;
    line-height: 18px;
    @media(max-width: 1024px) {

    }
`;
export const FeatureProduct = styled.ul `
    padding: 0;
    padding-left: 16px;
    font-size: 12px;
    line-height: 18px;
    color: #5B5B5B;
    @media(max-width: 1024px) {

    }
`;
export const CtaProduct = styled.div `
    p {
        padding: 12px 24px;
        background: #03FFA5;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
    }
    @media(max-width: 1024px) {

    }
`;
