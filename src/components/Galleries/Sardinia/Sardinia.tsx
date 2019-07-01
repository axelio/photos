import React from 'react';

import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/sardinia/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Sardinia: React.FC = () => {
    return (
        <>
            <Header title={"sardinia"} image={header} showHome />
            <h1 style={{textAlign: 'center', marginTop: 10, fontSize: 40, fontWeight: 900}}>SUMMER '16 & '17</h1>
            <Gallery images={images} />
            <Footer />
        </>

    );
}

export default Sardinia;
