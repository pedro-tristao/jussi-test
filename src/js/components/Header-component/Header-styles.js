import styled from 'styled-components';

export const Header = styled.header `
    height: 80px;
    margin: 20px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    width: 100%;
    background: #ffffff;
`;

export const LogoNav = styled.div `
    display: flex;
    margin-left: 2%;
    float: left;
    p {
        margin-left: 32px;
        &:hover {
            color: #EE0E7D;
        }
    }
`;

export const SearchLogin = styled.div `
    display: flex;
    margin-right: 2%;
    float: right;
    margin-block-start: 1em;
    p {
        margin: 0 32px;
        &:hover {
            color: #EE0E7D;
        }
    }
    i {
        &::after {
            content: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        }
    }
    input {
        border: 1px solid #F2F2F2;
        border-radius: 24px;
        box-sizing: border-box;
        background: #ffffff;
        padding-left: 16px;
        padding-right: 35px;
        &::placeholder {
            color: #EE0E7D;
        }
        &:focus {
            color: #EE0E7D;
            outline: none;
            background: #f1f1f1;
        }
        &:hover{
            background: #f1f1f1;
        }
    }
    span {
        &::after {
            content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 21L16.65 16.65' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
            position: relative;
            z-index: 2;
            right: 146%;
            top: 16%;
            cursor: pointer;
        }
    }
`;
