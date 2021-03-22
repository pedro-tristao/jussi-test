import styled from 'styled-components';

export const NewsletterWrap = styled.div `
    background: #000000;
    color: #FFFFFF;
    text-align: center;
    padding: 136px 0;
    p {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        &::before {
            content: '//';
            font-size: inherit;
            color: #03FFA5;
            margin-left: -68px;
            position: absolute;
        }

        @media(max-width: 1024px) {
            font-size: 22px;
            line-height: 24px;
        }
    }

`;
export const EmailInput = styled.div `
    input {
        height: 35px;
        background: #000000;
        border: none;
        border-bottom: 1px solid #03FFA5;
        width: 289px;
        &::placeholder {
            color: #ffffff;
        }
        &:focus {
            outline: none;

            color: #ffffff;
        }
        @media(max-width: 1024px) {
            width: 160px;
        }
    }
    button {
        height: 38px;
        background: #000000;
        color: #03FFA5;
        border: none;
        font-weight: bold;
        border-bottom: 1px solid #03FFA5;
        &:hover {
            background: #03FFA5;
            color: #000000;
        }
        &:focus {
            outline: none;
        }
    }
    @media(max-width: 1024px) {

    }
`;
