import React from 'react';
import {Contact} from './ContactInfo-styles';
import {Email} from './ContactInfo-styles';

function ContactInfo() {
    return (
        <Contact>
            <p>
                Essa loja foi construída usando uma das <br/>
                nossas soluções da plataforma VTEX. <br/>
                tenha a sua. <br/>
            </p>
            <Email>
                <span>Entre em Contato</span>
                <p>comercial@jussi.com.br</p>
            </Email>
        </Contact>
    );
}
export default ContactInfo;
