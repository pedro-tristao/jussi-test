import styled from 'styled-components';

export const Background = styled.div `
    background-repeat: no-repeat;
    background-position: 116%;
    background-image: url("data:image/svg+xml,%3Csvg width='710' height='648' viewBox='0 0 710 648' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='710' height='648' transform='matrix(-1 0 0 1 710 0)' fill='%23F2F2F2'/%3E%3C/svg%3E%0A");
    padding-top: 64px;
    padding-bottom: 64px;
    @media(max-width: 1024px) {
        background-position: -22% 14%;
        padding-bottom: 0;
    }
`;
export const WeAre = styled.div `
    display: flex;
    width: fit-content;
    margin: 0 auto;
    margin-top: 56px;
    margin-bottom: 56px;
    @media(max-width: 1024px) {
        display: block;
    }
`;
export const TextJussi = styled.div `
    @media(max-width: 1024px) {
        width: fit-content;
        margin: 0 auto;
    }
`;
export const TittleJussi = styled.div `
    h2 {
        text-transform: uppercase;
        font-size: 32px;
        line-height: 40px;
        font-weight: bold;
    }
    @media(max-width: 1024px) {
    }
`;
export const ParagraphJussi = styled.div `
    @media(max-width: 1024px) {
    }
`;
export const CtaJussi = styled.div `
    p {
        padding: 12px 24px;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 6px;
        text-align: center;
        width: fit-content;
    }
    @media(max-width: 1024px) {
    }
`;
export const ImgJussi = styled.div `
    margin-left: 70px;
    @media(max-width: 1024px) {
        margin: 0;
        img {
            width: 85%;
            margin: 0 auto;
            display: block;
        }
    }
`;

