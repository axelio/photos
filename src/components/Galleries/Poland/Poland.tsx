import React from 'react';

import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/poland/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Poland : React.FC = () => {
    return (
        <>
            <Header title={"around poland"} image={header} showHome />
            <Gallery images={images} />
            <Footer />
        </>

    );
}

export default Poland;
