import React from 'react';
import jussiImg from '../../../img/image-jussi.png';;
import {Background} from './WeAreJussi-styles';
import {WeAre} from './WeAreJussi-styles';
import {TextJussi} from './WeAreJussi-styles';
import {TittleJussi} from './WeAreJussi-styles';
import {ParagraphJussi} from './WeAreJussi-styles';
import {CtaJussi} from './WeAreJussi-styles';
import {ImgJussi} from './WeAreJussi-styles';

function WeAreJussi() {
    return (
        <Background >
            <WeAre id='weAre'>
                <TextJussi>
                    <TittleJussi>
                        <h2>
                            Olá, somos <br/>
                            a Jüssi
                        </h2>
                    </TittleJussi>
                    <ParagraphJussi>
                        <p>
                            A Jüssi é uma agência integrante <br/>
                            do grupo global WPP que vem há <br/>
                            10 anos consolidando o <br/>
                            pensamento voltado para <br/>
                            produtos e resolução de <br/>
                            problemas. Nosso área dedicada <br/>
                            exclusivamente para <br/>
                            Produtos Digitais é organizada em 6 <br/>
                            especialidades: Product <br/>
                            Managamenet, User Experience <br/>
                            Design, SEO, Tecnologia, Agile <br/>
                            e User Behavior Analytics.
                        </p>
                    </ParagraphJussi>
                    <CtaJussi>
                        <a href='https://jussi.com.br/'>
                            <p>
                                Conheça a Jüssi
                            </p>
                        </a>
                    </CtaJussi>
                </TextJussi>
                <ImgJussi>
                    <img src={jussiImg} alt="Jüssi | The Business Agency" />
                </ImgJussi>
            </WeAre>
        </Background>
    );
}

export default WeAreJussi;
