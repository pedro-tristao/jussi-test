import React from 'react';
import ReactDOM from 'react-dom';
import HeaderDesk from './components/HeaderDesk-component/HeaderDesk';
import HeaderMob from './components/HeaderMob-component/HeaderMob';
import BannerMain from './components/MainBanner-component/MainBanner';
import LogoBar from './components/LogoBar-component/LogoBar';
import OurSolutions from './components/OurSolutions-component/OurSolutions';
import WeAreJussi from './components/WeAreJussi-component/WeAreJussi';
import ContactInfo from './components/ContactInfo-component/ContactInfo';
import Newsletter from './components/Newsletter-component/Newsletter';
import '../scss/index.scss';

function App() {
    return (
        [
            <header id="App">
                <HeaderDesk/>
                <HeaderMob/>
            </header>,
            <main>
                <BannerMain/>
                <LogoBar/>
                <OurSolutions/>
                <WeAreJussi/>
                <ContactInfo/>
                <Newsletter/>
            </main>
        ]

    );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
