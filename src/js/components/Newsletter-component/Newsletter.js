import React from 'react';
import {NewsletterWrap} from './Newsletter-styles';
import {EmailInput} from './Newsletter-styles';

function Newsletter() {
    return (
        <NewsletterWrap>
            <p>
            receba novidades da nossa área 
            de produtos digitais.
            </p>
            <EmailInput>
                <input type="text" placeholder="Digite seu e-mail"/>
                <button type="submit" value="CADASTRAR">
                    CADASTRAR
                </button>
            </EmailInput>
        </NewsletterWrap>
    );
}
export default Newsletter;
