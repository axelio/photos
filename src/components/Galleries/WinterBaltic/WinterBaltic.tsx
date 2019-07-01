import React from 'react';

import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/winterbaltic/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const WinterBaltic: React.FC = () =>{
    return (
        <>
            <Header title={"winter baltic sea"} image={header} showHome />
            <h1 style={{textAlign: 'center', marginTop: 10, fontSize: 40, fontWeight: 900}}>JAN '19</h1>
            <Gallery images={images} />
            <Footer />
        </>

    );
}

export default WinterBaltic;
