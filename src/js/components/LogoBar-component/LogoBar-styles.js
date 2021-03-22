import styled from 'styled-components';

export const BarLogos = styled.div `
    height: 80px;
    background: #F2F2F2;
    p {
        margin: 0;
    }
    @media(max-width: 1024px) {
        height: fit-content;
    }
`;
export const Wrapper = styled.div `
    display: flex;
    width: fit-content;
    margin: 0 auto;
    @media(max-width: 1024px) {
        display: block;
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;
export const TextLogos = styled.div `
    margin-right: 108px;
    margin-block-start: 2em;
    margin-block-end: 2em;
    p {
        &::after {
            content: '→';
            position: absolute;
            margin-left: 43px;
            @media(max-width: 1024px) {
                content: none;
        }
        }
        @media(max-width: 1024px) {
            margin: 0;
            padding: 10px 0;
        }
    }
    @media(max-width: 1024px) {
        margin: 0;
        text-align: center;
    }
`;
export const ImgLogos = styled.div `
    display: flex;
    img {
        display: block;
        margin-block-start: 2em;
        margin-block-end: 2em;
        margin-right: 40px;
        &:last-child() {
            margin-right: 0px;
        }
        @media(max-width: 1024px) {
            display: block;
            margin: 0 auto;
            padding: 10px 0;
        }
    }
    @media(max-width: 1024px) {
        display: block;
    }
`;
