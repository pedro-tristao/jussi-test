import React from 'react';
import ReactDOM from 'react-dom';
import HeaderDesk from './components/HeaderDesk-component/HeaderDesk';
import HeaderMob from './components/HeaderMob-component/HeaderMob'
import BannerMain from './components/MainBanner-component/MainBanner'
import '../scss/index.scss';

function App() {
    return (
        [
            <header id="App">
                <HeaderDesk/>
                <HeaderMob/>
            </header>,
            <BannerMain/>
        ]

    );

}


const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
