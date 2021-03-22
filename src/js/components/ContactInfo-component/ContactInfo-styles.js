import styled from 'styled-components';

export const Contact = styled.div `
    background: #EE0E7D;
    color: #FFFFFF;
    text-align: center;
    padding: 136px 0;
    p {
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        text-transform: uppercase;
        @media(max-width: 1024px) {
            font-size: 22px;
            line-height: 24px;
        }
    }

`;
export const Email = styled.div `
    p {
        font-size: 32px;
        line-height: 24px;
        text-transform: none;
        margin: 0;
        margin-top: 10px;
        cursor: pointer;
        @media(max-width: 1024px) {
            font-size: 22px;
            line-height: 24px;
        }
    }
`;
